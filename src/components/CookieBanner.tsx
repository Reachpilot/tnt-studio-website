import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('tnt-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('tnt-cookie-consent', 'accepted')
    setVisible(false)
    // Google Analytics & Meta Pixel werden hier geladen
  }

  const handleDecline = () => {
    localStorage.setItem('tnt-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600">
            Wir verwenden Cookies, um deine Erfahrung zu verbessern und Website-Traffic zu analysieren
            (Google Analytics, Meta Pixel). Du kannst optional zustimmen.
            <a href="/privacy-policy.html" className="ml-1 font-medium text-indigo-600 hover:underline">
              Mehr erfahren
            </a>
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={handleDecline}
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-900"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
