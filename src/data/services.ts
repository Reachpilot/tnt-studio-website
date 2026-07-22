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
    longDescription: 'Wir bauen Websites, die mehr sind als digitale Visitenkarten. Jedes Projekt startet mit einer tiefgehenden Analyse deiner Zielgruppe, deiner Wettbewerber und deiner Ziele. Dann entwickeln wir ein Design, das nicht nur modern aussieht, sondern auch funktioniert — auf jedem Gerät, in jeder Geschwindigkeit, für jeden User. Von der ersten Skizze bis zum Go-Live begleiten wir dich durch jeden Schritt und sorgen dafür, dass deine Website ein echtes Werkzeug für dein Business ist, kein Kostenfaktor.',
    features: ['Custom Development', 'Responsive Design', 'E-Commerce', 'UI/UX Design', 'Performance-Optimierung', 'SEO-Grundlagen', 'CMS-Integration', 'Conversion-Optimierung'],
    icon: 'code',
    process: [
      { title: 'Discovery & Strategie', description: 'Wir analysieren deine Marke, Zielgruppe und Wettbewerber. Wir definieren Ziele, Success Metrics und die technische Architektur.' },
      { title: 'Design & Prototyping', description: 'Wireframes werden zu High-Fidelity Designs. Wir bauen klickbare Prototypen in Figma, damit du das Erlebnis spürst, bevor eine Zeile Code geschrieben wird.' },
      { title: 'Development', description: 'Custom Development mit React, TypeScript und Tailwind CSS. Clean Code, semantische HTML-Struktur, optimiert für Speed und SEO.' },
      { title: 'Testing & Launch', description: 'Cross-Browser-Testing, Performance-Audits, Accessibility-Checks. Wir launchen erst, wenn alles perfekt ist — und bleiben danach für dich da.' },
    ],
    stats: [
      { value: '100%', label: 'Custom Code' },
      { value: '< 1s', label: 'Load Time' },
      { value: '95+', label: 'Lighthouse Score' },
      { value: '8+', label: 'Websites live' },
    ],
    faqs: [
      { question: 'Was kostet eine Website bei TnT Studio?', answer: 'Projekt-Websites starten bei 2.500€. E-Commerce-Plattformen ab 5.000€. Komplexe Softwarelösungen werden nach Aufwand kalkuliert. Jedes Projekt ist individuell — wir geben dir nach dem ersten Call ein Fixpreis-Angebot.' },
      { question: 'Wie lange dauert es, eine Website bauen zu lassen?', answer: 'Eine typische Projekt-Website dauert 2-4 Wochen. E-Commerce-Plattformen 4-8 Wochen. Komplexe Softwarelösungen können 3+ Monate dauern. Wir geben dir nach dem ersten Call ein genaues Timeline mit Meilensteinen.' },
      { question: 'Baut TnT Studio mit WordPress?', answer: 'Nein. Wir bauen mit React, TypeScript und Tailwind CSS. Das ist 2025 der Goldstandard für moderne Websites. WordPress ist für Blogs okay, aber für Business-Websites zu langsam, zu fehleranfällig und zu stark von Plugins abhängig. Custom Code bedeutet: volle Kontrolle, maximale Performance, kein Vendor Lock-in.' },
      { question: 'Ist SEO inklusive, wenn ich eine Website bauen lasse?', answer: 'Bei TnT Studio sind SEO-Grundlagen inklusive: semantisches HTML, Meta-Tags, Sitemap, strukturierte Daten (Schema Markup), schnelle Ladezeiten und mobile Optimierung. Tiefergehende SEO-Strategie (Keyword-Recherche, Content-Optimierung, Link-Building) ist ein separater Service.' },
      { question: 'Hosting und Domain inklusive?', answer: 'Wir kümmern uns um das Deployment auf Netlify oder Vercel. Hosting-Kosten liegen meist bei 0-20€/Monat. Die Domain kannst du mitbringen oder wir registrieren sie für dich. Wir bieten kein eigenes Hosting an, weil CDN-basiertes Hosting (Netlify/Vercel) schneller und sicherer ist.' },
      { question: 'Kann ich Inhalte selbst ändern?', answer: 'Ja. Wir integrieren ein Headless CMS (Sanity, Strapi oder Decap CMS), damit du Texte, Bilder und Blog-Posts selbst verwalten kannst — ohne Code-Kenntnisse. Bei Bedarf schulen wir dein Team im Umgang mit dem System.' },
      { question: 'Was passiert nach dem Launch der Website?', answer: 'Wir verschwinden nicht. Wir bieten Wartungsverträge an, kümmern uns um Updates, Backups und technische Optimierung. Bei Fragen sind wir erreichbar. Eine Website ist kein Einmal-Projekt — sie muss gepflegt werden.' },
      { question: 'Ist die Website mobil-optimiert?', answer: 'Ja, zwingend. Alle unsere Websites sind mobil-first entwickelt. Über 60% des Traffics kommt von Smartphones. Responsive Design ist Standard — keine Aufpreise. Google bestraft nicht-mobil-optimierte Websites.' },
      { question: 'Was ist der Unterschied zwischen Custom Code und Baukasten?', answer: 'Custom Code (React, TypeScript) bedeutet: jede Zeile Code ist für dein Projekt geschrieben. Volle Kontrolle, maximale Performance, keine Abhängigkeiten. Baukasten (Wix, Jimdo, WordPress-Templates) bedeutet: du nutzt vorgefertigte Bausteine, die du nicht kontrollieren kannst. Langsam, unflexibel, generisch.' },
      { question: 'Bekomme ich eine schnelle Website?', answer: 'Ja. LCP unter 1 Sekunde, Lighthouse-Score 95+. Wir bauen mit React + Vite + Tailwind CSS, hosten auf Netlify/Vercel mit globalem CDN und optimieren jedes Bild. Speed ist Standard bei TnT Studio, kein Add-on.' },
      { question: 'Kann ich meine bestehende Website übernehmen lassen?', answer: 'Ja. Wir analysieren deine bestehende Website und beraten ehrlich: behalten, optimieren oder neu bauen. Oft ist ein Neubau mit moderner Technologie sinnvoller als eine Optimierung einer alten Website. Wir migrieren Inhalte und Daten.' },
      { question: 'Bietet ihr E-Commerce-Websites an?', answer: 'Ja. Wir bauen E-Commerce-Plattformen mit Shopify, Medusa.js oder Custom-Lösungen. Produktkataloge, Warenkorb, Checkout, Zahlungsanbindung (Stripe, PayPal, Klarna). Ab 5.000€.' },
      { question: 'Was sind strukturierte Daten (Schema Markup)?', answer: 'Strukturierte Daten (Schema.org) sind Code, der Google erklärt, was dein Content bedeutet. FAQPage Schema zeigt FAQs in Google an. LocalBusiness Schema zeigt, dass du ein lokales Unternehmen bist. TnT Studio implementiert Schema Markup automatisch in jeder Website.' },
      { question: 'Kann TnT Studio meine Website in Wuppertal lokal optimieren?', answer: 'Ja. Wir optimieren für lokale Suchbegriffe ("Webdesign Wuppertal", "Medienagentur Wuppertal"), richten Google Business Profile ein, fügen LocalBusiness Schema Markup hinzu und sorgen für NAP-Konsistenz. Lokale SEO ist für lokale Unternehmen entscheidend.' },
      { question: 'Was ist responsive Webdesign?', answer: 'Responsive Webdesign bedeutet, dass sich die Website automatisch an jeden Bildschirm anpasst — Smartphone, Tablet, Desktop. Alle unsere Websites sind responsive. Google nutzt Mobile-First Indexing: die mobile Version bestimmt das Ranking.' },
    ],
    caseStudies: [
      { client: 'Cosi Brautmoden', result: 'Premium-Website für Brautmoden', description: 'Massgeschneiderte Website mit Fokus auf Emotion und Conversion. Galerie-Funktion, Terminbuchung und mobile-optimiertes Erlebnis.', image: '/images/portfolio/cosi-web.webp' },
      { client: 'Dexamon', result: 'Konversionsorientierte Plattform', description: 'Moderne Website mit klarem UX-Fokus. Schnelle Ladezeiten, strukturierte Produktdarstellung und SEO-Grundlagen.', image: '/images/portfolio/dexam-web.webp' },
      { client: 'Noi', result: 'Kulinarische Website', description: 'Elegante Website mit Fokus auf Atmosphäre und Kulinarik. Menu-Integration, Reservierungs-Flow und Instagram-Feed.', image: '/images/portfolio/noi/Designvorschlag 4-1.webp' },
    ],
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategische Social-Media-Präsenz, die deine Marke wachsen lässt.',
    longDescription: 'Social Media ist kein Bonus mehr — es ist das Schaufenster deiner Marke. Wir entwickeln Content-Strategien, die nicht nur Reichweite generieren, sondern echte Bindung aufbauen. Von der Content-Pillar-Definition über den Redaktionsplan bis hin zu Ad-Campaigns mit messbarem ROI. Wir posten nicht einfach drauf los — wir haben einen Plan, Daten und eine Strategie, die sich an deinen Business-Zielen orientiert, nicht an Vanity Metrics.',
    features: ['Content Strategy', 'Social Media Ads', 'Instagram & TikTok', 'Community Management', 'Influencer Marketing', 'Analytics & Reporting', 'A/B Testing', 'Hashtag-Strategie'],
    icon: 'social',
    process: [
      { title: 'Audit & Analyse', description: 'Bestandsaufnahme deiner Kanäle, Wettbewerberanalyse, Zielgruppen-Profiling. Wir identifizieren White Spaces und Opportunities.' },
      { title: 'Strategie & Pillars', description: 'Content-Pillar-Definition, Tonalität, Visual-Guidelines. Wir erstellen einen 90-Tage-Redaktionsplan mit klaren Themes pro Woche.' },
      { title: 'Content-Produktion', description: 'Wir produzieren Reels, Posts, Stories und TikToks — alles im Haus. Keine Koordination mit externen Fotografen, keine Verzögerungen.' },
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
      { question: 'Machen wir das im Haus?', answer: 'Ja, alles. Content-Produktion, Design, Copywriting, Ad-Management — alles bei uns. Du musst dich um nichts kümmern. Keine Koordination mit externen Fotografen oder Freelancern.' },
      { question: 'Wie messen wir Erfolg?', answer: 'Wöchentliche Reports mit Reichweite, Engagement, Follower-Wachstum, Website-Traffic und Conversions. Wir tracken was zählt, nicht was gut aussieht. Volle Transparenz.' },
      { question: 'Welche Plattformen betreut ihr?', answer: 'Instagram, TikTok, LinkedIn, Facebook, YouTube. Die Plattform-Wahl hängt von deiner Zielgruppe ab. Instagram für visuelle Branchen, TikTok für Zielgruppe 16-30, LinkedIn für B2B und Recruiting, Facebook für lokale Unternehmen 35+.' },
      { question: 'Was ist eine Content-Strategie?', answer: 'Eine Content-Strategie definiert: Was postest du? Für wen? Warum? Wir entwickeln Content-Pillar (3-4 Hauptthemen), Tonalität, Visual-Guidelines und einen 90-Tage-Redaktionsplan. Statt ad-hoc zu posten, haben wir einen Plan.' },
      { question: 'Was ist eine gute Engagement Rate?', answer: 'Branchenabhängig. 1-3% ist durchschnittlich, 4-6% ist gut, 8%+ ist exzellent. Wichtiger als die absolute Zahl: Steigt die Engagement Rate über Zeit? Das zeigt, dass dein Content resoniert.' },
      { question: 'Könnt ihr Reels und TikToks produzieren?', answer: 'Ja. Wir produzieren Reels und TikToks im Haus — vom Konzept über Dreh bis zum Schnitt. Mit Untertiteln, Trending-Audio und plattformspezifischem Editing. Für Kunden in Wuppertal und NRW.' },
      { question: 'Was ist Social Media Marketing für Unternehmen in Wuppertal?', answer: 'Social Media Marketing für Wuppertaler Unternehmen bedeutet: lokale Zielgruppe erreichen, lokale Markenbekanntheit aufbauen, lokale Kunden gewinnen. Wir kennen den Markt im Bergischen Land und wissen, welche Branchen hier stark sind.' },
      { question: 'Wie lange bis ich Social Media Ergebnisse sehe?', answer: 'Organisches Wachstum: 3-6 Monate für sichtbare Ergebnisse. Mit Ads: erste Leads innerhalb 1-2 Wochen. Social Media ist ein Marathon, kein Sprint — aber mit der richtigen Strategie kommt der Erfolg.' },
      { question: 'Was ist der Instagram-Algorithmus 2025?', answer: 'Der Algorithmus belohnt Watch Time, Saves und Shares. Likes und Kommentare sind sekundär. Produziere Content, der gespeichert und geteilt wird. Reels haben die höchste organische Reichweite.' },
      { question: 'Bietet ihr Meta Ads (Facebook/Instagram Werbung) an?', answer: 'Ja. Vollumfänglich: Strategie, Creative-Produktion, Kampagnen-Setup, Optimierung, Reporting. Mit Meta Pixel und Conversions API für genaues Tracking. Wöchentliche Reports mit ROAS, CPA und klaren KPIs.' },
      { question: 'Könnt ihr Influencer-Marketing machen?', answer: 'Ja. Wir identifizieren passende Influencer, verhandeln Konditionen, managen den Content und tracken Ergebnisse. Mikro-Influencer (5K-50K Follower) sind oft effektiver als Macro-Influencer — höhere Engagement Rate, geringere Kosten.' },
      { question: 'Was kostet Social Media Marketing bei TnT Studio?', answer: 'Pakete starten bei 800€/Monat (Basic: 3 Posts/Woche, 1 Plattform). Pro-Pakete ab 1.500€/Monat (5 Posts/Woche, 2 Plattformen, Ads-Management). Full-Service ab 2.500€/Monat. Ad-Budget kommt dazu.' },
      { question: 'Könnt ihr Social Media für lackmangruppe.de übernehmen?', answer: 'Wir produzieren bereits Social Media Content für die Lackmann Gruppe. Regelmäßige Reels, Posts und Stories mit professionellem Editing und Color-Grading. Schau dir die Referenzen auf unserer Startseite an.' },
    ],
    caseStudies: [
      { client: 'Lackmann GmbH', result: 'Instagram-Content & Video-Produktion', description: 'Regelmässige Content-Produktion inkl. Formentor-Shoot. Video-Content für Instagram Reels und Stories mit professionellem Editing.', image: '/videos/lackmann-poster.webp' },
      { client: 'Esteves Recruiting', result: 'Full-Service Social Media', description: 'Komplette Social-Media-Betreuung — von der Strategie über Content-Produktion bis hin zu Community Management und Ads.', image: '/images/portfolio/esteves-recruiting-web 14.55.42 14.56.09.webp' },
    ],
  },
  {
    title: 'Content Creation',
    description: 'Hochwertige Inhalte, die Geschichten erzählen und Aufmerksamkeit generieren.',
    longDescription: 'Content ist König — aber nur, wenn er gut ist. Wir produzieren Video-Content, der emotionalisiert, Fotos, die ins Auge springen, und Geschichten, die hängen bleiben. Ob Reel, Imagefilm, Produktvideo oder komplette Content-Serie: Wir haben die Equipment, das Auge und das Gespür für das, was heute funktioniert. Wir denken in Formaten, nicht in einzelnen Posts. Jedes Stück Content hat einen Zweck, eine Zielgruppe und eine Botschaft.',
    features: ['Video Content', 'Fotoshootings', 'Storytelling', 'Reels & TikToks', 'Explainer Videos', 'Imagefilme', 'Produktvideos', 'Behind-the-Scenes'],
    icon: 'video',
    process: [
      { title: 'Konzept & Storyboard', description: 'Wir entwickeln die Content-Idee, schreiben das Skript, erstellen Storyboards und definieren Formate für jeden Kanal.' },
      { title: 'Produktion', description: 'Drehtag mit professionellem Equipment — Kamera, Licht, Audio. Wir regeln Location, Talents und alle Details.' },
      { title: 'Post-Produktion', description: 'Schnitt, Color-Grading, Sound-Design, Motion Graphics. Wir liefern fertige Content-Pakete für alle Kanäle.' },
      { title: 'Distribution', description: 'Wir optimieren für jeden Kanal — vertikal für Reels, horizontal für YouTube, quadratisch für Feed. Mit Caption und Hashtags.' },
    ],
    stats: [
      { value: '500+', label: 'Videos produziert' },
      { value: '4K', label: 'Quality' },
      { value: '48h', label: 'Delivery Time' },
      { value: '1M+', label: 'Views generiert' },
    ],
    faqs: [
      { question: 'Was kostet ein Video?', answer: 'Reels ab 300€, Imagefilme ab 1.500€, komplette Content-Serien nach Paket. Wir bieten Content-Pakete mit 10+ Videos/Monat an. Express-Service (24h) gegen Aufpreis.' },
      { question: 'Kommt ihr zu uns?', answer: 'Ja, wir kommen zu deiner Location. Für Studio-Shoots haben wir Räumlichkeiten in Wuppertal. Reisekosten innerhalb NRW inklusive. Für große Produkte (Möbel, Autos) kommen wir zu dir.' },
      { question: 'Wie schnell liefert ihr?', answer: 'Reels innerhalb 48h nach Drehtag. Imagefilme innerhalb 5-7 Tagen. Großprojekte nach Absprache mit Milestones. Express-Service (24h) auf Anfrage möglich.' },
      { question: 'Bekommen wir das Rohmaterial?', answer: 'Ja, auf Wunsch liefern wir alle Raw-Files. Du hast volle Rechte an allen produzierten Inhalten. Keine versteckten Lizenzgebühren oder Nutzungsbeschränkungen.' },
      { question: 'In welcher Qualität liefert ihr?', answer: '4K für Imagefilme und Produktvideos. 1080p für Reels und Social Media Content. Web-optimiert (WebM/MP4) und Print-ready. Alle Formate: vertikal (9:16), horizontal (16:9), quadratisch (1:1).' },
      { question: 'Macht ihr auch Drohnen-Aufnahmen?', answer: 'Ja, wir haben Drohnen-Kompetenz und die entsprechenden Genehmigungen. Drohnen-Aufnahmen eignen sich für Immobilien, Events, Landschaften und Unternehmensgelände.' },
      { question: 'Könnt ihr Musikrechte klären?', answer: 'Ja. Wir nutzen lizenzfreie Musik (Epidemic Sound, Artlist) oder klären GEMA-Rechte für kommerzielle Nutzung. Du bekommst Content, das du rechtssicher überall veröffentlichen kannst.' },
      { question: 'Was ist ein Content-Paket?', answer: 'Ein Content-Paket beinhaltet eine feste Anzahl Videos pro Monat (z.B. 10 Reels + 2 Imagefilme) zu einem monatlichen Preis. Effizienter als Einzelbuchungen und sorgt für konsistente Social-Media-Präsenz.' },
      { question: 'Bietet ihr auch Fotografie an?', answer: 'Ja. Wir bieten Produktfotografie, Eventfotografie und Corporate-Fotografie. Mit professionellem Studio-Setup und Retusche. Fotografie und Video aus einer Hand — konsistente Bildsprache.' },
      { question: 'Produziert TnT Studio für lackmangruppe.de?', answer: 'Ja. Wir produzieren regelmäßig Content für die Lackmann Gruppe — Reels, Imagefilme, Produktvideos. Vom Formentor-Shoot bis zu Kunden-Stimmen-Videos. Schau dir die Referenzen auf unserer Startseite an.' },
      { question: 'Was ist der Unterschied zwischen Reel und Imagefilm?', answer: 'Reels sind vertikale Kurzvideos (9:16, 15-30 Sekunden) für Instagram und TikTok. Imagefilme sind hochwertige Unternehmensfilme (16:9, 1-3 Minuten) für Website und YouTube. Reels = Reichweite, Imagefilme = Branding.' },
      { question: 'Könnt ihr Erklärvideos (Explainer Videos) produzieren?', answer: 'Ja. Wir produzieren Explainer Videos für komplexe Themen — 60-90 Sekunden, mit Motion Graphics und Voice-Over. Ideal um Produkte oder Services einfach zu erklären.' },
      { question: 'Bietet ihr Event-Dokumentation an?', answer: 'Ja. Wir dokumentieren Events filmisch und fotografisch — 1-5 Minuten Aftermovie plus Social Media Clips. Mit mehreren Kameras, Drohne und professionellem Audio.' },
      { question: 'Kann ich einzelne Reels buchen?', answer: 'Ja. Einzelne Reels ab 300€. Aber Content-Pakete sind effizienter — ein Drehtag kann 10+ Reels produzieren, die über Wochen verteilt werden. Das senkt den Preis pro Reel deutlich.' },
    ],
    caseStudies: [
      { client: 'Lackmann GmbH', result: 'Formentor-Shoot & Reels', description: 'Professioneller Video-Shoot mit dem Formentor, produziert als Reels und Imagefilm. Cinematic Look mit Color-Grading.', image: '/videos/lackmann-poster.webp' },
    ],
  },
  {
    title: 'Produktfotografie',
    description: 'Professionelle Produktbilder, die deine Produkte ins beste Licht rücken.',
    longDescription: 'Gute Produktfotos verkaufen. Schlechte Produktfotos kosten dich Kunden. Wir fotografieren deine Produkte mit professionellem Studio-Setup — perfekt ausgeleuchtet, gestochen scharf und ready für deinen Online-Shop, Amazon, eBay oder Print-Kataloge. Von weissen Hintergrund-Shots bis zu Lifestyle-Szenen mit Models: Wir wissen, wie Produkte aussehen müssen, um zu konvertieren. Jedes Bild wird retuschiert, farbkorrigiert und in allen benötigten Formaten geliefert.',
    features: ['E-Commerce Shots', 'White Background', 'Lifestyle Photography', '360° Views', 'Professional Editing', 'Amazon-optimiert', 'Print-ready', 'Bulk-Bearbeitung'],
    icon: 'camera',
    process: [
      { title: 'Briefing & Styling', description: 'Wir besprechen Look, Mood und Use-Case der Bilder. Styling-Konzept, Props und Background werden definiert.' },
      { title: 'Studio-Shoot', description: 'Professioneller Shoot mit Studio-Blitzanlagen, Softboxen und Makro-Objektiven. Jedes Detail wird perfekt ausgeleuchtet.' },
      { title: 'Retusche', description: 'Hautretusche, Freisteller, Farbkorrektur, Schatten-Optimierung. Jedes Bild wird bis ins Detail bearbeitet.' },
      { title: 'Delivery', description: 'Du erhältst alle Bilder in Web- und Print-Auflösung, in allen benötigten Formaten — ready für Shop, Social und Print.' },
    ],
    stats: [
      { value: '2000+', label: 'Produkte fotografiert' },
      { value: '100%', label: 'In-house Studio' },
      { value: '24h', label: 'Express Option' },
      { value: '50+', label: 'Produkte / Tag' },
    ],
    faqs: [
      { question: 'Müssen wir die Produkte schicken?', answer: 'Ja, du schickst uns die Produkte zu. Nach dem Shoot schicken wir sie zurück. Für größere Mengen oder große Produkte kommen wir auch zu dir.' },
      { question: 'Wie viele Bilder pro Produkt?', answer: 'Standard sind 3-5 Bilder pro Produkt (Front, Side, Detail, Lifestyle). Empfehlung: 5-8 Bilder pro Produkt für maximale Conversion Rate. Du kannst beliebig upgraden.' },
      { question: 'Amazon-konform?', answer: 'Ja, wir kennen die Amazon-Richtlinien. Weißer Hintergrund, min. 1000x1000px, mit Zoom-Funktion. Wir liefern ready für Amazon, Zalando und eBay.' },
      { question: 'Könnt ihr auch Lifestyle-Shoots?', answer: 'Ja, mit Models, Location und Styling. Ideal für Brand-Storytelling und Social Media Content. Die Kombination aus White-Background (Shop) und Lifestyle (Social Media) ist optimal.' },
      { question: 'Was kostet Produktfotografie in Wuppertal?', answer: 'White-Background-Fotos ab 30€ pro Produkt. Lifestyle-Shoots ab 50€ pro Produkt. Content-Pakete mit 20+ Produkten günstiger. Drehtag-Pakete ab 800€. Retusche inklusive.' },
      { question: 'Wie schnell liefert ihr die Fotos?', answer: 'White-Background-Fotos innerhalb 48h. Lifestyle-Shoots innerhalb 3-5 Tagen. Retusche inklusive. Express-Service (24h) auf Anfrage.' },
      { question: 'Bekomme ich die Raw-Files?', answer: 'Ja, auf Wunsch. Du hast volle Rechte an allen Fotos. Keine versteckten Lizenzgebühren. Du kannst die Fotos überall nutzen — Shop, Social Media, Print, Ads.' },
      { question: 'Könnt ihr auch 360°-Fotos produzieren?', answer: 'Ja, auf Anfrage. 360°-Produktfotografie für Premium-Produkte. Der Kunde kann das Produkt aus allen Winkeln betrachten. Erhöht die Conversion Rate um 20-40%.' },
      { question: 'Was ist Farbtreue und warum ist sie wichtig?', answer: 'Farbtreue bedeutet, dass die Farben auf dem Foto exakt dem realen Produkt entsprechen. Abweichungen führen zu Retouren ("Farbton passt nicht"). Wir kalibrieren unsere Monitore und nutzen Color-Management für exakte Farben.' },
      { question: 'Bietet TnT Studio auch Modefotografie an?', answer: 'Ja. Wir fotografieren Mode am Model und als Flatlay. Mit professionellem Styling, Beleuchtung und Retusche. Für Brautmoden, Streetwear, Corporate Fashion — alles aus einer Hand.' },
      { question: 'Könnt ihr Produktvideos produzieren?', answer: 'Ja. Produktvideos sind die logische Ergänzung zur Fotografie. 360°-Drehs, Detail-Videos, Verwendungsvideos. Foto und Video aus einer Hand sorgt für konsistente Bildsprache.' },
      { question: 'Was ist der Unterschied zwischen White-Background und Lifestyle?', answer: 'White-Background: Produkt auf weißem Hintergrund, perfekt für Shop und Plattformen. Lifestyle: Produkt in Aktion (Auto auf Straße, Kleidung am Model). White-Background für Shop, Lifestyle für Social Media. Beides ist optimal.' },
      { question: 'Könnt ihr Bulk-Bearbeitung?', answer: 'Ja. Für große Produktkataloge (50+ Produkte) bieten wir Bulk-Pakete mit reduziertem Preis pro Produkt. Effiziente Workflow-Pipeline mit konsistenter Qualität.' },
      { question: 'In welchen Formaten liefert ihr?', answer: 'Web-optimiert (WebP, JPEG) und Print-ready (TIFF, PNG). Alle Formate: quadratisch (1:1), horizontal (16:9), vertikal (4:5 für Instagram). Wir liefern in den Formaten, die du brauchst.' },
    ],
    caseStudies: [
      { client: 'Skylady', result: 'Kompletter Online-Shop', description: 'Professionelle Produktfotos für den gesamten Online-Shop. White-Background-Shots und Lifestyle-Szenen für Social Media.', image: '/images/portfolio/skyleds.webp' },
    ],
  },
  {
    title: 'Branding',
    description: 'Starke Markenidentitäten, die im Gedächtnis bleiben.',
    longDescription: 'Eine Marke ist mehr als ein Logo. Es ist das Gefühl, das Menschen haben, wenn sie an dich denken. Wir entwickeln Markenidentitäten, die konsistent, erkennbar und langlebig sind — vom Logo über die Farbwelt bis zur Tonalität. Wir denken nicht in Einzelteilen, sondern in Systemen. Eine Marke, die auf jeder Touchpoint stimmt — von der Visitenkarte bis zur Website, vom Instagram-Post bis zur Verpackung. Wir bauen Marken, die Menschen vertrauen.',
    features: ['Brand Strategy', 'Logo Design', 'Corporate Design', 'Brand Guidelines', 'Brand Positioning', 'Farbsysteme', 'Typografie', 'Verpackungsdesign'],
    icon: 'palette',
    process: [
      { title: 'Brand Workshop', description: 'Wir erarbeiten Werte, Mission, Vision und Positionierung. Wer bist du? Für wen bist du da? Warum du?' },
      { title: 'Visual Identity', description: 'Logo-Entwicklung, Farbsystem, Typografie, Bildsprache. Wir erstellen 2-3 Konzepte und verfeinern den Favoriten.' },
      { title: 'Brand Guidelines', description: 'Ein Brand-Manual mit allen Regeln — Logo-Usage, Farben, Schriften, Do\'s & Don\'ts. Damit jeder weiss, wie die Marke funktioniert.' },
      { title: 'Rollout', description: 'Wir setzen die Marke auf allen Kanälen um — Website, Social Media, Print, Verpackung. Konsistenz überall.' },
    ],
    stats: [
      { value: '15+', label: 'Brands entwickelt' },
      { value: '3', label: 'Konzept-Runden' },
      { value: '100%', label: 'Custom Design' },
      { value: '∞', label: 'Skalierbar' },
    ],
    faqs: [
      { question: 'Wie lange dauert Branding?', answer: 'Ein komplettes Branding-Projekt dauert 4-8 Wochen. Logo-only-Projekte 1-2 Wochen. Wir empfehlen das volle Paket für Konsistenz. Express-Branding in 2 Wochen möglich, aber nicht empfohlen.' },
      { question: 'Bekommen wir alle Dateien?', answer: 'Ja. Vektor-Dateien (SVG, AI, EPS), Raster-Dateien (PNG, JPG), Web-Optimized und Print-ready. In allen Farbvarianten. Du hast volle Rechte an allen Dateien.' },
      { question: 'Was ist in den Guidelines?', answer: 'Logo-Usage, Mindestgrößen, Freiraum, Farben (HEX, RGB, CMYK, Pantone), Typografie, Bildsprache, Tonalität, Do\'s & Don\'ts. Alles, was du brauchst, um die Marke konsistent zu führen.' },
      { question: 'Macht ihr auch Rebranding?', answer: 'Ja. Wir analysieren die bestehende Marke, identifizieren was funktioniert und was nicht, und entwickeln eine Evolution — keine Revolution, es sei denn du willst es. Manchmal reicht ein Refresh (Logo modernisieren).' },
      { question: 'Was kostet ein Branding bei TnT Studio?', answer: 'Ein komplettes Branding (Logo, Farbsystem, Typografie, Bildsprache, Brand Guidelines) startet bei 2.500-5.000€. Premium-Branding mit umfassender Strategie: 5.000-15.000€. Logo-only ab 800€.' },
      { question: 'Was ist der Unterschied zwischen Branding und Corporate Identity?', answer: 'Branding ist der strategische Prozess, eine Marke aufzubauen. Corporate Identity (CI) ist das visuelle und verbale Werkzeug dafür — Logo, Farben, Schriften, Tonalität. Branding ist die Strategie, CI ist die Umsetzung.' },
      { question: 'Brauche ich Brand Guidelines?', answer: 'Ja, zwingend. Brand Guidelines (auch Style Guide genannt) dokumentieren, wie die Marke angewendet wird. Ohne Guidelines driftet die Marke auseinander. Jeder Mitarbeiter, jede Agentur muss sich daran halten.' },
      { question: 'Kann ich mein bestehendes Logo behalten?', answer: 'Ja, wenn es gut ist. Wir analysieren dein bestehendes Branding und beraten ehrlich: behalten, optimieren oder neu machen. Manchmal reicht ein Refresh, manchmal ist ein kompletter Neuanfang besser.' },
      { question: 'Was ist eine Markenstimme (Tonalität)?', answer: 'Die Tonalität definiert, wie deine Marke spricht. Formell oder locker? Technisch oder emotional? Direkt oder höflich? TnT Studio spricht direkt, kompetent, kein Bullshit. Das ist unsere Tonalität.' },
      { question: 'Könnt ihr mein Branding auf Social Media übertragen?', answer: 'Ja. Wir erstellen Social Media Templates, die deine CI konsistent anwenden. Jeder Post folgt dem Farbsystem, der Typografie und der Bildsprache. Konsistenz über alle Touchpoints stärkt die Marke.' },
      { question: 'Was ist ein Logo-Refresh?', answer: 'Ein Logo-Refresh modernisiert ein bestehendes Logo, ohne die Marke zu verändern. Feinjustierung von Proportionen, Farben, Schriften. Ein Rebrand hingegen ist ein kompletter Neuanfang. Wir beraten, was für dich richtig ist.' },
      { question: 'Brauche ich ein professionelles Branding als KMU?', answer: 'Ja. Ein konsistentes Branding unterscheidet dich vom Wettbewerb, schafft Vertrauen und erhöht den wahrgenommenen Wert. KMU mit professionellem Branding können höhere Preise durchsetzen als KMU ohne.' },
      { question: 'Könnt ihr Branding für esteves-recruiting.com übernehmen?', answer: 'Wir haben das Branding für Esteves Recruiting bereits entwickelt. Logo, Farbsystem, Typografie, Bildsprache — alles aus dem TnT Studio. Schau dir esteves-recruiting.com an, um das Ergebnis zu sehen.' },
      { question: 'Was ist Brand Positioning?', answer: 'Brand Positioning definiert, wo deine Marke im Markt steht — im Verhältnis zur Konkurrenz. Was macht dich anders? Warum sollten Kunden zu dir kommen? Eine klare Positionierung ist das Fundament jeder starken Marke.' },
      { question: 'Bietet ihr auch Verpackungsdesign an?', answer: 'Ja, auf Anfrage. Verpackungsdesign, das deine Marke auf dem Produkt fortsetzt. Von der Konzeption über Mockups bis zum druckfertigen Layout. Konsistent mit deiner Corporate Identity.' },
    ],
    caseStudies: [
      { client: 'Tiato', result: 'Logo Design für Restaurant', description: 'Markantes, wiedererkennbares Logo für ein Restaurant in München. Modern, elegant und einprägsam.', image: '/marken/tiato-logo.webp' },
      { client: 'Esteves Recruiting', result: 'Komplette Markenidentität', description: 'Markenentwicklung von Grund auf — Logo, Farbsystem, Typografie und Brand Guidelines für die Recruiting-Sparte.', image: '/marken/Esteves-recruiting.webp' },
    ],
  },
  {
    title: 'Software Development',
    description: 'Massgeschneiderte Softwarelösungen — vom PDF-Generator bis zur API-Anbindung.',
    longDescription: 'Manchmal reicht eine Website nicht. Wenn du interne Prozesse digitalisieren, Daten automatisieren oder komplexe Workflows abbilden willst, bauen wir Software. Massgeschneidert, genau für deinen Use-Case. Wir entwickeln mit modernen Technologien — React, TypeScript, Node.js — und denken in Systemen, die skalieren. Ob PDF-Generatoren mit dynamischen Inhalten, API-Integrationen für CRM-Systeme oder komplette Plattformen: Wir bauen, was du brauchst, nicht was es fertig gibt.',
    features: ['Schadensreglementierung', 'Ausführbare PDFs (HTML/CSS)', 'API-Integrationen', 'DSGVO-konform', 'Google Maps & Analytics', 'CRM-Anbindungen', 'Automatisierungen', 'Dashboard-Entwicklung'],
    icon: 'terminal',
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
      { question: 'Was ist mit ausführbaren PDFs?', answer: 'Wir generieren PDFs dynamisch aus HTML/CSS — mit Formularfeldern, dynamischen Inhalten und interaktiven Elementen. Ideal für Verträge, Rechnungen, Schadensberichte.' },
      { question: 'Könnt ihr unsere CRM anbinden?', answer: 'Ja. Wir haben Erfahrung mit HubSpot, Pipedrive, Notion API und Custom-CRMs. Wir bauen synchronisierte Workflows und Automatisierungen.' },
      { question: 'Wo wird gehostet?', answer: 'EU-Hosting auf AWS (Frankfurt) oder Vercel. DSGVO-konform, mit verschlüsselter Datenübertragung und regelmäßigen Backups. Keine US-Server.' },
      { question: 'Was kostet Software-Entwicklung?', answer: 'Nach Aufwand. Wir kalkulieren mit Tagesraten und geben dir vorab ein Fixpreis-Angebot für definierte Scopes. Typische Projekte starten bei 5.000€. Komplexe Plattformen ab 15.000€.' },
      { question: 'Was ist DSGVO-konforme Software?', answer: 'DSGVO-konforme Software verarbeitet personenbezogene Daten nur mit Einwilligung, speichert Daten in der EU, nutzt verschlüsselte Übertragung und bietet Löschfunktionen. Wir bauen DSGVO-konform von Grund auf.' },
      { question: 'Könnt ihr APIs entwickeln?', answer: 'Ja. Wir entwickeln REST APIs und GraphQL APIs — mit Authentifizierung, Rate-Limiting, Dokumentation (Swagger/OpenAPI). Für interne Systeme oder Partner-Integrationen.' },
      { question: 'Was ist ein MVP?', answer: 'Ein MVP (Minimum Viable Product) ist die minimale Version deiner Software mit den Kernfunktionen. Wir bauen ein MVP, damit du früh Feedback geben kannst — bevor wir alle Features implementieren. Spart Zeit und Geld.' },
      { question: 'Könnt ihr Automatisierungen bauen?', answer: 'Ja. Wir automatisieren Workflows — von E-Mail-Sequenzen über Daten-Synchronisation bis zu Reporting-Pipelines. Weniger manuelle Arbeit, weniger Fehler, mehr Effizienz.' },
      { question: 'Bietet ihr Dashboards an?', answer: 'Ja. Wir bauen Custom Dashboards mit React — visualisiere deine Daten in Echtzeit. KPIs, Sales-Funnel, User-Activity. Integration mit Google Analytics, Stripe, HubSpot und mehr.' },
      { question: 'Was ist Vendor Lock-in?', answer: 'Vendor Lock-in bedeutet, dass du von einem Anbieter abhängig bist und nicht wechseln kannst. TnT Studio baut mit Open-Source-Technologien (React, Node.js) — du bist nicht von uns abhängig. Der Code gehört dir.' },
      { question: 'Könnt ihr Google Maps integrieren?', answer: 'Ja. Google Maps Integration mit Custom Markers, Routenplanung, Geofencing. Ideal für Logistik-Unternehmen, Immobilien-Portale oder lokale Services.' },
      { question: 'Bietet ihr Wartung und Support nach dem Launch?', answer: 'Ja. Wir bieten Wartungsverträge mit Monitoring, Updates, Bug-Fixes und Erweiterungen. Software muss gepflegt werden — wir bleiben dein Partner nach dem Launch.' },
      { question: 'Könnt ihr bestehende Software erweitern?', answer: 'Ja. Wir analysieren deinen bestehenden Codebase, verstehen die Architektur und erweitern um neue Features. Voraussetzung: der Code ist wartbar und dokumentiert. Wir beraten ehrlich.' },
      { question: 'Was ist der Unterschied zwischen Website und Software?', answer: 'Eine Website informiert und präsentiert. Software automatisiert und interagiert. Eine Website zeigt deine Services. Software löst interne Probleme — Prozesse, Daten, Workflows. Manchmal brauchst du beides.' },
    ],
    caseStudies: [
      { client: 'meinfachmann.de', result: 'Schadensbericht-System', description: 'Ausführbare PDFs für Schadensreglementierung — HTML/CSS-basiert mit dynamischen Formularfeldern und automatischer Berechnung.', image: '/images/portfolio/meinfachmann.de 15.27.44.webp' },
      { client: 'Fairclaim FC GmbH', result: 'Identisches Schadens-System', description: 'Gleiches System für einen zweiten Kunden aus der Schadensregulierung. Skaliert und an spezifische Workflows angepasst.', image: '/images/portfolio/meinfachmann.de 15.27.44.webp' },
    ],
  },
]
