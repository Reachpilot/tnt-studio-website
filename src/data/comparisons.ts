export interface ComparisonRow {
  criterion: string
  tnt: string
  alternative: string
}

export interface ComparisonFAQ {
  question: string
  answer: string
}

export interface Comparison {
  slug: string
  title: string
  alternative: string
  tagline: string
  intro: string[]
  rows: ComparisonRow[]
  alternativeWins: string[]
  verdict: string[]
  faqs: ComparisonFAQ[]
}

export const comparisons: Comparison[] = [
  {
    slug: 'agentur-vs-baukasten',
    title: 'Agentur vs. Baukasten',
    alternative: 'Website-Baukasten (WordPress, Wix, Jimdo & Co.)',
    tagline: 'Wann lohnt sich eine Agentur — und wann reicht ein Baukasten? Ehrlicher Vergleich für KMU.',
    intro: [
      'Die Frage kommt in jedem zweiten Erstgespräch: „Warum Agentur, wenn ich die Website selbst mit WordPress oder Wix bauen kann?" Die ehrliche Antwort: Es kommt darauf an, was die Website tun soll. Für einen einfachen Auftritt reicht oft ein Baukasten. Für eine Website, die Anfragen bringt, bei Google UND ChatGPT gefunden wird und nicht nach zwei Jahren zum Wartungs-Alptraum wird, ist eine Agentur die bessere Investition.',
      'Dieser Vergleich zeigt transparent, wo Baukästen ihre Stärken haben — und wo sie für KMU-Kundenversprechen an ihre Grenzen stoßen. Keine Marketing-Vernebelung: Wir sagen Ihnen auch, wann Sie besser beim Baukasten bleiben.',
    ],
    rows: [
      { criterion: 'Zeitaufwand', tnt: 'Briefing, Feedback-Runden, Launch — Sie konzentrieren sich auf Ihr Business, wir auf die Umsetzung.', alternative: 'Selbst bauen heißt: Dutzende Stunden, Design, Texte, Technik — zusätzlich zum Tagesgeschäft.' },
      { criterion: 'Design-Qualität', tnt: 'Individuelles Design nach Markenidentität, kein Template-Look, konsistent mit Logo und Auftritt.', alternative: 'Templates sehen austauschbar aus; Individualisierung ist begrenzt und oft plugin-abhängig.' },
      { criterion: 'Performance & Core Web Vitals', tnt: 'Optimiert gebaut: <1s Ladezeit, 95+ Lighthouse, minimale Requests — Rankingin und Conversion/Faktor.', alternative: 'Baukasten-Plugins und Themes machen Seiten schnell schwer; Core Web Vitals sind Glückssache.' },
      { criterion: 'SEO-Grundlagen', tnt: 'Saubere Semantik, Schema.org, XML-Sitemap, canonicals — von Anfang an crawlbar.', alternative: 'SEO ist Plugin-Sache (Yoast & Co.); technische Grundlagen hängen vom Theme ab.' },
      { criterion: 'KI-Sichtbarkeit (GEO/AEO)', tnt: 'llms.txt, AI-Crawler-optimiert, Answer-First-Content — gebaut für ChatGPT, Perplexity, Gemini.', alternative: 'Baukasten haben keine native KI-Optimierung; AI-Sichtbarkeit ist manuell und fehleranfällig.' },
      { criterion: 'Wartung & Sicherheit', tnt: 'Wir übernehmen Updates, Security, Backups — ein Ansprechpartner, keine Plugin-Hölle.', alternative: 'Plugins, Themes und Core brauchen Updates; Sicherheitslücken sind bei Baukästen häufig.' },
      { criterion: 'Kosten über 3 Jahre', tnt: 'Einmalige Investition + optional monatliche Betreuung — planbar, kein Abo-Zwang.', alternative: 'Kostenlos starten, aber Themes, Plugins, Hosting und Wartungszeit summieren sich schnell.' },
      { criterion: 'Eigentum & Flexibilität', tnt: 'Code gehört Ihnen, Full-Stack-Individualentwicklung — keine Template-Grenzen.', alternative: 'Baukasten-Plattformen: Inhalt portabel, Design und Funktionen an die Plattform gebunden.' },
    ],
    alternativeWins: [
      'Sie brauchen in unter 48 Stunden eine einfache Seite und haben Zeit zum Selberlernen',
      'Ihr Budget liegt unter 500 € und Sie akzeptieren Template-Qualität',
      'Sie wollen selbst experimentieren und lernen, wie Websites funktionieren',
      'Ihr Angebot ist so einfach, dass ein Ein-Seiten-Auftritt reicht',
    ],
    verdict: [
      'Baukasten gewinnt bei Geschwindigkeit und Einstiegskosten — wenn Sie die Zeit mitbringen und ein einfaches Ergebnis akzeptieren.',
      'Agentur gewinnt bei allem, was Konversion, Ranking und Marke angeht: Design, Performance, SEO, KI-Sichtbarkeit und Wartung aus einer Hand.',
      'Faustregel: Wenn die Website Anfragen bringen soll, ist die Agentur günstiger als die versteckten Kosten aus Zeit, Plugins und verpassten Kunden.',
    ],
    faqs: [
      { question: 'Ist WordPress nicht genauso gut wie eine Agentur?', answer: 'WordPress ist ein Baukasten mit riesiger Plugin-Landschaft. Es kann sehr gut werden — aber es braucht technisches Know-how für Performance, Security und SEO. Eine Agentur liefert das gleiche Ergebnis ohne dass Sie zum Webmaster werden.' },
      { question: 'Was kostet mehr: Agentur oder Baukasten?', answer: 'Kurzfristig der Baukasten, langfristig oft die Agentur: Baukasten-Kosten verstecken sich in Zeit, Plugins, Themes und verpassten Anfragen. Eine Landingpage ab 500 € bei uns ist eine einmalige Investition ohne Abo.' },
      { question: 'Kann ich später vom Baukasten zur Agentur wechseln?', answer: 'Ja, Inhalte sind exportierbar. Wir übernehmen bestehende WordPress-/Wix-Seiten als Relaunch — inklusive Struktur, Content-Migration und SEO-Erhalt.' },
      { question: 'Was ist mit Jimdo oder Wix für kleine Unternehmen?', answer: 'Für die ersten 1-2 Jahre okay, wenn das Angebot einfach ist. Wer wachsen will — mehr Anfragen, besseres Ranking, ChatGPT-Sichtbarkeit — stößt schnell an Grenzen, die ein Baukasten nicht lösen kann.' },
    ],
  },
  {
    slug: 'agentur-vs-freelancer',
    title: 'Agentur vs. Freelancer',
    alternative: 'Freelancer / Einzelentwickler',
    tagline: 'Ein Ansprechpartner oder ein Generalist? Vergleich für KMU-Projekte.',
    intro: [
      'Freelancer sind günstiger und persönlicher — das stimmt. Aber ein Freelancer ist eine Person: Sie deckt Design, Entwicklung, SEO und Marketing selten auf Agentur-Niveau ab. Agenturen bringen ein Team: Designer, Entwickler, Marketer arbeiten parallel an Ihrem Projekt.',
      'Dieser Vergleich zeigt, wann ein Freelancer die richtige Wahl ist — und wann das Agentur-Modell trotz höherer Kosten die bessere Investition darstellt.',
    ],
    rows: [
      { criterion: 'Team & Expertise', tnt: 'Spezialisten für Design, Dev, SEO, SEA, Social — jede Disziplin auf Profi-Niveau.', alternative: 'Ein Generalist macht alles — gut, aber selten auf dem Niveau eines Spezialisten.' },
      { criterion: 'Geschwindigkeit', tnt: 'Parallele Arbeit: Design und Technik laufen gleichzeitig, kürzere Durchlaufzeit.', alternative: 'Sequentiell: Design, dann Code, dann SEO — eines nach dem anderen.' },
      { criterion: 'Verfügbarkeit', tnt: 'Team-Vielfalt: Urlaub, Krankheit oder Überlastung eines Einzelnen ist abgefedert.', alternative: 'Urlaub, Krankheit oder andere Kundenprojekte stoppen Ihr Projekt komplett.' },
      { criterion: 'Preis', tnt: 'Höherer Stundensatz, aber packaged Angebote und transparente Festpreise.', alternative: 'Niedrigerer Stundensatz, aber Risiko für Zusatzkosten und unklare Abgrenzung.' },
      { criterion: 'Verantwortung', tnt: 'Klar definierte Zuständigkeiten, dokumentierte Prozesse, Qualitätssicherung.', alternative: 'Abhängigkeit von einer Person, Wissen geht verloren, wenn sie nicht verfügbar ist.' },
      { criterion: 'Skalierung', tnt: 'Wachstum möglich: mehr Kapazität, neue Disziplinen, größere Projekte.', alternative: 'Begrenzte Kapazität: nur so viel, wie eine Person schaffen kann.' },
      { criterion: 'Kommunikation', tnt: 'Ein Ansprechpartner (Sie wissen, wer zuständig ist), aber mehrere Experten dahinter.', alternative: 'Direkter Draht zur ausführenden Person — maximal persönlich, aber ohne Backup.' },
    ],
    alternativeWins: [
      'Kleines, klar umrissenes Projekt (z. B. eine einzelne Landingpage)',
      'Enge Budget-Vorgabe unter 1.000 €',
      'Sie wollen maximale Mitsprache in jedem Detail',
      'Langfristige Zusammenarbeit mit einem Specialist-Aufbau',
    ],
    verdict: [
      'Freelancer gewinnt bei kleinen Projekten und knappen Budgets — wenn Sie ein konkretes, abgrenzbares Ergebnis brauchen.',
      'Agentur gewinnt bei allem, was mehrere Disziplinen, Geschwindigkeit oder Skalierung braucht: komplette Websites, SEO-Systeme, Social Media plus Ads.',
      'Faustregel: Freelancer für Einzelaufgaben, Agentur für Projekte, die mehrere Kompetenzen und eine verlässliche Umsetzung brauchen.',
    ],
    faqs: [
      { question: 'Ist ein Freelancer nicht günstiger?', answer: 'Der Stundensatz ist niedriger, aber die Gesamtkosten können höher sein: SEO, Content und Ads kommen bei einem Freelancer selten auf Agentur-Niveau mit. Eine Agentur liefert das komplette System aus einer Hand.' },
      { question: 'Kann ich Freelancer und Agentur kombinieren?', answer: 'Ja: Freelancer für spezifische Aufgaben (z. B. Texten), Agentur für Strategie und Umsetzung. Wir arbeiten auch mit Freelance-Netzwerken, wenn das für Sie sinnvoll ist.' },
      { question: 'Was ist das Risiko bei Freelancern?', answer: 'Abhängigkeit von einer Person: Urlaub, Krankheit, Überlastung oder Ausfall stoppt Ihr Projekt. Bei Agenturen ist die Leistung auch dann verfügbar, wenn ein Teammitglied nicht da ist.' },
      { question: 'Wann ist eine Agentur overkill?', answer: 'Bei Mini-Projekten: eine einzelne Seite, ein Logo, ein Text — da reicht ein Freelancer oder sogar Baukasten. Agentur lohnt sich ab dem Moment, wo mehrere Disziplinen und verlässliche Umsetzung gefragt sind.' },
    ],
  },
]

export const comparisonBySlug = (slug: string) => comparisons.find((c) => c.slug === slug)
