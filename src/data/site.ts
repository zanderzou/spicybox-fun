export const site = {
  name: "SpicyBox",
  domain: "spicybox.fun",
  url: "https://spicybox.fun",
  description: "An independent SpicyBox guide to its adult AI image-to-video generator, templates, credits, uploads, consent rules, privacy, safety, and alternatives.",
  author: "SpicyBox Guide editorial team",
  officialUrl: "https://spicy-box.com/",
};
export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-US", { year:"numeric", month:"long", day:"numeric", timeZone:"UTC" }).format(date);
export const toIsoDate = (date: Date) => date.toISOString().slice(0,10);
