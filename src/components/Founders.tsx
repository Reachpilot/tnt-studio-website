export default function Founders() {
  return (
    <section id="founders" className="border-y border-neutral-200 bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Deine Ansprechpartner</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Wir sind die Gründer.
            <br />
            <span className="text-neutral-400">Keine Account-Manager. Keine Weitergabe.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            Mit 15 haben wir gelernt: Agenturen reden viel, liefern wenig.
            Deshalb machen wir es anders, ihr habt zwei feste Ansprechpartner,
            die selbst liefern, selbst haften und selbst accountable sind. Was als Zwei-Personen-Projekt startete, ist heute ein Studio mit Spezialisten für Design, Entwicklung und Marketing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Tiago */}
          <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-900 hover:shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 sm:aspect-[4/5]">
              <img
                src="/founder/tiago-esteves.webp"
                alt="Tiago Esteves, Founder & CEO von TnT Studio"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/70 to-transparent p-6 pt-16">
                <p className="text-lg font-black text-white">Tiago Esteves</p>
                <p className="text-sm font-semibold text-neutral-300">Founder &amp; CEO</p>
              </div>
            </div>
            <div className="p-7">
              <p className="text-sm leading-relaxed text-neutral-600">
                Seit dem 15. Lebensjahr im Game. Verantwortlich für Strategie,
                Web Design, Software Development und Markenführung bei TnT Studio.
                Hat Kunden von der Ehrenstraße bis nach Amerika betreut —
                und mit 17 ein Unternehmen mitaufgebaut, das Millionen Umsatz fährt.
              </p>
              <a
                href="https://www.linkedin.com/in/tiagoesteves3/?locale=de-DE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-neutral-900 transition-colors hover:text-neutral-500"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </article>

          {/* Theo */}
          <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-900 hover:shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 sm:aspect-[4/5]">
              <img
                src="/founder/theo-spingys.webp"
                alt="Theo Spingys, Co-Founder & Marketing Lead von TnT Studio"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/70 to-transparent p-6 pt-16">
                <p className="text-lg font-black text-white">Theo Spingys</p>
                <p className="text-sm font-semibold text-neutral-300">Co-Founder &amp; Marketing Lead</p>
              </div>
            </div>
            <div className="p-7">
              <p className="text-sm leading-relaxed text-neutral-600">
                Experte für Social Media Marketing und Vertrieb.
                Baut mit Tiago das grösste Recruiting-Unternehmen mit auf
                und treibt Marketing-Strategien für TnT-Studio-Kunden voran —
                von der ersten Idee bis zum skalierenden Kanal.
              </p>
              <a
                href="https://www.linkedin.com/in/theo-spingys-43450741b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-neutral-900 transition-colors hover:text-neutral-500"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </article>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-neutral-200 pt-12 sm:grid-cols-4">
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
