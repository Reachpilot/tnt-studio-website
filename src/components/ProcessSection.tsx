const steps = [
  {
    num: '01',
    stage: 'Sichtbarkeit',
    title: 'Kostenloser Check',
    text: 'Sie zeigen uns Website & Auftritt, wir prüfen SEO, KI-Sichtbarkeit, Content und Conversion. Sie erhalten ein ehrliches Feedback, auch wenn wir nichts verkaufen.',
    time: '15 Min. am Telefon oder Formular',
  },
  {
    num: '02',
    stage: 'Vertrauen',
    title: 'Strategie & Angebot',
    text: 'Klare Massnahmen mit Prioritäten, Zeitplan und Festpreis oder transparentem Honorar. Ein fester Ansprechpartner, kein Account-Hopping.',
    time: 'Innerhalb weniger Tage',
  },
  {
    num: '03',
    stage: 'Ergebnis',
    title: 'Umsetzung & Messung',
    text: 'Wir setzen um, Sie sehen Fortschritt. Monatliche Reports mit Zahlen: Rankings, Traffic, Anfragen. Was nicht funktioniert, ändern wir, schnell.',
    time: 'Laufend, mit Reporting',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-28">
      <div className="absolute inset-0 tnt-grid-bg opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-400 uppercase">So funktioniert's</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Von der Anfrage zum Ergebnis.
            <br />
            <span className="text-neutral-500">In drei Schritten.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="absolute -right-4 -top-6 text-[7rem] font-black leading-none text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
                {s.num}
              </span>
              <div className="relative flex items-center justify-between">
                <p className="text-sm font-bold tracking-widest text-neutral-400 uppercase">{s.time}</p>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-widest text-neutral-300 uppercase">{s.stage}</span>
              </div>
              <h3 className="relative mt-3 text-2xl font-black text-white">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-neutral-400">{s.text}</p>
              {i < steps.length - 1 && (
                <svg className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-neutral-600 md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-neutral-950 shadow-xl shadow-white/10 transition-all hover:bg-neutral-200"
          >
            Schritt 1, Jetzt starten
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
