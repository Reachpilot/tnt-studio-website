import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services } from '../data/services'
import { blogPosts } from '../data/blog'
import { serviceIcons } from '../components/serviceIcons'


const colorMap: Record<string, { bg: string; text: string }> = {
  code: { bg: 'bg-neutral-1000', text: 'text-neutral-900' },
  social: { bg: 'bg-neutral-300', text: 'text-neutral-300' },
  video: { bg: 'bg-neutral-300', text: 'text-neutral-300' },
  camera: { bg: 'bg-neutral-300', text: 'text-neutral-300' },
  palette: { bg: 'bg-neutral-400', text: 'text-neutral-400' },
  terminal: { bg: 'bg-neutral-300', text: 'text-neutral-300' },
}

const priceMap: Record<string, string> = {
  'Web Design': 'ab 500 €',
  'KI-Sichtbarkeit & SEO': 'ab 1.500 €',
  'Social Media Marketing': 'ab 1.200 €/Monat',
  'Software Development': 'ab 2.500 €',
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
  const metaTitle = service.metaTitle || `${service.title}, TnT Studio | Medienagentur Wuppertal`
  const metaDescription = service.metaDescription || `${service.description} TnT Studio, Medienagentur in Wuppertal. Jetzt kostenlos beraten lassen.`

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
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
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
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            {serviceIcons[service.icon] || serviceIcons.code}
          </svg>
        </div>

        <h1 className="text-balance text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
          {service.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-neutral-500">
          {service.description}
        </p>
        {priceMap[service.title] && (
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2.5 shadow-sm">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Preis</span>
            <span className="text-lg font-black text-neutral-900">{priceMap[service.title]}</span>
            <span className="text-xs text-neutral-400">Festpreis nach Check</span>
          </div>
        )}

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
        <p className="mt-3 text-neutral-500">So arbeiten wir, transparent, strukturiert, ergebnisorientiert.</p>
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
                        alt={`${cs.client}, ${cs.result}`}
                        className="mx-auto max-h-[400px] w-full object-contain transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm font-semibold text-neutral-900">{cs.client}</p>
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
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    {serviceIcons[s.icon] || serviceIcons.code}
                  </svg>
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-500 transition-colors">{s.title}</h3>
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
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-500 transition-colors">
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
