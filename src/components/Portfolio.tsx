import { useEffect, useRef, useState } from 'react'
import { portfolioItems } from '../data/portfolio'

function LazyVideo({ src, poster, width, height }: { src: string; poster: string; width?: number; height?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full">
      {inView ? (
        <video
          src={src}
          className="w-full rounded-2xl"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      ) : (
        <img
          src={poster}
          alt=""
          className="w-full rounded-2xl"
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end lg:mb-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-500 uppercase">Portfolio</p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Referenzen, die für sich sprechen.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-600">
            Von Autohäusern über Brautmoden bis hin zu Kunden mit neunstelligen Jahresumsätzen —
            wir liefern Ergebnisse, die zählen.
          </p>
        </div>

        <div className="columns-1 gap-3 sm:gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {portfolioItems.map((item) => (
            <figure
              key={item.brand}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100 shadow-sm transition-all hover:shadow-xl sm:mb-4"
            >
              {item.mediaType === 'video' && item.videoSrc ? (
                <LazyVideo src={item.videoSrc} poster={item.image} width={item.width} height={item.height} />
              ) : (
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full rounded-2xl"
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <figcaption className="p-3">
                <p className="text-sm font-bold text-neutral-900">{item.brand}</p>
                <p className="text-xs text-neutral-600">{item.service}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
