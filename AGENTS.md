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

## Contact Form — WhatsApp-only

The multi-step contact form (`src/components/ContactForm.tsx`) collects name, company, services, budget, timeline, goals and details, then generates a personalized `wa.me/4917722722211` link with the full lead message (including attribution). No email/phone fields — WhatsApp provides sender identity. No server-side submission; `netlify/functions/` was removed. Spam protection concept remains documented but the honeypot field is no longer wired to a backend.

## Analytics — Consent-gated (GA4 + Meta Pixel)

`src/lib/analytics.ts` loads gtag.js and the Meta Pixel **only after cookie consent** (`localStorage['tnt-cookie-consent'] === 'accepted'`). IDs are placeholders at the top of the file:

- `GA_MEASUREMENT_ID` — GA4 ID (`G-...`) from analytics.google.com
- `META_PIXEL_ID` — Pixel ID from Meta Events Manager

Events: `generate_lead`/`Lead` on form success, `contact_click` on tel:/mailto:/WhatsApp links, Meta `PageView` on SPA route changes (`src/components/RouteTracker.tsx`). GA4 pageviews rely on enhanced measurement (browser-history events, on by default).

## Attribution — First-Touch (UTM/gclid → Lead)

`src/lib/attribution.ts` stores first-touch attribution (UTM params, gclid/gbraid/wbraid, landing page, referrer) in `sessionStorage` once per session. `main.tsx` calls `captureAttribution()` on load; `ContactForm.tsx` appends the attribution lines into the generated WhatsApp message.

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
- Industries (pSEO): `/branchen/` and `/branchen/:slug/` — 8 industries in `src/data/industries.ts` (Handwerk, Gastronomie, Healthcare, Kanzleien, Retail, Immobilien, Beauty/Wellness, Pflege) with Service + FAQPage + BreadcrumbList schema
- Comparisons: `/vergleich/` and `/vergleich/:slug/` — in `src/data/comparisons.ts` (Agentur vs. Baukasten, Agentur vs. Freelancer) with Article + FAQPage + BreadcrumbList schema
- Homepage includes a Kurzantwort (answer-first) block for AEO
- Contact: `/#contact`
- FAQ: `/#faq`
- Local SEO section: `/#wuppertal`
- Contact: generated WhatsApp link (`wa.me/4917722722211`) from the multi-step form
