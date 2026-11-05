export default function Founders() {
  return (
    <section id="founders" className="bg-neutral-50/50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Team</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Die Two-Men-Show.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-500 sm:text-base">
            Mit 15 haben wir gelernt: Agenturen reden viel, liefern wenig. Wir machen es anders — Partner statt Dienstleister.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:gap-8">
          {/* Tiago */}
          <div className="group rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-xl sm:p-8">
            <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-neutral-100">
              <img
                src="/founder/tiago-esteves.webp"
                alt="Tiago Esteves"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Tiago Esteves</h3>
            <p className="mb-4 text-sm font-medium text-indigo-600">Founder & CEO</p>
            <p className="mb-6 text-sm leading-relaxed text-neutral-500">
              Seit dem 15. Lebensjahr im Game. Führt TnT Studio als Founder & CEO — Verantwortung für Strategie, Web Design, Software Development und Markenführung. Hat Kunden von der Ehrenstraße bis nach Amerika betreut.
            </p>
            <a
              href="https://www.linkedin.com/in/tiagoesteves3/?locale=de-DE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-indigo-600"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Theo */}
          <div className="group rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-xl sm:p-8">
            <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-neutral-100">
              <img
                src="/founder/theo-spingys.webp"
                alt="Theo Spingys"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Theo Spingys</h3>
            <p className="mb-4 text-sm font-medium text-indigo-600">Co-Founder & Marketing Lead</p>
            <p className="mb-6 text-sm leading-relaxed text-neutral-500">
              Experte für Social Media Marketing, Content Creation und Vertrieb.
              Baut gemeinsam mit Tiago das grösste Recruiting-Unternehmen mit auf
              und treibt Marketing-Strategien für TnT-Studio-Kunden voran.
            </p>
            <a
              href="https://www.linkedin.com/in/theo-spingys-43450741b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-indigo-600"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { num: '2+', label: 'Jahre im Game' },
            { num: '17', label: 'Jahre jung' },
            { num: '100M€+', label: 'Kunden-Umsatz p.a.' },
            { num: 'Joyn', label: 'Bekannt aus' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">{stat.num}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-neutral-500 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
