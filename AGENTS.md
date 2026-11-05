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

## Contact Form — FormSubmit

The multi-step contact form (`src/components/ContactForm.tsx`) posts to **FormSubmit** at `https://formsubmit.co/info@tnt-studio.de`.

On first use, FormSubmit sends an activation email to **info@tnt-studio.de**. The inbox owner must click the activation link. After that, every form submission is forwarded directly to that address.

FormSubmit fields used:
- `_next`: redirect back to `https://tnt-studio.de/?form=sent#contact`
- `_subject`: email subject line
- `_captcha`: disabled (`false`) for smoother UX
- Standard fields: `name`, `email`, `phone`, `company`, `website`, `service`, `budget`, `timeline`, `message`, `consent`

A fallback form for non-JS users is included in `index.html`.

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
