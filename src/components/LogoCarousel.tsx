import { brands } from '../data/brands'

export default function LogoCarousel() {
  const doubled = [...brands, ...brands]

  return (
    <section className="border-y border-neutral-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 text-center text-sm font-semibold tracking-widest text-neutral-400 uppercase">
          Marken, die uns vertrauen
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-20 pl-20">
          {doubled.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="flex h-20 shrink-0 items-center justify-center">
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className={`h-full w-auto max-w-[160px] object-contain ${brand.name === 'SKYLEDS' ? 'brightness-0' : ''}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
