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

## Contact Form — Netlify Setup

The multi-step contact form (`src/components/ContactForm.tsx`) submits to **Netlify Forms**:

- Form name: `kontakt`
- Honeypot field: `bot-field`
- Action: POST to `/`

To make sure submissions arrive at **info@tnt-studio.de**:

1. Open the Netlify dashboard → Site → Forms
2. Make sure "Form submissions" are enabled
3. Go to "Notifications" → "Form notifications"
4. Add an email notification for the form named `kontakt`
5. Set recipient to: `info@tnt-studio.de`
6. (Optional) Customize subject line, e.g. `Neue Projektanfrage von {{name}}`

Netlify uses the `email` field automatically as reply-to address.

## SEO / AEO Strategy

- Homepage includes Organization, LocalBusiness / ProfessionalService, FAQPage, WebSite and BreadcrumbList schema.
- Each service page has its own FAQPage, Service and BreadcrumbList schema.
- Each blog post has Article schema with author and publisher.
- `public/sitemap.xml` covers all routes including static legal pages.
- `public/robots.txt` points to the sitemap.
- `public/llms.txt` and `public/llms-full.txt` are copied to `.well-known/` during build for GEO/AI crawler discoverability.
- New homepage sections: FAQSection (`#faq`) and LocalSEO (`#wuppertal`) for local search and answer engine optimization.

## Important Paths

- Home: `/`
- Services: `/leistungen/:slug/`
- Blog: `/blog/` and `/blog/:slug/`
- Contact: `/#contact`
- FAQ: `/#faq`
- Local SEO section: `/#wuppertal`
