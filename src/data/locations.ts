export interface LocationFAQ {
  question: string
  answer: string
}

export interface Location {
  slug: string
  name: string
  region: string
  distance: string
  tagline: string
  intro: string[]
  industries: string[]
  districts: string[]
  faqs: LocationFAQ[]
}

export const locations: Location[] = [
  {
    slug: 'wuppertal',
    name: 'Wuppertal',
    region: 'Bergisches Land',
    distance: 'Unser Standort',
    tagline: 'Medienagentur aus Wuppertal, für Unternehmen im gesamten Bergischen Land.',
    intro: [
      'TnT Studio sitzt in Wuppertal und ist damit die Medienagentur direkt vor Ort, kein Remote-Call aus einer anderen Stadt, sondern ein Team, das den Bergischen Markt kennt. Wir betreuen Unternehmen von Elberfeld und Barmen über Vohwinkel und Ronsdorf-nach Cronenberg und Langerfeld.',
      'Wuppertal ist Wirtschaftsstandort mit Tradition: vom Textil- und Maschinenbau bis zu Handwerk, Dienstleistung und einer wachsenden Kreativwirtschaft. Wir sprechen diese Sprache, und bauen digitale Auftritte, die bei der lokalen Zielgruppe ankommen.',
    ],
    industries: ['Handwerk & Bau', 'Einzelhandel & E-Commerce', 'Dienstleister & Beratung', 'Kreativwirtschaft', 'Industrie & Produktion'],
    districts: ['Elberfeld', 'Barmen', 'Vohwinkel', 'Ronsdorf', 'Cronenberg', 'Langerfeld', 'Oberbarmen', 'Sudberg'],
    faqs: [
      { question: 'Ist TnT Studio wirklich in Wuppertal ansässig?', answer: 'Ja. TnT Studio hat seinen Sitz in Wuppertal (Julius-Lucas-Weg 90, 42113 Wuppertal). Wir arbeiten remote-first, kommen aber bei Bedarf auch vor Ort, für Shootings, Meetings oder Drehs im Bergischen Land.' },
      { question: 'Welche Leistungen bietet TnT Studio in Wuppertal an?', answer: 'Alle Leistungen aus einer Hand: Web Design (inkl. Branding & Logo), KI-Sichtbarkeit & SEO, Social Media Marketing und Software Development. Von der ersten Website-zum laufenden Social-Media-Betrieb.' },
      { question: 'Arbeitet TnT Studio nur für Unternehmen in Wuppertal?', answer: 'Nein. Wuppertal ist unser Zuhause, nicht unsere Grenze. Wir betreuen Kunden in ganz NRW, Deutschland, Europa und den USA, remote. Der lokale Fokus hilft uns, den Bergischen Markt besonders gut zu verstehen.' },
      { question: 'Was kostet eine Website bei TnT Studio in Wuppertal?', answer: 'Landingpages ab 500 €, Business-Websites ab 2.500 €, E-Commerce-Plattformen ab 5.000 €. Nach dem ersten kostenlosen Call bekommst du ein transparentes Fixpreis-Angebot, ohne versteckte Kosten.' },
    ],
  },
  {
    slug: 'solingen',
    name: 'Solingen',
    region: 'Bergisches Land',
    distance: '15 Min. von Wuppertal',
    tagline: 'Medienagentur für die Klingenstadt, von der Brautmoden-Branche bis zum Einzelhandel.',
    intro: [
      'Solingen ist mehr als „die Klingenstadt", die Stadt ist ein Zentrum der Präzisionsindustrie, der Brautmoden und des lokalen Einzelhandels. Unternehmen hier verkaufen weltweit, brauchen aber einen digitalen Auftritt, der international genauso stark ist wie lokal.',
      'Wir betreuen Solinger Unternehmen mit Websites, die im Export-Geschäft konvertieren, Social-Media-Content für lokale Reichweite und E-Commerce-Lösungen, die das Handwerk und die Qualität sichtbar machen.',
    ],
    industries: ['Klingen- & Präzisionsindustrie', 'Braut- & Hochzeitsmode', 'Einzelhandel & Fachhandel', 'Produktion & Export'],
    districts: ['Solingen-Mitte', 'Ohligs', 'Merscheid', 'Gräfrath', 'Widder', 'Leichlingen'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Solingen?', answer: 'Ja. Solingen liegt nur 15 Autominuten von unserem Standort in Wuppertal. Wir betreuen dort Unternehmen aus der Klingen- und Präzisionsindustrie, dem Brautmoden-Segment und dem lokalen Einzelhandel, remote oder vor Ort.' },
      { question: 'Welche Leistungen sind für Solinger Unternehmen relevant?', answer: 'Besonders gefragt sind Web Design mit internationalem SEO-Fokus, E-Commerce-Lösungen für Export-Kataloge und Social Media Marketing für lokale Reichweite in Solingen und dem Bergischen Land.' },
      { question: 'Muss ich für eine Zusammenarbeit nach Wuppertal kommen?', answer: 'Nein. Die gesamte Zusammenarbeit läuft remote, Video-Calls, Figma, geteilte Dokumente. Nur für Produktionen wie Fotoshootings oder Drehs kommen wir nach Absprache zu dir nach Solingen.' },
    ],
  },
  {
    slug: 'remscheid',
    name: 'Remscheid',
    region: 'Bergisches Land',
    distance: '20 Min. von Wuppertal',
    tagline: 'Medienagentur für die Werkzeugstadt, Industrie, Handwerk und Mittelstand.',
    intro: [
      'Remscheid ist die Heimat der Werkzeugindustrie und eines der industriellsten Mittelstandszentren im Bergischen Land. Unternehmen hier beliefern Weltmarktführer, aber ihre digitale Präsenz hinkt der Produktqualität oft hinterher.',
      'Wir helfen Remscheider Unternehmen, ihre technische Kompetenz sichtbar zu machen: Websites, die komplexe Produkte verständlich präsentieren, Social Media für Recruiting und Employer Branding.',
    ],
    industries: ['Werkzeug- & Maschinenbau', 'Industrie & Zulieferer', 'Handwerk & Produktion', 'Recruiting & Employer Branding'],
    districts: ['Remscheid-Mitte', 'Lennep', 'Möding', 'Reifen', 'Stockheim', 'Hasten'],
    faqs: [
      { question: 'Was macht TnT Studio für Unternehmen in Remscheid?', answer: 'Wir betreuen Remscheider Industrie- und Handwerksunternehmen mit Web Design, Social Media Marketing und KI-Sichtbarkeit & SEO. Fokus: komplexe Produkte verständlich machen und qualifizierte Mitarbeiter ansprechen.' },
      { question: 'Ist Employer Branding bei TnT Studio möglich?', answer: 'Ja. Social Media Recruiting ist einer unserer Schwerpunkte, Reels und Content, die Azubis und Fachkräfte ansprechen. Für das Bergische Land wissen wir, welche Formate bei der lokalen Zielgruppe funktionieren.' },
      { question: 'Wie funktioniert die Zusammenarbeit mit einer Agentur aus Wuppertal?', answer: 'Vollständig remote. Du bekommst einen festen Ansprechpartner (die Gründer selbst), wöchentliche Updates und transparente Kommunikation, ohne teure Account-Manager-Strukturen größerer Agenturen.' },
    ],
  },
  {
    slug: 'leverkusen',
    name: 'Leverkusen',
    region: 'Rheinland',
    distance: '30 Min. von Wuppertal',
    tagline: 'Medienagentur für Leverkusen, Pharma, Chemie und der Dienstleistungssektor.',
    intro: [
      'Leverkusen ist Wirtschaftsstandort am Rhein: Bayer AG als Anker, Pharma, Chemie, Logistik und ein wachsender Dienstleistungssektor. Unternehmen hier arbeiten international, ihre digitale Präsenz muss es auch.',
      'Wir betreuen Leverkusener Unternehmen mit Websites auf internationalem Niveau, LinkedIn- und B2B-Content-Strategien für das Personalmarketing und E-Commerce-Lösungen für den Online-Vertrieb.',
    ],
    industries: ['Pharma & Chemie', 'Logistik & Chemiepark', 'B2B & Dienstleistung', 'Sport & Event'],
    districts: ['Leverkusen-Mitte', 'Opladen', 'Hitdorf', 'Steinbüchel', 'Rheindorf', 'Alkenrath'],
    faqs: [
      { question: 'Betreut TnT Studio Kunden in Leverkusen?', answer: 'Ja. Leverkusen liegt ca. 30 Autominuten von Wuppertal. Wir arbeiten für Unternehmen zwischen Rheinufer und Chemiepark, von der Corporate Website-zum Social-Media-Betrieb.' },
      { question: 'Welche Leistungen passen zu Leverkusener B2B-Unternehmen?', answer: 'B2B-Fokus: Web Design mit Lead-Generierung, LinkedIn-Content-Strategien, Software Development für interne Tools und Social Media Marketing für Employer Branding im Wettbewerb um Fachkräfte.' },
      { question: 'Ist eine Zusammenarbeit mit einer Wuppertaler Agentur für Leverkusen realistisch?', answer: 'Absolut, remote ist unser Standard. Standort ist kein Nachteil: Du arbeitest direkt mit den Gründern, nicht mit einem Account-Team. Für Shootings vor Ort kommen wir nach Leverkusen.' },
    ],
  },
  {
    slug: 'koeln',
    name: 'Köln',
    region: 'Rheinland',
    distance: '50 Min. von Wuppertal',
    tagline: 'Medienagentur für Köln, Fashion, Retail, Gastronomie und Kreativwirtschaft.',
    intro: [
      'Köln ist eine der medienaffinsten Städte Deutschlands, Fashion, Retail, Gastronomie, Events und eine starke Kreativwirtschaft. Hier ist der Anspruch an Design und Content hoch, und die Konkurrenz um Aufmerksamkeit groß.',
      'Wir betreuen Kölner Unternehmen mit Websites, die im umkämpften Markt bestehen, Social-Media-Content für die junge, mobile Zielgruppe der Stadt und Web Design mit starkem Branding, das sich von der Masse abhebt.',
    ],
    industries: ['Fashion & Retail', 'Gastronomie & Events', 'Kreativwirtschaft & Agenturen', 'Mittelstand & Dienstleistung'],
    districts: ['Innenstadt', 'Nippes', 'Mülheim', 'Ehrenfeld', 'Lindenthal', 'Porz'],
    faqs: [
      { question: 'Warum eine Agentur aus Wuppertal für ein Projekt in Köln?', answer: 'Weil Qualität nicht vom Standort abhängt. Wir arbeiten remote mit denselben Tools wie Kölner Agenturen, nur ohne deren Overhead. Du sparst Budget und bekommst die Gründer selbst als Ansprechpartner.' },
      { question: 'Welche Leistungen sind in Köln besonders gefragt?', answer: 'Web Design für Retail und Gastronomie, Social Media Marketing für Instagram und TikTok sowie Web Design mit Branding für den Markteintritt.' },
      { question: 'Macht ihr auch Shootings in Köln?', answer: 'Ja. Für Fotoshootings und Videoproduktionen kommen wir nach Absprache nach Köln. Alternativ nutzen wir lokale Partner oder arbeiten mit Material, das ihr vor Ort aufnehmt.' },
    ],
  },
  {
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    region: 'Rheinland',
    distance: '40 Min. von Wuppertal',
    tagline: 'Medienagentur für Düsseldorf, Mode, Medien und Wirtschaftsstandort.',
    intro: [
      'Düsseldorf ist Landeshauptstadt, Mode-Metropole und Medienstandort. Unternehmen hier repräsentieren anspruchsvolle Marken, der digitale Auftritt muss mithalten.',
      'Wir betreuen Düsseldorfer Unternehmen mit High-End Web Design, Social Media für Lifestyle-Marken und Software-Lösungen für wachsende Teams.',
    ],
    industries: ['Mode & Lifestyle', 'Medien & Kommunikation', 'Wirtschaft & Beratung', 'Events & Gastronomie'],
    districts: ['Altstadt', 'Oberkassel', 'Flingern', 'Lörick', 'Gerresheim', 'Bilk'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Düsseldorf?', answer: 'Ja. Düsseldorf ist einer unserer wichtigsten Märkte außerhalb des Bergischen Landes, von der Modeboutique in Oberkassel-zum Dienstleister in Flingern.' },
      { question: 'Welche Leistungen passen zu Mode- und Lifestyle-Marken?', answer: 'Social Media Marketing für Instagram und TikTok, Web Design mit Editorial-Charakter und Logo-Design inklusive, sowie KI-Sichtbarkeit für Luxury-Suchen.' },
      { question: 'Ist TnT Studio eine „richtige" Agentur für Düsseldorf?', answer: 'Wir sind eine Boutique-Agentur: kein Account-Management, keine Zehner-Teams, sondern die Gründer selbst. Für viele Marken ist genau das der Vorteil: direkter Draht, schnellere Entscheidungen, faire Preise.' },
    ],
  },
  {
    slug: 'bonn',
    name: 'Bonn',
    region: 'Rheinland',
    distance: '45 Min. von Wuppertal',
    tagline: 'Medienagentur für Bonn, Startup-Szene, Dienstleister und Institutionen.',
    intro: [
      'Bonn vereint Bundesstadt, Startup-Szene und renommierten Mittelstand. Zwischen UN-Viertel und StartUp-Hotspots entstehen digitale Produkte, die wir mitbauen und betreuen.',
      'Wir unterstützen Bonner Unternehmen und Gründerteams mit Web Design, Software Development, KI-Sichtbarkeit & SEO und Social Media Marketing, vom ersten Pitch-zum Scale-up.',
    ],
    industries: ['Startups & Tech', 'Dienstleistung & Beratung', 'Wissenschaft & Bildung', 'Mittelstand'],
    districts: ['Zentrum', 'Nordstadt', 'Endenich', 'Poppelsdorf', 'Beuel', 'Graurheindorf'],
    faqs: [
      { question: 'Betreut TnT Studio Kunden in Bonn?', answer: 'Ja. Bonn ist ~45 Autominuten von Wuppertal entfernt, für uns kein Unterschied, da wir ohnehin remote arbeiten. Wir betreuen Startups, Dienstleister und etabliertes Mittelstand.' },
      { question: 'Könnt ihr auch Software für Startups in Bonn entwickeln?', answer: 'Ja. Software Development ist eine unserer Kernleistungen, von MVPs für Gründerteams-zu produktiven Web-Apps und API-Integrationen. Tech-Stack: React, TypeScript, Node.js.' },
      { question: 'Was kostet eine Zusammenarbeit für ein Bonner Startup?', answer: 'Wir kalkulieren transparent nach Aufwand, keine versteckten Stundensätze-Rätsel. Nach dem ersten kostenlosen Call erhältst du ein Fixpreis-Angebot für deinen Scope.' },
    ],
  },
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'Niederrhein',
    distance: '40 Min. von Wuppertal',
    tagline: 'Medienagentur für Mönchengladbach, Maschinenbau, Handel und Sport.',
    intro: [
      'Mönchengladbach ist Wirtschaftsstandort mit starker Maschinenbau-Tradition und einer lebendigen innerstädtischen Einzelhandelslandschaft. Unternehmen zwischen Rheydt und Gladbach brauchen digitale Auftritte, die regional und überregional funktionieren.',
      'Wir betreuen Gladbacher Unternehmen mit Web Design, E-Commerce-Lösungen, KI-Sichtbarkeit & SEO und Social Media Marketing, vom Maschinenbauer-zur Gastro-Szene.',
    ],
    industries: ['Maschinenbau & Produktion', 'Einzelhandel & E-Commerce', 'Gastronomie & Events', 'Dienstleistung'],
    districts: ['Gladbach', 'Rheydt', 'Windberg', 'Hockstein', 'Asselen', 'Eicken'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Mönchengladbach?', answer: 'Ja. Wir betreuen Kunden in Mönchengladbach und dem gesamten Niederrhein, von Web Design für den Mittelstand-zu Social-Media-Kampagnen für den lokalen Handel.' },
      { question: 'Welche Leistungen passen zu Mönchengladbacher Unternehmen?', answer: 'Web Design und E-Commerce für den Einzelhandel, Social Media Marketing für die Gastronomie, KI-Sichtbarkeit für lokale Reichweite und Software Development für Produktionsprozesse.' },
      { question: 'Wie schnell kann ein Projekt in Mönchengladbach starten?', answer: 'Sofort, remote ist unser Standard. Nach dem ersten Call starten wir innerhalb weniger Tage mit Discovery und Design. Für Shootings vor Ort stimmen wir Termine in Gladbach ab.' },
    ],
  },
  {
    slug: 'hagen',
    name: 'Hagen',
    region: 'Südwestfalen',
    distance: '35 Min. von Wuppertal',
    tagline: 'Medienagentur für Hagen und Südwestfalen, Ardey, Volmetal und Umland.',
    intro: [
      'Hagen und das umliegende Volmetal sind das Herz von Südwestfalen: mittelständische Produktion, Handwerk und Dienstleistung in einer Region, die oft übersehen wird, digital wie analog.',
      'Wir geben Hagener Unternehmen eine digitale Präsenz, die mit der Qualität ihrer Produkte mithalten kann: Websites, Social Media, KI-Sichtbarkeit und Software, remote, direkt und fair kalkuliert.',
    ],
    industries: ['Produktion & Mittelstand', 'Handwerk', 'Dienstleistung', 'Einzelhandel'],
    districts: ['Hagen-Mitte', 'Eilpe', 'Boele', 'Emst', 'Delstern', 'Haspe'],
    faqs: [
      { question: 'Betreut TnT Studio Kunden in Hagen?', answer: 'Ja. Hagen liegt ~35 Autominuten von Wuppertal. Wir betreuen Unternehmen aus Hagen, dem Volmetal und ganz Südwestfalen, vollständig remote.' },
      { question: 'Welche Leistungen sind für Hagener Mittelständler relevant?', answer: 'Web Design mit Fokus auf Lead-Generierung, Social Media für Employer Branding im Wettbewerb um Fachkräfte und KI-Sichtbarkeit für die lokale Bekanntheit.' },
      { question: 'Ist eine Agentur aus dem Bergischen Land für Südwestfalen sinnvoll?', answer: 'Absolut, die Region ist wirtschaftlich verflochten. Wir kennen den mittelständischen Markt und arbeiten ohne Büro-Overhead: das Budget fließt in dein Projekt, nicht in Mieten.' },
    ],
  },
  {
    slug: 'witten',
    name: 'Witten',
    region: 'Ennepe-Ruhr-Kreis',
    distance: '25 Min. von Wuppertal',
    tagline: 'Medienagentur für Witten, Nahverkehrsregion mit mittelständischem Rückgrat.',
    intro: [
      'Witten liegt zwischen Ruhrgebiet und Bergischem Land, eine Region, in der viele Unternehmen zwischen zwei Wirtschaftsräumen agieren. Diese Brücken-Position ist auch digital eine Chance.',
      'Wir betreuen Wittener Unternehmen mit Web Design, KI-Sichtbarkeit & SEO, Social Media Marketing und Software Development, die beide Märkte erreicht: lokal im Ennepe-Ruhr-Kreis und überregional im Bergischen Land.',
    ],
    industries: ['Mittelstand & Produktion', 'Handwerk', 'Einzelhandel', 'Dienstleistung'],
    districts: ['Witten-Mitte', 'Bommern', 'Heven', 'Stockum', 'Annen', 'Herbede'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Witten?', answer: 'Ja. Witten liegt nur ~25 Autominuten von unserem Standort. Wir betreuen Wittener Unternehmen remote, mit Shootings vor Ort bei Bedarf.' },
      { question: 'Welche Leistungen passen zu Unternehmen in Witten?', answer: 'Alle, von der ersten Website über Social Media-zur Software. Besonders gefragt sind Web Design für den Mittelstand und KI-Sichtbarkeit für die regionale Sichtbarkeit.' },
      { question: 'Wie läuft die Zusammenarbeit ab?', answer: 'Wie bei allen Kunden: kostenloses Erstgespräch, transparentes Angebot, Umsetzung mit klaren Meilensteinen. Du hast einen festen Ansprechpartner, die Gründer selbst.' },
    ],
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    region: 'Hauptstadt',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Berlins Kreativwirtschaft, mit KI-Sichtbarkeit, die lokale Agenturen nicht bieten.',
    intro: [
      'Berlin ist Deutschlands Kreativ- und Startup-Hauptstadt: Zehntausende KMU zwischen Kreuzberg und Prenzlauer Berg brauchen eine digitale Präsenz, die genauso schnell ist wie ihr Markt.',
      'Die meisten Agenturen in Berlin machen klassisches SEO und Social Media. Kaum jemand optimiert für ChatGPT, Perplexity und Google AI Overviews. Genau dort setzen wir an: Ihr Berliner Unternehmen wird nicht nur bei Google gefunden, sondern auch dann, wenn Kunden KI fragen.',
    ],
    industries: ['Kreativwirtschaft & Startups', 'Gastronomie & Events', 'E-Commerce & Retail', 'Dienstleistung & Beratung'],
    districts: ['Mitte', 'Prenzlauer Berg', 'Friedrichshain', 'Kreuzberg', 'Neukölln', 'Charlottenburg'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Berlin?', answer: 'Ja, vollständig remote. Wir arbeiten mit Berliner Startups, Agenturen und Mittelständlern zusammen, mit denselben Prozessen wie mit Kunden in Wuppertal.' },
      { question: 'Was macht TnT Studio anders als Berliner Agenturen?', answer: 'Wir optimieren nicht nur für Google, sondern auch für KI-Systeme wie ChatGPT, Perplexity und Gemini: llms.txt, Schema.org, Answer-Content. Diese systematische KI-Sichtbarkeit bieten die meisten Agenturen in Berlin noch nicht an.' },
      { question: 'Was kostet eine Website für ein Berliner Unternehmen?', answer: 'Landingpages ab 500 €, Business-Websites ab 2.500 €. Nach dem kostenlosen Check erhalten Sie ein transparentes Festpreis-Angebot, ohne Berliner Honorar-Aufschläge.' },
    ],
  },
  {
    slug: 'hamburg',
    name: 'Hamburg',
    region: 'Metropolregion',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Hamburgs Hafenwirtschaft und Kreativszene, von der Elbe bis Altona.',
    intro: [
      'Hamburg verbindet Hafen, Logistik, Medien und eine starke Kreativwirtschaft. Unternehmen hier arbeiten international, ihre digitale Präsenz muss es auch.',
      'Wir betreuen Hamburger Firmen mit Websites, die im umkämpften Markt bestehen, Social-Media-Strategien für die junge Zielstadt und KI-Sichtbarkeit, die Ihren Betrieb auch dann empfiehlt, wenn Kunden ChatGPT statt Google nutzen.',
    ],
    industries: ['Hafen & Logistik', 'Media & Kreativwirtschaft', 'Einzelhandel & E-Commerce', 'Gastronomie & Events'],
    districts: ['Altona', 'Eimsbüttel', 'Harvestehude', 'Winterhude', 'Barmbek', 'Wandsbek'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Hamburg?', answer: 'Ja, vollständig remote. Für Shootings und Meetings kommen wir nach Absprache nach Hamburg, die gesamte Zusammenarbeit läuft sonst digital.' },
      { question: 'Was ist die Marktlücke in Hamburg?', answer: 'Fast alle Hamburger Agenturen verkaufen SEO und Ads, aber kaum jemand optimiert systematisch für KI-Antworten. Wir schließen diese Lücke: llms.txt, Schema.org und Answer-Content, damit ChatGPT & Co. Ihr Unternehmen empfehlen.' },
      { question: 'Für welche Hamburger Branchen seid ihr besonders stark?', answer: 'Kreativwirtschaft, Gastronomie, E-Commerce und maritime Dienstleister. Unsere Strength ist das Zusammenspiel aus Web Design, Social Media und KI-Sichtbarkeit als ein System.' },
    ],
  },
  {
    slug: 'muenchen',
    name: 'München',
    region: 'Oberbayern',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Münchens Mittelstand und Tech-Szene, schnell und auf Augenhöhe.',
    intro: [
      'München ist Wirtschafts- und Tech-Standort mit hohen Ansprüchen: Von der Münchner Rück bis zum Startup in Sendling, digitale Auftritte müssen hier funktionieren und vertrauen.',
      'Wir betreuen Münchner Unternehmen mit Performance-Websites, Social-Media-Strategien und der Sichtbarkeit, die 2026 zählt: Bei Google UND bei ChatGPT. Die meisten Agenturen in München haben das KI-Thema noch nicht systematisch umgesetzt, wir schon.',
    ],
    industries: ['Mittelstand & Produktion', 'Tech & Startups', 'Gastronomie & Events', 'Einzelhandel & Luxury'],
    districts: ['Schwabing', 'Glockenbachviertel', 'Maxvorstadt', 'Haidhausen', 'Sendling', 'Ludwigsvorstadt'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in München?', answer: 'Ja, vollständig remote. Wir arbeiten mit Münchner Mittelständlern und Tech-Unternehmen, ohne Münchner Büro-Aufschläge.' },
      { question: 'Was kostet eine Agentur in München verglichen mit TnT Studio?', answer: 'Münchner Agenturen kalkulieren oft mit deutlich höheren Stundensätzen. Bei uns erhalten Sie Festpreise nach dem kostenlosen Check, transparent und ohne versteckte Kosten.' },
      { question: 'Warum KI-Sichtbarkeit für Münchner Unternehmen?', answer: 'Münchner B2B-Kunden recherchieren zunehmend über KI-Assistenten. Wer dort nicht sichtbar ist, verliert Aufträge an Wettbewerber, die das schon umgesetzt haben.' },
    ],
  },
  {
    slug: 'frankfurt',
    name: 'Frankfurt am Main',
    region: 'Rhein-Main',
    distance: 'Remote, ~190 km',
    tagline: 'Medienagentur für Frankfurts Finanz- und Beratungsbranche, digital auf institutionellem Niveau.',
    intro: [
      'Frankfurt ist Finanzplatz und Dienstleistungsmetropole: Kanzleien, Berater, Finanzdienstleister und ein wachsender Mittelstand brauchen digitale Auftritte, die Seriosität und Performance verbinden.',
      'Wir betreuen Frankfurter Unternehmen mit Websites auf institutionellem Niveau, B2B-Content-Strategien und der Sichtbarkeit, die Ihre Zielgruppe dort abholt, wo sie sucht: Google UND KI-Systeme.',
    ],
    industries: ['Finanzen & Beratung', 'Rechts- & Steuerberatung', 'Mittelstand & Dienstleistung', 'E-Commerce'],
    districts: ['Bahnhofsviertel', 'Westend', 'Nordend', 'Bornheim', 'Sachsenhausen', 'Ostend'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Frankfurt?', answer: 'Ja, vollständig remote. Wir arbeiten mit Frankfurter Beratern, Finanzdienstleistern und Kanzleien zusammen.' },
      { question: 'Was ist für Frankfurter B2B-Unternehmen besonders relevant?', answer: 'LinkedIn- und B2B-Sichtbarkeit, strukturierte Daten und KI-Sichtbarkeit. Frankfurter Entscheider recherchieren digital, und dort gewinnt, wer bei ChatGPT & Co. empfohlen wird.' },
      { question: 'Ist TnT Studio für regulierte Branchen geeignet?', answer: 'Ja. Wir arbeiten DSGVO-konform, mit sauberen Verträgen und verständlichen Prozessen. Für sensible Branchen besprechen wir individuelle Datenschutz-Anforderungen im Erstgespräch.' },
    ],
  },
  {
    slug: 'stuttgart',
    name: 'Stuttgart',
    region: 'Baden-Württemberg',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Stuttgarts Ingenieurwesen und Automotive-Zulieferer.',
    intro: [
      'Stuttgart ist Heimat des Engineerings: Automotive-Zulieferer, Maschinenbau, IT und ein starker Mittelstand, der komplexe Produkte verständlich verkaufen muss.',
      'Wir helfen Stuttgarter Unternehmen, technische Kompetenz sichtbar zu machen: Websites, die komplexe Leistungen erklären, Social-Media-Content für Recruiting und die KI-Sichtbarkeit, die Ingenieure und Einkäufer dort erreicht, wo sie recherchieren.',
    ],
    industries: ['Automotive & Zulieferer', 'Maschinenbau & Ingenieurwesen', 'IT & Software', 'Mittelstand & Handwerk'],
    districts: ['Bad Cannstatt', 'Vaihingen', 'Möhringen', 'Zuffenhausen', 'Botnang', 'Stuttgart-Süd'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Stuttgart?', answer: 'Ja, vollständig remote. Wir betreuen Stuttgarter Zulieferer, Ingenieurbüros und IT-Unternehmen.' },
      { question: 'Wie präsentieren wir komplexe technische Produkte?', answer: 'Mit klaren Content-Strategien: technische Features in Kundennutzen übersetzt, strukturierte Daten für Google und KI-Systeme, und Social-Media-Content, der Fachkräfte anspricht.' },
      { question: 'Warum funktioniert KI-Sichtbarkeit für B2B in Stuttgart?', answer: 'Einkäufer und Ingenieure nutzen zunehmend KI-Assistenten für Lieferantensuche. Wer systematisch für ChatGPT & Co. optimiert ist, wird empfohlen, bevor der Wettbewerber überhaupt auf dem Schirm ist.' },
    ],
  },
  {
    slug: 'hannover',
    name: 'Hannover',
    region: 'Niedersachsen',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Hannovers Messe-Stadt und Maschinenbau-Mittelstand.',
    intro: [
      'Hannover ist Messe-, Maschinenbau- und Service-Standort: Unternehmen zwischen der Expo und der Chartered Industry arbeiten international und brauchen digitale Auftritte auf diesem Niveau.',
      'Wir betreuen Hannoverscher Firmen mit Websites, die internationale Zielgruppen erreichen, Employer-Branding-Content für den Fachkräftemarkt und der KI-Sichtbarkeit, die den Mittelstand im digitalen Wettbewerb sichtbar macht.',
    ],
    industries: ['Maschinenbau & Industrie', 'Messe & Events', 'Dienstleistung & Beratung', 'Gastronomie & Einzelhandel'],
    districts: ['Linden', 'List', 'Vahrenwald', 'Südstadt', 'Döhren', 'Ahlem'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Hannover?', answer: 'Ja, vollständig remote. Wir arbeiten mit Hannoverscher Industrie, Dienstleistern und der Messe-Umgebung zusammen.' },
      { question: 'Was bringt KI-Sichtbarkeit für ein Maschinenbau-Unternehmen?', answer: 'Einkäufer und Fachkräfte fragen zunehmend KI-Systeme nach Lieferanten und Arbeitgebern. Systematische Optimierung (Schema.org, llms.txt, Answer-Content) bringt Sie in diese Antworten.' },
      { question: 'Wie schnell kann ein Projekt in Hannover starten?', answer: 'Sofort. Nach dem kostenlosen Check starten wir mit der Umsetzung, remote per Video-Calls, Figma und gemeinsamen Dokumenten.' },
    ],
  },
  {
    slug: 'leipzig',
    name: 'Leipzig',
    region: 'Sachsen',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Leipzigs Startup- und Kreativszene, zwischen Connewitz und Lindenau.',
    intro: [
      'Leipzig ist Sachsens Boom-Stadt: Startup-Szene, Kreativwirtschaft, eine junge Bevölkerung und Unternehmen, die schnell skalieren wollen.',
      'Wir betreuen Leipziger Firmen mit Performance-Websites, Social-Media-Strategien, die viral funktionieren, und der KI-Sichtbarkeit, die Ihr Unternehmen in einer Stadt sichtbar macht, in der jede zweite Agentur nur Standard-SEO anbietet.',
    ],
    industries: ['Startups & Tech', 'Kreativwirtschaft', 'Einzelhandel & Gastronomie', 'Dienstleistung'],
    districts: ['Connewitz', 'Plagwitz', 'Schleußig', 'Lindenau', 'Meusdorf', 'Südvorstadt'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Leipzig?', answer: 'Ja, vollständig remote. Wir arbeiten mit Leipziger Startups, Kreativ-Agenturen und etabliertem Mittelstand.' },
      { question: 'Was ist die Marktlücke für Agenturen in Leipzig?', answer: 'Leipzig hat viele kleine Agenturen, aber kaum jemand optimiert systematisch für KI-Suche. Wir schließen die Lücke zwischen klassischer Website und Sichtbarkeit bei ChatGPT, Perplexity und Google AI Overviews.' },
      { question: 'Was kostet ein Startup-Auftritt in Leipzig?', answer: 'Landingpages ab 500 €, Business-Websites ab 2.500 €. Nach dem kostenlosen Check erhalten Sie ein Festpreis-Angebot, das zu Ihrem Budget passt.' },
    ],
  },
  {
    slug: 'dresden',
    name: 'Dresden',
    region: 'Sachsen',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Dresdens Halbleiter- und Kreativwirtschaft, auf die Neustadt wie auf die Elbe.',
    intro: [
      'Dresden vereint Halbleiter-Industrie, Forscher, Kreativwirtschaft und einen starker Mittelstand zwischen Elbflorenz und Industriepark.',
      'Wir betreuen Dresdner Unternehmen mit Websites, die technische Kompetenz und Ästhetik verbinden, Social-Media-Content für die junge Stadt und der KI-Sichtbarkeit, die Ihr Unternehmen auch in der digitalen Zukunft sichtbar hält.',
    ],
    industries: ['Halbleiter & Tech', 'Kreativwirtschaft', 'Gastronomie & Einzelhandel', 'Mittelstand & Handwerk'],
    districts: ['Äußere Neustadt', 'Görlitz', 'Blasewitz', 'Loschwitz', 'Pieschen', 'Mickten'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Dresden?', answer: 'Ja, vollständig remote. Wir arbeiten mit Dresdner Tech-Unternehmen, Kreativ-Agenturen und dem Mittelstand zusammen.' },
      { question: 'Was ist für Dresdner Tech-Unternehmen relevant?', answer: 'Performance, Security und strukturierte Daten. Für KI-gestützte Suchen müssen Websites schnell, sauber und maschinenlesbar sein, genau das ist unser Standard.' },
      { question: 'Wie läuft die Zusammenarbeit mit einer Agentur aus Wuppertal ab?', answer: 'Remote ist unser Standard: Video-Calls, Figma, gemeinsame Dokumente. Für Shootings vor Ort kommen wir nach Dresden.' },
    ],
  },
  {
    slug: 'nuernberg',
    name: 'Nürnberg',
    region: 'Franken',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Nürnbergs E-Commerce- und Elektrotechnik-Mittelstand.',
    intro: [
      'Nürnberg ist E-Commerce- und Industrie-Standort: Vom Spielwaren-Händler bis zum Elektrotechnik-Mittelstand, Unternehmen hier verkaufen online und brauchen digitale Auftritte, die konvertieren.',
      'Wir betreuen Nürnberger Firmen mit E-Commerce-Websites, Social-Media-Strategien und der Sichtbarkeit bei Google UND KI-Systemen, die den fränkischen Mittelstand auf das nächste Level hebt.',
    ],
    industries: ['E-Commerce & Handel', 'Elektrotechnik & Industrie', 'Gastronomie & Events', 'Spielwaren & Consumer'],
    districts: ['Gostenhof', 'Zerzabelshof', 'Gleißhammer', 'St. Johannis', 'Maxfeld', 'Doos'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Nürnberg?', answer: 'Ja, vollständig remote. Wir arbeiten mit Nürnberger E-Commerce-Händlern und Industriebetrieben zusammen.' },
      { question: 'Was macht eine gute E-Commerce-Website aus?', answer: 'Schnelle Ladezeiten, mobile-first Design, klare Produktdarstellung und strukturierte Daten. Wir bauen Shops, die konvertieren, nicht nur aussehen.' },
      { question: 'Warum KI-Sichtbarkeit für Nürnberger E-Commerce?', answer: 'Kunden vergleichen zunehmend über KI-Assistenten. Wer bei ChatGPT & Co. empfohlen wird, gewinnt Kunden, die Google gar nicht mehr nutzen.' },
    ],
  },
  {
    slug: 'bremen',
    name: 'Bremen',
    region: 'Norddeutschland',
    distance: 'Remote, bundesweit',
    tagline: 'Medienagentur für Bremens Hafen- und Windenergie-Wirtschaft, maritime meets digital.',
    intro: [
      'Bremen ist Hafenstadt und Windenergie-Standort: Logistik, maritime Wirtschaft und ein starker Mittelstand zwischen Weser und Industriepark.',
      'Wir betreuen Bremer Unternehmen mit Websites, die internationale Märkte erreichen, Social-Media-Content für Employer Branding und der KI-Sichtbarkeit, die den norddeutschen Mittelstand digital sichtbar macht.',
    ],
    industries: ['Hafen & Logistik', 'Windenergie & Industrie', 'Mittelstand & Handwerk', 'Gastronomie & Einzelhandel'],
    districts: ['Neustadt', 'Östliche Vorstadt', 'Peterswerder', 'Woltmershausen', 'Vegesack', 'Steintor'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Bremen?', answer: 'Ja, vollständig remote. Wir arbeiten mit Bremer Logistik-, Energie- und Dienstleistungsunternehmen.' },
      { question: 'Was ist für maritime Unternehmen relevant?', answer: 'Internationale Ausrichtung, mehrsprachige Inhalte und strukturierte Daten für globale Suchen. Wir bauen digitale Auftritte, die über die Region hinaus wirken.' },
      { question: 'Wie funktioniert Employer Branding bei TnT Studio?', answer: 'Social-Media-Content, der Fachkräfte anspricht: Einblicke, Team-Stories, Projekte. Für den Bremer Fachkräftemarkt wissen wir, welche Formate funktionieren.' },
    ],
  },
]
