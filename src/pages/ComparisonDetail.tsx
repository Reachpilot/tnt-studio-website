import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { comparisonBySlug, comparisons } from '../data/comparisons'
import { services } from '../data/services'
import { serviceSlug } from './ServiceDetail'

export default function ComparisonDetail() {
  const { slug } = useParams()
  const cmp = slug ? comparisonBySlug(slug) : undefined

  if (!cmp) return <Navigate to="/vergleich/" replace />

  const canonical = `https://tnt-studio.de/vergleich/${cmp.slug}/`
  const updated = '2026-02'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${cmp.title}: ${cmp.alternative} im Vergleich`,
      description: cmp.tagline,
      dateModified: `${updated}-01`,
      author: {
        '@type': 'Organization',
        '@id': 'https://tnt-studio.de/#organization',
        name: 'TnT Studio',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://tnt-studio.de/#organization',
        name: 'TnT Studio',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: cmp.faqs.map((f) => ({
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
        { '@type': 'ListItem', position: 2, name: 'Vergleich', item: 'https://tnt-studio.de/vergleich/' },
        { '@type': 'ListItem', position: 3, name: cmp.title, item: canonical },
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>{`${cmp.title}: ${cmp.alternative} im Vergleich | TnT Studio`}</title>
        <meta name="description" content={cmp.tagline} />
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
              <Link to="/vergleich/" className="hover:text-neutral-900">Vergleich</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900">{cmp.title}</span>
            </nav>
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">
              TnT Studio vs. {cmp.alternative}
            </p>
            <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              {cmp.title}: {cmp.alternative}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">{cmp.tagline}</p>
            <p className="mt-3 text-xs text-neutral-400">Zuletzt aktualisiert: {updated}</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Main content */}
            <div className="space-y-12">
              {/* Intro */}
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {cmp.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              {/* Comparison table */}
              <div>
                <h2 className="mb-6 text-2xl font-black tracking-tight text-neutral-900">Direkter Vergleich</h2>
                <div className="overflow-x-auto rounded-2xl border border-neutral-200">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-50">
                        <th className="px-5 py-4 font-bold text-neutral-500">Kriterium</th>
                        <th className="px-5 py-4 font-black text-neutral-900">TnT Studio</th>
                        <th className="px-5 py-4 font-bold text-neutral-500">{cmp.alternative}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100 bg-white">
                      {cmp.rows.map((r) => (
                        <tr key={r.criterion} className="align-top">
                          <td className="px-5 py-4 font-semibold text-neutral-900">{r.criterion}</td>
                          <td className="px-5 py-4 leading-relaxed text-neutral-700">{r.tnt}</td>
                          <td className="px-5 py-4 leading-relaxed text-neutral-600">{r.alternative}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-neutral-400">
                  Hinweis: TnT Studio ist Anbieter dieser Seite. Der Vergleich ist bewusst ausgewogen — wir zeigen auch, wann die Alternative besser passt.
                </p>
              </div>

              {/* When alternative wins */}
              <div>
                <h2 className="mb-6 text-2xl font-black tracking-tight text-neutral-900">
                  Wann {cmp.alternative} die bessere Wahl ist
                </h2>
                <ul className="space-y-3">
                  {cmp.alternativeWins.map((w) => (
                    <li key={w} className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-700 sm:text-base">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verdict */}
              <div className="rounded-3xl bg-neutral-900 p-8 text-white sm:p-10">
                <h2 className="text-2xl font-black tracking-tight">Unser Fazit</h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-300">
                  {cmp.verdict.map((v, i) => <p key={i}>{v}</p>)}
                </div>
                <a
                  href="/#contact"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-neutral-950 transition-colors hover:bg-neutral-200"
                >
                  Kostenlos beraten lassen
                </a>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="mb-6 text-2xl font-black tracking-tight text-neutral-900">Häufige Fragen</h2>
                <div className="space-y-3">
                  {cmp.faqs.map((f) => (
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
                <h3 className="text-lg font-black text-neutral-900">Unsere Leistungen</h3>
                <ul className="mt-4 space-y-2">
                  {services.map((s) => (
                    <li key={s.title}>
                      <Link
                        to={`/leistungen/${serviceSlug(s.title)}/`}
                        className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-white hover:text-neutral-900"
                      >
                        {s.title}
                        <svg className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-neutral-900 p-7 text-white">
                <h3 className="text-lg font-black">Kostenlose Erstberatung</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Wir sagen ehrlich, ob eine Agentur, ein Baukasten oder ein Freelancer zu Ihrem Projekt passt.
                </p>
                <a
                  href="/#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-neutral-200"
                >
                  Jetzt anfragen
                </a>
              </div>

              <div className="rounded-3xl border border-neutral-200 p-7">
                <h3 className="text-sm font-bold text-neutral-500 uppercase">Weitere Vergleiche</h3>
                <ul className="mt-3 space-y-1.5">
                  {comparisons.filter((c) => c.slug !== cmp.slug).map((c) => (
                    <li key={c.slug}>
                      <Link to={`/vergleich/${c.slug}/`} className="text-sm font-semibold text-neutral-700 hover:text-neutral-900">
                        {c.title}: {c.alternative}
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
