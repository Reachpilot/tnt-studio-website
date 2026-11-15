import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { industryBySlug, industries } from '../data/industries'
import { services } from '../data/services'
import { serviceSlug } from './ServiceDetail'

export default function IndustryDetail() {
  const { slug } = useParams()
  const ind = slug ? industryBySlug(slug) : undefined

  if (!ind) return <Navigate to="/branchen/" replace />

  const canonical = `https://tnt-studio.de/branchen/${ind.slug}/`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `TnT Studio für ${ind.name}`,
      description: ind.tagline,
      provider: {
        '@type': 'Organization',
        '@id': 'https://tnt-studio.de/#organization',
        name: 'TnT Studio',
        url: 'https://tnt-studio.de/',
      },
      areaServed: 'DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ind.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://tnt-studio.de/' },
        { '@type': 'ListItem', position: 2, name: 'Branchen', item: 'https://tnt-studio.de/branchen/' },
        { '@type': 'ListItem', position: 3, name: ind.name, item: canonical },
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>{`${ind.name}, Webdesign, SEO & Social Media | TnT Studio`}</title>
        <meta name="description" content={ind.tagline} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <nav className="mb-6 text-sm text-neutral-500">
              <Link to="/" className="hover:text-neutral-900">Startseite</Link>
              <span className="mx-2">/</span>
              <Link to="/branchen/" className="hover:text-neutral-900">Branchen</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900">{ind.name}</span>
            </nav>
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Branche</p>
            <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              {ind.name}, digital gefunden werden.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">{ind.tagline}</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Main content */}
            <div className="space-y-12">
              {/* Intro */}
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {ind.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              {/* Pain points */}
              <div>
                <h2 className="mb-6 text-2xl font-black tracking-tight text-neutral-900">Typische Herausforderungen</h2>
                <ul className="space-y-3">
                  {ind.painPoints.map((pp) => (
                    <li key={pp} className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-700 sm:text-base">{pp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="mb-6 text-2xl font-black tracking-tight text-neutral-900">Häufige Fragen</h2>
                <div className="space-y-3">
                  {ind.faqs.map((f) => (
                    <details key={f.question} className="group rounded-2xl border border-neutral-200 bg-white p-5 open:border-neutral-900">
                      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-neutral-900">
                        {f.question}
                        <svg className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50/60 p-7">
                <h3 className="text-lg font-black text-neutral-900">Passende Leistungen</h3>
                <ul className="mt-4 space-y-2">
                  {ind.services.map((svc) => {
                    const match = services.find((s) => s.title === svc)
                    if (!match) return null
                    return (
                      <li key={svc}>
                        <Link
                          to={`/leistungen/${serviceSlug(svc)}/`}
                          className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-white hover:text-neutral-900"
                        >
                          {svc}
                          <svg className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="rounded-3xl bg-neutral-900 p-7 text-white">
                <h3 className="text-lg font-black">Kostenloser Branch-Check</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Wir prüfen Ihre aktuelle Sichtbarkeit in Ihrer Branche, bei Google UND ChatGPT.
                </p>
                <a
                  href="/#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-neutral-200"
                >
                  Jetzt anfragen
                </a>
              </div>

              <div className="rounded-3xl border border-neutral-200 p-7">
                <h3 className="text-sm font-bold text-neutral-500 uppercase">Weitere Branchen</h3>
                <ul className="mt-3 space-y-1.5">
                  {industries.filter((i) => i.slug !== ind.slug).map((i) => (
                    <li key={i.slug}>
                      <Link to={`/branchen/${i.slug}/`} className="text-sm font-semibold text-neutral-700 hover:text-neutral-900">
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
