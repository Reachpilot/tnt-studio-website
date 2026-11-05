import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 tnt-grid-bg opacity-30" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Kontakt</p>
          <h2 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
            Lass uns loslegen.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Sag uns, was du brauchst. In 4 Klicks bist du durch — wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
