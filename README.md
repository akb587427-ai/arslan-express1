# Arslan Express — Professional Website

## Files
- `index.html` — website structure
- `styles.css` — responsive design and animations/hover effects
- `script.js` — category filtering, search, mobile menu and WhatsApp order links
- `catalogue.js` — 121 illustrative catalogue entries across 7 categories
- `config.js` — primary and alternate WhatsApp numbers
- `owner-profile.png` — owner profile image supplied for this website
- `product-images/` — 121 product illustrations, one file per catalogue item
- `assets/img/` — photographs used for the service category cards
- `IMAGE-CREDITS.md` — author and licence for every photograph

## WhatsApp numbers
- Primary call/WhatsApp: 0339 4946993 / 923394946993
- Alternate WhatsApp: 0349 3436993 / 923493436993

## Deploy on GitHub + Cloudflare Pages
1. Extract this ZIP on your Android phone.
2. Upload all files inside this folder to the ROOT of your GitHub repository. Do not upload only the ZIP.
3. Keep `index.html`, `styles.css`, `script.js`, `config.js`, `catalogue.js`,
   `owner-profile.png`, `assets/` and `product-images/` together in the repository root.
4. In Cloudflare Pages, connect the GitHub repository.
5. Framework preset: None. Build command: leave blank. Build output directory: `/`.
6. Deploy. Later GitHub commits trigger a new deployment.

## Important
- Catalogue entries are illustrative sample options, not confirmation of stock, supplier affiliation or brand endorsement.
- Prices and availability are confirmed manually over WhatsApp.
- This starter website does not store orders in a database, process payments, or provide live tracking.
- The website links the customer to WhatsApp with a pre-filled message; the customer must press Send.
- Product artwork is illustrative. Replace `product-images/item-NNN.svg` with
  supplier-approved product photos when you have them.
- `*` Some services depend on applicable rules and availability; confirm before offering.

## Multi-item shopping cart
- Customers can add multiple catalogue items to one cart.
- Cart supports quantity increase/decrease and item removal.
- 'Send Cart to WhatsApp' creates one message containing all selected items and quantities.
- No online payment or automatic order database is included; prices/availability are confirmed in WhatsApp.

## Photo fix
- The supplied owner portrait is included as `owner-profile.png` and shown in a dedicated founder profile section.
- Every catalogue item has its own separate local SVG artwork under `product-images/` (121 unique files), so the same product photo is no longer reused across different items.
- These are distinct branded catalogue illustrations, not supplier/product photographs. Replace with supplier-approved real product photos when available.
