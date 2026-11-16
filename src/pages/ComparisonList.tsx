import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { comparisons } from '../data/comparisons'

export default function ComparisonList() {
  const canonical = 'https://tnt-studio.de/vergleich/'

  return (
    <>
      <Helmet>
        <title>Vergleich: Agentur vs. Baukasten vs. Freelancer | TnT Studio</title>
        <meta name="description" content="Ehrliche Vergleiche für KMU: Agentur vs. Website-Baukasten und Agentur vs. Freelancer. Wann sich was lohnt — transparent, ohne Marketing-Vernebelung." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <nav className="mb-6 text-sm text-neutral-500">
              <Link to="/" className="hover:text-neutral-900">Startseite</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900">Vergleich</span>
            </nav>
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Entscheidungshilfe</p>
            <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Agentur, Baukasten oder Freelancer?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Ehrliche Vergleiche für Unternehmen, die eine Website, SEO oder Marketing beauftragen wollen. Wir zeigen Stärken und Schwächen jeder Option — inklusive der Momente, in denen eine Alternative die bessere Wahl ist.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                to={`/vergleich/${c.slug}/`}
                className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-xl"
              >
                <p className="text-sm font-semibold tracking-widest text-neutral-500 uppercase">{c.title}</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-neutral-900">{c.alternative}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-neutral-900">
                  Vergleich lesen
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
