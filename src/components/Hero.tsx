export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950">
      {/* Grid + glow background */}
      <div className="absolute inset-0 tnt-grid-bg opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: Copy */}
          <div>
            <div className="mb-7 inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-neutral-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Für den Mittelstand im DACH · Remote aus Wuppertal
            </div>

            <h1 className="text-balance text-[2.75rem] font-black leading-[0.98] tracking-tighter text-white sm:text-6xl xl:text-[4.5rem]">
              Wir machen Sie
              <br />
              <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-400 bg-clip-text text-transparent">gefunden.</span>
            </h1>

            <p className="mt-6 max-w-xl animate-fade-up text-pretty text-base leading-relaxed text-neutral-400 sm:text-lg" style={{ animationDelay: '0.05s' }}>
              Egal ob jemand bei <span className="font-semibold text-white">Google tippt</span> oder{' '}
              <span className="font-semibold text-white">ChatGPT fragt</span>, TnT Studio verbindet
              Web, SEO, Social Media und KI-Sichtbarkeit zu einem System,
              das Kunden bringt. Ein Ansprechpartner. Messbar. Schnell.
            </p>

            <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: '0.3s' }}>
              <a
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-neutral-950 shadow-2xl shadow-white/10 transition-all hover:bg-neutral-200"
              >
                Kostenlosen Check anfragen
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Direkt anfragen
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500" style={{ animationDelay: '0.4s' }}>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Fester Ansprechpartner
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Antwort am selben Tag
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Seriös &amp; messbar
              </span>
            </div>
          </div>

          {/* Right: Visual, "gefunden bei Google + ChatGPT" */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-white/10 blur-2xl" />
            <div className="relative space-y-4">
              {/* Google card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google, „agentur wuppertal"
                </div>
                <div className="space-y-2.5">
                  <div className="rounded-xl border border-white/30 bg-white/10 p-3">
                    <p className="text-sm font-bold text-white">TnT Studio, Medienagentur Wuppertal</p>
                    <p className="mt-0.5 text-xs text-neutral-300">✓ tnt-studio.de, Webdesign, SEO &amp; Social Media</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 opacity-60">
                    <p className="text-sm font-medium text-neutral-300">Andere Agentur GmbH</p>
                    <p className="mt-0.5 text-xs text-neutral-500">webdesign-wuppertal.example</p>
                  </div>
                </div>
              </div>

              {/* ChatGPT card */}
              <div className="ml-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  ChatGPT, „beste agentur für meinunternehmen"
                </div>
                <p className="text-sm leading-relaxed text-neutral-300">
                  „Für Ihr Unternehmen in der Region empfehle ich{" "}
                  <span className="font-bold text-neutral-200">TnT Studio aus Wuppertal</span> —
                  Full-Service-Agentur mit Fokus auf messbare Kundengewinnung
                  über Google und KI-Suche."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
