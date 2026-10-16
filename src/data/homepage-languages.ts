// These additional editions publish only a homepage. Existing Spanish routes stay separate.
export const homepageLanguages = [
  { slug: "", lang: "en", label: "English", code: "EN" },
  { slug: "es", lang: "es", label: "Español", code: "ES" },
  { slug: "de", lang: "de", label: "Deutsch", code: "DE" },
  { slug: "fr", lang: "fr", label: "Français", code: "FR" },
  { slug: "pt-br", lang: "pt-BR", label: "Português (Brasil)", code: "PT" },
  { slug: "it", lang: "it", label: "Italiano", code: "IT" },
] as const;
export const homepageAlternates = () => homepageLanguages.map(({slug,lang}) => ({lang,href:slug ? `/${slug}/` : "/"}));
export const isHomepage = (pathname: string) => homepageLanguages.some(({slug}) => pathname === (slug ? `/${slug}/` : "/"));
export type HomepageLocale = "de" | "fr" | "pt-br" | "it";
