# Arslan Express Website

A responsive, mobile-first single-page website for Arslan Express, a personal delivery and lifestyle service in Lahore.

## Included
- Premium navy, white and orange design
- Service cards for all six selected services
- Booking form that prepares a WhatsApp message
- Payment preference selection: Cash, COD (if agreed), JazzCash, Easypaisa and bank transfer
- About, process, FAQs and contact sections
- No backend or paid API required for the starter version

## Contact numbers already configured
- Main call and WhatsApp: **0339 4946993** (`923394946993`)
- Alternate WhatsApp: **0349 3436993** (`923493436993`)
- Booking form messages go to the main WhatsApp number.
- The contact section includes a call link and an alternate WhatsApp link.

To change these later, edit `config.js`. Keep numbers in international format without `+`, spaces or dashes. Do not put OTPs, passwords, payment PINs or private credentials in this file.

## Run locally
Open `index.html` in a browser. For a local development server, use VS Code Live Server or any static file server. No build command is required.

## Deploy free with Cloudflare Pages (Git integration)
1. Upload the complete contents of this folder to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Connect GitHub and select your repository.
4. Framework preset: **None**.
5. Build command: leave blank.
6. Build output directory: `/` (root).
7. Save and deploy.

Cloudflare's free-plan quotas and features can change. Check the current plan limits before relying on them for a business-critical service.

## Important booking and payment limitations
- The booking form does **not** save orders in a database. It prepares a WhatsApp message and the customer must press Send.
- The website does **not** charge payments or verify transfers.
- JazzCash, Easypaisa and bank transfer are payment preferences only. Share verified payment details privately after accepting the order.
- Never publish your OTP, wallet PIN, bank login, CNIC, or private account credentials.
- Do not describe an order as confirmed until you personally accept it and confirm availability, price and timing.
- COD is only available if you choose to offer it for that order.

## Customization
- `config.js`: WhatsApp number and business details
- `index.html`: page text, services and FAQ content
- `styles.css`: colors, layout and responsive design
- `script.js`: mobile navigation and WhatsApp booking behavior

## Future upgrades
A database, secure admin login, saved order history, automatic status notifications and live GPS tracking require a backend and additional setup. They are not included in this static starter website.
