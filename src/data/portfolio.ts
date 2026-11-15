export interface PortfolioItem {
  brand: string
  service: string
  description: string
  image: string
  width?: number
  height?: number
  mediaType?: 'image' | 'video'
  videoSrc?: string
  website?: string
  size: 'large' | 'medium' | 'small'
  fit?: 'cover' | 'contain'
}

export const portfolioItems: PortfolioItem[] = [
  {
    brand: 'Lackmann, Kundenstimme',
    service: 'Content Creation & Video',
    description: 'Review-Video mit professionellem Color-Grading.',
    image: '/videos/lackmann-poster.webp',
    width: 640,
    height: 1138,
    mediaType: 'video',
    videoSrc: '/videos/lackmann-review-web.mp4',
    size: 'large',
    fit: 'cover',
  },
  {
    brand: 'Esteves Recruiting',
    service: 'Web Design, Branding, SEO & Social Media',
    description: 'Kompletter Webauftritt, modern, konversionsorientiert, SEO-optimiert.',
    image: '/images/portfolio/esteves-recruiting-web 14.55.42 14.56.09.webp',
    width: 1400,
    height: 805,
    size: 'large',
    fit: 'contain',
    website: 'https://esteves-recruiting.com',
  },
  {
    brand: 'Cosi Brautmoden',
    service: 'Web Design',
    description: 'Massgeschneiderte Website für ein Premium-Brautmoden-Geschäft.',
    image: '/images/portfolio/cosi-web.webp',
    width: 1179,
    height: 2106,
    size: 'medium',
    fit: 'contain',
  },
  {
    brand: 'Dexamon',
    service: 'Web Design',
    description: 'Moderne, konversionsorientierte Website.',
    image: '/images/portfolio/dexam-web.webp',
    width: 1400,
    height: 759,
    size: 'medium',
    fit: 'contain',
  },
  {
    brand: 'SKYLEDS, Produkt-Shooting',
    service: 'Produktfotografie',
    description: 'Komplettes Produkt-Shooting für den Online-Shop.',
    image: '/images/portfolio/skyleds.webp',
    width: 1400,
    height: 788,
    size: 'medium',
    fit: 'contain',
  },
  {
    brand: 'Noi, Speisekarten',
    service: 'Print Design & Web Design',
    description: 'Elegante Speisekarten und Website für ein kulinarisches Erlebnis.',
    image: '/images/portfolio/noi/Designvorschlag 4-1.webp',
    width: 908,
    height: 908,
    size: 'medium',
    fit: 'contain',
  },
  {
    brand: 'Zkittelz, Eintrittskarten',
    service: 'Print Design & Branding',
    description: 'Custom Eintrittskarten für eine Event-Reihe in München.',
    image: '/images/portfolio/Eintrittskarten Zkittelz/Eintrittskarten Zkittelz-1.webp',
    width: 1400,
    height: 660,
    size: 'small',
    fit: 'contain',
  },
  {
    brand: 'Bauvision, Visitenkarten',
    service: 'Branding & Print Design',
    description: 'Professionelle Visitenkarten mit klarer Designsprache.',
    image: '/images/portfolio/bauvision-visiten.webp',
    width: 1400,
    height: 1115,
    size: 'small',
    fit: 'contain',
  },
  {
    brand: 'Noi, Visitenkarten',
    service: 'Branding & Print Design',
    description: 'Elegante Visitenkarten passend zum Gesamtauftritt von Noi.',
    image: '/images/portfolio/noi-visiten.webp',
    width: 1400,
    height: 1044,
    size: 'small',
    fit: 'contain',
  },
  {
    brand: 'Tiato',
    service: 'Logo Design',
    description: 'Markantes Logo für ein Restaurant in München.',
    image: '/marken/tiato-logo.webp',
    width: 400,
    height: 144,
    size: 'small',
    fit: 'contain',
  },
  {
    brand: 'meinfachmann.de & Fairclaim FC',
    service: 'Software Development & Print',
    description: 'Schadensbericht-Vorlagen als ausführbare PDFs sowie Speisekarten.',
    image: '/images/portfolio/meinfachmann.de 15.27.44.webp',
    width: 1188,
    height: 1668,
    size: 'medium',
    fit: 'contain',
  },
]
