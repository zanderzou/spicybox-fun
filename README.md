# SpicyBox Guide

Independent Astro + Markdown publication for `spicybox.fun`, focused on the SpicyBox adult image-to-video generator, templates, self-image upload rule, privacy, credits, safety, comparisons, and alternatives. The public build currently contains English and Spanish only; other localization copy remains in source but has no public route. Promotional SpicyBox buttons use the tracked referral URL with `rel="sponsored nofollow"`; source citations and privacy-policy links retain their real destinations.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run test:seo
npm run test:sites
```

Add articles under `src/content/blog`. Astro generates article routes, structured data, the XML sitemap, and RSS feed.

Cloudflare Pages: the existing `spicybox-fun` project is Direct Upload. Build with `npm run build`, verify the static output in `dist/client`, push the private GitHub repository, then explicitly deploy that output to the existing project using `../scripts/publish-prepared-direct.ps1 -Domain spicybox.fun`. A Git push alone does not publish this site.
