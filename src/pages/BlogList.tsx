import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blog'

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>('Alle')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)))
    return ['Alle', ...cats]
  }, [])

  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
  const filtered = activeCategory === 'Alle' ? sorted : sorted.filter((p) => p.category === activeCategory)
  const [featured, ...rest] = filtered

  const collectionSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog — TnT Studio',
    description: 'Insights zu Web Design, Social Media, Content Creation, SEO und Branding aus der Praxis von TnT Studio — Medienagentur in Wuppertal.',
    url: 'https://tnt-studio.de/blog/',
    hasPart: sorted.slice(0, 30).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://tnt-studio.de/blog/${p.slug}/`,
      datePublished: p.date,
      author: { '@type': 'Person', name: p.author },
      publisher: { '@type': 'Organization', name: 'TnT Studio' },
    })),
  })

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://tnt-studio.de/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tnt-studio.de/blog/' },
    ],
  })

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Blog — TnT Studio | Medienagentur Wuppertal</title>
        <meta name="description" content="Blog von TnT Studio: Insights zu Web Design, Social Media, Content Creation, SEO, Branding und AI-Suchmaschinen. Praxiswissen aus der Medienagentur Wuppertal." />
        <link rel="canonical" href="https://tnt-studio.de/blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tnt-studio.de/blog/" />
        <meta property="og:title" content="Blog — TnT Studio | Medienagentur Wuppertal" />
        <meta property="og:description" content="Insights zu Web Design, Social Media, Content Creation, SEO, Branding und AI-Suchmaschinen aus der Medienagentur Wuppertal." />
        <meta name="twitter:title" content="Blog — TnT Studio | Medienagentur Wuppertal" />
        <meta name="twitter:description" content="Insights zu Web Design, Social Media, Content Creation, SEO, Branding und AI-Suchmaschinen aus der Medienagentur Wuppertal." />
        <meta property="og:image" content="https://tnt-studio.de/og-image.webp" />
        <meta name="twitter:image" content="https://tnt-studio.de/og-image.webp" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collectionSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Blog</p>
          <h1 className="text-balance text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
            Insights, die wir teilen.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500">
            Was wir in 2+ Jahren Agentur-Alltag gelernt haben — ehrlich, direkt, ohne Bullshit.
            Strategien, die funktionieren. Trends, die nicht funktionieren. Und Geschichten, die zeigen, wie wir ticken.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
        <Link
          to={`/blog/${featured.slug}/`}
          className="group mb-12 block overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all hover:shadow-xl"
        >
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {featured.category}
                </span>
                <span className="text-xs text-neutral-400">{featured.readingTime} Lesezeit</span>
              </div>
              <h2 className="mb-4 text-3xl font-black tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors">
                {featured.title}
              </h2>
              <p className="mb-6 text-base leading-relaxed text-neutral-500">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <span className="font-medium text-neutral-700">{featured.author}</span>
                <span>·</span>
                <span>{new Date(featured.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </div>
            <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-10">
              <span className="text-7xl">{featured.emoji}</span>
            </div>
          </div>
        </Link>
        )}

        {/* Grid of remaining posts */}
        {rest.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}/`}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:shadow-xl hover:border-neutral-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{post.emoji}</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                  {post.category}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-500">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-700">{post.author}</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
        ) : (
          <p className="text-center text-neutral-500 py-12">Keine Beiträge in dieser Kategorie.</p>
        )}

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-neutral-900 p-12 text-center">
          <h2 className="text-3xl font-bold text-white">Bereit für echte Ergebnisse?</h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Genug gelesen. Lass uns über dein Projekt sprechen.
          </p>
          <a
            href="mailto:info@tnt-studio.de"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
          >
            info@tnt-studio.de
          </a>
        </div>
      </div>
    </div>
  )
}
