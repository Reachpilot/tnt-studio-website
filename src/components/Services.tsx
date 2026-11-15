import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { serviceSlug } from '../pages/ServiceDetail'
import { serviceIcons } from './serviceIcons'


const priceMap: Record<string, string> = {
  'Web Design': 'ab 500 €',
  'KI-Sichtbarkeit & SEO': 'ab 1.500 €',
  'Social Media Marketing': 'ab 1.200 €/Monat',
  'Software Development': 'ab 2.500 €',
}

const tierMap: Record<string, string> = {
  'Web Design': 'Fokus',
  'KI-Sichtbarkeit & SEO': 'Sichtbarkeit',
  'Social Media Marketing': 'Hauptfokus',
}

const colorMap: Record<string, { bg: string; text: string; check: string }> = {
  code: { bg: 'bg-gradient-to-br from-indigo-500 to-blue-600', text: 'text-white', check: 'text-indigo-500' },
  social: { bg: 'bg-gradient-to-br from-rose-500 to-pink-600', text: 'text-white', check: 'text-rose-500' },
  video: { bg: 'bg-gradient-to-br from-purple-500 to-violet-600', text: 'text-white', check: 'text-purple-500' },
  camera: { bg: 'bg-gradient-to-br from-amber-500 to-orange-600', text: 'text-white', check: 'text-amber-500' },
  palette: { bg: 'bg-gradient-to-br from-emerald-500 to-teal-600', text: 'text-white', check: 'text-emerald-500' },
  terminal: { bg: 'bg-gradient-to-br from-cyan-500 to-sky-600', text: 'text-white', check: 'text-cyan-500' },
  cpu: { bg: 'bg-gradient-to-br from-violet-500 to-purple-600', text: 'text-white', check: 'text-violet-500' },
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Leistungs-Stack</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Nicht Einzelteile.
            <br />
            <span className="text-neutral-400">Ein System, das Kunden bringt.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            Sichtbarkeit erzeugt Traffic, Vertrauen entscheidet über die Anfrage.
            Wir decken beides ab: als Agentur aus Wuppertal, remote für Unternehmen in ganz Deutschland.
            Ob Start-up oder Konzern: Für jede Größe haben wir das passende Angebot,
            und die Beratung ist immer kostenlos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/leistungen/${serviceSlug(service.title)}/`}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl sm:p-8"
            >
              {tierMap[service.title] && (
                <span className="absolute right-6 top-6 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                  {tierMap[service.title]}
                </span>
              )}
              <div className={`relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl ${colorMap[service.icon]?.bg || 'bg-neutral-900'} ${colorMap[service.icon]?.text || 'text-white'} shadow-lg ring-1 ring-black/5 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-2xl`}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  {serviceIcons[service.icon] || serviceIcons.code}
                </svg>
              </div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                {priceMap[service.title] && (
                  <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-700">{priceMap[service.title]}</span>
                )}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-neutral-500">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                    <svg className={`h-4 w-4 shrink-0 ${colorMap[service.icon]?.check || 'text-indigo-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-neutral-500">
                Mehr erfahren
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
