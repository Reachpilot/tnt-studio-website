// First-Touch-Attribution: UTM/gclid/referrer einmalig in sessionStorage.
// Wird beim Formular-Submit mitgeschickt und landet in der Lead-E-Mail.

const KEY = 'tnt_attribution_v1'

const PARAMS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

export type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing?: string
  referrer?: string
}

export function captureAttribution() {
  if (typeof window === 'undefined') return
  try {
    if (sessionStorage.getItem(KEY)) return
    const q = new URLSearchParams(window.location.search)
    const data: Attribution = {
      landing: window.location.pathname + window.location.search,
      referrer: document.referrer || undefined,
    }
    for (const p of PARAMS) {
      const v = q.get(p)
      if (v) data[p] = v
    }
    sessionStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    /* sessionStorage blockiert → ignorieren */
  }
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Attribution) : {}
  } catch {
    return {}
  }
}
