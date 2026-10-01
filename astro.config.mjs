import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://spicybox.fun",
  output: "static",
  outDir: "./dist/client",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { format: "directory" },
});
