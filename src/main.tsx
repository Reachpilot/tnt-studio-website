import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'
import { initAnalytics } from './lib/analytics'

// Lädt GA4/Meta Pixel nur bei vorhandener Cookie-Einwilligung.
// Muss vor dem Rendern laufen, damit das generate_lead-Event
// auf der ?form=sent-Seite korrekt gefeuert wird.
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

