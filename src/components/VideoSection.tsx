export default function VideoSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Grid bg */}
      <div className="absolute inset-0 tnt-grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Was uns ausmacht</p>
          <h2 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
            Lernt uns kennen.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Wir sind Tiago und Theo — zwei Unternehmer aus Wuppertal, die seit dem 15. Lebensjahr
            Marken aufbauen. Hier ist unser offizielles Intro-Video.
          </p>
        </div>

        {/* Intro video preview */}
        <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/founder/INTRO-TNT/INTRO-TNT-Cover.WEBP"
            className="w-full"
          >
            <source src="/founder/INTRO-TNT/intro-tnt-final.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Video nicht.
          </video>
        </div>
      </div>
    </section>
  )
}
