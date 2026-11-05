import { localSEOKeywords, servicesOffered } from '../data/seo'

export default function LocalSEO() {
  return (
    <section id="wuppertal" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 tnt-grid-bg opacity-30" />
      <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-100/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Standort</p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Medienagentur in Wuppertal.
              <br />
              <span className="text-neutral-400">Wirkend für die Welt.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-500 sm:text-lg">
              Wir sitzen in Wuppertal im Bergischen Land und betreuen Kunden vor Ort in Düsseldorf, Köln, Solingen,
              Remscheid und ganz NRW — genauso wie remote in Deutschland, Europa und den USA.
            </p>
            <div className="mt-6 space-y-3 text-sm text-neutral-500">
              <p>
                <strong className="text-neutral-900">Adresse:</strong> Julius-Lucas-Weg 90, 42113 Wuppertal
              </p>
              <p>
                <strong className="text-neutral-900">E-Mail:</strong>{' '}
                <a href="mailto:info@tnt-studio.de" className="text-indigo-600 hover:underline">
                  info@tnt-studio.de
                </a>
              </p>
              <p>
                <strong className="text-neutral-900">Erreichbarkeit:</strong> Mo–Fr, 09:00–18:00 Uhr
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Julius-Lucas-Weg+90,+42113+Wuppertal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
            >
              Auf Google Maps ansehen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8">
            <h3 className="text-lg font-black text-neutral-900">Leistungen & Standorte</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {servicesOffered.map((s) => (
                <span
                  key={s.name}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700"
                >
                  {s.name}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                Lokale Keywords
              </h4>
              <p className="text-sm leading-relaxed text-neutral-500">
                {localSEOKeywords.join(' · ')}
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {servicesOffered.map((s) => (
                <div key={s.name} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{s.name}</p>
                    <p className="text-xs text-neutral-500">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
