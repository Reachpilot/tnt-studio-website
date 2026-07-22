export default function Recruiting() {
  return (
    <section id="recruiting" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 tnt-grid-bg opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/images/portfolio/logo.webp"
              alt="Esteves Recruiting Logo"
              className="mb-6 h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Venture</p>
            <h2 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Nebenbei bauen wir
              <br />
              <span className="gradient-text">Esteves Recruiting</span>.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
              Das Recruiting-Game verändert sich. Wir verbinden Logistik, Gesundheitswesen und Automotive mit den richtigen Talenten — kombiniert mit unserem Marketing-Wissen.
            </p>
            <a
              href="https://esteves-recruiting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-lg"
            >
              esteves-recruiting.com
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <a
            href="https://esteves-recruiting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl transition-all hover:shadow-3xl"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/portfolio/esteves-recruiting-phone.webp"
                alt="Esteves Recruiting Mobile Ansicht"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex items-center justify-between border-t border-neutral-100 p-4">
              <span className="text-xs font-medium text-neutral-500">esteves-recruiting.com</span>
              <span className="text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">Live ansehen →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
