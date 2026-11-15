import { serviceIcons } from './serviceIcons'

const iconColorMap: Record<string, string> = {
  'Web Design': 'bg-gradient-to-br from-indigo-500 to-blue-600',
  'KI-Sichtbarkeit & SEO': 'bg-gradient-to-br from-cyan-500 to-sky-600',
  'Social Media Marketing': 'bg-gradient-to-br from-rose-500 to-pink-600',
  'Software Development': 'bg-gradient-to-br from-violet-500 to-purple-600',
}

const iconKeyMap: Record<string, string> = {
  'Web Design': 'code',
  'KI-Sichtbarkeit & SEO': 'terminal',
  'Social Media Marketing': 'social',
  'Software Development': 'cpu',
}

const prices = [
  {
    title: 'Web Design',
    range: '500 bis 10.000 €',
    unit: 'je nach Umfang',
    text: 'Landingpage ab 500 €, Business-Website ab 2.500 €, E-Commerce ab 5.000 €. Festpreis nach dem kostenlosen Check.',
  },
  {
    title: 'KI-Sichtbarkeit & SEO',
    range: '1.500 bis 5.000 €',
    unit: 'einmalig + Betreuung',
    text: 'Sichtbarkeits-Check gratis. Umsetzung (Schema, llms.txt, Content, Tracking) ab 1.500 €. Laufende Betreuung individuelles Honorar.',
  },
  {
    title: 'Social Media Marketing',
    range: '1.200 bis 4.000 €',
    unit: 'pro Monat',
    text: 'Strategie, Content-Produktion, Ads und Reporting als Paket. Von der Einzelmaßnahme ab 1.200 €/Monat bis zur Full-Betreuung.',
  },
  {
    title: 'Software Development',
    range: '2.500 €+',
    unit: 'nach Aufwand',
    text: 'Individuelle Web-Apps, APIs, Dashboards und Automatisierungen. Kalkuliert nach Scope, nicht nach Stunden. Ab 2.500 €.',
  },
]

export default function PricingSection() {
  return (
    <section className="bg-neutral-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Preise</p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Transparente Preise.
              <br />
              <span className="text-neutral-500">Keine Überraschungen.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base">
            Vom 500-€-Landingpage bis zur 10.000-€-Plattform: Wir haben für jede
            Größe und jedes Budget das passende Angebot. Kostenlose Beratung,
            ehrliche Einschätzung, kein Verkaufsdruck. Festpreise statt Stundenzettel.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {prices.map((p) => (
            <div key={p.title} className={`rounded-3xl border p-7 transition-all ${p.title === 'Web Design' ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl' : 'border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-lg'}`}>
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${iconColorMap[p.title]}`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  {serviceIcons[iconKeyMap[p.title] || 'code']}
                </svg>
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-lg font-black ${p.title === 'Web Design' ? 'text-white' : 'text-neutral-900'}`}>{p.title}</h3>
                {p.title === 'Web Design' && <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-neutral-900 uppercase">Fokus</span>}
              </div>
              <p className={`mt-2 text-2xl font-black tracking-tight ${p.title === 'Web Design' ? 'text-white' : 'text-neutral-900'}`}>{p.range}</p>
              <p className={`text-xs font-semibold tracking-wide uppercase ${p.title === 'Web Design' ? 'text-neutral-400' : 'text-neutral-500'}`}>{p.unit}</p>
              <p className={`mt-4 text-sm leading-relaxed ${p.title === 'Web Design' ? 'text-neutral-300' : 'text-neutral-600'}`}>{p.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Ob Start-up, Handwerker oder Konzern: Für alle ist etwas dabei. Jedes Projekt startet mit einem <strong className="font-bold text-neutral-900">kostenlosen Check</strong>, danach erhalten Sie ein unverbindliches Festpreis-Angebot. Fühlen Sie sich nicht abgeneigt, sondern abgeholt.
        </p>
      </div>
    </section>
  )
}
