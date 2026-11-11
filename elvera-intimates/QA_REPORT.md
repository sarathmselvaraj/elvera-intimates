# ELVÉRA INTIMATES — QA Report

**Build:** 6 November 2026  
**Project:** Static HTML / CSS / vanilla JavaScript luxury storefront demonstration.

## Verified checks

- **Pages:** 19 HTML entry pages, rendered in isolated Chromium for both 320px and 1440px viewports (38 page/viewport combinations). No JavaScript page exceptions, horizontal overflow, missing page H1, or unresolved local anchor destinations detected during these runs.
- **Catalogue:** 24 demonstration products, three in each of eight categories, with distinct bundled WebP product filenames. Search returns matching items, combined size/category controls operate, price sorting works, an empty state appears when appropriate, and Reset restores catalogue results.
- **Blog:** Eight article records and matching article-detail slugs. Search, reset and article filter controls exercised in the browser test renderer.
- **Size Guide:** Chart type tabs and centimeter/inch unit conversion exercised in Chromium.
- **Product details:** Required size selection validation, selected variant and colour, cart addition and updated cart badge exercised in Chromium.
- **Cart:** Quantity increased from one to two, demonstrated subtotal change ₹1,490 → ₹2,980, and persisted cart data verified with an isolated storage substitute.
- **Guest checkout:** Required-field validation, demo-only acknowledgement, cart clearing, generated temporary reference and product/order-summary data validated. Checkout navigation target was intercepted in the isolated browser test; no live payment or order placed.
- **Contact:** Empty required fields display an inline message. Contact is a local demo, with no server-side submission.
- **Mobile:** Menu open/close tested at 320px, including theme-to-dark and RTL switching. No horizontal overflow on the tested viewport.
- **Scripts:** JavaScript syntax checked with Node.js; images and local paths validated from the packaged directory.

## Testing limitations and production notes

- Chromium in this environment blocks direct `file://` and `http://localhost` navigation. Consequently the browser checks above used **inline-loaded equivalents** of the actual packaged HTML, CSS and JavaScript. The shopping test substituted browser storage and intercepted the final page redirect. Direct page-to-page clicking under an actual hosted origin was **not** verified.
- All 41 local WebP photography assets have been upgraded to high-definition (HD), realistic editorial and studio product photography (800×1000 for products, 1200×900 for journal/editorial, 1400×1050 for heroes), replacing softer AI preview placeholders while maintaining optimized local payloads (~5.6 MB total).
- All catalogue inventory, size charts, pricing, employee portraits, blog posts and brand concepts are illustrative. No real shipping, fulfilment, customer-support handling, payment or account system is connected.
- Before commercial launch, configure verified business details, legally approved store terms, real policies, accurate product measurements and photography, and a secure server-side ordering/payment stack.

## Local preview

Extract the archive and open `elvera-intimates/index.html`, or serve the entire directory through VS Code Live Server or a static host. Keep the `assets` folder intact.

## November 11, 2026 — Latest amendment

- Updated Journal data to **9 articles** and verified 3 equal CSS grid columns at 1280px in isolated Chromium; the ninth article has a unique slug, thumbnail and article content.
- Added instant Unicode alphabet-and-space sanitization to the Contact Full Name field. Example input `John12@ Doe3` becomes `John Doe`. Checkout name validation is preserved separately.
- Replaced unrelated Home 1 and Home 2 hero photographs, and added **16 distinct local WebP inner-page hero compositions** with readable Light/Dark and RTL/LTR overlays.
- Visually checked illustrative hero source assets; replaced unrelated editorial source images with relevant clothing or fabric-focused photos.
- `node --check` passed for both JavaScript sources.
- **60 isolated Chromium render checks** at 320, 375, 768, 1024, 1280 and 1440px across representative main pages passed without horizontal overflow or page JavaScript exceptions.
- **57 more isolated Chromium render checks** covering all 19 HTML pages at 320, 768 and 1280px passed without horizontal overflow or page JavaScript exceptions.
- Direct Chromium navigation to `file://` or localhost was blocked by the testing environment, so source HTML, CSS and JavaScript were rendered together in an isolated page. Live-hosting behaviour still needs verification before production.
- No backend/payment behaviour or real enquiries were introduced.
