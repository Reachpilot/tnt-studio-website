import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const { services } = await import('../src/data/services.ts')
const { blogPosts } = await import('../src/data/blog.ts')

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function renderMeta(template, { title, description, canonical, ogType = 'website' }) {
  let html = template
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${escapeHtml(description)}" />`)
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
  html = html.replace(/<meta property="og:type" content=".*?"\s*\/?>/, `<meta property="og:type" content="${ogType}" />`)
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
  return html
}

function addJsonLd(html, jsonLd) {
  if (!jsonLd) return html
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
  const scripts = schemas
    .map((schema) => `\n    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`)
    .join('')
  return html.replace('</head>', `${scripts}\n  </head>`)
}

const template = await fs.readFile(path.join(__dirname, '../dist/index.html'), 'utf-8')

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.item })),
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TnT Studio',
  url: 'https://tnt-studio.de/',
  logo: 'https://tnt-studio.de/og-image.webp',
  description: 'Medienagentur in Wuppertal für Web Design, Social Media Marketing, Content Creation, Branding und Produktfotografie.',
  founders: [
    { '@type': 'Person', name: 'Tiago Esteves', jobTitle: 'Founder & CEO' },
    { '@type': 'Person', name: 'Theo Spingys', jobTitle: 'Co-Founder & Marketing Lead' },
  ],
  sameAs: [
    'https://www.instagram.com/tnt_studio.de/',
    'https://www.linkedin.com/in/tiagoesteves3/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@tnt-studio.de',
    contactType: 'customer service',
    availableLanguage: ['German', 'English'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TnT Studio',
  image: 'https://tnt-studio.de/og-image.webp',
  url: 'https://tnt-studio.de/',
  telephone: '+49',
  email: 'info@tnt-studio.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Julius-Lucas-Weg 90',
    addressLocality: 'Wuppertal',
    postalCode: '42113',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '51.2562',
    longitude: '7.1508',
  },
  areaServed: [
    { '@type': 'City', name: 'Wuppertal' },
    { '@type': 'AdministrativeArea', name: 'Nordrhein-Westfalen' },
    { '@type': 'Country', name: 'Deutschland' },
  ],
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Medienagentur Leistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design', description: 'Massgeschneiderte, conversion-optimierte Websites mit React, TypeScript und Tailwind CSS.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing', description: 'Strategie, Content-Produktion und Paid Social für Instagram, TikTok, LinkedIn und Meta.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation', description: 'Reels, Imagefilme, Produktvideos und Fotoshootings inklusive Schnitt und Color-Grading.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Produktfotografie', description: 'Professionelle Produktbilder für Online-Shops, Kataloge und Social Media.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding', description: 'Logos, Corporate Design, Markenstrategie und komplette Markenauftritte.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development', description: 'Individuelle Web-Applikationen, Tools und Automatisierungen mit modernem Stack.' } },
    ],
  },
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was macht TnT Studio?', acceptedAnswer: { '@type': 'Answer', text: 'TnT Studio ist eine Medienagentur aus Wuppertal. Wir bieten Web Design, Social Media Marketing, Content Creation, Branding, Produktfotografie und Software Development aus einer Hand — und arbeiten dabei komplett remote für Kunden in Deutschland, Europa und den USA.' } },
    { '@type': 'Question', name: 'Für wen ist TnT Studio die richtige Agentur?', acceptedAnswer: { '@type': 'Answer', text: 'Für Unternehmen, Startups und Marken, die mehr wollen als einzelne Dienstleistungen. Wir entwickeln ganzheitliche Business-Lösungen: von der Marke über die Website bis zum laufenden Content und Paid Social.' } },
    { '@type': 'Question', name: 'Wie arbeitet TnT Studio mit Kunden zusammen?', acceptedAnswer: { '@type': 'Answer', text: 'Wir arbeiten remote — über Video-Calls, Figma, Slack und geteilte Projektboards. Das ist schneller, transparenter und effektiver als klassische Büro-Termine. Bei Bedarf kommen wir auch vor Ort in Wuppertal, Düsseldorf, Köln und dem gesamten Rheinland.' } },
    { '@type': 'Question', name: 'Was kostet eine Website bei TnT Studio?', acceptedAnswer: { '@type': 'Answer', text: 'Projekt-Websites starten bei 2.500 €, E-Commerce-Plattformen ab 5.000 €, umfangreiche Softwarelösungen werden individuell nach Aufwand kalkuliert. Jedes Projekt ist transparent — wir geben dir nach dem ersten kostenlosen Call ein Fixpreis-Angebot.' } },
    { '@type': 'Question', name: 'Wer sind die Gründer von TnT Studio?', acceptedAnswer: { '@type': 'Answer', text: 'TnT Studio wurde von Tiago Esteves (Founder & CEO) und Theo Spingys (Co-Founder & Marketing Lead) gegründet. Beide sind 17 Jahre alt und seit dem 15. Lebensjahr in der Agentur-Branche aktiv.' } },
    { '@type': 'Question', name: 'Warum sollte ich TnT Studio statt einer grossen Agentur wählen?', acceptedAnswer: { '@type': 'Answer', text: 'Wir sind schneller, persönlicher und direkter. Du sprichst direkt mit den Gründern, die dein Projekt selbst steuern. Das spart Budget und beschleunigt Entscheidungen.' } },
    { '@type': 'Question', name: 'Bietet TnT Studio auch Social Media Marketing in Wuppertal an?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wir betreuen Instagram, TikTok, LinkedIn und Meta Ads für lokale Unternehmen in Wuppertal, Solingen, Remscheid und dem gesamten Bergischen Land.' } },
    { '@type': 'Question', name: 'Wie schnell ist eine neue Website online?', acceptedAnswer: { '@type': 'Answer', text: 'Eine typische Business-Website ist in 2–4 Wochen live. E-Commerce-Projekte dauern in der Regel 4–8 Wochen. Wir arbeiten mit klaren Meilensteinen und wöchentlichen Updates.' } },
    { '@type': 'Question', name: 'Was ist AEO und warum ist es wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'AEO steht für Answer Engine Optimization. Wir strukturieren Inhalte so, dass Google, KI-Assistenten und Sprachsuche deine Antworten bevorzugen.' } },
    { '@type': 'Question', name: 'Kann ich Inhalte auf meiner Website selbst ändern?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wir integrieren ein Headless CMS wie Sanity, Strapi oder Decap CMS, damit du Texte, Bilder und Blog-Beiträge selbst verwalten kannst.' } },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TnT Studio',
  url: 'https://tnt-studio.de/',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://tnt-studio.de/blog/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const routes = [
  {
    file: 'index.html',
    title: 'TnT Studio — Medienagentur Wuppertal | Web Design, Social Media & Content',
    description: 'TnT Studio ist die Medienagentur in Wuppertal für Web Design, Social Media Marketing, Content Creation, Branding & Produktfotografie. Zwei Gründer, eine Vision: Marken, die Eindruck hinterlassen.',
    canonical: 'https://tnt-studio.de/',
    jsonLd: [
      organizationSchema,
      localBusinessSchema,
      faqPageSchema,
      websiteSchema,
      breadcrumb([{ name: 'Startseite', item: 'https://tnt-studio.de/' }]),
    ],
  },
  {
    file: 'blog/index.html',
    title: 'Blog — TnT Studio',
    description: 'Insights zu Web Design, Social Media, Content Creation und Branding aus der Praxis von TnT Studio.',
    canonical: 'https://tnt-studio.de/blog/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'TnT Studio Blog',
        url: 'https://tnt-studio.de/blog/',
        description: 'Insights zu Web Design, Social Media, Content Creation und Branding.',
      },
      breadcrumb([
        { name: 'Startseite', item: 'https://tnt-studio.de/' },
        { name: 'Blog', item: 'https://tnt-studio.de/blog/' },
      ]),
    ],
  },
]

for (const service of services) {
  const slug = slugify(service.title)
  const canonical = `https://tnt-studio.de/leistungen/${slug}/`
  routes.push({
    file: `leistungen/${slug}/index.html`,
    title: `${service.title} — TnT Studio`,
    description: service.description,
    canonical,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'TnT Studio',
          url: 'https://tnt-studio.de/',
        },
        areaServed: 'Wuppertal, NRW, Deutschland',
      },
      breadcrumb([
        { name: 'Startseite', item: 'https://tnt-studio.de/' },
        { name: service.title, item: canonical },
      ]),
    ],
  })
}

for (const post of blogPosts) {
  const canonical = `https://tnt-studio.de/blog/${post.slug}/`
  routes.push({
    file: `blog/${post.slug}/index.html`,
    title: `${post.title} — TnT Studio Blog`,
    description: post.excerpt,
    canonical,
    ogType: 'article',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
          '@type': 'Person',
          name: post.author,
          affiliation: { '@type': 'Organization', name: 'TnT Studio' },
        },
        publisher: {
          '@type': 'Organization',
          name: 'TnT Studio',
          url: 'https://tnt-studio.de/',
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
      },
      breadcrumb([
        { name: 'Startseite', item: 'https://tnt-studio.de/' },
        { name: 'Blog', item: 'https://tnt-studio.de/blog/' },
        { name: post.title, item: canonical },
      ]),
    ],
  })
}

for (const route of routes) {
  let html = renderMeta(template, route)
  html = addJsonLd(html, route.jsonLd)
  const outPath = path.join(__dirname, '../dist', route.file)
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, html)
}

// Copy llms.txt into .well-known for GEO crawler discoverability
await fs.mkdir(path.join(__dirname, '../dist/.well-known'), { recursive: true })
await fs.copyFile(path.join(__dirname, '../public/llms.txt'), path.join(__dirname, '../dist/.well-known/llms.txt'))
await fs.copyFile(path.join(__dirname, '../public/llms-full.txt'), path.join(__dirname, '../dist/.well-known/llms-full.txt'))

console.log(`Prerendered ${routes.length} routes into dist/`)
