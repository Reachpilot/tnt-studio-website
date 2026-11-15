const stack = [
  {
    title: 'Frontend',
    items: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router'],
    note: 'Kein WordPress-Baukasten, Custom Code, der schnell lädt und wartbar ist.',
  },
  {
    title: 'Rendering & SEO',
    items: ['Prerendering', 'Schema.org JSON-LD', 'Sitemap.xml', 'llms.txt & llms-full.txt'],
    note: 'Jede Route wird als echtes HTML ausgeliefert, Google und KI-Crawler lesen alles, ohne JavaScript.',
  },
  {
    title: 'Backend & APIs',
    items: ['Netlify Functions', 'Resend API', 'Formular-Endpoint', 'Honeypot-Schutz'],
    note: 'Kontaktformulare laufen über eigene Serverless-APIs, nicht über fertige Widgets, die Ihre Daten weiterverkaufen.',
  },
  {
    title: 'Tracking & Messung',
    items: ['GA4 Consent Mode', 'Meta Pixel', 'First-Touch-Attribution', 'UTM/gclid-Speicherung'],
    note: 'Jede Anfrage ist einer Kampagne zuordenbar, Sie wissen, welcher Euro welchen Kunden gebracht hat.',
  },
]

const mistakes = [
  'WordPress mit 30 Plugins, Ladezeit 8 Sekunden, Angriffsfläche riesig',
  'Reine SPA ohne Prerendering, Google sieht eine weiße Seite',
  'Formulare über externe Dienste ohne Spam-Schutz, Newsletter-Flut',
  'Fake-Freshness-Sitemap, Google ignoriert die Sitemap komplett',
  'Kein Consent Mode, DSGVO-Abmahn-Risiko bei jedem Tracking',
]

export default function TechnikSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-28">
      <div className="absolute inset-0 tnt-grid-bg opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-400 uppercase">Technik &amp; Engineering</p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Nicht nur Designer.
              <br />
              <span className="text-neutral-500">Wir schreiben den Code selbst.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-400 lg:text-base">
            Die meisten Agenturen kaufen ein Theme und passen es an. Wir entwickeln von Grund auf —
            Frontend, Backend, Infrastruktur. Das ist der Unterschied zwischen „hübsch" und „funktioniert".
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-white/20">
              <h3 className="text-sm font-bold tracking-widest text-neutral-400 uppercase">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-neutral-500">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="mb-5 text-sm font-bold tracking-widest text-neutral-400 uppercase">Was Agenturen üblicherweise falsch machen</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {mistakes.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-400">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
