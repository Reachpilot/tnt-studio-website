export default function AEOSection() {
  const proofs = [
    {
      title: 'llms.txt & llms-full.txt',
      text: 'Explizite Crawl-Hinweise für KI-Systeme, auf unserer Domain unter /.well-known/ erreichbar.',
    },
    {
      title: 'Schema.org auf jeder Seite',
      text: 'Organization, LocalBusiness, Service, FAQPage, Article & BreadcrumbList, strukturierte Daten, die Maschinen lesen.',
    },
    {
      title: 'Answer-First Content',
      text: 'FAQs, Know-how-Beiträge und Services so formuliert, dass KI-Assistenten sie direkt zitieren können.',
    },
    {
      title: 'Entity-Konsistenz',
      text: 'Einheitliche NAP-Daten, sameAs-Profile und autorenbasierte Article-Schemas, E-E-A-T für Machines.',
    },
  ]

  return (
    <section id="geo-aeo" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 tnt-grid-bg opacity-30" />
      <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-l from-neutral-200/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">GEO · AEO · KI-Sichtbarkeit</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Gefunden bei Google.
            <br />
            <span className="text-neutral-400">Zitiert von ChatGPT.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-500 sm:text-lg">
            In zwei Jahren fragen Kunden nicht mehr „Googlen", sie fragen ChatGPT, Perplexity oder Gemini.
            Die meisten Agenturen optimieren nur für die klassische Suche. Wir bauen Ihre Präsenz so,
            dass KI-Systeme Sie empfehlen, zitieren und weitergeben, als System, nicht als Add-on.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map((p) => (
            <div key={p.title} className="rounded-3xl border border-neutral-200 bg-white p-7 transition-all hover:border-neutral-900 hover:shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-xl font-black text-neutral-900">Wir optimieren nicht nur, wir beweisen es.</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                llms.txt, Schema-Markup, FAQ-Strukturen und Answer-First-Content laufen auf dieser Website
                bereits produktiv. Was wir Ihnen verkaufen, machen wir zuerst bei uns selbst.
              </p>
            </div>
            <a
              href="/.well-known/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
            >
              llms.txt ansehen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
