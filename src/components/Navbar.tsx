import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/services'

const links = [
  { label: 'Leistungen', href: '/#services', id: 'services' },
  { label: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
  { label: 'Team', href: '/#founders', id: 'founders' },
  { label: 'Recruiting', href: '/#recruiting', id: 'recruiting' },
  { label: 'Blog', href: '/blog/', isRoute: true },
  { label: 'Kontakt', href: '/#contact', id: 'contact' },
]

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const location = useLocation()

  useEffect(() => {
    setActiveHash(location.hash)
  }, [location.hash, location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return
    const sectionIds = links.filter((l) => l.id).map((l) => l.id) as string[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string, id?: string) => {
    if (href === '/blog/') return location.pathname.startsWith('/blog')
    if (href === '/#services' || id === 'services') return activeHash === '#services' || location.pathname.startsWith('/leistungen/')
    if (id && activeHash === `#${id}`) return true
    if (href.startsWith('/#')) return false
    return location.pathname === href
  }

  const navItemBase = 'rounded-full px-3.5 py-2 text-sm font-medium transition-all'
  const navItemInactive = 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
  const navItemActive = 'bg-neutral-900 text-white shadow-md'

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
        <nav
          aria-label="TnT Studio Medienagentur Wuppertal — Hauptnavigation"
          className={`flex items-center justify-between gap-2 rounded-full py-2.5 pl-4 pr-2 transition-all duration-500 sm:gap-4 sm:pl-5 sm:pr-3 ${
            scrolled
              ? 'glass shadow-lg border border-neutral-200/60'
              : 'bg-white/80 shadow-md border border-neutral-200/40 backdrop-blur-md'
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter text-neutral-900 sm:text-2xl">
              TnT
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) =>
              l.label === 'Leistungen' ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={l.href}
                    className={`${navItemBase} ${isActive(l.href, l.id) ? navItemActive : navItemInactive}`}
                  >
                    {l.label}
                  </a>
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      servicesOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="min-w-[220px] rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl">
                      {services.map((s) => (
                        <Link
                          key={s.title}
                          to={`/leistungen/${slugify(s.title)}/`}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <div className="my-1 border-t border-neutral-100" />
                      <a
                        href="/#services"
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-neutral-50"
                      >
                        Alle Leistungen
                      </a>
                    </div>
                  </div>
                </div>
              ) : l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`${navItemBase} ${isActive(l.href, l.id) ? navItemActive : navItemInactive}`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className={`${navItemBase} ${isActive(l.href, l.id) ? navItemActive : navItemInactive}`}
                >
                  {l.label}
                </a>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-lg lg:inline-block"
            >
              Projekt anfragen
            </a>

            {/* Mobile toggle — premium pill */}
            <button
              className="group relative flex h-11 items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-white shadow-lg shadow-neutral-900/20 transition-all hover:bg-neutral-800 hover:shadow-xl lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            >
              <span className="text-xs font-bold tracking-wide">{menuOpen ? 'Schliessen' : 'Menu'}</span>
              <div className="relative flex h-3.5 w-4 flex-col justify-between">
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'w-4 translate-y-[5px] rotate-45' : 'w-3.5'}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'w-4 -translate-y-[5px] -rotate-45' : 'w-2.5 ml-auto'}`} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_40%)]" />

        <div className="relative z-10 flex h-full flex-col px-8 pt-28 pb-10">
          {/* Links */}
          <nav aria-label="TnT Studio Medienagentur Wuppertal — Mobile Navigation" className="flex flex-1 flex-col justify-center gap-4">
            {links.map((l, i) => {
              const isLinkActive = isActive(l.href, l.id)
              const baseClass = `group flex items-center justify-between rounded-2xl px-5 py-4 text-2xl font-black tracking-tight transition-all duration-300 ${
                isLinkActive ? 'bg-neutral-900 text-white' : 'text-neutral-900 hover:bg-neutral-100'
              }`
              const style = {
                transitionDelay: menuOpen ? `${i * 60 + 80}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-30px)',
              }
              if (l.label === 'Leistungen') {
                return (
                  <div key={l.href} style={style} className="space-y-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={baseClass}
                    >
                      <span>{l.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-1 pl-4">
                        {services.map((s) => (
                          <Link
                            key={s.title}
                            to={`/leistungen/${slugify(s.title)}/`}
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-xl px-4 py-2 text-sm font-semibold text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                          >
                            {s.title}
                          </Link>
                        ))}
                        <a
                          href="/#services"
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-xl px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
                        >
                          Alle Leistungen
                        </a>
                      </div>
                    </div>
                  </div>
                )
              }
              const content = (
                <>
                  <span>{l.label}</span>
                  <svg
                    className={`h-5 w-5 transition-all duration-300 ${isLinkActive ? 'text-white' : 'text-neutral-400 opacity-0 group-hover:opacity-100'} ${menuOpen ? 'translate-x-0' : '-translate-x-2'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )
              return l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={baseClass}
                  style={style}
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={baseClass}
                  style={style}
                >
                  {content}
                </a>
              )
            })}
          </nav>

          {/* Bottom CTA */}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-neutral-900/20 transition-all hover:bg-neutral-700"
            style={{
              transitionDelay: menuOpen ? `${links.length * 60 + 160}ms` : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Projekt anfragen
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p
            className="mt-4 text-center text-xs text-neutral-400"
            style={{
              transitionDelay: menuOpen ? `${links.length * 60 + 220}ms` : '0ms',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            info@tnt-studio.de · Wuppertal
          </p>
        </div>
      </div>
    </>
  )
}
