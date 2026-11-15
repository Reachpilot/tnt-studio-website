import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { locations } from '../data/locations'
import { services } from '../data/services'
import { serviceSlug } from './ServiceDetail'

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

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const location = locations.find((l) => l.slug === slug)

  if (!location) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-neutral-900">404</h1>
          <p className="mt-4 text-neutral-500">Standort nicht gefunden.</p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    )
  }

  const canonical = `https://tnt-studio.de/standorte/${location.slug}/`
  const otherLocations = locations.filter((l) => l.slug !== location.slug)

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  })

  const serviceSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Medienagentur für ${location.name}`,
    description: location.tagline,
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
    areaServed: { '@type': 'City', name: location.name },
    url: canonical,
  })

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://tnt-studio.de/' },
      { '@type': 'ListItem', position: 2, name: 'Standorte', item: 'https://tnt-studio.de/standorte/' },
      { '@type': 'ListItem', position: 3, name: location.name, item: canonical },
    ],
  })

  const title = `Medienagentur ${location.name}, Webdesign, Social Media & Content | TnT Studio`
  const description = `${location.tagline} Web Design, Social Media Marketing, Content Creation, Branding & Software Development, remote oder vor Ort. Jetzt unverbindlich anfragen.`

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://tnt-studio.de/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://tnt-studio.de/og-image.webp" />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Link to="/standorte/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Alle Standorte
        </Link>

        {/* Hero */}
        <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">
          {location.region} · {location.distance}
        </p>
        <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          Medienagentur in {location.name}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-neutral-500">{location.tagline}</p>

        {/* Intro */}
        <div className="mt-12 space-y-5 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10">
          {location.intro.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-neutral-600">{para}</p>
          ))}
        </div>

        {/* Industries + Districts */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h2 className="text-lg font-black text-neutral-900">Branchen in {location.name}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {location.industries.map((ind) => (
                <span key={ind} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700">
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h2 className="text-lg font-black text-neutral-900">Stadtteile & Umgebungen</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {location.districts.map((d) => (
                <span key={d} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <h2 className="mt-16 text-3xl font-black tracking-tight text-neutral-900">
          Leistungen für {location.name}
        </h2>
        <p className="mt-3 text-neutral-500">Alle Services aus einer Hand, remote oder vor Ort.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/leistungen/${serviceSlug(service.title)}/`}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg hover:border-neutral-900"
            >
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-500 transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="mt-16 text-3xl font-black tracking-tight text-neutral-900">
          Häufige Fragen, {location.name}
        </h2>
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white px-6">
          {location.faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-neutral-900 p-10 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Projekt in {location.name}?</h2>
          <p className="mt-3 text-neutral-400">Kostenlose Erstberatung, Antwort innerhalb von 24 Stunden.</p>
          <a
            href="/#contact"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
          >
            Jetzt anfragen
          </a>
        </div>

        {/* Other locations */}
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-900">Weitere Standorte</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/standorte/${loc.slug}/`}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg hover:border-neutral-900"
            >
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-500 transition-colors">
                {loc.name}
              </h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-neutral-400 uppercase">{loc.region}</p>
              <p className="mt-3 text-sm text-neutral-500">{loc.distance}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
