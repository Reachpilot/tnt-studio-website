// Netlify Function: Kontaktformular → Resend API (Fallback: FormSubmit)
// Env-Vars in Netlify: RESEND_API_KEY (Pflicht für Resend),
// RESEND_FROM (z. B. "TnT Studio <kontakt@tnt-studio.de>"), RESEND_TO (optional)

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_FROM = process.env.RESEND_FROM || 'TnT Studio Website <onboarding@resend.dev>'
const RESEND_TO = process.env.RESEND_TO || 'info@tnt-studio.de'
const FORMSUBMIT_URL = 'https://formsubmit.co/info@tnt-studio.de'

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'https://tnt-studio.de',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function respond(statusCode, body) {
  return { statusCode, headers: CORS_HEADERS, body: JSON.stringify(body) }
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml(d) {
  const rows = [
    ['Name', d.name],
    ['E-Mail', d.email],
    ['Telefon', d.phone],
    ['Firma', d.company],
    ['Website', d.website],
    ['Leistungen', Array.isArray(d.service) ? d.service.join(', ') : d.service],
    ['Budget', d.budget],
    ['Zeitrahmen', d.timeline],
    ['Quelle', d.utm_source],
    ['Kampagne', d.utm_campaign],
    ['Google-Klick-ID', d.gclid],
    ['Referrer', d.referrer],
    ['Landing', d.landing],
  ]
    .filter(([, v]) => v && String(v).trim() !== '')
    .map(([k, v]) => `<tr><td style="padding:8px 12px;color:#737373;font-size:13px;width:140px;vertical-align:top">${k}</td><td style="padding:8px 12px;color:#171717;font-size:14px;font-weight:600">${esc(v)}</td></tr>`)
    .join('')

  return `<!doctype html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:Inter,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px">
    <div style="background:#171717;border-radius:16px 16px 0 0;padding:24px 32px">
      <span style="color:#fff;font-size:18px;font-weight:800">TnT<span style="color:#818cf8">Studio</span></span>
      <p style="color:#a3a3a3;font-size:13px;margin:6px 0 0">Neue Projektanfrage über die Website</p>
    </div>
    <div style="background:#fff;padding:8px 32px 24px;border-radius:0 0 16px 16px">
      <table style="width:100%;border-collapse:collapse;margin-top:8px">${rows}</table>
      <div style="margin-top:16px;padding:16px;background:#f5f5f5;border-radius:12px">
        <p style="margin:0 0 6px;color:#737373;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em">Nachricht</p>
        <p style="margin:0;color:#171717;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(d.message)}</p>
      </div>
      <p style="margin:20px 0 0;color:#a3a3a3;font-size:12px">Antwort direkt an: <a href="mailto:${esc(d.email)}" style="color:#4f46e5">${esc(d.email)}</a>${d.phone ? ` · ${esc(d.phone)}` : ''}</p>
    </div>
  </div>
</body></html>`
}

async function sendViaResend(d) {
  const serviceList = Array.isArray(d.service) ? d.service.join(', ') : d.service || '—'
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [RESEND_TO],
      reply_to: d.email,
      subject: `Neue Projektanfrage: ${String(d.name).trim()} — ${serviceList}`,
      html: buildEmailHtml(d),
    }),
  })
  if (!res.ok) {
    const body = await res.text()
    console.error('Resend API error', res.status, body)
    return false
  }
  return true
}

async function sendViaFormSubmit(d) {
  const params = new URLSearchParams()
  params.set('_next', 'https://tnt-studio.de/?form=sent#contact')
  params.set('_subject', `Neue Projektanfrage via TnT Studio Website — ${d.name}`)
  params.set('_captcha', 'false')
  for (const [k, v] of Object.entries(d)) {
    if (v === undefined || v === null) continue
    params.set(k, Array.isArray(v) ? v.join(', ') : String(v))
  }
  const res = await fetch(FORMSUBMIT_URL, { method: 'POST', body: params })
  return res.ok
}

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return respond(204, {})
  if (event.httpMethod !== 'POST') return respond(405, { error: 'Method not allowed' })

  let d
  try {
    d = JSON.parse(event.body || '{}')
  } catch {
    return respond(400, { error: 'Ungültige Anfrage.' })
  }

  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen
  if (d.fax && String(d.fax).trim() !== '') return respond(200, { ok: true })

  // Time-Trap: legitime Nutzer brauchen >1.5s zum Ausfüllen.
  // Zu schnelle Submits werden fake-akzeptiert, damit Bots nichts lernen.
  const elapsed = Number(d.elapsed)
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < 1500) {
    return respond(200, { ok: true })
  }

  const name = String(d.name || '').trim()
  const email = String(d.email || '').trim()
  const message = String(d.message || '').trim()

  if (name.length < 2) return respond(400, { error: 'Bitte Namen angeben.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respond(400, { error: 'Bitte gültige E-Mail angeben.' })
  if (message.length < 10) return respond(400, { error: 'Nachricht ist zu kurz.' })
  if (d.consent !== true && d.consent !== 'true' && d.consent !== 'on') {
    return respond(400, { error: 'Bitte Datenschutz-Einwilligung bestätigen.' })
  }

  d.name = name
  d.email = email
  d.message = message

  try {
    const sent = RESEND_API_KEY ? await sendViaResend(d) : await sendViaFormSubmit(d)
    if (!sent) return respond(502, { error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' })
    return respond(200, { ok: true })
  } catch (err) {
    console.error('Contact form error', err)
    return respond(500, { error: 'Interner Fehler. Bitte später erneut versuchen.' })
  }
}
