# TnT Studio Website — Agent Notes

## Build & Deploy

```bash
npm install
npm run build
npm run preview
```

Production deploy happens via Netlify from the GitHub repo `Reachpilot/tnt-studio-website`.
Build command: `npm run build`
Publish directory: `dist`

## Contact Form — Resend API (Netlify Function)

The multi-step contact form (`src/components/ContactForm.tsx`) submits via `fetch()` to the Netlify Function `/.netlify/functions/kontakt` (`netlify/functions/kontakt.js`).

- **Primary:** Resend API (`https://api.resend.com/emails`) — requires `RESEND_API_KEY` env var in Netlify.
- **Fallback:** If `RESEND_API_KEY` is not set, the function forwards the submission to FormSubmit server-side, so the form keeps working until Resend is configured.
- Optional env vars: `RESEND_FROM` (sender, e.g. `TnT Studio <kontakt@tnt-studio.de>`), `RESEND_TO` (defaults to `info@tnt-studio.de`).
- For a custom sender address, the domain must be verified in Resend (DNS records). Until then use `onboarding@resend.dev` (delivers only to the Resend account email).
- Spam protection: hidden `fax` honeypot field + server-side validation.
- On success the form shows the success state directly and fires `trackLead()` (GA4 `generate_lead` + Meta Pixel `Lead`).
- A fallback form for non-JS users is included in `index.html` and still posts to FormSubmit directly.

## Analytics — Consent-gated (GA4 + Meta Pixel)

`src/lib/analytics.ts` loads gtag.js and the Meta Pixel **only after cookie consent** (`localStorage['tnt-cookie-consent'] === 'accepted'`). IDs are placeholders at the top of the file:

- `GA_MEASUREMENT_ID` — GA4 ID (`G-...`) from analytics.google.com
- `META_PIXEL_ID` — Pixel ID from Meta Events Manager

Events: `generate_lead`/`Lead` on form success, `contact_click` on tel:/mailto:/WhatsApp links, Meta `PageView` on SPA route changes (`src/components/RouteTracker.tsx`). GA4 pageviews rely on enhanced measurement (browser-history events, on by default).

## SEO / AEO Strategy

- Homepage includes Organization, LocalBusiness / ProfessionalService, FAQPage, WebSite and BreadcrumbList schema.
- Each service page has Service + FAQPage + BreadcrumbList schema **prerendered** into static HTML by `scripts/prerender.mjs` (plus Helmet-injected schemas for SPA navigation).
- Each blog post has Article schema with author and publisher.
- **pSEO location pages:** `/standorte/` hub + `/standorte/:slug/` for 10 cities (`src/data/locations.ts`), each with unique local content, Service + FAQPage + BreadcrumbList schema.
- `scripts/prerender.mjs` generates `dist/sitemap.xml` dynamically from all routes (home, services, locations, blog) plus legal pages — `public/sitemap.xml` no longer exists.
- `public/robots.txt` points to the sitemap.
- `public/llms.txt` and `public/llms-full.txt` are copied to `.well-known/` during build for GEO/AI crawler discoverability.
- Homepage sections: FAQSection (`#faq`) and LocalSEO (`#wuppertal`) with links to all location pages.
- Service meta titles/descriptions live in `src/data/services.ts` (`metaTitle`, `metaDescription`) for CTR-optimized snippets.
- Google Search Console verified via meta tag in `index.html` and HTML file `public/googlee4eba71a59ef6dcd.html`.

## Important Paths

- Home: `/`
- Services: `/leistungen/:slug/`
- Blog: `/blog/` and `/blog/:slug/`
- Locations: `/standorte/` and `/standorte/:slug/`
- Contact: `/#contact`
- FAQ: `/#faq`
- Local SEO section: `/#wuppertal`
- Contact API: `/.netlify/functions/kontakt`
