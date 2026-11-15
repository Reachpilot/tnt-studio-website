// ------------------------------------------------------------------
// TnT Studio, Consent-basiertes Tracking (GA4 + Meta Pixel)
// Tracking-IDs hier eintragen. Solange ein Feld leer ist, wird der
// jeweilige Dienst nicht geladen und alle Events sind No-Ops.
// ------------------------------------------------------------------

const GA_MEASUREMENT_ID = '' // z. B. 'G-XXXXXXXXXX' (analytics.google.com)
const META_PIXEL_ID = '' // z. B. '123456789012345' (business.facebook.com → Events Manager)

const CONSENT_KEY = 'tnt-cookie-consent'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
  }
}

let loaded = false

function hasConsent() {
  return typeof window !== 'undefined' && localStorage.getItem(CONSENT_KEY) === 'accepted'
}

// Wird bei App-Start und nach Cookie-Akzeptanz aufgerufen.
// Lädt gtag.js + Meta Pixel ausschließlich nach Einwilligung (DSGVO).
export function initAnalytics() {
  if (loaded || !hasConsent()) return
  loaded = true

  if (GA_MEASUREMENT_ID) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.gtag = function gtag(this: unknown) {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments as any)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)
  }

  if (META_PIXEL_ID) {
    const script = document.createElement('script')
    script.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`
    document.head.appendChild(script)
  }

  // Delegierter Click-Tracker: erfasst tel:/mailto:/WhatsApp-Klicks sitewide
  document.addEventListener('click', handleContactClick)
}

function handleContactClick(e: MouseEvent) {
  const anchor = (e.target as HTMLElement | null)?.closest?.('a')
  if (!anchor) return
  const href = anchor.getAttribute('href') || ''
  let linkType: 'phone' | 'email' | 'whatsapp' | null = null
  if (href.startsWith('tel:')) linkType = 'phone'
  else if (href.startsWith('mailto:')) linkType = 'email'
  else if (href.includes('wa.me') || href.includes('whatsapp')) linkType = 'whatsapp'
  if (!linkType) return
  trackGAEvent('contact_click', { link_type: linkType })
  trackMetaEvent('Contact', { content_name: linkType })
}

export function trackGAEvent(name: string, params?: Record<string, unknown>) {
  if (!loaded || !window.gtag) return
  window.gtag('event', name, params)
}

export function trackMetaEvent(name: string, params?: Record<string, unknown>) {
  if (!loaded || !window.fbq) return
  window.fbq('track', name, params)
}

// Meta Pixel hat kein Auto-Tracking für SPA-Routenwechsel, wird von
// RouteTracker bei jedem clientseitigen Navigationswechsel gefeuert.
// GA4 deckt das über "Erweiterte Messung → Seitenaufrufe bei
// Browser-Verlaufsereignissen" (standardmäßig aktiv) ab.
export function trackPageView() {
  if (!loaded || !window.fbq) return
  window.fbq('track', 'PageView')
}

// Haupt-Conversion: erfolgreiches Kontaktformular (nach FormSubmit-Redirect)
export function trackLead() {
  trackGAEvent('generate_lead', { method: 'contact_form' })
  trackMetaEvent('Lead', { content_name: 'Kontaktformular' })
}
