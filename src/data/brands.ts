export interface Brand {
  name: string
  logo: string
  service: string
  width?: number
  height?: number
}

export const brands: Brand[] = [
  { name: 'Joyn', logo: '/marken/joyn.svg', service: 'Digitales Marketing', width: 1024, height: 445 },
  { name: 'Lackmann', logo: '/marken/All-In-One-Logo-Lackmann_Lackmann-Logo-komplett_normal.webp', service: 'Content Creation', width: 400, height: 129 },
  { name: 'Esteves Recruiting', logo: '/marken/Esteves-recruiting.webp', service: 'Komplettpaket: Marketing, SEO, Social Media', width: 400, height: 100 },
  { name: 'Cosi Brautmoden', logo: '/marken/cosi-brautmoden-logo-2.webp', service: 'Web Design', width: 400, height: 240 },
  { name: 'Dexamon', logo: '/marken/dexam.webp', service: 'Web Design', width: 400, height: 98 },
  { name: 'meinfachmann.de', logo: '/marken/meinfachmann.de.webp', service: 'Schadensbericht & Speisekarten', width: 400, height: 50 },
  { name: 'SKYLEDS', logo: '/marken/skyleds.webp', service: 'Produktfotografie', width: 400, height: 53 },
  { name: 'Tiato', logo: '/marken/tiato-logo.webp', service: 'Logo Design', width: 400, height: 144 },
  { name: 'Noi', logo: '/marken/noi.webp', service: 'Web Design', width: 400, height: 400 },
]
