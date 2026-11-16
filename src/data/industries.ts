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
      { question: 'Was kostet eine Website für Handwerker?', answer: 'Bei TnT Studio starten Websites bei 500€ (Landingpage), Business-Websites ab 2.500€. Für Handwerksbetriebe empfehlen wir oft eine schlanke Business-Website mit Termin-Link, kein überdimensioniertes Projekt, sondern das, was Anfragen bringt.' },
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
      { question: 'Was kostet Marketing für Restaurants?', answer: 'Das hängt vom Umfang ab: Google Business Profile Optimierung ist ein einmaliges Projekt, Social Media Betreuung ab 1.200€/Monat, Websites ab 500€ (Landingpage) bzw. 2.500€ (Business-Website). Wir kalkulieren transparent nach Ihren Zielen.' },
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
      'Wir bauen für Kanzleien und Steuerkanzleien digitale Präsenz mit Substanz: fachlich fundierte Inhalte, die bei Google und ChatGPT zitiert werden, klare Mandantengewinnung-Pfade, LinkedIn-Positionierung für die Partner und eine Website, die Seriosität und Kompetenz auf den ersten Blick vermittelt.',
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
  {
    slug: 'immobilien',
    name: 'Immobilien & Verwaltung',
    tagline: 'Mehr Besichtigungen und Mandate durch digitale Sichtbarkeit.',
    intro: [
      'Immobilien werden heute online entschieden, lange bevor ein Makler angerufen wird. Wer bei „Wohnung mieten Wuppertal", „Haus kaufen Bergisches Land" oder „Immobilienmakler in der Nähe" nicht gefunden wird, verliert das Mandat an die Konkurrenz — oder an das Portal, das die Provision spart.',
      'Wir helfen Maklern, Hausverwaltungen und Bauträgern, eigenständig sichtbar zu werden: mit Websites, die Objekte und Referenzen präsentieren, Local SEO für das Einzugsgebiet, KI-Sichtbarkeit, damit ChatGPT den richtigen Makler empfiehlt, und Social Media, das Vertrauen bei Eigentümern und Mietern schafft.',
    ],
    painPoints: [
      'Keine eigene Website, Abhängigkeit von Portalen mit Provisionsdruck',
      'Objektbilder auf Facebook, aber keine durchsuchbare Angebotsseite',
      'Google Maps Profil dünn, Bewertungen fehlen oder sind veraltet',
      'KI-Systeme kennen den Makler nicht und empfehlen Wettbewerber',
      'Hausverwaltungen ohne digitale Mieter-Kommunikation',
    ],
    services: ['Web Design', 'KI-Sichtbarkeit & SEO', 'Social Media Marketing'],
    faqs: [
      { question: 'Braucht ein Immobilienmakler eine eigene Website?', answer: 'Ja, als Vertrauensanker jenseits der Portale: Referenzen, Team, Bewertungen, Objektpräsentation. Portale bringen Traffic, aber eine eigene Seite macht Sie zur Marke und senkt die Abhängigkeit von Provisionsmodellen.' },
      { question: 'Was bringt Local SEO für Immobilien?', answer: 'Local SEO bringt Sie in Google Maps und lokale Suchergebnisse nach vorn, genau dort, wo Käufer und Mieter regional suchen. Ein gepflegtes Google Business Profile mit Objekten, Fotos und Bewertungen ist der wichtigste lokale Hebel.' },
      { question: 'Wird mein Maklerbüro bei ChatGPT empfohlen?', answer: 'Mit GEO/AEO-Optimierung ja: Wir strukturieren Unternehmensdaten, Bewertungen und lokale Expertise so, dass KI-Systeme Sie als relevante Antwortquelle verstehen. Besonders bei lokalen Kaufentscheidungen gewichten KI-Systeme regionale Anbieter stark.' },
      { question: 'Was kostet eine Immobilien-Website?', answer: 'Bei TnT Studio starten Landingpages bei 500€, Business-Websites mit Objektbereich ab 2.500€. Für Makler empfehlen wir eine schlanke Business-Website mit Angebotsliste, Kontakt und Termin-Link, kein überdimensioniertes Portal.' },      { question: 'Hilft Social Media bei Immobilien?', answer: 'Ja: Objekte als Reels und Karussells, Team-Vorstellung, Markt-Updates. Immobilien ist Vertrauensgeschäft, und Social Media ist der günstigste Vertrauensbeweis vor dem ersten Besichtigungstermin.' },
    ],
  },
  {
    slug: 'beauty-wellness',
    name: 'Beauty, Wellness & Fitness',
    tagline: 'Volle Terminkalender durch Online-Sichtbarkeit und Social Media.',
    intro: [
      'Friseure, Kosmetikstudios, Massagen und Fitnessstudios leben von lokalen Empfehlungen und spontanen Entscheidungen: „Friseur in der Nähe", „Nagelstudio um die Ecke", „Fitnessstudio mit Probetraining". Wer online nicht gefunden wird oder unscheinbar wirkt, verliert Kunden an die Konkurrenz.',
      'Wir helfen Beauty- und Wellness-Betrieben, sichtbar zu werden, wo Kunden entscheiden: mit Websites, die Online-Termine und Preise klar zeigen, Local SEO für die Region, Instagram- und TikTok-Strategien, die Terminbuchungen bringen, und KI-Sichtbarkeit, damit auch ChatGPT den richtigen Betrieb kennt.',
    ],
    painPoints: [
      'Keine Website oder nur Instagram-Profil ohne Preisliste und Buchungslink',
      'Terminbuchung per Telefon, verpasste Anrufe außerhalb der Öffnungszeiten',
      'Google Maps Profil ohne Fotos, Preise oder aktuelle Öffnungszeiten',
      'Social Media postet unregelmäßig, kein System, kein ROI',
      'Neue Öffnungen oder Angebote erreichen die Nachbarschaft nicht',
    ],
    services: ['Web Design', 'KI-Sichtbarkeit & SEO', 'Social Media Marketing'],
    faqs: [
      { question: 'Braucht ein Friseursalon eine Website?', answer: 'Nicht zwingend, aber ein Google Business Profile mit Fotos, Preisen und Online-Terminlink bringt messbar mehr Buchungen als ein reines Instagram-Profil. Eine schlanke One-Page mit Leistungen, Team und Buchungsbutton reicht.' },
      { question: 'Was bringt Social Media für Beauty-Studios?', answer: 'Beauty ist visuell und emotional: Vorher-Nachher, Behandlungsvideos, Team-Content. Reels und Stories mit klaren Call-to-Actions („Termin buchen") wandeln Reichweite in Kalender.' },
      { question: 'Lohnt sich Local SEO für ein Nagelstudio?', answer: 'Sehr: Suchanfragen wie „Nagelstudio in der Nähe" sind hyperlokal und kaufnah. Local SEO mit optimiertem Google Business Profile ist hier oft der billigste Kundengewinn-Kanal überhaupt.' },      { question: 'Was kostet Marketing für ein Beauty-Studio?', answer: 'Websites ab 500€ (Landingpage) oder 2.500€ (Business-Website), Social Media Betreuung ab 1.200€/Monat. Für viele Studios reicht zuerst ein optimiertes Google Profil plus ein paar Posts pro Woche.' },
      { question: 'Kann ich Online-Termine über die Website buchen?', answer: 'Ja: Wir integrieren Buchungssysteme (z. B. Terminbuchungs-Tools) direkt in die Website, sodass Kunden 24/7 Termine buchen können, auch wenn das Studio geschlossen ist.' },
    ],
  },
  {
    slug: 'pflege',
    name: 'Pflege & Senioren',
    tagline: 'Vertrauen bei Familien schaffen, die einen Pflegedienst suchen.',
    intro: [
      'Die Suche nach einem Pflegedienst ist eine der emotionalsten und wichtigsten Entscheidungen einer Familie. Wer sie trifft, entscheidet oft innerhalb von Tagen: nach Empfehlung, nach Google, nach dem ersten Eindruck der Website. Fehlt die digitale Präsenz, gewinnt der Anbieter mit der besten sichtbaren Vertrauensbasis.',
      'Wir helfen Pflegediensten, Betreuten-Wohnen-Anbietern und Seniorenbetreuungen, seriös und empathisch sichtbar zu werden: mit Websites, die Leistungen, Team und Qualität verständlich erklären, Local SEO für die Region, diskrete Social-Media-Präsenz und DSGVO-konforme Kontaktwege.',
    ],
    painPoints: [
      'Keine Website oder veraltete Seite ohne Team-Vorstellung und Qualitätsnachweise',
      'Google Maps Profil dünn, Zertifizierungen und Leistungen fehlen',
      'Angehörige finden den Dienst nicht oder misstrauen dem ersten Eindruck',
      'Keine Online-Beratung oder Kontaktformular mit DSGVO-konformer Datenverarbeitung',
      'Pflegekräfte-Recruiting ohne digitale Arbeitgebermarke',
    ],
    services: ['Web Design', 'KI-Sichtbarkeit & SEO', 'Social Media Marketing'],
    faqs: [
      { question: 'Braucht ein Pflegedienst eine Website?', answer: 'Unbedingt. Angehörige recherchieren online, bevor sie anrufen. Eine Website mit Leistungen, Team, Zertifizierungen und echten Eindrücken entscheidet über Vertrauen und erste Kontaktaufnahme.' },
      { question: 'Was bringt Local SEO für Pflegedienste?', answer: 'Local SEO bringt Sie in Google Maps und lokale Suchergebnisse nach vorn, bei Anfragen wie „Pflegedienst in der Nähe" oder „Betreuung für Senioren Wuppertal". Ein vollständiges Google Business Profile mit Fotos und Bewertungen ist essential.' },
      { question: 'Wie wichtig ist DSGVO bei Pflege-Websites?', answer: 'Sehr: Patientendaten und Gesundheitsinformationen sind besonders schützenswert. Wir setzen auf DSGVO-konforme Kontaktformulare, minimierte Datenverarbeitung und transparente Datenschutzhinweise, kein Tracking ohne Einwilligung.' },      { question: 'Hilft Social Media bei der Pflege-Recruiting?', answer: 'Ja: Pflegekräfte wählen Arbeitgeber nach Kultur und Wertschätzung. Team-Content, Einblicke in den Arbeitsalltag und Benefits-Posts sprechen Pflegekräfte an, die aktiv suchen.' },
      { question: 'Was kostet eine Website für einen Pflegedienst?', answer: 'Business-Websites ab 2.500€, Landingpages ab 500€. Für Pflegedienste empfehlen wir eine seriöse Business-Website mit Team, Leistungen und Kontaktmöglichkeit, plus Local SEO für die Region.' },
    ],
  },
]

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug)
