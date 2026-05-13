# Far North Crane — Next.js

Next.js 14 (App Router) port of the Far North Crane Webflow site (https://www.farnorthcrane.com).
Goal: pixel-perfect parity with the live Webflow site, with no runtime dependency on Webflow services.

## Architecture

The original Webflow HTML export is the source of truth for markup and styling. To stay
pixel-perfect with minimum risk:

- The Webflow CSS is served verbatim from `public/css/`.
- The Webflow runtime JS (`farnorthcrane.js`) and jQuery are loaded once in the root layout.
- Each route is a tiny Next page that renders the corresponding original `<body>` markup
  via `dangerouslySetInnerHTML`, while `<head>` (metadata, OG, canonical, JSON-LD) is
  expressed as proper Next `metadata` and per-page JSON-LD blocks.
- Original page-specific inline `<script>` blocks are extracted and re-injected via
  `next/script` so Webflow interactions (menu, sliders, animations) still bind.
- The contact form is intercepted on the client and POSTed to `/api/contact`
  (Resend-backed) instead of Webflow's form endpoint.

```
app/
  layout.tsx                  Root <html>, CSS, fonts, jQuery, farnorthcrane.js, GA, GTM
  page.tsx                    /
  about/page.tsx              /about
  contact/page.tsx            /contact   (+ ContactFormHandler)
  past-projects/page.tsx
  heavy-equipment-transport-services-saskatoon/page.tsx
  industrial-plant-maintenance-saskatoon/page.tsx
  residential-and-commercial-crane-rentals-saskatoon/page.tsx
  not-found.tsx               /404
  api/contact/route.ts        Form endpoint (Resend)
components/
  WebflowPage.tsx             Server component that loads + renders one HTML source file
  ContactFormHandler.tsx      Client component: hijacks #wf-form-Contact submit
lib/
  loadPage.ts                 Reads HTML, strips JSON-LD/inline scripts, rewrites URLs
  source-html/                The 8 original Webflow HTML files (do not edit)
public/
  css/, js/, images/, videos/ Webflow assets, copied verbatim
```

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

> Node 18.17+ is recommended. Tested on Node 19.4 with Next 14.

## Environment variables

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for contact form delivery. If unset, submissions are logged to the server console (useful for local dev). |
| `CONTACT_TO_EMAIL` | Where contact form emails are sent. Defaults to `hello@choquer.agency`. |
| `CONTACT_FROM_EMAIL` | `From` header (must be a Resend-verified sender). Defaults to Resend's sandbox sender. |

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel: New Project → import the repo. Framework auto-detects as Next.js.
3. Add the env vars above in Project Settings → Environment Variables.
4. Add the production domain (e.g. `farnorthcrane.com`) and update DNS.
5. After deploy, verify the contact form sends to `CONTACT_TO_EMAIL`.

## Updating content

To edit page content, edit the corresponding file in `lib/source-html/`. Asset paths
should stay relative (`images/...`) — the loader rewrites them at runtime. Internal
`href="*.html"` links are also rewritten to clean URLs.

## Removing Webflow entirely

The site has zero runtime calls to Webflow services after this port:

- Webflow's CSS and JS files are static assets we ship ourselves.
- The contact form (the only Webflow-hosted dependency) is now `/api/contact`.

The original `Far North Crane Webflow/` folder can be archived once the new site is
live and verified.
