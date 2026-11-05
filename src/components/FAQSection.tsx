import { useState } from 'react'
import { homeFAQs } from '../data/seo'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-bold text-neutral-900 sm:text-lg">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm leading-relaxed text-neutral-500 sm:text-base">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-neutral-50/50 py-20 lg:py-32">
      <div className="absolute inset-0 tnt-grid-bg opacity-30" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">FAQ</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Häufige Fragen.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-500 sm:text-base">
            Klare Antworten für Kunden, KI-Suchen und Google. AEO-optimiert, damit du gefunden wirst.
          </p>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white px-5 shadow-xl sm:px-8 lg:px-10">
          {homeFAQs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
