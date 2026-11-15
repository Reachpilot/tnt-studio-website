export interface ServiceStep {
  title: string
  description: string
}

export interface ServiceStat {
  value: string
  label: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceCaseStudy {
  client: string
  result: string
  description: string
  image?: string
}

export interface Service {
  title: string
  description: string
  metaTitle?: string
  metaDescription?: string
  longDescription: string
  features: string[]
  icon: string
  process: ServiceStep[]
  stats: ServiceStat[]
  faqs: ServiceFAQ[]
  caseStudies: ServiceCaseStudy[]
}

export const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Massgeschneiderte Websites, die nicht nur gut aussehen, sondern auch konvertieren.',
    metaTitle: 'Webdesign Wuppertal, Websites, die konvertieren | TnT Studio',
    metaDescription: 'Individuelles Webdesign aus Wuppertal: React, TypeScript & Tailwind. Load Time unter 1s, Lighthouse 95+. Websites ab 500 €, jetzt unverbindlich anfragen.',
    longDescription: 'Wir bauen Websites, die mehr sind als digitale Visitenkarten. Jedes Projekt startet mit einer tiefgehenden Analyse deiner Zielgruppe, deiner Wettbewerber und deiner Ziele. Dann entwickeln wir ein Design, das nicht nur modern aussieht, sondern auch funktioniert, auf jedem Gerät, in jeder Geschwindigkeit, für jeden User. Von der ersten Skizze-zum Go-Live begleiten wir dich durch jeden Schritt und sorgen dafür, dass deine Website ein echtes Werkzeug für dein Business ist, kein Kostenfaktor.',
    features: ['Custom Development', 'Responsive Design', 'E-Commerce', 'UI/UX Design', 'Performance-Optimierung', 'SEO-Grundlagen', 'CMS-Integration', 'Conversion-Optimierung', 'Branding & Logo inklusive'],
    icon: 'code',
    process: [
      { title: 'Discovery & Strategie', description: 'Wir analysieren deine Marke, Zielgruppe und Wettbewerber. Wir definieren Ziele, Success Metrics und die technische Architektur.' },
      { title: 'Design & Prototyping', description: 'Wireframes werden zu High-Fidelity Designs. Wir bauen klickbare Prototypen in Figma, damit du das Erlebnis spürst, bevor eine Zeile Code geschrieben wird.' },
      { title: 'Development', description: 'Custom Development mit React, TypeScript und Tailwind CSS. Clean Code, semantische HTML-Struktur, optimiert für Speed und SEO.' },
      { title: 'Testing & Launch', description: 'Cross-Browser-Testing, Performance-Audits, Accessibility-Checks. Wir launchen erst, wenn alles perfekt ist, und bleiben danach für dich da.' },
    ],
    stats: [
      { value: '100%', label: 'Custom Code' },
      { value: '< 1s', label: 'Load Time' },
      { value: '95+', label: 'Lighthouse Score' },
      { value: '8+', label: 'Websites live' },
    ],
    faqs: [
      { question: 'Was kostet eine Website bei TnT Studio?', answer: 'Landingpages ab 500 €, Business-Websites ab 2.500 €, E-Commerce-Plattformen ab 5.000 €. Komplexe Softwarelösungen werden nach Aufwand kalkuliert. Jedes Projekt ist individuell, wir geben dir nach dem ersten Call ein Fixpreis-Angebot.' },
      { question: 'Wie lange dauert es, eine Website bauen zu lassen?', answer: 'Eine typische Projekt-Website dauert 2-4 Wochen. E-Commerce-Plattformen 4 bis 8 Wochen. Komplexe Softwarelösungen können 3+ Monate dauern. Wir geben dir nach dem ersten Call ein genaues Timeline mit Meilensteinen.' },
      { question: 'Baut TnT Studio mit WordPress?', answer: 'Nein. Wir bauen mit React, TypeScript und Tailwind CSS. Das ist 2025 der Goldstandard für moderne Websites. WordPress ist für Blogs okay, aber für Business-Websites zu langsam, zu fehleranfällig und zu stark von Plugins abhängig. Custom Code bedeutet: volle Kontrolle, maximale Performance, kein Vendor Lock-in.' },
      { question: 'Ist SEO inklusive, wenn ich eine Website bauen lasse?', answer: 'Bei TnT Studio sind SEO-Grundlagen inklusive: semantisches HTML, Meta-Tags, Sitemap, strukturierte Daten (Schema Markup), schnelle Ladezeiten und mobile Optimierung. Tiefergehende SEO-Strategie (Keyword-Recherche, Content-Optimierung, Link-Building) ist ein separater Service.' },
      { question: 'Hosting und Domain inklusive?', answer: 'Wir kümmern uns um das Deployment auf Netlify oder Vercel. Hosting-Kosten liegen meist bei 0 bis 20€/Monat. Die Domain kannst du mitbringen oder wir registrieren sie für dich. Wir bieten kein eigenes Hosting an, weil CDN-basiertes Hosting (Netlify/Vercel) schneller und sicherer ist.' },
      { question: 'Kann ich Inhalte selbst ändern?', answer: 'Ja. Wir integrieren ein Headless CMS (Sanity, Strapi oder Decap CMS), damit du Texte, Bilder und Blog-Posts selbst verwalten kannst, ohne Code-Kenntnisse. Bei Bedarf schulen wir dein Team im Umgang mit dem System.' },
      { question: 'Was passiert nach dem Launch der Website?', answer: 'Wir verschwinden nicht. Wir bieten Wartungsverträge an, kümmern uns um Updates, Backups und technische Optimierung. Bei Fragen sind wir erreichbar. Eine Website ist kein Einmal-Projekt, sie muss gepflegt werden.' },
      { question: 'Ist die Website mobil-optimiert?', answer: 'Ja, zwingend. Alle unsere Websites sind mobil-first entwickelt. Über 60% des Traffics kommt von Smartphones. Responsive Design ist Standard, keine Aufpreise. Google bestraft nicht-mobil-optimierte Websites.' },
      { question: 'Was ist der Unterschied zwischen Custom Code und Baukasten?', answer: 'Custom Code (React, TypeScript) bedeutet: jede Zeile Code ist für dein Projekt geschrieben. Volle Kontrolle, maximale Performance, keine Abhängigkeiten. Baukasten (Wix, Jimdo, WordPress-Templates) bedeutet: du nutzt vorgefertigte Bausteine, die du nicht kontrollieren kannst. Langsam, unflexibel, generisch.' },
      { question: 'Bekomme ich eine schnelle Website?', answer: 'Ja. LCP unter 1 Sekunde, Lighthouse-Score 95+. Wir bauen mit React + Vite + Tailwind CSS, hosten auf Netlify/Vercel mit globalem CDN und optimieren jedes Bild. Speed ist Standard bei TnT Studio, kein Add-on.' },
      { question: 'Kann ich meine bestehende Website übernehmen lassen?', answer: 'Ja. Wir analysieren deine bestehende Website und beraten ehrlich: behalten, optimieren oder neu bauen. Oft ist ein Neubau mit moderner Technologie sinnvoller als eine Optimierung einer alten Website. Wir migrieren Inhalte und Daten.' },
      { question: 'Bietet ihr E-Commerce-Websites an?', answer: 'Ja. Wir bauen E-Commerce-Plattformen mit Shopify, Medusa.js oder Custom-Lösungen. Produktkataloge, Warenkorb, Checkout, Zahlungsanbindung (Stripe, PayPal, Klarna). Ab 5.000€.' },
      { question: 'Was sind strukturierte Daten (Schema Markup)?', answer: 'Strukturierte Daten (Schema.org) sind Code, der Google erklärt, was dein Content bedeutet. FAQPage Schema zeigt FAQs in Google an. LocalBusiness Schema zeigt, dass du ein lokales Unternehmen bist. TnT Studio implementiert Schema Markup automatisch in jeder Website.' },
      { question: 'Kann TnT Studio meine Website in Wuppertal lokal optimieren?', answer: 'Ja. Wir optimieren für lokale Suchbegriffe ("Webdesign Wuppertal", "Medienagentur Wuppertal"), richten Google Business Profile ein, fügen LocalBusiness Schema Markup hinzu und sorgen für NAP-Konsistenz. Lokale SEO ist für lokale Unternehmen entscheidend.' },
      { question: 'Was ist responsive Webdesign?', answer: 'Responsive Webdesign bedeutet, dass sich die Website automatisch an jeden Bildschirm anpasst, Smartphone, Tablet, Desktop. Alle unsere Websites sind responsive. Google nutzt Mobile-First Indexing: die mobile Version bestimmt das Ranking.' },
    ],
    caseStudies: [
      { client: 'Cosi Brautmoden', result: 'Premium-Website für Brautmoden', description: 'Massgeschneiderte Website mit Fokus auf Emotion und Conversion. Galerie-Funktion, Terminbuchung und mobile-optimiertes Erlebnis.', image: '/images/portfolio/cosi-web.webp' },
      { client: 'Dexamon', result: 'Konversionsorientierte Plattform', description: 'Moderne Website mit klarem UX-Fokus. Schnelle Ladezeiten, strukturierte Produktdarstellung und SEO-Grundlagen.', image: '/images/portfolio/dexam-web.webp' },
      { client: 'Noi', result: 'Kulinarische Website', description: 'Elegante Website mit Fokus auf Atmosphäre und Kulinarik. Menu-Integration, Reservierungs-Flow und Instagram-Feed.', image: '/images/portfolio/noi/Designvorschlag 4-1.webp' },
    ],
  },
  {
    title: 'KI-Sichtbarkeit & SEO',
    description: 'Gefunden bei Google UND ChatGPT, SEO, SEA, GEO/AEO als ein System.',
    metaTitle: 'KI-Sichtbarkeit & SEO Wuppertal, Google + ChatGPT | TnT Studio',
    metaDescription: 'SEO, SEA, GEO & AEO aus einer Hand: Wir machen Ihr Unternehmen sichtbar bei Google, ChatGPT, Perplexity & Gemini. llms.txt, Schema.org, Answer-Content, jetzt prüfen lassen.',
    longDescription: 'Die meisten Agenturen optimieren nur für Google. Wir optimieren für die Welt von morgen: klassische Suchmaschinen UND KI-Systeme wie ChatGPT, Perplexity, Gemini und Google AI Overviews. Das bedeutet: llms.txt & llms-full.txt, Schema.org-Markup, Answer-First-Content, Entity-Konsistenz und klassisches SEO/SEA als Fundament. Das Ergebnis: Wer nach Ihrem Unternehmen fragt, bei Google oder bei ChatGPT, findet Sie. Wir machen das bei uns selbst vor: Diese Website läuft mit allen KI-Optimierungen produktiv.',
    features: ['SEO & SEA', 'GEO & AEO', 'llms.txt & llms-full.txt', 'Schema.org & Entity-Building', 'Answer-First-Content', 'AI-Crawler-Optimierung', 'Google Ads & Meta Ads', 'Conversion-Tracking & Attribution', 'Local SEO', 'Monatliches Reporting'],
    icon: 'terminal',
    process: [
      { title: 'Sichtbarkeits-Audit', description: 'Wir prüfen Ihre aktuelle Präsenz: Google-Rankings, KI-Sichtbarkeit (was ChatGPT & Co. über Sie sagen), technisches Fundament, Content-Lücken und Conversion-Pfad.' },
      { title: 'Strategie & Prioritäten', description: 'Klare Massnahmenliste: Was bringt am schnellsten Anfragen? Wir priorisieren nach Wirkung, GEO/AEO-Grundlagen, Content-Lücken, Local SEO, Paid-Suchanzeigen.' },
      { title: 'Implementierung', description: 'llms.txt, Schema.org, robots.txt für AI-Crawler, Answer-First-Content, OnPage-SEO, Tracking & Attribution, alles sauber umgesetzt, nicht nur besprochen.' },
      { title: 'Messung & Skalierung', description: 'Monatliches Reporting: Rankings, organischer Traffic, KI-Erwähnungen, Anfragen. Wir sehen, was funktioniert, und skalieren, was bringt.' },
    ],
    stats: [
      { value: '4', label: 'KI-Systeme optimiert' },
      { value: 'llms.txt', label: 'Standard bei uns' },
      { value: '100%', label: 'Messbar' },
      { value: '1', label: 'Ansprechpartner' },
    ],
    faqs: [
      { question: 'Was ist GEO-Optimierung?', answer: 'GEO (Generative Engine Optimization) optimiert Ihre Website dafür, von KI-Systemen wie ChatGPT, Perplexity und Gemini empfohlen und zitiert zu werden. Das ist das neue SEO, für eine Welt, in der Kunden KI fragen statt googeln.' },
      { question: 'Was ist der Unterschied zwischen SEO und GEO?', answer: 'SEO optimiert für Suchmaschinen-Rankings und Klicks auf Links. GEO optimiert dafür, dass KI-Systeme Ihr Unternehmen als Antwort oder Empfehlung ausgeben. Die Grundlagen überschneiden sich, die Ziele nicht.' },
      { question: 'Was ist llms.txt und brauche ich das?', answer: 'llms.txt ist eine Textdatei im Root-Verzeichnis, die KI-Crawlern einen strukturierten Überblick über Ihre Website gibt: Beschreibung, Services, URLs, FAQs. Vergleichbar mit sitemap.xml, aber für ChatGPT, Claude und Perplexity. Bei TnT Studio Standard in jeder Website.' },
      { question: 'Wird meine Website wirklich von ChatGPT empfohlen?', answer: 'Das hängt von mehreren Faktoren ab: Schema.org-Markup, konsistente Entity-Daten, zitierfähiger Content, Erwähnungen auf Drittseiten. Wir bauen die Grundlagen, die konkrete Position in KI-Antworten hängt auch von Ihren Inhalten und Ihrem Markt ab. Wir versprechen keine Garantien, sondern systematische Optimierung.' },
      { question: 'Was ist AEO?', answer: 'AEO (Answer Engine Optimization) strukturiert Inhalte so, dass Suchmaschinen und KI-Systeme sie als direkte Antwort extrahieren können: klare FAQs, Definitionen, Schema-Markup, semantisches HTML. Ihre Website wird zur antwort-fähigen Wissensquelle.' },
      { question: 'Macht ihr auch SEA / Google Ads?', answer: 'Ja. Wir schalten und optimieren Google Ads und Meta Ads, mit Conversion-Tracking, Attribution und klaren KPIs. SEO für die lange Frist, SEA für sofortige Sichtbarkeit: als System kombiniert.' },
      { question: 'Was kostet SEO/GEO-Optimierung?', answer: 'Das hängt von Ist-Zustand und Zielen ab. Basis-Optimierung (Technik, Schema, llms.txt, Content-Audit) ist ein einmaliges Projekt. Laufende SEO/GEO-Betreuung ist ein monatliches Honorar, transparent kalkuliert nach Aufwand und Markt. Nach dem kostenlosen Check erhalten Sie ein Festpreis-Angebot.' },
      { question: 'Wie lange dauert es-Ergebnisse sichtbar sind?', answer: 'Technische Grundlagen (Schema, llms.txt, robots.txt) sind in Tagen live. Content- und Ranking-Effekte brauchen 2 bis 6 Monate, SEO ist ein Marathon. KI-Sichtbarkeit in Perplexity und AI Overviews zeigt sich oft schneller. Wir liefern monatliches Reporting, damit Sie den Fortschritt sehen.' },
      { question: 'Kann ich das selbst machen?', answer: 'Die Grundlagen ja: llms.txt anlegen, Schema prüfen, FAQs direkt beantworten, AI-Crawler erlauben. Die strategische Ausrichtung, welche Fragen Ihre Kunden bei Google und ChatGPT stellen, ist Spezialisten-Arbeit. Wir machen das für Unternehmen, die es nicht selbst lernen wollen.' },
      { question: 'Warum sollte ich das bei TnT Studio machen?', answer: 'Weil wir es selbst machen. Diese Website läuft mit llms.txt, Schema.org auf jeder Route, Answer-First-Blog-Content und Consent-Tracking, Sie können alles live prüfen. Wir verkaufen keine Theorie, sondern das, was auf unserer eigenen Domain funktioniert.' },
      { question: 'Was ist Local SEO?', answer: 'Local SEO optimiert Ihre Sichtbarkeit für regionale Suchen: „Agentur in meiner Nähe", „[Service] + Stadt". Dazu gehören Google Business Profile, lokale Keywords, NAP-Konsistenz und Location-Seiten, wie unsere /standorte/-Seiten.' },
      { question: 'Wie messen Sie KI-Sichtbarkeit?', answer: 'Wir prüfen regelmässig, was ChatGPT, Perplexity und Gemini auf relevante Fragen antworten, ob Sie genannt werden, wie Sie positioniert sind, welche Wettbewerber zitiert werden. Plus klassisches Reporting: Rankings, Traffic, Anfragen, Conversion.' },
    ],
    caseStudies: [
      { client: 'TnT Studio (diese Website)', result: 'Vollständige GEO/AEO-Implementierung', description: 'llms.txt & llms-full.txt unter /.well-known/, Schema.org auf jeder Route (Organization, Service, FAQPage, Article, BreadcrumbList), AI-Crawler in robots.txt erlaubt, Answer-First-Blog mit 42 Fachartikeln, Consent-gated Analytics mit Attribution.', image: '/og-image.webp' },
    ],
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategische Social-Media-Präsenz, die deine Marke wachsen lässt.',
    metaTitle: 'Social Media Agentur Wuppertal, Reels & Ads | TnT Studio',
    metaDescription: 'Social Media Marketing für Wuppertal & NRW: Content-Produktion, Meta Ads, Community Management. Pakete ab 1.200 €/Monat, jetzt kostenlos beraten lassen.',
    longDescription: 'Social Media ist kein Bonus mehr, es ist das Schaufenster deiner Marke. Wir entwickeln Content-Strategien, die nicht nur Reichweite generieren, sondern echte Bindung aufbauen. Von der Content-Pillar-Definition über den Redaktionsplan bis hin zu Ad-Campaigns mit messbarem ROI. Wir posten nicht einfach drauf los, wir haben einen Plan, Daten und eine Strategie, die sich an deinen Business-Zielen orientiert, nicht an Vanity Metrics.',
    features: ['Content Strategy', 'Social Media Ads', 'Instagram & TikTok', 'Community Management', 'Influencer Marketing', 'Analytics & Reporting', 'A/B Testing', 'Hashtag-Strategie'],
    icon: 'social',
    process: [
      { title: 'Audit & Analyse', description: 'Bestandsaufnahme deiner Kanäle, Wettbewerberanalyse, Zielgruppen-Profiling. Wir identifizieren White Spaces und Opportunities.' },
      { title: 'Strategie & Pillars', description: 'Content-Pillar-Definition, Tonalität, Visual-Guidelines. Wir erstellen einen 90-Tage-Redaktionsplan mit klaren Themes pro Woche.' },
      { title: 'Content-Produktion', description: 'Wir produzieren Reels, Posts, Stories und TikToks, alles im Haus. Keine Koordination mit externen Fotografen, keine Verzögerungen.' },
      { title: 'Ads & Optimierung', description: 'Paid Social Campaigns mit A/B-Testing, Audience-Splitting und Budget-Optimierung. Wöchentliche Reports mit klaren KPIs.' },
    ],
    stats: [
      { value: '50K+', label: 'Reichweite / Monat' },
      { value: '4.8%', label: 'Ø Engagement Rate' },
      { value: '3x', label: 'Follower-Wachstum' },
      { value: '12+', label: 'Kanäle betreut' },
    ],
    faqs: [
      { question: 'Wie oft postet ihr?', answer: 'Mindestens 3x pro Woche auf Instagram, 2x auf TikTok. Je nach Paket auch täglich. Wir empfehlen Quality over Quantity, aber mit konsistenter Frequenz. Konsistenz ist wichtiger als Frequenz.' },
      { question: 'Brauchen wir Ads-Budget?', answer: 'Organisches Wachstum ist wichtig, aber Ads beschleunigen alles. Wir empfehlen mind. 300€/Monat Ad-Budget für erste Tests. Wir optimieren laufend für besseren ROAS.' },
      { question: 'Machen wir das im Haus?', answer: 'Ja, alles. Content-Produktion, Design, Copywriting, Ad-Management, alles bei uns. Du musst dich um nichts kümmern. Keine Koordination mit externen Fotografen oder Freelancern.' },
      { question: 'Wie messen wir Erfolg?', answer: 'Wöchentliche Reports mit Reichweite, Engagement, Follower-Wachstum, Website-Traffic und Conversions. Wir tracken was zählt, nicht was gut aussieht. Volle Transparenz.' },
      { question: 'Welche Plattformen betreut ihr?', answer: 'Instagram, TikTok, LinkedIn, Facebook, YouTube. Die Plattform-Wahl hängt von deiner Zielgruppe ab. Instagram für visuelle Branchen, TikTok für Zielgruppe 16-30, LinkedIn für B2B und Recruiting, Facebook für lokale Unternehmen 35+.' },
      { question: 'Was ist eine Content-Strategie?', answer: 'Eine Content-Strategie definiert: Was postest du? Für wen? Warum? Wir entwickeln Content-Pillar (3 bis 4 Hauptthemen), Tonalität, Visual-Guidelines und einen 90-Tage-Redaktionsplan. Statt ad-hoc zu posten, haben wir einen Plan.' },
      { question: 'Was ist eine gute Engagement Rate?', answer: 'Branchenabhängig. 1 bis 3% ist durchschnittlich, 4 bis 6% ist gut, 8%+ ist exzellent. Wichtiger als die absolute Zahl: Steigt die Engagement Rate über Zeit? Das zeigt, dass dein Content resoniert.' },
      { question: 'Könnt ihr Reels und TikToks produzieren?', answer: 'Ja. Wir produzieren Reels und TikToks im Haus, vom Konzept über Dreh bis zum Schnitt. Mit Untertiteln, Trending-Audio und plattformspezifischem Editing. Für Kunden in Wuppertal und NRW.' },
      { question: 'Was ist Social Media Marketing für Unternehmen in Wuppertal?', answer: 'Social Media Marketing für Wuppertaler Unternehmen bedeutet: lokale Zielgruppe erreichen, lokale Markenbekanntheit aufbauen, lokale Kunden gewinnen. Wir kennen den Markt im Bergischen Land und wissen, welche Branchen hier stark sind.' },
      { question: 'Wie lange bis ich Social Media Ergebnisse sehe?', answer: 'Organisches Wachstum: 3 bis 6 Monate für sichtbare Ergebnisse. Mit Ads: erste Leads innerhalb 1 bis 2 Wochen. Social Media ist ein Marathon, kein Sprint, aber mit der richtigen Strategie kommt der Erfolg.' },
      { question: 'Was ist der Instagram-Algorithmus 2025?', answer: 'Der Algorithmus belohnt Watch Time, Saves und Shares. Likes und Kommentare sind sekundär. Produziere Content, der gespeichert und geteilt wird. Reels haben die höchste organische Reichweite.' },
      { question: 'Bietet ihr Meta Ads (Facebook/Instagram Werbung) an?', answer: 'Ja. Vollumfänglich: Strategie, Creative-Produktion, Kampagnen-Setup, Optimierung, Reporting. Mit Meta Pixel und Conversions API für genaues Tracking. Wöchentliche Reports mit ROAS, CPA und klaren KPIs.' },
      { question: 'Könnt ihr Influencer-Marketing machen?', answer: 'Ja. Wir identifizieren passende Influencer, verhandeln Konditionen, managen den Content und tracken Ergebnisse. Mikro-Influencer (5K-50K Follower) sind oft effektiver als Macro-Influencer, höhere Engagement Rate, geringere Kosten.' },
      { question: 'Was kostet Social Media Marketing bei TnT Studio?', answer: 'Pakete starten bei 1.200€/Monat (Basic: 3 Posts/Woche, 1 Plattform). Pro-Pakete ab 2.000€/Monat (5 Posts/Woche, 2 Plattformen, Ads-Management). Full-Service ab 4.000€/Monat. Ad-Budget kommt dazu.' },
      { question: 'Könnt ihr Social Media für lackmangruppe.de übernehmen?', answer: 'Wir produzieren bereits Social Media Content für die Lackmann Gruppe. Regelmäßige Reels, Posts und Stories mit professionellem Editing und Color-Grading. Schau dir die Referenzen auf unserer Startseite an.' },
    ],
    caseStudies: [
      { client: 'Lackmann GmbH', result: 'Instagram-Content & Video-Produktion', description: 'Regelmässige Content-Produktion inkl. Formentor-Shoot. Video-Content für Instagram Reels und Stories mit professionellem Editing.', image: '/videos/lackmann-poster.webp' },
      { client: 'Esteves Recruiting', result: 'Full-Service Social Media', description: 'Komplette Social-Media-Betreuung, von der Strategie über Content-Produktion-hin zu Community Management und Ads.', image: '/images/portfolio/esteves-recruiting-web 14.55.42 14.56.09.webp' },
    ],
  },
  {
    title: 'Software Development',
    description: 'Massgeschneiderte Softwarelösungen, vom PDF-Generator bis zur API-Anbindung.',
    metaTitle: 'Software Entwicklung Wuppertal, Individuelle Web-Apps | TnT Studio',
    metaDescription: 'Individuelle Softwarelösungen: Web-Apps, APIs, Automatisierungen & Dashboards. Custom Code, DSGVO-konform, EU-Hosting, jetzt beraten lassen.',
    longDescription: 'Manchmal reicht eine Website nicht. Wenn du interne Prozesse digitalisieren, Daten automatisieren oder komplexe Workflows abbilden willst, bauen wir Software. Massgeschneidert, genau für deinen Use-Case. Wir entwickeln mit modernen Technologien, React, TypeScript, Node.js, und denken in Systemen, die skalieren. Ob PDF-Generatoren mit dynamischen Inhalten, API-Integrationen für CRM-Systeme oder komplette Plattformen: Wir bauen, was du brauchst, nicht was es fertig gibt.',
    features: ['Schadensreglementierung', 'Ausführbare PDFs (HTML/CSS)', 'API-Integrationen', 'DSGVO-konform', 'Google Maps & Analytics', 'CRM-Anbindungen', 'Automatisierungen', 'Dashboard-Entwicklung'],
    icon: 'cpu',
    process: [
      { title: 'Requirements Engineering', description: 'Wir erarbeiten ein detailliertes Pflichtenheft. Was muss die Software können? Welche Systeme müssen angebunden werden? Welche Constraints gibt es?' },
      { title: 'Architektur & Prototyping', description: 'System-Design, Datenmodell, API-Definition. Wir bauen einen MVP, damit du früh Feedback geben kannst.' },
      { title: 'Development & Testing', description: 'Iterative Entwicklung in Sprints. Unit-Tests, Integration-Tests, Security-Checks. Clean Code, dokumentiert und wartbar.' },
      { title: 'Deployment & Wartung', description: 'Deployment auf AWS, Vercel oder deinem Server. Monitoring, Updates und Erweiterungen nach Bedarf.' },
    ],
    stats: [
      { value: '100%', label: 'Custom Code' },
      { value: '0', label: 'Vendor Lock-in' },
      { value: '99.9%', label: 'Uptime' },
      { value: 'DSGVO', label: 'Konform' },
    ],
    faqs: [
      { question: 'Was ist mit ausführbaren PDFs?', answer: 'Wir generieren PDFs dynamisch aus HTML/CSS, mit Formularfeldern, dynamischen Inhalten und interaktiven Elementen. Ideal für Verträge, Rechnungen, Schadensberichte.' },
      { question: 'Könnt ihr unsere CRM anbinden?', answer: 'Ja. Wir haben Erfahrung mit HubSpot, Pipedrive, Notion API und Custom-CRMs. Wir bauen synchronisierte Workflows und Automatisierungen.' },
      { question: 'Wo wird gehostet?', answer: 'EU-Hosting auf AWS (Frankfurt) oder Vercel. DSGVO-konform, mit verschlüsselter Datenübertragung und regelmäßigen Backups. Keine US-Server.' },
      { question: 'Was kostet Software-Entwicklung?', answer: 'Nach Aufwand. Wir kalkulieren mit Tagesraten und geben dir vorab ein Fixpreis-Angebot für definierte Scopes. Typische Projekte starten bei 2.500€. Komplexe Plattformen ab 10.000€.' },
      { question: 'Was ist DSGVO-konforme Software?', answer: 'DSGVO-konforme Software verarbeitet personenbezogene Daten nur mit Einwilligung, speichert Daten in der EU, nutzt verschlüsselte Übertragung und bietet Löschfunktionen. Wir bauen DSGVO-konform von Grund auf.' },
      { question: 'Könnt ihr APIs entwickeln?', answer: 'Ja. Wir entwickeln REST APIs und GraphQL APIs, mit Authentifizierung, Rate-Limiting, Dokumentation (Swagger/OpenAPI). Für interne Systeme oder Partner-Integrationen.' },
      { question: 'Was ist ein MVP?', answer: 'Ein MVP (Minimum Viable Product) ist die minimale Version deiner Software mit den Kernfunktionen. Wir bauen ein MVP, damit du früh Feedback geben kannst, bevor wir alle Features implementieren. Spart Zeit und Geld.' },
      { question: 'Könnt ihr Automatisierungen bauen?', answer: 'Ja. Wir automatisieren Workflows, von E-Mail-Sequenzen über Daten-Synchronisation-zu Reporting-Pipelines. Weniger manuelle Arbeit, weniger Fehler, mehr Effizienz.' },
      { question: 'Bietet ihr Dashboards an?', answer: 'Ja. Wir bauen Custom Dashboards mit React, visualisiere deine Daten in Echtzeit. KPIs, Sales-Funnel, User-Activity. Integration mit Google Analytics, Stripe, HubSpot und mehr.' },
      { question: 'Was ist Vendor Lock-in?', answer: 'Vendor Lock-in bedeutet, dass du von einem Anbieter abhängig bist und nicht wechseln kannst. TnT Studio baut mit Open-Source-Technologien (React, Node.js), du bist nicht von uns abhängig. Der Code gehört dir.' },
      { question: 'Könnt ihr Google Maps integrieren?', answer: 'Ja. Google Maps Integration mit Custom Markers, Routenplanung, Geofencing. Ideal für Logistik-Unternehmen, Immobilien-Portale oder lokale Services.' },
      { question: 'Bietet ihr Wartung und Support nach dem Launch?', answer: 'Ja. Wir bieten Wartungsverträge mit Monitoring, Updates, Bug-Fixes und Erweiterungen. Software muss gepflegt werden, wir bleiben dein Partner nach dem Launch.' },
      { question: 'Könnt ihr bestehende Software erweitern?', answer: 'Ja. Wir analysieren deinen bestehenden Codebase, verstehen die Architektur und erweitern um neue Features. Voraussetzung: der Code ist wartbar und dokumentiert. Wir beraten ehrlich.' },
      { question: 'Was ist der Unterschied zwischen Website und Software?', answer: 'Eine Website informiert und präsentiert. Software automatisiert und interagiert. Eine Website zeigt deine Services. Software löst interne Probleme, Prozesse, Daten, Workflows. Manchmal brauchst du beides.' },
    ],
    caseStudies: [
      { client: 'meinfachmann.de', result: 'Schadensbericht-System', description: 'Ausführbare PDFs für Schadensreglementierung, HTML/CSS-basiert mit dynamischen Formularfeldern und automatischer Berechnung.', image: '/images/portfolio/meinfachmann.de 15.27.44.webp' },
      { client: 'Fairclaim FC GmbH', result: 'Identisches Schadens-System', description: 'Gleiches System für einen zweiten Kunden aus der Schadensregulierung. Skaliert und an spezifische Workflows angepasst.', image: '/images/portfolio/meinfachmann.de 15.27.44.webp' },
    ],
  },
]
