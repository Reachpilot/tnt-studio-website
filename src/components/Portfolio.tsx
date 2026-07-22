import { portfolioItems } from '../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Portfolio</p>
            <h2 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Referenzen, die für sich sprechen.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-500">
            Von Autohäusern über Brautmoden bis hin zu Kunden mit neunstelligen Jahresumsätzen —
            wir liefern Ergebnisse, die zählen.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {portfolioItems.map((item) => (
            <figure
              key={item.brand}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100"
            >
              {item.mediaType === 'video' && item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  className="w-full rounded-2xl"
                  poster={item.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <figcaption className="p-3">
                <p className="text-sm font-bold text-neutral-900">{item.brand}</p>
                <p className="text-xs text-neutral-500">{item.service}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
