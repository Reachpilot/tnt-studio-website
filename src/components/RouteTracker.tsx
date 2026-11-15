import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/analytics'

// feuert Meta-Pixel-PageViews bei clientseitigen Routenwechseln.
// Der erste Aufruf wird übersprungen, das initiale PageView
// feuert der Pixel-Snippet beim Laden selbst.
export default function RouteTracker() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    trackPageView()
  }, [location.pathname])

  return null
}
