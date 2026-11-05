export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Grid background */}
      <div className="absolute inset-0 tnt-grid-bg opacity-60" />

      {/* Animated gradient orbs */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-200/40 via-purple-200/30 to-pink-200/40 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-cyan-200/30 to-blue-200/20 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-amber-200/20 to-rose-200/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Accent line top */}
      <div className="absolute left-0 right-0 top-0 h-1 tnt-accent opacity-80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center sm:pt-0">
        <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Medienagentur · Wuppertal · Weltweit
        </div>

        <h1 className="animate-fade-up text-balance text-4xl font-black leading-[1.05] tracking-tighter text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: '0.1s' }}>
          Wir bauen Marken,
          <br />
          die <span className="gradient-text">Eindruck hinterlassen</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-balance text-base text-neutral-500 sm:mt-8 sm:text-lg md:text-xl" style={{ animationDelay: '0.2s' }}>
          TnT Studio ist die Medienagentur von Tiago Esteves & Theo Spingys.
          Web Design, Marketing, Content Creation & Branding — für Marken mit Anspruch.
        </p>

        <div className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4" style={{ animationDelay: '0.3s' }}>
          <a
            href="/#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-neutral-900/15 transition-all hover:bg-neutral-800 hover:shadow-2xl sm:w-auto tnt-glow"
          >
            Projekt anfragen
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/#portfolio"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:border-neutral-900 hover:bg-neutral-50 sm:w-auto"
          >
            Portfolio ansehen
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid animate-fade-up grid-cols-3 gap-3 sm:mt-16 sm:gap-8" style={{ animationDelay: '0.4s' }}>
          {[
            { num: '15+', label: 'Projekte live' },
            { num: '100M€+', label: 'Kunden-Umsatz p.a.' },
            { num: '17', label: 'Jahre jung' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-black tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">{stat.num}</p>
              <p className="mt-1 text-[10px] font-medium tracking-wide text-neutral-400 uppercase sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
