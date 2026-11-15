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
    tagline: 'Medienagentur aus Wuppertal — für Unternehmen im gesamten Bergischen Land.',
    intro: [
      'TnT Studio sitzt in Wuppertal und ist damit die Medienagentur direkt vor Ort — kein Remote-Call aus einer anderen Stadt, sondern ein Team, das den Bergischen Markt kennt. Wir betreuen Unternehmen von Elberfeld und Barmen über Vohwinkel und Ronsdorf bis nach Cronenberg und Langerfeld.',
      'Wuppertal ist Wirtschaftsstandort mit Tradition: vom Textil- und Maschinenbau bis zu Handwerk, Dienstleistung und einer wachsenden Kreativwirtschaft. Wir sprechen diese Sprache — und bauen digitale Auftritte, die bei der lokalen Zielgruppe ankommen.',
    ],
    industries: ['Handwerk & Bau', 'Einzelhandel & E-Commerce', 'Dienstleister & Beratung', 'Kreativwirtschaft', 'Industrie & Produktion'],
    districts: ['Elberfeld', 'Barmen', 'Vohwinkel', 'Ronsdorf', 'Cronenberg', 'Langerfeld', 'Oberbarmen', 'Sudberg'],
    faqs: [
      { question: 'Ist TnT Studio wirklich in Wuppertal ansässig?', answer: 'Ja. TnT Studio hat seinen Sitz in Wuppertal (Julius-Lucas-Weg 90, 42113 Wuppertal). Wir arbeiten remote-first, kommen aber bei Bedarf auch vor Ort — für Shootings, Meetings oder Drehs im Bergischen Land.' },
      { question: 'Welche Leistungen bietet TnT Studio in Wuppertal an?', answer: 'Alle Leistungen aus einer Hand: Web Design, Social Media Marketing, Content Creation, Produktfotografie, Branding und Software Development. Von der ersten Website bis zum laufenden Social-Media-Betrieb.' },
      { question: 'Arbeitet TnT Studio nur für Unternehmen in Wuppertal?', answer: 'Nein. Wuppertal ist unser Zuhause, nicht unsere Grenze. Wir betreuen Kunden in ganz NRW, Deutschland, Europa und den USA — remote. Der lokale Fokus hilft uns, den Bergischen Markt besonders gut zu verstehen.' },
      { question: 'Was kostet eine Website bei TnT Studio in Wuppertal?', answer: 'Projekt-Websites starten bei 2.500 €, E-Commerce-Plattformen ab 5.000 €. Nach dem ersten kostenlosen Call bekommst du ein transparentes Fixpreis-Angebot — ohne versteckte Kosten.' },
    ],
  },
  {
    slug: 'solingen',
    name: 'Solingen',
    region: 'Bergisches Land',
    distance: '15 Min. von Wuppertal',
    tagline: 'Medienagentur für die Klingenstadt — von der Brautmoden-Branche bis zum Einzelhandel.',
    intro: [
      'Solingen ist mehr als „die Klingenstadt" — die Stadt ist ein Zentrum der Präzisionsindustrie, der Brautmoden und des lokalen Einzelhandels. Unternehmen hier verkaufen weltweit, brauchen aber einen digitalen Auftritt, der international genauso stark ist wie lokal.',
      'Wir betreuen Solinger Unternehmen mit Websites, die im Export-Geschäft konvertieren, Social-Media-Content für lokale Reichweite und Produktfotografie, die das Handwerk und die Qualität sichtbar macht.',
    ],
    industries: ['Klingen- & Präzisionsindustrie', 'Braut- & Hochzeitsmode', 'Einzelhandel & Fachhandel', 'Produktion & Export'],
    districts: ['Solingen-Mitte', 'Ohligs', 'Merscheid', 'Gräfrath', 'Widder', 'Leichlingen'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Solingen?', answer: 'Ja. Solingen liegt nur 15 Autominuten von unserem Standort in Wuppertal. Wir betreuen dort Unternehmen aus der Klingen- und Präzisionsindustrie, dem Brautmoden-Segment und dem lokalen Einzelhandel — remote oder vor Ort.' },
      { question: 'Welche Leistungen sind für Solinger Unternehmen relevant?', answer: 'Besonders gefragt sind Web Design mit internationalem SEO-Fokus, Produktfotografie für Export-Kataloge und Social Media Marketing für lokale Reichweite in Solingen und dem Bergischen Land.' },
      { question: 'Muss ich für eine Zusammenarbeit nach Wuppertal kommen?', answer: 'Nein. Die gesamte Zusammenarbeit läuft remote — Video-Calls, Figma, geteilte Dokumente. Nur für Produktionen wie Fotoshootings oder Drehs kommen wir nach Absprache zu dir nach Solingen.' },
    ],
  },
  {
    slug: 'remscheid',
    name: 'Remscheid',
    region: 'Bergisches Land',
    distance: '20 Min. von Wuppertal',
    tagline: 'Medienagentur für die Werkzeugstadt — Industrie, Handwerk und Mittelstand.',
    intro: [
      'Remscheid ist die Heimat der Werkzeugindustrie und eines der industriellsten Mittelstandszentren im Bergischen Land. Unternehmen hier beliefern Weltmarktführer — aber ihre digitale Präsenz hinkt der Produktqualität oft hinterher.',
      'Wir helfen Remscheider Unternehmen, ihre technische Kompetenz sichtbar zu machen: Websites, die komplexe Produkte verständlich präsentieren, Content Creation für Recruiting und Social Media für Employer Branding.',
    ],
    industries: ['Werkzeug- & Maschinenbau', 'Industrie & Zulieferer', 'Handwerk & Produktion', 'Recruiting & Employer Branding'],
    districts: ['Remscheid-Mitte', 'Lennep', 'Möding', 'Reifen', 'Stockheim', 'Hasten'],
    faqs: [
      { question: 'Was macht TnT Studio für Unternehmen in Remscheid?', answer: 'Wir betreuen Remscheider Industrie- und Handwerksunternehmen mit Web Design, Social Media Marketing und Content Creation. Fokus: komplexe Produkte verständlich machen und qualifizierte Mitarbeiter ansprechen.' },
      { question: 'Ist Employer Branding bei TnT Studio möglich?', answer: 'Ja. Social Media Recruiting ist einer unserer Schwerpunkte — Reels und Content, die Azubis und Fachkräfte ansprechen. Für das Bergische Land wissen wir, welche Formate bei der lokalen Zielgruppe funktionieren.' },
      { question: 'Wie funktioniert die Zusammenarbeit mit einer Agentur aus Wuppertal?', answer: 'Vollständig remote. Du bekommst einen festen Ansprechpartner (die Gründer selbst), wöchentliche Updates und transparente Kommunikation — ohne teure Account-Manager-Strukturen größerer Agenturen.' },
    ],
  },
  {
    slug: 'leverkusen',
    name: 'Leverkusen',
    region: 'Rheinland',
    distance: '30 Min. von Wuppertal',
    tagline: 'Medienagentur für Leverkusen — Pharma, Chemie und der Dienstleistungssektor.',
    intro: [
      'Leverkusen ist Wirtschaftsstandort am Rhein: Bayer AG als Anker, Pharma, Chemie, Logistik und ein wachsender Dienstleistungssektor. Unternehmen hier arbeiten international — ihre digitale Präsenz muss es auch.',
      'Wir betreuen Leverkusener Unternehmen mit Websites auf internationalem Niveau, LinkedIn- und B2B-Content-Strategien für das Personalmarketing und Produktfotografie für den Online-Vertrieb.',
    ],
    industries: ['Pharma & Chemie', 'Logistik & Chemiepark', 'B2B & Dienstleistung', 'Sport & Event'],
    districts: ['Leverkusen-Mitte', 'Opladen', 'Hitdorf', 'Steinbüchel', 'Rheindorf', 'Alkenrath'],
    faqs: [
      { question: 'Betreut TnT Studio Kunden in Leverkusen?', answer: 'Ja. Leverkusen liegt ca. 30 Autominuten von Wuppertal. Wir arbeiten für Unternehmen zwischen Rheinufer und Chemiepark — von der Corporate Website bis zum Social-Media-Betrieb.' },
      { question: 'Welche Leistungen passen zu Leverkusener B2B-Unternehmen?', answer: 'B2B-Fokus: Web Design mit Lead-Generierung, LinkedIn-Content-Strategien, Software Development für interne Tools und Content Creation für Employer Branding im Wettbewerb um Fachkräfte.' },
      { question: 'Ist eine Zusammenarbeit mit einer Wuppertaler Agentur für Leverkusen realistisch?', answer: 'Absolut — remote ist unser Standard. Standort ist kein Nachteil: Du arbeitest direkt mit den Gründern, nicht mit einem Account-Team. Für Shootings vor Ort kommen wir nach Leverkusen.' },
    ],
  },
  {
    slug: 'koeln',
    name: 'Köln',
    region: 'Rheinland',
    distance: '50 Min. von Wuppertal',
    tagline: 'Medienagentur für Köln — Fashion, Retail, Gastronomie und Kreativwirtschaft.',
    intro: [
      'Köln ist eine der medienaffinsten Städte Deutschlands — Fashion, Retail, Gastronomie, Events und eine starke Kreativwirtschaft. Hier ist der Anspruch an Design und Content hoch, und die Konkurrenz um Aufmerksamkeit groß.',
      'Wir betreuen Kölner Unternehmen mit Websites, die im umkämpften Markt bestehen, Social-Media-Content für die junge, mobile Zielgruppe der Stadt und Branding, das sich von der Masse abhebt.',
    ],
    industries: ['Fashion & Retail', 'Gastronomie & Events', 'Kreativwirtschaft & Agenturen', 'Mittelstand & Dienstleistung'],
    districts: ['Innenstadt', 'Nippes', 'Mülheim', 'Ehrenfeld', 'Lindenthal', 'Porz'],
    faqs: [
      { question: 'Warum eine Agentur aus Wuppertal für ein Projekt in Köln?', answer: 'Weil Qualität nicht vom Standort abhängt. Wir arbeiten remote mit denselben Tools wie Kölner Agenturen — nur ohne deren Overhead. Du sparst Budget und bekommst die Gründer selbst als Ansprechpartner.' },
      { question: 'Welche Leistungen sind in Köln besonders gefragt?', answer: 'Web Design für Retail und Gastronomie, Social Media Marketing für Reichweite in der Stadt, Content Creation für Instagram und TikTok sowie Branding für den Markteintritt.' },
      { question: 'Macht ihr auch Shootings in Köln?', answer: 'Ja. Für Fotoshootings und Videoproduktionen kommen wir nach Absprache nach Köln. Alternativ nutzen wir lokale Partner oder arbeiten mit Material, das ihr vor Ort aufnehmt.' },
    ],
  },
  {
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    region: 'Rheinland',
    distance: '40 Min. von Wuppertal',
    tagline: 'Medienagentur für Düsseldorf — Mode, Medien und Wirtschaftsstandort.',
    intro: [
      'Düsseldorf ist Landeshauptstadt, Mode-Metropole und Medienstandort. Unternehmen hier repräsentieren anspruchsvolle Marken — der digitale Auftritt muss mithalten.',
      'Wir betreuen Düsseldorfer Unternehmen mit High-End Web Design, Fashion- und Produktfotografie, Social Media für Lifestyle-Marken und Software-Lösungen für wachsende Teams.',
    ],
    industries: ['Mode & Lifestyle', 'Medien & Kommunikation', 'Wirtschaft & Beratung', 'Events & Gastronomie'],
    districts: ['Altstadt', 'Oberkassel', 'Flingern', 'Lörick', 'Gerresheim', 'Bilk'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Düsseldorf?', answer: 'Ja. Düsseldorf ist einer unserer wichtigsten Märkte außerhalb des Bergischen Landes — von der Modeboutique in Oberkassel bis zum Dienstleister in Flingern.' },
      { question: 'Welche Leistungen passen zu Mode- und Lifestyle-Marken?', answer: 'Produktfotografie auf Fashion-Niveau, Social Media Content für Instagram und TikTok, Web Design mit Editorial-Charakter und Branding mit starker visueller Identität.' },
      { question: 'Ist TnT Studio eine „richtige" Agentur für Düsseldorf?', answer: 'Wir sind eine Boutique-Agentur: kein Account-Management, keine Zehner-Teams — sondern die Gründer selbst. Für viele Marken ist genau das der Vorteil: direkter Draht, schnellere Entscheidungen, faire Preise.' },
    ],
  },
  {
    slug: 'bonn',
    name: 'Bonn',
    region: 'Rheinland',
    distance: '45 Min. von Wuppertal',
    tagline: 'Medienagentur für Bonn — Startup-Szene, Dienstleister und Institutionen.',
    intro: [
      'Bonn vereint Bundesstadt, Startup-Szene und renommierten Mittelstand. Zwischen UN-Viertel und StartUp-Hotspots entstehen digitale Produkte, die wir mitbauen und betreuen.',
      'Wir unterstützen Bonner Unternehmen und Gründerteams mit Web Design, Software Development, Content Creation und Social Media — vom ersten Pitch bis zum Scale-up.',
    ],
    industries: ['Startups & Tech', 'Dienstleistung & Beratung', 'Wissenschaft & Bildung', 'Mittelstand'],
    districts: ['Zentrum', 'Nordstadt', 'Endenich', 'Poppelsdorf', 'Beuel', 'Graurheindorf'],
    faqs: [
      { question: 'Betreut TnT Studio Kunden in Bonn?', answer: 'Ja. Bonn ist ~45 Autominuten von Wuppertal entfernt — für uns kein Unterschied, da wir ohnehin remote arbeiten. Wir betreuen Startups, Dienstleister und etabliertes Mittelstand.' },
      { question: 'Könnt ihr auch Software für Startups in Bonn entwickeln?', answer: 'Ja. Software Development ist eine unserer Kernleistungen — von MVPs für Gründerteams bis zu produktiven Web-Apps und API-Integrationen. Tech-Stack: React, TypeScript, Node.js.' },
      { question: 'Was kostet eine Zusammenarbeit für ein Bonner Startup?', answer: 'Wir kalkulieren transparent nach Aufwand — keine versteckten Stundensätze-Rätsel. Nach dem ersten kostenlosen Call erhältst du ein Fixpreis-Angebot für deinen Scope.' },
    ],
  },
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'Niederrhein',
    distance: '40 Min. von Wuppertal',
    tagline: 'Medienagentur für Mönchengladbach — Maschinenbau, Handel und Sport.',
    intro: [
      'Mönchengladbach ist Wirtschaftsstandort mit starker Maschinenbau-Tradition und einer lebendigen innerstädtischen Einzelhandelslandschaft. Unternehmen zwischen Rheydt und Gladbach brauchen digitale Auftritte, die regional und überregional funktionieren.',
      'Wir betreuen Gladbacher Unternehmen mit Web Design, E-Commerce-Lösungen, Social Media Marketing und Content Creation — vom Maschinenbauer bis zur Gastro-Szene.',
    ],
    industries: ['Maschinenbau & Produktion', 'Einzelhandel & E-Commerce', 'Gastronomie & Events', 'Dienstleistung'],
    districts: ['Gladbach', 'Rheydt', 'Windberg', 'Hockstein', 'Asselen', 'Eicken'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Mönchengladbach?', answer: 'Ja. Wir betreuen Kunden in Mönchengladbach und dem gesamten Niederrhein — von Web Design für den Mittelstand bis zu Social-Media-Kampagnen für den lokalen Handel.' },
      { question: 'Welche Leistungen passen zu Mönchengladbacher Unternehmen?', answer: 'Web Design und E-Commerce für den Einzelhandel, Content Creation für die Gastronomie, Social Media Marketing für lokale Reichweite und Software Development für Produktionsprozesse.' },
      { question: 'Wie schnell kann ein Projekt in Mönchengladbach starten?', answer: 'Sofort — remote ist unser Standard. Nach dem ersten Call starten wir innerhalb weniger Tage mit Discovery und Design. Für Shootings vor Ort stimmen wir Termine in Gladbach ab.' },
    ],
  },
  {
    slug: 'hagen',
    name: 'Hagen',
    region: 'Südwestfalen',
    distance: '35 Min. von Wuppertal',
    tagline: 'Medienagentur für Hagen und Südwestfalen — Ardey, Volmetal und Umland.',
    intro: [
      'Hagen und das umliegende Volmetal sind das Herz von Südwestfalen: mittelständische Produktion, Handwerk und Dienstleistung in einer Region, die oft übersehen wird — digital wie analog.',
      'Wir geben Hagener Unternehmen eine digitale Präsenz, die mit der Qualität ihrer Produkte mithalten kann: Websites, Social Media, Content und Software — remote, direkt und fair kalkuliert.',
    ],
    industries: ['Produktion & Mittelstand', 'Handwerk', 'Dienstleistung', 'Einzelhandel'],
    districts: ['Hagen-Mitte', 'Eilpe', 'Boele', 'Emst', 'Delstern', 'Haspe'],
    faqs: [
      { question: 'Betreut TnT Studio Kunden in Hagen?', answer: 'Ja. Hagen liegt ~35 Autominuten von Wuppertal. Wir betreuen Unternehmen aus Hagen, dem Volmetal und ganz Südwestfalen — vollständig remote.' },
      { question: 'Welche Leistungen sind für Hagener Mittelständler relevant?', answer: 'Web Design mit Fokus auf Lead-Generierung, Social Media für Employer Branding im Wettbewerb um Fachkräfte und Content Creation für die lokale Bekanntheit.' },
      { question: 'Ist eine Agentur aus dem Bergischen Land für Südwestfalen sinnvoll?', answer: 'Absolut — die Region ist wirtschaftlich verflochten. Wir kennen den mittelständischen Markt und arbeiten ohne Büro-Overhead: das Budget fließt in dein Projekt, nicht in Mieten.' },
    ],
  },
  {
    slug: 'witten',
    name: 'Witten',
    region: 'Ennepe-Ruhr-Kreis',
    distance: '25 Min. von Wuppertal',
    tagline: 'Medienagentur für Witten — Nahverkehrsregion mit mittelständischem Rückgrat.',
    intro: [
      'Witten liegt zwischen Ruhrgebiet und Bergischem Land — eine Region, in der viele Unternehmen zwischen zwei Wirtschaftsräumen agieren. Diese Brücken-Position ist auch digital eine Chance.',
      'Wir betreuen Wittener Unternehmen mit Web Design, Social Media Marketing und Content Creation, die beide Märkte erreicht: lokal im Ennepe-Ruhr-Kreis und überregional im Bergischen Land.',
    ],
    industries: ['Mittelstand & Produktion', 'Handwerk', 'Einzelhandel', 'Dienstleistung'],
    districts: ['Witten-Mitte', 'Bommern', 'Heven', 'Stockum', 'Annen', 'Herbede'],
    faqs: [
      { question: 'Betreut TnT Studio Unternehmen in Witten?', answer: 'Ja. Witten liegt nur ~25 Autominuten von unserem Standort. Wir betreuen Wittener Unternehmen remote — mit Shootings vor Ort bei Bedarf.' },
      { question: 'Welche Leistungen passen zu Unternehmen in Witten?', answer: 'Alle — von der ersten Website über Social Media bis zur Software. Besonders gefragt sind Web Design für den Mittelstand und Content Creation für die regionale Sichtbarkeit.' },
      { question: 'Wie läuft die Zusammenarbeit ab?', answer: 'Wie bei allen Kunden: kostenloses Erstgespräch, transparentes Angebot, Umsetzung mit klaren Meilensteinen. Du hast einen festen Ansprechpartner — die Gründer selbst.' },
    ],
  },
]
