import { Link } from 'react-router-dom'

export default function Kurzantwort() {
  return (
    <section className="border-y border-neutral-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
        <p className="mb-4 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Kurzantwort</p>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50/60 p-8 sm:p-10">
          <h2 className="text-balance text-2xl font-black leading-snug tracking-tight text-neutral-900 sm:text-3xl">
            Was ist TnT Studio?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            TnT Studio ist ein Design- und Marketing-Studio aus Wuppertal, gegründet von zwei Unternehmern und aufgebaut zu einer Plattform für digitale Sichtbarkeit. Wir machen Unternehmen{' '}
            <strong className="font-bold text-neutral-900">gefunden, bei Google UND bei KI-Systemen</strong>{' '}
            wie ChatGPT, Perplexity und Gemini. Das Studio und sein Netzwerk aus Designern, Entwicklern und Marketern verbinden Web Design (inkl. Branding &amp; Logo),
            KI-Sichtbarkeit (GEO/AEO), SEO &amp; SEA, Social Media Marketing
            und Software Development zu einem System, mit zwei Gründern als festen Ansprechpartnern
            und messbaren Ergebnissen. Remote für Kunden in ganz Deutschland.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/leistungen/ki-sichtbarkeit-seo/"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-neutral-700"
            >
              KI-Sichtbarkeit &amp; SEO
            </Link>
            <Link
              to="/standorte/"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-bold text-neutral-900 transition-colors hover:border-neutral-900"
            >
              Standorte
            </Link>
            <Link
              to="/blog/"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-bold text-neutral-900 transition-colors hover:border-neutral-900"
            >
              Wissen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
