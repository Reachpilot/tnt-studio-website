export interface IndustryFAQ {
  question: string
  answer: string
}

export interface Industry {
  slug: string
  name: string
  tagline: string
  intro: string[]
  painPoints: string[]
  services: string[]
  faqs: IndustryFAQ[]
}

export const industries: Industry[] = [
  {
    slug: 'handwerk',
    name: 'Handwerk & Bau',
    tagline: 'Mehr Anfragen für Elektro, SHK, Maler & Co., durch Sichtbarkeit, nicht durch Mehrarbeit.',
    intro: [
      'Handwerksbetriebe verlieren Aufträge nicht an Qualität, sondern an Sichtbarkeit. Wer bei „Elektriker Notdienst Wuppertal" oder „SHK Sanitäreinstallation in der Nähe" nicht gefunden wird, bekommt den Auftrag nicht, egal wie gut die Arbeit ist.',
      'TnT Studio baut für Handwerksbetriebe digitale Präsenz, die Anfragen bringt: schnelle Websites mit Terminbuchung, Local SEO für die Region, Google Business Profile Optimierung und Social Media, das Vertrauen schafft, bei Kunden, die heute suchen und morgen beauftragen.',
    ],
    painPoints: [
      'Keine Website oder veraltete Seite, die auf dem Handy nicht funktioniert',
      'Google Maps Profil unvollständig, Konkurrenten werden zuerst gefunden',
      'Keine Online-Terminbuchung, Interessenten rufen nur während der Arbeitszeit an',
      'Social Media ignoriert, junge Kunden finden den Betrieb nicht',
      'Keine KI-Sichtbarkeit, ChatGPT kennt den Betrieb nicht und empfiehlt Wettbewerber',
    ],
    services: ['Web Design', 'KI-Sichtbarkeit & SEO', 'Social Media Marketing'],
    faqs: [
      { question: 'Braucht ein Handwerksbetrieb eine Website?', answer: 'Ja, 90% der Kunden suchen zuerst online, auch für Handwerker. Eine schnelle, mobile Website mit Leistungen, Referenzen und Terminbutton entscheidet, ob der Anruf kommt oder zur Konkurrenz geht.' },
      { question: 'Was bringt Local SEO für Handwerker?', answer: 'Local SEO stellt Sie in Google Maps und lokalen Suchergebnissen nach vorn, genau dort, wo Kunden „Elektriker in meiner Nähe" suchen. Google Business Profile, lokale Keywords und Bewertungen sind der entscheidende Faktor.' },
      { question: 'Lohnt sich Social Media für Handwerksbetriebe?', answer: 'Ja, besonders für Recruitings und Image: Vorher-Nachher-Projekte, Team-Vorstellung, echte Arbeit zeigen. Das schafft Vertrauen und spricht junge Fachkräfte an, doppelt wirksam.' },
      { question: 'Was kostet eine Website für Handwerker?', answer: 'Bei TnT Studio starten Websites bei 2.500€. Für Handwerksbetriebe empfehlen wir oft eine schlanke Business-Website mit Termin-Link, kein überdimensioniertes Projekt, sondern das, was Anfragen bringt.' },
      { question: 'Wird mein Betrieb bei ChatGPT gefunden?', answer: 'Mit GEO/AEO-Optimierung ja, wir strukturieren Ihre Daten so, dass KI-Systeme Sie verstehen und empfehlen können. Das ist bei lokalen Dienstleistern besonders wirksam, weil KI-Systeme lokale, vertrauenswürdige Anbieter priorisieren.' },
    ],
  },
  {
    slug: 'gastronomie',
    name: 'Gastronomie & Hotellerie',
    tagline: 'Volle Tische durch Online-Sichtbarkeit, von Google bis Instagram.',
    intro: [
      'Gastronomie lebt von Sichtbarkeit in dem Moment, in dem der Gast hungrig ist. „Restaurant in der Nähe", „Café mit Terrasse", „Pizza Lieferdienst", wer in diesen Momenten nicht gefunden wird, verliert den Gast an den Wettbewerber um die Ecke.',
      'Wir helfen Restaurants, Cafés, Bars und Hotels, in genau diesen Momenten präsent zu sein: mit Local SEO, Google Business Profile, appetitlicher Social-Media-Präsenz, Event-Seiten und einer Website, die Reservierungen und Bestellungen direkt annimmt.',
    ],
    painPoints: [
      'Google Maps Profil mit falschen Öffnungszeiten oder fehlenden Fotos',
      'Keine Reservation online, Gäste rufen an oder gehen woanders hin',
      'Social Media brachliegend, Instagram existiert, aber nichts wird gepostet',
      'Keine Website oder nur veraltete Seite mit PDF-Speisekarte von 2019',
      'Delivery & Takeaway nicht online auffindbar',
    ],
    services: ['Web Design', 'KI-Sichtbarkeit & SEO', 'Social Media Marketing', 'Software Development'],
    faqs: [
      { question: 'Was bringt Local SEO für Restaurants?', answer: 'Local SEO bringt Sie in Google Maps und lokale Suchergebnisse, dort, wo Gäste „Restaurant in der Nähe" suchen. Optimiertes Google Business Profile mit Fotos, Bewertungen und aktuellen Daten ist der wichtigste Hebel.' },
      { question: 'Lohnt sich Instagram für Restaurants?', answer: 'Sehr. Gastronomie ist visuell, Gerichte, Atmosphäre, Events. Regelmäßige Posts und Reels mit echtem Content schaffen Appetit vor dem Besuch und werden von KI-Systemen als Vertrauenssignal gewertet.' },
      { question: 'Braucht ein Restaurant eine eigene Website?', answer: 'Nicht zwingend, aber sinnvoll: für Reservierungen, Event-Ankündigungen, Catering-Anfragen und eine konsistente Marke jenseits von Google Maps. Eine schlanke One-Page mit Menü-Link und Reservierungsbutton reicht oft.' },
      { question: 'Was kostet Marketing für Restaurants?', answer: 'Das hängt vom Umfang ab: Google Business Profile Optimierung ist ein einmaliges Projekt, Social Media Betreuung ab ~800€/Monat, Websites ab 2.500€. Wir kalkulieren transparent nach Ihren Zielen.' },
      { question: 'Wie schnell sehen Restaurants Ergebnisse?', answer: 'Google Business Profile Optimierung zeigt oft innerhalb von Wochen Wirkung. Social Media und SEO brauchen 2-3 Monate für messbare Effekte, aber Reservierungen und Anfragen sind sofort trackbar.' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Praxen',
    tagline: 'Patienten finden Ihre Praxis, diskret, professionell, DSGVO-konform.',
    intro: [
      'Patienten suchen heute online: „Zahnarzt in der Nähe", „Physio für Rückenschmerzen", „Heilpraktiker Wuppertal". Wer nicht gefunden wird, verliert Patienten an die Konkurrenz, oder an Dr. Google.',
      'Wir erstellen für Praxen und Gesundheitsbetriebe Websites, die Vertrauen schaffen und Termine generieren: klare Leistungen, Team-Vorstellung, Online-Terminbuchung, Local SEO für die Region und diskrete Social-Media-Präsenz, alles DSGVO-konform.',
    ],
    painPoints: [
      'Keine Website oder veraltete Seite ohne Online-Terminbuchung',
      'Google Maps Profil unvollständig oder mit veralteten Daten',
      'Keine Struktur für KI-Suche, ChatGPT kennt die Praxis nicht',
      'Social Media zu sensibel/themenfremd, oder komplett brachliegend',
      'DSGVO-Abmahn-Risiko durch unsaubere Tools oder Tracking',
    ],
    services: ['Web Design', 'KI-Sichtbarkeit & SEO', 'Social Media Marketing'],
    faqs: [
      { question: 'Braucht eine Arztpraxis eine Website?', answer: 'Ja. Patienten informieren sich vor der Terminbuchung online, Leistungen, Team, Erreichbarkeit, Bewertungen. Eine professionelle Website mit Termin-Link ist heute Standard und expectation-management.' },
      { question: 'Was ist Local SEO für Praxen?', answer: 'Local SEO optimiert Ihre Sichtbarkeit für regionale Patientensuche: optimiertes Google Business Profile, lokale Keywords („Physio Wuppertal"), NAP-Konsistenz und vertrauenswürdige Inhalte. Direkt relevant für neue Patienten.' },
      { question: 'Ist Social Media für Ärzte erlaubt?', answer: 'Ja, mit Grenzen: Werbung für Heilberufe unterliegt berufsrechtlichen Beschränkungen. Wir kennen die Rahmenbedingungen und erstellen Inhalte, die professionell, diskret und regelkonform sind.' },
      { question: 'Wie sicher ist DSGVO-Compliance?', answer: 'Wir bauen DSGVO-konform: kein Tracking ohne Consent, EU-Hosting, keine US-Tools ohne AVV, saubere Datenschutzerklärung. Für Praxen ist das nicht optional, es ist Pflicht und Vertrauensvoraussetzung.' },
      { question: 'Was kostet eine Praxis-Website?', answer: 'Business-Websites starten bei 2.500€. Für Praxen empfehlen wir eine schlanke Site mit Leistungen, Team, Anfahrt und Termin-Link, plus Local SEO für die Region. Nach dem kostenlosen Check erhalten Sie ein Festpreis-Angebot.' },
    ],
  },
  {
    slug: 'kanzleien',
    name: 'Kanzleien & Steuerberatung',
    tagline: 'Mandanten, die Sie finden, bevor der Wettbewerber sie hat.',
    intro: [
      'Kanzleien leben von Vertrauen, und Vertrauen beginnt vor dem ersten Gespräch. Wer bei „Steuerberater für Freiberufler" oder „Fachanwalt Arbeitsrecht Wuppertal" nicht gefunden wird, ist für potenzielle Mandanten unsichtbar.',
      'Wir bauen für Kanzleien und Steuerkanzleien digitale Präsenz mit Substanz: expertische Inhalte, die bei Google und ChatGPT zitiert werden, klare Mandantengewinnung-Pfade, LinkedIn-Positionierung für die Partner und eine Website, die Seriosität und Kompetenz auf den ersten Blick vermittelt.',
    ],
    painPoints: [
      'Website von 2015, statisch, nicht mobil, kein Content',
      'Keine Content-Strategie, bei fachlichen Fragen sind andere Quellen sichtbarer',
      'LinkedIn-Präsenz der Partner brachliegend',
      'Keine KI-Sichtbarkeit, ChatGPT kennt die Kanzlei nicht',
      'Mandanten finden Sie nur über Empfehlungen, kein digitaler Kanal',
    ],
    services: ['KI-Sichtbarkeit & SEO', 'Web Design', 'Social Media Marketing', 'Software Development'],
    faqs: [
      { question: 'Was bringt Content Marketing für Kanzleien?', answer: 'Fachliche Beiträge zu Mandantenthemen („Was kostet eine GmbH-Gründung?", „Arbeitsrecht für Arbeitgeber") machen Sie bei Google und ChatGPT zur zitierten Quelle, genau dort, wo Mandanten sich informieren, bevor sie anrufen.' },
      { question: 'Ist LinkedIn wichtig für Steuerberater?', answer: 'Sehr, besonders für B2B-Mandate. Die Kanzlei-Partner positionieren sich als Experte für ihr Fachgebiet, Kanzlei postet fachliche Einblicke. Wir erstellen Content-Strategien, die serios, nicht werblich sind.' },
      { question: 'Was ist GEO für Kanzleien?', answer: 'GEO optimiert Ihre Kanzlei dafür, von KI-Systemen empfohlen zu werden, wenn jemand ChatGPT fragt „Welche Steuerkanzlei für Freiberufler in Wuppertal?". Strukturierte Daten, zitierfähige Fachinhalte und Entity-Konsistenz sind der Schlüssel.' },
      { question: 'Brauchen Kanzleien Social Media?', answer: 'Ja, aber anders als B2C: LinkedIn statt Instagram, fachliche Positionierung statt Promotion. Wir entwickeln Strategien, die Mandanten anziehen ohne werblich zu wirken, im Rahmen der berufsrechtlichen Vorgaben.' },
      { question: 'Was kostet eine Kanzlei-Website mit SEO?', answer: 'Business-Websites ab 2.500€, comprehensive SEO/GEO-Betreuung als monatliches Honorar. Für Kanzleien empfehlen wir die Kombination aus Website + laufendem Content + Local SEO, als System, nicht als Einzelmaßnahmen.' },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail & E-Commerce',
    tagline: 'Mehr Umsatz durch bessere Produkt-Sichtbarkeit, organisch und paid.',
    intro: [
      'Der Online-Handel ist ein Verdrängungswettbewerb: Wer bei „Produkt + kaufen" nicht in den Top 3 steht, wird nicht geklickt. Organische Sichtbarkeit (SEO) und bezahlte Sichtbarkeit (SEA) entscheiden über Umsatz, nicht über Budget.',
      'Wir helfen Retailern und E-Commerce-Unternehmen, in genau den Momenten gefunden zu werden, in denen Kaufabsicht besteht: mit technischer SEO, Content für Kaufent scheidungen, Google Shopping Ads, Social Commerce und einem System, das Traffic in Umsatz verwandelt.',
    ],
    painPoints: [
      'Produkte ranken nicht, Wettbewerber dominieren die Suchergebnisse',
      'Keine Content-Strategie für Kaufberatung, Blog ist leer oder generisch',
      'Google Ads ohne Optimierung, Budget brennt ohne ROI',
      'Social Media postet Produktbilder, aber kein Sales-Funnel',
      'Conversion-Rate unter 1%, Traffic da, Umsatz nicht',
    ],
    services: ['KI-Sichtbarkeit & SEO', 'Web Design', 'Social Media Marketing', 'Software Development'],
    faqs: [
      { question: 'Was bringt SEO für E-Commerce?', answer: 'SEO bringt qualifizierten Traffic ohne Ads-Kosten: Produktseiten, Kategorie-Content, Blog-Artikel zu Kaufberatung. Bei Kaufintention ranken organische Ergebnisse oft vor Ads, und kosten pro Klick nichts.' },
      { question: 'Soll ich Google Ads oder SEO?', answer: 'Beides, als System. SEA für sofortige Sichtbarkeit und Testen von Keywords, SEO für langfristige organische Position. Wir optimieren beide Kanäle gemeinsam und zeigen, welcher Euro was bringt.' },
      { question: 'Was ist Social Commerce?', answer: 'Social Commerce verkauft direkt über Social Media: Instagram Shopping, TikTok Shop, Facebook Katalog. Wir verbinden organische Content-Strategie mit Sales-Pfaden, Content, der nicht nur liked, sondern kauft.' },
      { question: 'Wie optimiere ich meine Conversion-Rate?', answer: 'Conversion-Optimierung: Seitenladezeit, Checkout-Prozess, Produktbilder, Trust-Signals, Remarketing. Wir analysieren den Funnel, identifizieren die Leakages und optimieren systematisch, mit A/B-Tests.' },
      { question: 'Was kostet E-Commerce-SEO?', answer: 'Technische SEO ist ein einmaliges Projekt, Content- und Link-Building laufend. SEA-Management ist monatliches Honorar + Ad-Budget. Wir kalkulieren transparent, und zeigen ROI in Euro, nicht in Vanities.' },
    ],
  },
]

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug)
