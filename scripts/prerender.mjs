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

const routes = [
  {
    file: 'index.html',
    title: 'TnT Studio — Medienagentur Wuppertal',
    description: 'TnT Studio — Medienagentur von Tiago Esteves & Theo Spingys. Web Design, Social Media, Content Creation, Branding & Produktfotografie für Marken mit Anspruch.',
    canonical: 'https://tnt-studio.de/',
    jsonLd: [breadcrumb([{ name: 'Startseite', item: 'https://tnt-studio.de/' }])],
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
