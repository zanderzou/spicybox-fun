import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist", "client");
const origin = "https://spicybox.fun";
const languagePaths = {
  es: "es"
};
const failures = [];
const files = [];
const check = (ok, message) => { if (!ok) failures.push(message); };
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
}
function localTarget(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || !clean.startsWith("/")) return null;
  if (clean === "/") return path.join(out, "index.html");
  if (path.extname(clean)) return path.join(out, clean);
  return path.join(out, clean, "index.html");
}
walk(out);
const canonicals = new Map();
for (const file of files) {
  const rel = path.relative(out, file).replaceAll("\\", "/");
  const html = readFileSync(file, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();
  const desc = html.match(/<meta name="description" content="([^"]+)"/i)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const h1 = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  const locale = rel.split("/")[0];
  const isLocalized = Object.hasOwn(languagePaths, locale);
  const is404 = rel === "404.html";
  const minDescription = ["ja", "ko", "zh-hant"].includes(locale) ? 30 : 70;
  check(Boolean(title), `${rel}: missing title`);
  check(Boolean(desc) && desc.length >= minDescription && desc.length <= 180, `${rel}: description length`);
  check(Boolean(canonical?.startsWith(`${origin}/`)), `${rel}: canonical`);
  check(h1 === 1, `${rel}: expected one h1, got ${h1}`);
  check(/<meta name="robots"/i.test(html), `${rel}: robots`);
  check(/<meta property="og:image"/i.test(html), `${rel}: Open Graph`);
  if (canonical) {
    check(!canonicals.has(canonical), `${rel}: duplicate canonical`);
    canonicals.set(canonical, rel);
    if (!is404) {
      const expected = `${origin}/${rel.replace(/index\.html$/, "")}`;
      check(canonical === expected, `${rel}: self-canonical expected ${expected}`);
    }
  }
  if (isLocalized) {
    check(html.includes(`<html lang="${languagePaths[locale]}"`), `${rel}: language tag`);
    check(html.includes(`dir="${locale === "ar" ? "rtl" : "ltr"}"`), `${rel}: direction`);
  }
  if (is404) {
    check(/noindex/i.test(html), "404: noindex");
  } else {
    const englishPath = `/${rel.replace(/index\.html$/, "").replace(/^(?:ja|ko|zh-hant|es|pt-br|ru|de|fr|ar)\//, "")}`;
    const expected = [["en", englishPath], ...Object.entries(languagePaths).map(([slug, tag]) => [tag, `/${slug}${englishPath}`]), ["x-default", englishPath]];
    const alternates = new Map([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi)].map((match) => [match[1], match[2]]));
    check(alternates.size === 3, `${rel}: expected 3 hreflang entries, got ${alternates.size}`);
    for (const [lang, route] of expected) check(alternates.get(lang) === origin + route, `${rel}: hreflang ${lang}`);
  }
  const structuredData = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const [, content] of structuredData) {
    try { JSON.parse(content); } catch { failures.push(`${rel}: invalid JSON-LD`); }
  }
  if (isLocalized) check(structuredData.length > 0, `${rel}: missing localized JSON-LD`);
  for (const img of html.match(/<img\b[^>]*>/gi) ?? []) check(/\salt="[^"]+"/i.test(img), `${rel}: image alt`);
  for (const match of html.matchAll(/href="([^"]+)"/gi)) {
    const target = localTarget(match[1]);
    if (target) check(existsSync(target), `${rel}: broken ${match[1]}`);
  }
}
check(files.length === 25, `expected 25 HTML pages, got ${files.length}`);
check(existsSync(path.join(out, "robots.txt")), "missing robots.txt");
check(existsSync(path.join(out, "sitemap-index.xml")), "missing sitemap");
const sitemapFile = path.join(out, "sitemap-0.xml");
check(existsSync(sitemapFile), "missing sitemap page inventory");
if (existsSync(sitemapFile)) {
  const sitemap = readFileSync(sitemapFile, "utf8");
  const urls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
  check(urls.size === 24, `sitemap expected 24 URLs, got ${urls.size}`);
  for (const [url, page] of canonicals) if (page !== "404.html") check(urls.has(url), `sitemap missing ${url}`);
}
check(existsSync(path.join(out, "rss.xml")), "missing rss");
check(existsSync(path.join(out, "29e6685c404b4754b70a6c97242af8be.txt")), "missing IndexNow key");
if (failures.length) {
  console.error(`SEO audit failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`SEO audit passed for ${files.length} HTML pages and 24 reciprocal route clusters.`);
