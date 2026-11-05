import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { serviceSlug } from '../pages/ServiceDetail'

const iconMap: Record<string, string> = {
  code: 'M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4',
  social: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z',
  video: 'M23 7l-7 5 7 5V7zM1 5h15v14H1z',
  camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  palette: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5-4.5-8-10-8z',
  terminal: 'M4 17l6-6-6-6M12 19h8',
}

const colorMap: Record<string, { bg: string; text: string; check: string }> = {
  code: { bg: 'bg-indigo-500', text: 'text-white', check: 'text-indigo-500' },
  social: { bg: 'bg-rose-500', text: 'text-white', check: 'text-rose-500' },
  video: { bg: 'bg-purple-500', text: 'text-white', check: 'text-purple-500' },
  camera: { bg: 'bg-amber-500', text: 'text-white', check: 'text-amber-500' },
  palette: { bg: 'bg-emerald-500', text: 'text-white', check: 'text-emerald-500' },
  terminal: { bg: 'bg-cyan-500', text: 'text-white', check: 'text-cyan-500' },
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Leistungen</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Alles aus einer Hand.
            <br />
            <span className="text-neutral-400">Von der Idee bis zur Umsetzung.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/leistungen/${serviceSlug(service.title)}/`}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl sm:p-8"
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${colorMap[service.icon]?.bg || 'bg-neutral-900'} ${colorMap[service.icon]?.text || 'text-white'} transition-transform group-hover:scale-110`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[service.icon] || iconMap.code} />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-neutral-900">{service.title}</h3>
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
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-indigo-600">
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
