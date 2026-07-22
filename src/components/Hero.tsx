export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Grid background */}
      <div className="absolute inset-0 tnt-grid-bg opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-100/40 via-purple-100/30 to-pink-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-cyan-100/30 to-blue-100/20 blur-3xl" />

      {/* Accent line top */}
      <div className="absolute left-0 right-0 top-0 h-1 tnt-accent opacity-80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Medienagentur · Wuppertal · Weltweit
        </div>

        <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tighter text-neutral-900 sm:text-7xl lg:text-8xl">
          Wir bauen Marken,
          <br />
          die <span className="gradient-text">Eindruck hinterlassen</span>.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-neutral-500 sm:text-xl">
          TnT Studio ist die Medienagentur von Tiago Esteves & Theo Spingys.
          Web Design, Marketing, Content Creation & Branding — für Marken mit Anspruch.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-xl tnt-glow"
          >
            Projekt anfragen
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-8 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-900 hover:bg-neutral-50"
          >
            Portfolio ansehen
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { num: '15+', label: 'Projekte live' },
            { num: '100M€+', label: 'Kunden-Umsatz p.a.' },
            { num: '17', label: 'Jahre jung' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black tracking-tight text-neutral-900 sm:text-4xl">{stat.num}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-neutral-400 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
