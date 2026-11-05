export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50">
      {/* Accent line */}
      <div className="absolute left-0 right-0 top-0 h-1 tnt-accent opacity-60" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-neutral-900">TnT</span>
              <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">Studio</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              TnT Studio — Medienagentur Wuppertal von Tiago Esteves & Theo Spingys.
              Web Design, Social Media Marketing, Content Creation, Branding & Produktfotografie für Marken mit Anspruch.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/tnt_studio.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:shadow-md hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="mailto:info@tnt-studio.de"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:shadow-md hover:scale-110"
                aria-label="Email"
              >
                <svg className="h-5 w-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tiagoesteves3/?locale=de-DE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:shadow-md hover:scale-110"
                aria-label="LinkedIn Tiago"
              >
                <svg className="h-5 w-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-sm text-neutral-500 hover:text-neutral-900">Leistungen</a></li>
              <li><a href="/#portfolio" className="text-sm text-neutral-500 hover:text-neutral-900">Portfolio</a></li>
              <li><a href="/#founders" className="text-sm text-neutral-500 hover:text-neutral-900">Team</a></li>
              <li><a href="/#recruiting" className="text-sm text-neutral-500 hover:text-neutral-900">Recruiting</a></li>
              <li><a href="/blog/" className="text-sm text-neutral-500 hover:text-neutral-900">Blog</a></li>
              <li><a href="/#contact" className="text-sm text-neutral-500 hover:text-neutral-900">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@tnt-studio.de" className="text-sm text-neutral-500 hover:text-neutral-900">
                  info@tnt-studio.de
                </a>
              </li>
              <li className="text-sm text-neutral-500">Julius-Lucas-Weg 90, 42113 Wuppertal</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} TnT Studio. Tiago Esteves & Theo Spingys. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="/imprint.html" className="text-xs text-neutral-400 hover:text-neutral-900">Impressum</a>
            <a href="/privacy-policy.html" className="text-xs text-neutral-400 hover:text-neutral-900">Datenschutz</a>
            <a href="/terms.html" className="text-xs text-neutral-400 hover:text-neutral-900">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
