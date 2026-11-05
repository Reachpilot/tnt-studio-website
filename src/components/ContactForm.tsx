import { useState } from 'react'
import { services } from '../data/services'

const steps = ['Du', 'Projekt', 'Details', 'Fertig']

const budgetOptions = [
  '< 2.500 €',
  '2.500 € – 5.000 €',
  '5.000 € – 10.000 €',
  '10.000 € – 25.000 €',
  '> 25.000 €',
  'Noch offen',
]

const initialData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  service: [] as string[],
  budget: '',
  timeline: '',
  message: '',
  consent: false,
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initialData)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (key: keyof typeof data, value: unknown) => {
    setData((d) => ({ ...d, [key]: value }))
  }

  const toggleService = (title: string) => {
    setData((d) => ({
      ...d,
      service: d.service.includes(title)
        ? d.service.filter((s) => s !== title)
        : [...d.service, title],
    }))
  }

  const step0Valid = data.name.trim().length >= 2 && validateEmail(data.email)
  const step1Valid = data.service.length > 0 && data.budget !== ''
  const step2Valid = data.message.trim().length >= 10 && data.consent

  const canProceed = [step0Valid, step1Valid, step2Valid][step] ?? true

  const next = () => {
    if (!canProceed) {
      setTouched({ ...touched, [step]: true })
      return
    }
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const prev = () => setStep((s) => Math.max(s - 1, 0))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!step2Valid) {
      setTouched({ ...touched, [step]: true })
      return
    }
    setSubmitting(true)
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    try {
      await fetch('/', {
        method: 'POST',
        body: formData,
      })
    } catch {
      // Netlify forms fail in local dev — still show success
    }
    setSubmitting(false)
    setSubmitted(true)
    setStep(steps.length - 1)
  }

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
      method="POST"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
    >
      <input type="hidden" name="form-name" value="kontakt" />
      <div className="hidden">
        <input name="bot-field" />
      </div>

      {/* Progress */}
      <div className="border-b border-neutral-100 bg-neutral-50/50 px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black transition-colors ${
                  i <= step ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-500'
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`ml-2 hidden text-xs font-semibold sm:inline ${
                  i <= step ? 'text-neutral-900' : 'text-neutral-400'
                }`}
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`mx-3 h-0.5 flex-1 rounded-full transition-colors ${
                    i < step ? 'bg-neutral-900' : 'bg-neutral-200'
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
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
                {touched[0] && data.name.trim().length < 2 && (
                  <p className="mt-1.5 text-xs text-red-500">Bitte gib deinen Namen ein.</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">E-Mail *</label>
                <input
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="max@firma.de"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
                {touched[0] && !validateEmail(data.email) && (
                  <p className="mt-1.5 text-xs text-red-500">Gültige E-Mail-Adresse erforderlich.</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Telefon</label>
                <input
                  name="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+49 123 456789"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Firma</label>
                <input
                  name="company"
                  type="text"
                  value={data.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Musterfirma GmbH"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
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
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
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
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          active ? 'border-indigo-500 bg-indigo-500' : 'border-neutral-300'
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
                          ? 'bg-neutral-900 text-white'
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
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Zeitrahmen</label>
              <select
                name="timeline"
                value={data.timeline}
                onChange={(e) => update('timeline', e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="">Sofort / unklar</option>
                <option value="Innerhalb 1 Monat">Innerhalb 1 Monat</option>
                <option value="1–3 Monate">1–3 Monate</option>
                <option value="Ab 3 Monate">Ab 3 Monate</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-fade-up">
            <h3 className="text-xl font-black text-neutral-900">Erzähl uns mehr.</h3>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-neutral-700">Projektbeschreibung *</label>
              <textarea
                name="message"
                value={data.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Was ist dein Ziel? Was sollte das Ergebnis können?"
                rows={5}
                className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
              {touched[2] && data.message.trim().length < 10 && (
                <p className="mt-1.5 text-xs text-red-500">Bitte beschreibe dein Projekt kurz (min. 10 Zeichen).</p>
              )}
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300">
              <input
                name="consent"
                type="checkbox"
                checked={data.consent}
                onChange={(e) => update('consent', e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500"
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
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <div><span className="text-neutral-400">Name:</span> <span className="font-medium text-neutral-900">{data.name}</span></div>
                <div><span className="text-neutral-400">E-Mail:</span> <span className="font-medium text-neutral-900">{data.email}</span></div>
                <div><span className="text-neutral-400">Telefon:</span> <span className="font-medium text-neutral-900">{data.phone || '—'}</span></div>
                <div><span className="text-neutral-400">Firma:</span> <span className="font-medium text-neutral-900">{data.company || '—'}</span></div>
                <div className="sm:col-span-2"><span className="text-neutral-400">Leistungen:</span> <span className="font-medium text-neutral-900">{data.service.join(', ')}</span></div>
                <div><span className="text-neutral-400">Budget:</span> <span className="font-medium text-neutral-900">{data.budget}</span></div>
                <div><span className="text-neutral-400">Zeitrahmen:</span> <span className="font-medium text-neutral-900">{data.timeline || 'Sofort / unklar'}</span></div>
              </div>
              <div className="mt-4 border-t border-neutral-200 pt-4">
                <span className="text-neutral-400">Nachricht:</span>
                <p className="mt-1 font-medium text-neutral-900">{data.message}</p>
              </div>
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
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700 hover:shadow-lg disabled:opacity-60"
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Wird gesendet…
              </>
            ) : (
              <>
                Anfrage senden
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        ) : null}
      </div>
    </form>
  )
}
