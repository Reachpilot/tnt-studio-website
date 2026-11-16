import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services } from '../data/services'
import { serviceSlug } from './ServiceDetail'
import { serviceIcons } from '../components/serviceIcons'

const priceMap: Record<string, string> = {
  'Web Design': 'ab 500 €',
  'KI-Sichtbarkeit & SEO': 'ab 1.500 €',
  'Social Media Marketing': 'ab 1.200–4.000 €/Monat',
  'Software Development': 'ab 2.500 €',
}

const focusMap: Record<string, string> = {
  'Web Design': 'Websites, die konvertieren',
  'KI-Sichtbarkeit & SEO': 'Gefunden bei Google & ChatGPT',
  'Social Media Marketing': 'Reichweite, die Anfragen bringt',
  'Software Development': 'Individuelle Lösungen & Automatisierung',
}

export default function ServicesIndex() {
  const canonical = 'https://tnt-studio.de/leistungen/'
  const title = 'Leistungen — Web Design, KI-Sichtbarkeit, Social Media & Software | TnT Studio'
  const description = 'Vier Leistungen aus einer Hand: Web Design ab 500 €, KI-Sichtbarkeit & SEO (Google + ChatGPT), Social Media Marketing ab 1.200 €/Monat und Software Development. Aus Wuppertal, remote für ganz Deutschland.'

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://tnt-studio.de/' },
      { '@type': 'ListItem', position: 2, name: 'Leistungen', item: canonical },
    ],
  })

  const itemListSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'TnT Studio Leistungen',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `https://tnt-studio.de/leistungen/${serviceSlug(s.title)}/`,
    })),
  })

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: itemListSchema }} />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Leistungen</p>
        <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          Vier Leistungen. Ein Ziel: mehr Kunden.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
          TnT Studio ist die Webdesign- und Marketing-Agentur aus Wuppertal.
          Wir bauen Websites, die verkaufen — und sorgen dafür, dass Kunden sie finden:
          bei Google UND bei ChatGPT. Transparent kalkuliert, remote oder vor Ort.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            return (
              <Link
                key={service.title}
                to={`/leistungen/${serviceSlug(service.title)}/`}
                className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all hover:shadow-xl hover:border-neutral-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white [&>svg]:h-6 [&>svg]:w-6">
                    {serviceIcons[service.icon] || serviceIcons.code}
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                    {priceMap[service.title]}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-black text-neutral-900 group-hover:text-neutral-500 transition-colors">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-neutral-500">{focusMap[service.title]}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{service.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-neutral-900 group-hover:underline">
                  Details & Preise ansehen →
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-neutral-900 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-black">Kostenlose Erstberatung</h2>
          <p className="mt-3 max-w-xl text-neutral-400">
            Nicht sicher, welche Leistung zu Ihrem Unternehmen passt? Wir analysieren
            Ihre aktuelle Situation — bei Google und bei den KI-Systemen — und zeigen,
            was sich am schnellsten auszahlt. Unverbindlich und kostenlos.
          </p>
          <Link
            to="/#contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </div>
    </div>
  )
}
