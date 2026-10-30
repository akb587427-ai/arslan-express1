# Arslan Express Website

A responsive, single-page website for **Arslan Express**, a personal delivery and
lifestyle service in Lahore. It is plain HTML, CSS and JavaScript with no build
step, no backend and no paid API.

## What is included

- Navy, white and orange responsive design (mobile-first)
- Twelve service cards with photos: parcels, cakes, flowers, gifts, shopping, groceries,
  errands, food, pharmacy, laundry, birthday surprises and business runs
- Photo gallery of the work handled, plus a real Lahore hero photograph
- Booking form that prepares a pre-filled WhatsApp message
- Payment preference selection: cash, COD, JazzCash, Easypaisa, bank transfer
- How-it-works, payment, about, FAQ and contact sections
- Accessibility basics: skip link, visible focus ring, labelled controls, reduced-motion support
- SEO and social meta tags plus LocalBusiness structured data

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structure |
| `styles.css` | Colours, layout and responsive rules |
| `script.js` | Navigation, contact links and booking behaviour |
| `config.js` | Business name and contact numbers |
| `assets/img/` | Photographs used on the page (see `IMAGE-CREDITS.md`) |
| `IMAGE-CREDITS.md` | Author and licence for every photograph |

## Contact numbers

| Purpose | Number |
| --- | --- |
| Call and main WhatsApp | **0339 4946993** (`923394946993`) |
| Alternate WhatsApp | **0349 3436993** (`923493436993`) |

Booking requests are sent to the main WhatsApp number. Edit `config.js` to change
any of these. Keep numbers in international format without `+`, spaces or dashes.
The `script.js` helper also accepts local `03XXXXXXXXX` form and converts it.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy free with Cloudflare Pages

1. Push the contents of this folder to a GitHub repository.
2. In Cloudflare open **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
3. Select the repository.
4. Framework preset: **None**.
5. Build command: leave blank.
6. Build output directory: `/` (root).
7. Save and deploy.

Cloudflare's free-plan quotas can change. Check the current limits before relying
on them for a business-critical service.

## Important limitations

- The booking form does **not** save orders. It prepares a WhatsApp message and
  the customer must press Send.
- The website does **not** charge payments or verify transfers.
- JazzCash, Easypaisa and bank transfer are payment preferences only. Share
  verified payment details privately after accepting an order.
- An order is not confirmed until you personally accept it and confirm
  availability, price and timing.
- Cash on delivery is only available if you choose to offer it for that order.

## Photographs

Every image in `assets/img/` is a freely licensed photograph from Wikimedia Commons.
`IMAGE-CREDITS.md` lists the author and licence for each one. CC BY and CC BY-SA images
require that credit is kept, so keep that file with the site. To use your own photos,
replace the files with the same names and a 4:3 aspect ratio.

## Security

`config.js` is public: it is served to every visitor. Never put OTPs, wallet PINs,
bank logins, CNIC details or any private credentials in this file or anywhere
else in this project. The published phone numbers are intentionally public.

## Future upgrades

A database, secure admin login, saved order history, automatic status
notifications and live tracking require a backend and are not part of this
static starter site.
