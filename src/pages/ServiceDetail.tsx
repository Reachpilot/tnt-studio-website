import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services } from '../data/services'
import { blogPosts } from '../data/blog'

const iconMap: Record<string, string> = {
  code: 'M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4',
  social: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z',
  video: 'M23 7l-7 5 7 5V7zM1 5h15v14H1z',
  camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  palette: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5-4.5-8-10-8z',
  terminal: 'M4 17l6-6-6-6M12 19h8',
}

const colorMap: Record<string, { bg: string; text: string }> = {
  code: { bg: 'bg-indigo-500', text: 'text-indigo-600' },
  social: { bg: 'bg-rose-500', text: 'text-rose-600' },
  video: { bg: 'bg-purple-500', text: 'text-purple-600' },
  camera: { bg: 'bg-amber-500', text: 'text-amber-600' },
  palette: { bg: 'bg-emerald-500', text: 'text-emerald-600' },
  terminal: { bg: 'bg-cyan-500', text: 'text-cyan-600' },
}

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function serviceSlug(title: string) {
  return slugify(title)
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-bold text-neutral-900">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-sm leading-relaxed text-neutral-500">{answer}</p>
      </div>
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => slugify(s.title) === slug)

  const faqSchema = service
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      })
    : null

  const serviceSchema = service
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'TnT Studio',
          url: 'https://tnt-studio.de/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Julius-Lucas-Weg 90',
            addressLocality: 'Wuppertal',
            postalCode: '42113',
            addressCountry: 'DE',
          },
        },
        areaServed: { '@type': 'City', name: 'Wuppertal' },
        url: `https://tnt-studio.de/leistungen/${slugify(service.title)}/`,
      })
    : null

  const breadcrumbSchema = service
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://tnt-studio.de/' },
          { '@type': 'ListItem', position: 2, name: service.title, item: `https://tnt-studio.de/leistungen/${slugify(service.title)}/` },
        ],
      })
    : null

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-neutral-900">404</h1>
          <p className="mt-4 text-neutral-500">Service nicht gefunden.</p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    )
  }

  const colors = colorMap[service.icon] || colorMap.code
  const otherServices = services.filter((s) => s.title !== service.title).slice(0, 3)
  const canonical = `https://tnt-studio.de/leistungen/${slugify(service.title)}/`

  const categoryMap: Record<string, string[]> = {
    'Web Design': ['Web Design', 'SEO'],
    'Social Media Marketing': ['Social Media', 'SEO'],
    'Content Creation': ['Content Creation', 'Social Media'],
    'Produktfotografie': ['Content Creation', 'Web Design'],
    'Branding': ['Branding', 'Web Design'],
    'Software Development': ['Web Design', 'SEO'],
  }
  const relatedCategories = categoryMap[service.title] || []
  const relatedPosts = blogPosts
    .filter((p) => relatedCategories.includes(p.category))
    .slice(0, 3)

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>{`${service.title} — TnT Studio | Medienagentur Wuppertal`}</title>
        <meta name="description" content={`${service.description} TnT Studio — Medienagentur in Wuppertal. Jetzt kostenlos beraten lassen.`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`${service.title} — TnT Studio | Medienagentur Wuppertal`} />
        <meta property="og:description" content={service.description} />
        <meta name="twitter:title" content={`${service.title} — TnT Studio | Medienagentur Wuppertal`} />
        <meta name="twitter:description" content={service.description} />
        <meta property="og:image" content="https://tnt-studio.de/og-image.webp" />
        <meta name="twitter:image" content="https://tnt-studio.de/og-image.webp" />
      </Helmet>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serviceSchema }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </Link>

        {/* Hero */}
        <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${colors.bg} text-white`}>
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[service.icon] || iconMap.code} />
          </svg>
        </div>

        <h1 className="text-balance text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
          {service.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-neutral-500">
          {service.description}
        </p>

        {/* Long description */}
        <div className="mt-12 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10">
          <p className="text-base leading-relaxed text-neutral-600">
            {service.longDescription}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {service.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-neutral-900 p-6 text-center">
              <p className="text-3xl font-black tracking-tight text-white">{stat.value}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-neutral-400 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <h2 className="mt-16 text-3xl font-black tracking-tight text-neutral-900">Was wir liefern</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.bg} text-white`}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900">{feature}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <h2 className="mt-16 text-3xl font-black tracking-tight text-neutral-900">Unser Prozess</h2>
        <p className="mt-3 text-neutral-500">So arbeiten wir — transparent, strukturiert, ergebnisorientiert.</p>
        <div className="mt-8 space-y-4">
          {service.process.map((step, i) => (
            <div key={step.title} className="flex gap-6 rounded-2xl border border-neutral-200 bg-white p-6">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${colors.bg} text-white`}>
                <span className="text-lg font-black">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        {service.caseStudies.length > 0 && (
          <>
            <h2 className="mt-16 text-3xl font-black tracking-tight text-neutral-900">Referenzen</h2>
            <p className="mt-3 text-neutral-500">Echte Projekte, echte Ergebnisse.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.caseStudies.map((cs) => (
                <div key={cs.client} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  {cs.image && (
                    <div className="w-full overflow-hidden bg-neutral-50 p-4">
                      <img
                        src={cs.image}
                        alt={`${cs.client} — ${cs.result}`}
                        className="mx-auto max-h-[400px] w-full object-contain transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm font-semibold text-indigo-600">{cs.client}</p>
                    <h3 className="mt-2 text-lg font-bold text-neutral-900">{cs.result}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">{cs.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* FAQ */}
        <h2 className="mt-16 text-3xl font-black tracking-tight text-neutral-900">Häufige Fragen</h2>
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white px-6">
          {service.faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-neutral-900 p-10 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready für {service.title}?</h2>
          <p className="mt-3 text-neutral-400">Lass uns über dein Projekt sprechen. Antwort innerhalb von 24 Stunden.</p>
          <a
            href="mailto:info@tnt-studio.de"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
          >
            info@tnt-studio.de
          </a>
        </div>

        {/* Other services */}
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-900">Andere Leistungen</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {otherServices.map((s) => {
            const sColors = colorMap[s.icon] || colorMap.code
            return (
              <Link
                key={s.title}
                to={`/leistungen/${slugify(s.title)}/`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg hover:border-neutral-900"
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${sColors.bg} text-white`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[s.icon] || iconMap.code} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{s.description}</p>
              </Link>
            )
          })}
        </div>

        {/* Related blog posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">Verwandte Blog-Beiträge</h2>
            <p className="mb-6 text-sm text-neutral-500">Mehr Wissen rund um {service.title}.</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}/`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">{r.emoji}</span>
                    <span className="text-xs font-semibold text-neutral-500">{r.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">{r.readingTime} Lesezeit</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
