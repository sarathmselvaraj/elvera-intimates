# ELVÉRA INTIMATES — Midnight Sapphire & Champagne

A complete, multi-page, **demo-only** luxury innerwear storefront. Built with HTML5, CSS3 and vanilla JavaScript; no backend, login, payment services, or external runtime dependencies.

## Start

1. Extract the ZIP.
2. Open `index.html` in a browser or, preferably, run the folder using VS Code Live Server.
3. Use the **Home dropdown** to switch between **Everyday Luxury** and **Second-Skin Studio**.
4. Product detail pages read an ID from the query string, e.g. `product-details.html?id=EV-001`.
5. Article detail pages read a slug from the query string, e.g. `blog-details.html?article=finding-your-everyday-bra-fit`.

## Pages

Everyday Luxury (Home); Second-Skin Studio; Products; Product Details; Interactive Size Guide; Wishlist; Shopping Bag; Guest Checkout (simulation); Demo Order Confirmation; About Us; Journal; Journal Article; Contact; FAQ; Shipping; Returns; Privacy; Terms; and 404.

## Functionality

- **24 unique demo SKUs**, 3 each in 8 categories.
- Product search, multiple filters, price limit, sorting, live matching count and reset.
- Product detail views, selectable size and colour, stock-limited quantities, zoom and Quick View.
- Persistent wishlist and shopping bag in browser `localStorage`. Variant-specific cart rows and live totals.
- Guest checkout simulation with local validation, no live payments, no card data, and no transmission of addresses or contact details.
- Temporary `sessionStorage` demo order reference and item summary only; no customer addresses, emails or phone numbers saved.
- Interactive demonstration Size Guide, 4 product types, cm/in conversion.
- 9 distinct Journal articles (3 × 3 desktop layout), full article details, and category/search filters.
- Theme and RTL/LTR preferences remembered locally. Keyboard-accessible native modal dialogs and responsive navigation.

## Important disclosures and limitations

- **This is not a real retail store.** All products, prices, inventory, team profiles, photography and branding are illustrative demo materials.
- **No real order, payment, delivery, reservation, refund or customer-support message occurs.** The Contact form validates locally and confirms it is not sent.
- The team portraits are illustrations of fictional demonstration roles; no employment or identity claims are made.
- Size charts are **illustrative**, not verified size recommendations. Real product measurements must be supplied and reviewed.
- Checkout does not request card numbers, CVVs, UPI PINs or banking credentials. No real personal details are persisted in localStorage.
- Privacy, terms, shipping and returns pages are sample informational pages and must be adapted and legally approved for a live launch.
- No external fonts, image hosts, icon libraries or analytics. Images are locally packaged, high-definition (HD), realistic editorial and studio photography assets optimized in WebP format for fast delivery and luxury visual fidelity.
- The Coimbatore studio address and map on the Contact page represent an illustrative appointment-only atelier location for demo and layout verification purposes.

## Editing

- `assets/js/data.js` — Catalogue, product fit/size/color/material, stock/price, journal articles.
- `assets/js/app.js` — Shared header/footer, page rendering, interactions, forms, storage.
- `assets/css/style.css` — Shared light/dark design system and responsive components.
- `assets/images/` — Local illustration/photo assets; product image paths defined in data.js.

## Deployment

Upload the complete folder to a static host such as Vercel, Netlify or GitHub Pages, preserving filenames and paths. To take real orders you must implement a backend, server-side validation, stock synchronization, secure payment integration, fulfilment, customer support, real policies and privacy compliance. This static demo is not a substitute for those features.

## QA

See `QA_REPORT.md` for executed static and browser checks, including any limitations.

## Update — 11 November 2026

- Added **Creating an Everyday Comfort Routine**, the ninth journal article, with a separate locally bundled image and five useful sections.
- Journal desktop cards now form three full rows of three cards; tablet uses two columns, narrow mobile one column.
- The Contact page Full Name field now **removes digits and punctuation immediately** (including pasted content), while accepting Unicode letters and single spaces. Invalid form submissions remain guarded.
- Home 1 and Home 2 use innerwear-related hero photos. All 16 inner-page heroes have dedicated relevant WebP banner assets and theme-aware readable overlays.
- Replaced unrelated existing supporting/editorial images (such as a bookshelf in the contact section) with clothing-related photography.
- All images are local; the static storefront remains demo-only with no real customer messages, orders or payments.
