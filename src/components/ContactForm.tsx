import { useEffect, useState } from 'react'
import { services } from '../data/services'
import { trackLead, trackGAEvent } from '../lib/analytics'
import { getAttribution } from '../lib/attribution'

const steps = ['Du', 'Projekt', 'Details', 'Fertig']

const timelineOptions = ['Sofort / unklar', 'Innerhalb 1 Monat', '1 bis 3 Monate', 'Ab 3 Monate']

const goalOptions = [
  'Neue Website',
  'Relaunch / Redesign',
  'Mehr Kunden & Anfragen',
  'Besser gefunden werden (Google & ChatGPT)',
  'Social Media wachsen',
  'Andere',
]

const budgetOptions = [
  '< 2.500 €',
  '2.500 € bis 5.000 €',
  '5.000 € bis 10.000 €',
  '10.000 € bis 25.000 €',
  '> 25.000 €',
  'Noch offen',
]

const initialData = {
  name: '',
  company: '',
  website: '',
  service: [] as string[],
  goals: [] as string[],
  budget: '',
  timeline: '',
  message: '',
  consent: false,
}

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initialData)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('form') === 'sent') {
      setSubmitted(true)
      setStep(steps.length - 1)
      trackLead()
      window.history.replaceState({}, '', window.location.pathname + window.location.hash)
    }
  }, [])

  const update = (key: keyof typeof data, value: unknown) => {
    setData((d) => ({ ...d, [key]: value }))
  }

  const toggleGoal = (goal: string) => {
    setData((d) => ({
      ...d,
      goals: d.goals.includes(goal)
        ? d.goals.filter((g) => g !== goal)
        : [...d.goals, goal],
    }))
  }

  // Funnel-Tracking: jeder Step-View feuert ein Event, Abbrueche sind
  // in GA4 als Drop-off zwischen den Steps sichtbar.
  useEffect(() => {
    trackGAEvent('contact_form_step', { step: step + 1, step_name: steps[step] ?? 'unbekannt' })
  }, [step])

  const toggleService = (title: string) => {
    setData((d) => ({
      ...d,
      service: d.service.includes(title)
        ? d.service.filter((s) => s !== title)
        : [...d.service, title],
    }))
  }

  const step0Valid = data.name.trim().length >= 2
  const step1Valid = data.service.length > 0 && data.budget !== ''
  const step2Valid = (data.goals.length > 0 || data.message.trim().length >= 10) && data.consent

  const canProceed = [step0Valid, step1Valid, step2Valid][step] ?? true

  const next = () => {
    if (!canProceed) {
      setTouched({ ...touched, [step]: true })
      return
    }
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const prev = () => setStep((s) => Math.max(s - 1, 0))

  const buildWhatsAppMessage = () => {
    const parts = [
      'Hallo TnT Studio,',
      '',
      `hier ist ${data.name}${data.company ? ` von ${data.company}` : ''}. Ich habe auf tnt-studio.de ein Projekt angefragt.`,
      '',
      `Gewünschte Leistungen: ${data.service.join(', ')}`,
      `Budget: ${data.budget}`,
    ]
    if (data.timeline) parts.push(`Zeitrahmen: ${data.timeline}`)
    if (data.website) parts.push(`Website: ${data.website}`)
    if (data.goals.length > 0) parts.push(`Ziel: ${data.goals.join(', ')}`)
    if (data.message.trim()) parts.push('', 'Details:', data.message.trim())

    // Attribution: woher kommt der Lead (UTM, gclid, Referrer)
    const attr = getAttribution()
    const sourceBits = [
      attr.utm_source && `Quelle: ${attr.utm_source}`,
      attr.utm_medium && `Kanal: ${attr.utm_medium}`,
      attr.utm_campaign && `Kampagne: ${attr.utm_campaign}`,
      attr.gclid && `Google-Klick-ID: ${attr.gclid}`,
      attr.referrer && `Referrer: ${attr.referrer}`,
      attr.landing && `Landing: ${attr.landing}`,
    ].filter((b): b is string => Boolean(b))
    if (sourceBits.length > 0) parts.push('', ...sourceBits)

    return parts.join('\n')
  }

  const whatsappUrl = `https://wa.me/4917722722211?text=${encodeURIComponent(buildWhatsAppMessage())}`

  const handleWhatsAppClick = () => trackLead()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()

  if (submitted) {
    return (
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-neutral-900">Anfrage gesendet!</h3>
        <p className="mx-auto mt-3 max-w-md text-neutral-500">
          Danke, {data.name}. Wir melden uns innerhalb von 24 Stunden bei dir an <span className="font-semibold text-neutral-900">info@tnt-studio.de</span>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setStep(0)
            setData(initialData)
            setTouched({})
          }}
          className="mt-8 rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
        >
          Neue Anfrage
        </button>
      </div>
    )
  }

  return (
    <form
      name="kontakt"
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
    >
      {/* Progress */}
      <div className="border-b border-neutral-100 bg-neutral-50/50 px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black transition-colors ${
                  i < step ? 'bg-[#25D366] text-white' : i === step ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-500'
                }`}
              >
                {i < step ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`ml-2 hidden text-xs font-semibold sm:inline ${
                  i <= step ? 'text-neutral-900' : 'text-neutral-500'
                }`}
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`mx-3 h-0.5 flex-1 rounded-full transition-colors ${
                    i < step ? 'bg-[#25D366]' : 'bg-neutral-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        {step === 0 && (
          <div className="space-y-5 animate-fade-up">
            <h3 className="text-xl font-black text-neutral-900">Erstmal zu dir.</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Name *</label>
                <input
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Max Mustermann"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-500 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
                />
                {touched[0] && data.name.trim().length < 2 && (
                  <p className="mt-1.5 text-xs text-red-500">Bitte gib deinen Namen ein.</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Firma</label>
                <input
                  name="company"
                  type="text"
                  value={data.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Musterfirma GmbH"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-500 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Bestehende Website</label>
              <input
                name="website"
                type="url"
                value={data.website}
                onChange={(e) => update('website', e.target.value)}
                placeholder="https://..."
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-500 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5 animate-fade-up">
            <h3 className="text-xl font-black text-neutral-900">Womit können wir helfen?</h3>
            <div>
              <label className="mb-3 block text-sm font-semibold text-neutral-700">Leistungen *</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const active = data.service.includes(s.title)
                  return (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => toggleService(s.title)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                        active
                          ? 'border-[#25D366] bg-green-50 text-neutral-900 shadow-sm'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                          active ? 'border-[#25D366] bg-[#25D366]' : 'border-neutral-300 bg-white'
                        }`}
                      >
                        {active && (
                          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      {s.title}
                    </button>
                  )
                })}
              </div>
              <input type="hidden" name="service" value={data.service.join(', ')} />
              {touched[1] && data.service.length === 0 && (
                <p className="mt-2 text-xs text-red-500">Bitte wähle mindestens eine Leistung.</p>
              )}
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-neutral-700">Budget *</label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((b) => {
                  const active = data.budget === b
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => update('budget', b)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                        active
                          ? 'bg-[#25D366] text-white shadow-md'
                          : 'border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {b}
                    </button>
                  )
                })}
              </div>
              <input type="hidden" name="budget" value={data.budget} />
              {touched[1] && !data.budget && (
                <p className="mt-2 text-xs text-red-500">Bitte wähle ein Budget.</p>
              )}
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-neutral-700">Zeitrahmen</label>
              <div className="flex flex-wrap gap-2">
                {timelineOptions.map((t) => {
                  const active = data.timeline === t
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update('timeline', t)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                        active
                          ? 'bg-[#25D366] text-white shadow-md'
                          : 'border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-fade-up">
            <h3 className="text-xl font-black text-neutral-900">Was ist dein Ziel?</h3>
            <p className="-mt-2 text-sm text-neutral-500">Ein Klick genügt. Details kannst du optional ergänzen.</p>
            <div>
              <label className="mb-3 block text-sm font-semibold text-neutral-700">Ziel *</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {goalOptions.map((g) => {
                  const active = data.goals.includes(g)
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggleGoal(g)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                        active
                          ? 'border-[#25D366] bg-green-50 text-neutral-900 shadow-sm'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                          active ? 'border-[#25D366] bg-[#25D366]' : 'border-neutral-300 bg-white'
                        }`}
                      >
                        {active && (
                          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      {g}
                    </button>
                  )
                })}
              </div>
              {touched[2] && data.goals.length === 0 && data.message.trim().length < 10 && (
                <p className="mt-2 text-xs text-red-500">Wähle mindestens ein Ziel oder beschreibe kurz dein Projekt.</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Details <span className="font-normal text-neutral-500">(optional)</span></label>
              <textarea
                name="message"
                value={data.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Worum geht es konkret? Link zur bestehenden Website? Besondere Wünsche?"
                rows={3}
                className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-500 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300">
              <input
                name="consent"
                type="checkbox"
                checked={data.consent}
                onChange={(e) => update('consent', e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded border-neutral-300 accent-[#25D366]"
              />
              <span className="text-sm leading-relaxed text-neutral-600">
                Ich stimme zu, dass meine Daten zur Bearbeitung der Anfrage gespeichert werden. *
              </span>
            </label>
            {touched[2] && !data.consent && (
              <p className="text-xs text-red-500">Einwilligung erforderlich.</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5 animate-fade-up">
            <h3 className="text-xl font-black text-neutral-900">Fast geschafft.</h3>
            <p className="-mt-2 text-sm text-neutral-500">Prüfe deine Angaben. Ein Klick öffnet WhatsApp mit deiner fertigen Nachricht.</p>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <div><span className="text-neutral-500">Name:</span> <span className="font-medium text-neutral-900">{data.name}</span></div>
                <div><span className="text-neutral-500">Firma:</span> <span className="font-medium text-neutral-900">{data.company || 'k. A.'}</span></div>
                <div className="sm:col-span-2"><span className="text-neutral-500">Leistungen:</span> <span className="font-medium text-neutral-900">{data.service.join(', ')}</span></div>
                <div className="sm:col-span-2"><span className="text-neutral-500">Ziel:</span> <span className="font-medium text-neutral-900">{data.goals.join(', ') || 's. Details'}</span></div>
                <div><span className="text-neutral-500">Budget:</span> <span className="font-medium text-neutral-900">{data.budget}</span></div>
                <div><span className="text-neutral-500">Zeitrahmen:</span> <span className="font-medium text-neutral-900">{data.timeline || 'Sofort / unklar'}</span></div>
              </div>
              {data.message.trim() && (
                <div className="mt-4 border-t border-neutral-200 pt-4">
                  <span className="text-neutral-500">Details:</span>
                  <p className="mt-1 font-medium text-neutral-900">{data.message}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-5 sm:px-10">
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-neutral-500 transition-all hover:bg-neutral-100 hover:text-neutral-900 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          Zurück
        </button>

        {step < steps.length - 2 ? (
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-lg"
          >
            Weiter
          </button>
        ) : step === steps.length - 2 ? (
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-neutral-900 px-8 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-lg"
          >
            Weiter
          </button>
        ) : step === steps.length - 1 ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#1eb856] hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Per WhatsApp senden
          </a>
        ) : null}
      </div>
    </form>
  )
}
