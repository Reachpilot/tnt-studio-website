export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Kontakt</p>
        <h2 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          Lass uns reden.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-500">
          Du hast ein Projekt im Kopf? Wir haben die Umsetzung im Blut.
          Schreib uns — wir melden uns innerhalb von 24 Stunden.
        </p>
        <a
          href="mailto:info@tnt-studio.de"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-lg"
        >
          info@tnt-studio.de
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
