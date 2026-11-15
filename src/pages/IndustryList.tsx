import { Link } from 'react-router-dom'
import { industries } from '../data/industries'
import { Helmet } from 'react-helmet-async'

export default function IndustryList() {
  return (
    <>
      <Helmet>
        <title>Branchen, TnT Studio | Webdesign, SEO & Social Media für Ihre Branche</title>
        <meta name="description" content="TnT Studio erstellt Websites, SEO, GEO/AEO und Social Media für Handwerk, Gastronomie, Healthcare, Kanzleien und Retail, branchenindividuell, messbar, aus einer Hand." />
        <link rel="canonical" href="https://tnt-studio.de/branchen/" />
      </Helmet>

      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Branchen</p>
            <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Wir kennen Ihre Branche.
              <br />
              <span className="text-neutral-500">Nicht nur Websites.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-500 sm:text-lg">
              Jede Branche hat eigene Suchmuster, eigene Kunden und eigene Erwartungen.
              Wir bauen digitale Präsenz, die auf Ihre Branche zugeschnitten ist —
              von der Handwerksbetrieb-Website bis zur Kanzlei-Content-Strategie.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/branchen/${ind.slug}/`}
                className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl"
              >
                <h2 className="text-2xl font-black tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {ind.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{ind.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-neutral-900">
                  Mehr erfahren
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
