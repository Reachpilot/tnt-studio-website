export interface BlogSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readingTime: string
  category: string
  emoji: string
  sections: BlogSection[]
  faqs?: BlogFAQ[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'warum-die-meisten-agenturen-versagen',
    title: 'Warum die meisten Agenturen versagen (und wir nicht)',
    excerpt: 'Wir haben mit 15 angefangen und schnell gemerkt: schöne Worte verkauft jeder. Ergebnisse nicht. Hier ist unser Ansatz, warum er funktioniert — und was du von einer echten Agentur erwarten solltest.',
    date: '2025-06-15',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'Agentur-Insights',
    emoji: '🎯',
    sections: [
      {
        heading: 'Das Problem mit der Agentur-Welt',
        paragraphs: [
          'Die meisten Agenturen arbeiten nach dem gleichen Muster: grosses Versprechen, schickes Pitch-Deck, dann kommt die Rechnung — und danach? Radio silence. Du bezahlst für Slides, nicht für Ergebnisse. Wir haben das als 15-jährige gemerkt, als wir das erste Mal mit Agenturen zu tun hatten. Es war frustrierend.',
          'Das Problem ist nicht, dass Agenturen absichtlich schlecht arbeiten. Das Problem ist, dass sie sich als Dienstleister sehen, nicht als Partner. Ein Dienstleister liefert, was auf dem Briefing steht. Ein Partner denkt mit, was auf dem Briefing stehen sollte.',
        ],
      },
      {
        heading: 'Unser Ansatz: Partner, nicht Dienstleister',
        paragraphs: [
          'Wir arbeiten anders. Wenn du zu uns kommst mit "Ich brauche eine Website", fragen wir zuerst: Warum? Was soll die Website bewirken? Mehr Leads? Mehr Vertrauen? Mehr Verkäufe? Die Antwort bestimmt alles — Design, Struktur, Copywriting, Technologie.',
          'Das bedeutet auch, dass wir manchmal sagen: "Du brauchst keine neue Website. Du brauchst bessere Produktfotos." Oder: "Dein Problem ist nicht das Marketing, es ist dein Pricing." Das ist nicht das, was man hören will. Aber es ist das, was hilft.',
        ],
      },
      {
        heading: 'Was eine echte Agentur ausmacht',
        paragraphs: [
          'Hier ist unsere Checkliste für das, was eine gute Agentur tun sollte — und was wir jeden Tag tun:',
        ],
        list: [
          'Strategie vor Execution — erst verstehen, dann machen',
          'Messbare Ziele statt Vanity Metrics',
          'Transparente Kommunikation — wöchentliche Updates, keine Überraschungen',
          'Ehrliches Feedback — auch wenn es unbequem ist',
          'Volle Rechte an allen Inhalten — kein Vendor Lock-in',
          'Post-Launch Support — wir verschwinden nicht nach dem Go-Live',
          'Fair Pricing — du weisst genau, wofür du zahlst',
        ],
      },
      {
        heading: 'Ergebnisse zählen, nicht Versprechen',
        paragraphs: [
          'Wir betreuen Kunden mit neunstelligen Jahresumsätzen. Wir haben Marken von der Ehrenstraße in Köln bis nach Amerika aufgebaut. Wir haben eine eigene Recruiting-Sparte gelauncht. Das sind nicht nur Worte — das sind Fakten.',
          'Wenn du das nächste Mal eine Agentur suchst, frag nicht nach Referenzen. Frag nach Ergebnissen. Frag nach Zahlen. Frag: "Was hast du für deine Kunden bewegt?" Wenn die Antwort nur "schöne Website" ist — weitergehen.',
        ],
      },
    ],
  },
  {
    slug: 'web-design-trends-2025',
    title: 'Web Design Trends 2025: Was wirklich funktioniert',
    excerpt: 'Bento Grids, Glassmorphism, 3D-Elemente — jeder spricht von Trends. Aber welche davon bringen dir echte Ergebnisse? Wir haben 8+ Websites gebaut und sagen dir, was sich lohnt und was nicht.',
    date: '2025-05-28',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'Web Design',
    emoji: '🎨',
    sections: [
      {
        heading: 'Trend vs. Zeitlosigkeit',
        paragraphs: [
          'Jedes Jahr kommen neue Web-Design-Trends. Bento Grids, Glassmorphism, brutalistische Typografie, 3D-Scrolling, AI-generierte Hintergründe. Das Problem: Was heute trendy ist, sieht in zwei Jahren outdated aus. Und eine Website, die du alle zwei Jahre neu machst, ist teuer.',
          'Unser Ansatz: Wir bauen zeitlose Grundlagen und setzen Trends gezielt als Akzente ein. Eine cleare Typografie, gutes Spacing und starke Bilder funktionieren 2025 genauso wie 2027. Trends sind das Sahnehäubchen, nicht der Kuchen.',
        ],
      },
      {
        heading: 'Was 2025 wirklich funktioniert',
        paragraphs: [
          'Nach 8+ gebauten Websites haben wir gemerkt, dass bestimmte Dinge immer funktionieren — egal welcher Trend gerade angesagt ist:',
        ],
        list: [
          'Grosse, mutige Typografie — lesbar auf jedem Gerät',
          'Weissraum als Design-Element — nicht alles muss gefüllt sein',
          'Micro-Interactions — sanfte Hover-Effekte, die Leben reinbringen',
          'Dark Mode Support — nicht optional anymore',
          'Performance als Feature — unter 1 Sekunde Ladezeit',
          'Mobile-First — 70%+ kommen vom Handy',
          'Accessibility — barrierefrei ist Standard, nicht Premium',
        ],
      },
      {
        heading: 'Was wir vermeiden',
        paragraphs: [
          'Auf der anderen Seite gibt es Dinge, die wir 2025 bewusst nicht machen — obwohl sie "trendy" sind:',
          'Auto-Play-Videos als Hintergrund — nervig und killt die Performance. Komplexe Parallax-Scrolling — sieht beim ersten Mal cool aus, dann nervt es. Cookie-Banners mit Dark Patterns — wir bauen cleane, ehrliche Banner. Pop-ups nach 3 Sekunden — respektiere deine Besucher.',
        ],
      },
      {
        heading: 'Die Technologie dahinter',
        paragraphs: [
          'Wir bauen mit React, TypeScript und Tailwind CSS. Das ist 2025 der Goldstandard für moderne Websites. Vite als Build-Tool sorgt für Ladezeiten unter einer Sekunde. Netlify oder Vercel für Hosting bedeutet CDN weltweit, automatische SSL-Zertifikate und Zero-Config-Deploys.',
          'Das bedeutet für dich: Deine Website ist schnell, sicher und wartbar. Wenn du in zwei Jahren etwas ändern willst, kann jeder Entwickler, der React kennt, daran arbeiten. Kein Vendor Lock-in, keine proprietäre Technologie.',
        ],
      },
    ],
  },
  {
    slug: 'social-media-strategie-die-wirkt',
    title: 'Social Media Strategie, die wirklich wirkt (kein Bullshit)',
    excerpt: 'Jeder sagt "poste jeden Tag". Wir sagen: poste richtig. Hier ist unsere Methode, wie wir aus 0 Followern eine engagierte Community aufbauen — mit Daten, nicht mit Bauchgefühl.',
    date: '2025-05-10',
    author: 'Theo Spingys',
    readingTime: '7 min',
    category: 'Social Media',
    emoji: '📱',
    sections: [
      {
        heading: 'Warum "poste jeden Tag" falsch ist',
        paragraphs: [
          'Der häufigste Rat, den man hört: "Poste jeden Tag, dann wächst du." Das ist Quatsch. Wenn du jeden Tag mittelmässigen Content postest, bekommst du mittelmässige Ergebnisse. Der Algorithmus belohnt nicht Frequenz — er belohnt Engagement. Ein Reel mit 50K Views ist mehr wert als 30 Posts mit 200 Views.',
          'Unsere Regel: Lieber 3 richtig gute Posts pro Woche als 7 mittelmässige. Aber — und das ist wichtig — konsistent. Jede Woche. Ohne Ausnahme. Der Algorithmus liebt Vorhersehbarkeit.',
        ],
      },
      {
        heading: 'Die Content-Pillar-Methode',
        paragraphs: [
          'Wir arbeiten mit Content-Pillars. Das sind 3-4 Hauptthemen, die deine Marke definiert. Alles, was wir posten, fällt in einen dieser Pillars. Das sorgt für Konsistenz und verhindert, dass man nach 2 Wochen nicht mehr weiss, was man posten soll.',
          'Beispiel für ein Autohaus: Pillar 1: "Neuwagen-Vorstellungen" — Posts über neue Modelle, Features, Tests. Pillar 2: "Behind-the-Scenes" — Werkstatt, Team, Events. Pillar 3: "Kunden-Stories" — Testimonials, Übergaben, Reviews. Pillar 4: "Wissen" — Tipps, Pflege, Technik erklärt.',
        ],
      },
      {
        heading: 'Die 80/20 Regel für Social Media',
        paragraphs: [
          '80% deiner Inhalte sollten Wert liefern — informieren, unterhalten, inspirieren. 20% dürfen verkaufen. Wenn du nur verkaufst, verlierst du Follower. Wenn du nie verkaufst, verdienst du kein Geld.',
          'In der Praxis: 4 Posts pro Woche mit Wert (Reels, Tipps, Behind-the-Scenes), 1 Post mit CTA (Angebot, Event, Terminbuchung). Das Verhältnis stimmt, die Community wächst, und du verkaufst trotzdem.',
        ],
      },
      {
        heading: 'Daten über Bauchgefühl',
        paragraphs: [
          'Wir tracken alles. Reach, Engagement Rate, Saves, Shares, Profile Visits, Website Clicks. Aber wir tracken nicht, um zu glänzen — wir tracken, um zu lernen. Wenn ein Reel 10K Views hat aber 0 Website-Klicks, war es unterhaltsam aber irrelevant. Wenn ein Post 500 Views hat aber 5 Leads generiert, war es ein Volltreffer.',
          'Wöchentliche Reports. Monatliche Strategie-Calls. Quartalsweise Pivot-Sessions. So stellen wir sicher, dass die Social-Media-Strategie immer an den Business-Zielen ausgerichtet ist — nicht an ego-boostenden Follower-Zahlen.',
        ],
      },
    ],
  },
  {
    slug: 'produktfotografie-die-verkauft',
    title: 'Produktfotografie, die verkauft: Der Unterschied zwischen gut und genial',
    excerpt: 'Schlechte Produktfotos kosten dich Kunden — jeden Tag. Wir haben 2000+ Produkte fotografiert und erklären, was den Unterschied macht zwischen "geht so" und "ich will das haben".',
    date: '2025-04-22',
    author: 'Tiago Esteves',
    readingTime: '5 min',
    category: 'Fotografie',
    emoji: '📸',
    sections: [
      {
        heading: 'Das 3-Sekunden-Problem',
        paragraphs: [
          'Du hast 3 Sekunden. So lange schaut sich ein durchschnittlicher Online-Shopper ein Produktbild an. In diesen 3 Sekunden entscheidet er: Klicke ich weiter oder scrolle ich weg? Die meisten Shops verlieren hier — weil ihre Produktfotos nicht überzeugen.',
          'Gute Produktfotos sind nicht "schön". Sie sind informativ. Sie zeigen das Produkt so, dass der Kunde weiss: Das ist genau, was ich will. Das bedeutet: korrekte Farben, scharfe Details, passende Perspektive, und ein Hintergrund, der nicht ablenkt.',
        ],
      },
      {
        heading: 'White Background vs. Lifestyle',
        paragraphs: [
          'Es gibt zwei Arten von Produktfotos, die du brauchst — und beide haben unterschiedliche Jobs:',
          'White-Background-Shots sind die Arbeitstiere. Sie zeigen das Produkt klar, professionell und ohne Ablenkung. Amazon verlangt sie. E-Commerce-Shops brauchen sie. Sie sind die Basis — nicht optional.',
          'Lifestyle-Shots sind die Emotion-Macher. Sie zeigen das Produkt in Aktion: getragen, benutzt, im Kontext. Sie verkaufen das Gefühl, nicht das Produkt. Für Social Media und Brand-Storytelling unverzichtbar.',
        ],
        list: [
          'White Background: Klar, professionell, informativ — für Shop & Amazon',
          'Lifestyle: Emotional, authentisch, Storytelling — für Social Media',
          'Detail-Shots: Makro-Aufnahmen, die Qualität zeigen — für Vertrauen',
          '360° Views: Interaktiv, umfassend — für höhere Conversion',
        ],
      },
      {
        heading: 'Was wir anders machen',
        paragraphs: [
          'Wir fotografieren nicht "einfach mal eben". Jedes Produkt wird inszeniert. Wir überlegen: Was ist das Alleinstellungsmerkmal? Welche Details müssen sichtbar sein? Welche Perspektive verkauft am besten? Dann bauen wir das Lighting entsprechend auf — nicht umgekehrt.',
          'Nach dem Shoot kommt die Retusche. Und nein, das bedeutet nicht "alles glattbügeln". Es bedeutet: Farben korrigieren, Staub entfernen, Belichtung optimieren, Schatten natürlich halten. Das Produkt soll echt aussehen — aber im besten Licht.',
        ],
      },
    ],
  },
  {
    slug: 'recruiting-im-wandel',
    title: 'Recruiting im Wandel: Warum wir eine eigene Division gelauncht haben',
    excerpt: 'Wir sind eine Medienagentur. Warum bauen wir eine Recruiting-Sparte auf? Weil das Problem unserer Kunden immer dasselbe war: gute Leute finden. Hier ist die Story hinter Esteves Recruiting.',
    date: '2025-04-05',
    author: 'Theo Spingys',
    readingTime: '6 min',
    category: 'Recruiting',
    emoji: '🚀',
    sections: [
      {
        heading: 'Wie es anfing',
        paragraphs: [
          'Wir betreuen Unternehmen mit neunstelligen Jahresumsätzen. Irgendwann haben wir gemerkt: Das Problem dieser Unternehmen ist nicht das Marketing. Es ist nicht die Website. Es ist nicht das Branding. Es ist die Personalfrage. Sie finden keine guten Leute. Und wenn sie welche haben, wissen sie nicht, wie sie sie halten.',
          'Also haben wir zugeschaut. Wie funktioniert Recruiting heute? Agenturen schicken Massen an Lebensläufen, 80% passen nicht. Unternehmen zahlen 20% des Jahresgehalts für eine Vermittlung, die oft nicht passt. Der Markt ist ineffizient. Und ineffiziente Märkte sind Opportunities.',
        ],
      },
      {
        heading: 'Unser Ansatz: Recruiting + Marketing',
        paragraphs: [
          'Wir haben einen Vorteil, den klassische Recruiting-Agenturen nicht haben: Wir verstehen Marketing. Wir wissen, wie man Marken aufbaut, wie man Menschen erreicht, wie man Geschichten erzählt. Das ist genau das, was im Recruiting fehlt.',
          'Statt Lebensläufe zu schaufeln, bauen wir Employer Brands. Wir machen Unternehmen attraktiv für die richtigen Leute. Wir nutzen Social Media, Content und gezielte Kampagnen, um Talente zu erreichen — nicht Jobboards, wo jeder postet.',
        ],
      },
      {
        heading: 'Fokus: Logistik & Gesundheitswesen',
        paragraphs: [
          'Wir haben uns auf Branchen fokussiert, wo der Bedarf am grössten ist: Logistik und Gesundheitswesen. Diese Branchen wachsen, aber die Leute fehlen. Wir haben Kontakte zu Logistikfirmen in Spanien, Autohäusern in Deutschland und Kliniken im Ausland.',
          'Esteves Recruiting ist mittlerweile live auf esteves-recruiting.com. Wir verbinden Menschen mit Unternehmen — nicht mit Lebensläufen, sondern mit echten Opportunities. Das ist mehr als Recruiting. Das ist Matchmaking.',
        ],
      },
    ],
  },
  {
    slug: 'branding-fuer-kmu',
    title: 'Branding für KMU: Wie du mit kleinem Budget gross wirkst',
    excerpt: 'Du brauchst kein Millionenbudget für eine starke Marke. Du brauchst Klarheit, Konsistenz und den Mut, dich zu entscheiden. Hier ist unser Framework für Branding, das funktioniert — auch ohne Grosskonzern-Budget.',
    date: '2025-03-18',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'Branding',
    emoji: '💡',
    sections: [
      {
        heading: 'Branding ist nicht Logo',
        paragraphs: [
          'Die meisten KMU denken bei Branding an ein Logo. Ein Logo ist ein Symbol — nicht die Marke. Deine Marke ist das, was Menschen sagen, wenn du nicht im Raum bist. Es ist die Summe aller Eindrücke: Wie klingst du am Telefon? Wie sieht deine Website aus? Wie reagierst du auf Beschwerden? Wie riecht dein Geschäft?',
          'Branding bedeutet: all diese Eindrücke konsistent zu steuern. Das kostet Zeit, nicht zwingend viel Geld. Aber es kostet Entscheidungsmut. Du musst dich entscheiden: Für wen bist du da? Für wen nicht? Was ist dein Versprechen? Was ist deine Persönlichkeit?',
        ],
      },
      {
        heading: 'Das 3-Säulen-Framework',
        paragraphs: [
          'Wir arbeiten mit einem einfachen Framework für KMU-Branding. Drei Säulen, auf denen alles aufbaut:',
        ],
        list: [
          'Säule 1: Positionierung — Wer bist du, für wen, und warum du?',
          'Säule 2: Visual Identity — Logo, Farben, Typografie, Bildsprache',
          'Säule 3: Tonalität — Wie sprichst du? Formell oder locker? Duzen oder Siezen?',
        ],
      },
      {
        heading: 'Konsistenz schlägt Perfektion',
        paragraphs: [
          'Eine Marke muss nicht perfekt sein. Sie muss konsistent sein. Wenn deine Website blau ist, dein Instagram blau ist, deine Visitenkarte blau ist und dein Logo blau ist — dann ist Blau deine Farbe. Egal, ob es die "beste" Farbe ist. Konsistenz baut Vertrauen. Vertrauen baut Marken.',
          'Das gleiche gilt für die Tonalität. Wenn du auf Instagram locker bist ("Hey Leute!") und auf der Website steif ("Sehr geehrte Damen und Herren") — das verwirrt. Entscheide dich für eine Stimme und bleib dabei. Auf allen Kanälen. Immer.',
        ],
      },
      {
        heading: 'Der Mut zur Entscheidung',
        paragraphs: [
          'Das schwerste am Branding ist nicht das Design. Es ist die Entscheidung. Sich zu entscheiden heisst, sich gegen etwas zu entscheiden. Wenn du "für alle" da bist, bist du für niemanden. Wenn du "für junge Familien in Wuppertal" da bist, weiss jeder, ob er gemeint ist.',
          'Wir haben das bei Esteves Recruiting gemacht: Fokus auf Logistik und Gesundheitswesen. Nicht für alle. Für spezifische Branchen. Und genau das zieht die richtigen Kunden an — und die falschen bleiben weg. Das ist das Ziel.',
        ],
      },
    ],
  },
  {
    slug: 'agentur-fuer-webdesign-wuppertal',
    title: 'Agentur für Webdesign in Wuppertal: So findest du die richtige',
    excerpt: 'Es gibt Dutzende Webdesign-Agenturen in Wuppertal. Aber wie findest du die richtige? Hier ist unser ehrlicher Guide — mit Kriterien, die wirklich zählen, und Fragen, die du stellen solltest.',
    date: '2025-07-20',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'Web Design',
    emoji: '🌐',
    sections: [
      {
        heading: 'Was eine gute Webdesign-Agentur ausmacht',
        paragraphs: [
          'Eine gute Webdesign-Agentur in Wuppertal zeichnet sich durch drei Dinge aus: messbare Ergebnisse, transparente Kommunikation und technische Kompetenz. TnT Studio baut seit über zwei Jahren Websites für Unternehmen im Bergischen Land und darüber hinaus — und wir haben gelernt, dass die Agenturwahl entscheidender ist als das Budget.',
          'Die meisten Unternehmen suchen nach dem günstigsten Angebot. Das ist ein Fehler. Eine Website ist kein Kostenfaktor, sondern ein Investition. Die Frage ist nicht "Was kostet sie?", sondern "Was bringt sie?". Eine Website, die 5.000€ kostet und 10 Leads pro Monat generiert, ist teurer als eine Website, die 8.000€ kostet und 30 Leads pro Monat generiert.',
        ],
      },
      {
        heading: 'Kriterien für die Agenturwahl',
        paragraphs: [
          'Hier sind die Kriterien, auf die du achten solltest — in der Reihenfolge ihrer Wichtigkeit:',
        ],
        list: [
          'Portfolio: Hat die Agentur Websites in deiner Branche gebaut? Schau dir Live-Projekte an, nicht nur Screenshots.',
          'Technologie: Baut sie mit modernen Technologien (React, TypeScript, Tailwind) oder mit veralteten WordPress-Templates?',
          'SEO-Grundlagen: Sind die Websites der Agentur schnell, mobil-optimiert und strukturiert? Frag nach Lighthouse-Scores.',
          'Prozess: Gibt es einen klaren Projektplan mit Meilensteinen? Oder wird "irgendwie" gearbeitet?',
          'Kommunikation: Antwortet die Agentur innerhalb von 24 Stunden? Spricht sie Klartext oder Marketing-Bla?',
          'Nach-Launch-Support: Verschwindet die Agentur nach dem Go-Live oder bleibt sie als Partner?',
          'Referenzen: Frag nach Telefonnummern von Kunden. Echte Empfehlungen sagen mehr als Testimonials.',
        ],
      },
      {
        heading: 'Lokale Agentur vs. Remote-Agentur',
        paragraphs: [
          'Viele Unternehmen in Wuppertal wollen eine lokale Agentur — jemanden, den man treffen kann. Das ist verständlich, aber nicht zwingend nötig. TnT Studio arbeitet remote mit Kunden in ganz Deutschland und hat nie ein Projekt wegen fehlender Präsenz vor Ort verloren.',
          'Was zählt, ist nicht die Postleitzahl der Agentur, sondern die Qualität der Arbeit. Eine Remote-Agentur, die wöchentliche Video-Calls anbietet, schnelle Antwortzeiten hat und bessere Ergebnisse liefert, ist mehr wert als eine Agentur um die Ecke, die man einmal im Jahr trifft.',
          'Dennoch: Wenn du in Wuppertal, Solingen, Remscheid oder im Bergischen Land sitzt, kennen wir den Markt. Wir wissen, welche Branchen hier stark sind (Logistik, Automotive, Handwerk, Gastronomie) und wie man lokal optimiert.',
        ],
      },
      {
        heading: 'Fragen, die du jeder Agentur stellen solltest',
        paragraphs: [
          'Bevor du einen Vertrag unterschreibst, stell diese Fragen. Die Antworten sagen dir mehr als jedes Pitch-Deck:',
        ],
        list: [
          '"Zeig mir drei Live-Websites, die ihr in den letzten 6 Monaten gebaut habt."',
          '"Was sind die Lighthouse-Scores dieser Websites?"',
          '"Wie geht ihr mit SEO um — ist das inklusive oder extra?"',
          '"Was passiert, wenn ich nach dem Launch etwas ändern will?"',
          '"Auf welcher Technologie baut ihr und warum?"',
          '"Wie sieht euer Projektprozess aus — welche Meilensteine gibt es?"',
          '"Was kostet eine Website realistisch — und was ist nicht inklusive?"',
        ],
      },
      {
        heading: 'Warum TnT Studio',
        paragraphs: [
          'TnT Studio ist die Medienagentur von Tiago Esteves und Theo Spingys aus Wuppertal. Wir bauen Websites mit React, TypeScript und Tailwind CSS — keine WordPress-Templates, keine Baukasten-Lösungen. Jede Website ist Custom Code, optimiert für Speed, SEO und Conversion.',
          'Unsere Kunden reichen von Brautmoden-Geschäften über Autohäuser bis hin zu Unternehmen mit neunstelligen Jahresumsätzen. Wir arbeiten remote, denken ganzheitlich und verkaufen keine einzelnen Produkte, sondern komplette Business-Lösungen. Schau dir unsere Referenzen auf der Startseite an — oder schreib uns direkt an info@tnt-studio.de.',
        ],
      },
    ],
    faqs: [
      { question: 'Was kostet eine Webdesign-Agentur in Wuppertal?', answer: 'Eine professionelle Business-Website kostet bei einer Agentur in Wuppertal zwischen 3.500€ und 8.000€. E-Commerce-Plattformen starten ab 5.000€. Komplexe Softwarelösungen werden nach Aufwand kalkuliert. Wichtig: Frag nach versteckten Kosten wie Hosting, Wartung oder SEO-Add-ons.' },
      { question: 'Wie lange dauert es, eine Website von einer Agentur bauen zu lassen?', answer: 'Eine typische Projekt-Website dauert 2-4 Wochen. E-Commerce-Plattformen 4-8 Wochen. Komplexe Softwarelösungen können 3+ Monate dauern. Eine seriöse Agentur gibt dir nach dem ersten Call ein genaues Timeline mit Meilensteinen.' },
      { question: 'Was ist besser: Freelancer oder Agentur?', answer: 'Ein Freelancer ist günstiger, aber oft auf einen Bereich spezialisiert (z.B. nur Design oder nur Development). Eine Agentur wie TnT Studio bietet das volle Paket: Strategie, Design, Development, SEO und Content aus einer Hand. Für professionelle Business-Websites ist eine Agentur meist die bessere Wahl.' },
      { question: 'Baut TnT Studio mit WordPress?', answer: 'Nein. Wir bauen mit React, TypeScript und Tailwind CSS. Das ist 2025 der Goldstandard für moderne Websites. WordPress ist für Blogs okay, aber für Business-Websites zu langsam, zu fehleranfällig und zu stark von Plugins abhängig. Custom Code bedeutet: volle Kontrolle, maximale Performance, kein Vendor Lock-in.' },
      { question: 'Ist SEO inklusive, wenn ich eine Website bauen lasse?', answer: 'Bei TnT Studio sind SEO-Grundlagen inklusive: semantisches HTML, Meta-Tags, Sitemap, strukturierte Daten, schnelle Ladezeiten und mobile Optimierung. Tiefergehende SEO-Strategie (Keyword-Recherche, Content-Optimierung, Link-Building) ist ein separater Service.' },
      { question: 'Kann ich meine Website nach dem Launch selbst bearbeiten?', answer: 'Ja. Wir integrieren ein Headless CMS (Sanity, Strapi oder Decap CMS), damit du Texte, Bilder und Blog-Posts selbst verwalten kannst — ohne Code-Kenntnisse. Bei Bedarf schulen wir dein Team im Umgang mit dem System.' },
      { question: 'Was passiert nach dem Launch der Website?', answer: 'Wir verschwinden nicht. Wir bieten Wartungsverträge an, kümmern uns um Updates, Backups und technische Optimierung. Bei Fragen sind wir erreichbar. Eine Website ist kein Einmal-Projekt — sie muss gepflegt werden.' },
      { question: 'Bietet die Agentur Hosting an?', answer: 'Wir kümmern uns um das Deployment auf Netlify oder Vercel. Hosting-Kosten liegen meist bei 0-20€ pro Monat. Die Domain kannst du mitbringen oder wir registrieren sie für dich. Wir bieten kein eigenes Hosting an, weil CDN-basiertes Hosting (Netlify/Vercel) schneller und sicherer ist.' },
      { question: 'Wie finde ich die beste Webdesign-Agentur in Wuppertal?', answer: 'Schau dir Live-Projekte an, frag nach Lighthouse-Scores, sprich mit Referenzkunden und achte auf transparente Kommunikation. Die beste Agentur ist nicht die mit dem schicksten Pitch-Deck, sondern die mit den besten Ergebnissen.' },
      { question: 'Ist eine lokale Agentur in Wuppertal besser als eine Remote-Agentur?', answer: 'Nicht zwingend. Was zählt, ist die Qualität der Arbeit, nicht die Postleitzahl. TnT Studio sitzt in Wuppertal, arbeitet aber remote mit Kunden in ganz Deutschland. Wöchentliche Video-Calls ersetzen persönliche Treffen effektiv.' },
    ],
  },
  {
    slug: 'responsive-webdesign-agentur-mobile-first',
    title: 'Responsive Webdesign Agentur: Warum mobile-first 2025 überlebenswichtig ist',
    excerpt: 'Über 70% deiner Besucher kommen vom Handy. Wenn deine Website dort nicht funktioniert, verlierst du Kunden — jeden Tag. Hier ist alles, was du über responsive Webdesign wissen musst.',
    date: '2025-07-18',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'Web Design',
    emoji: '📱',
    sections: [
      {
        heading: 'Was ist responsive Webdesign?',
        paragraphs: [
          'Responsive Webdesign bedeutet, dass sich eine Website automatisch an die Bildschirmgröße des Geräts anpasst — egal ob Smartphone, Tablet, Laptop oder Desktop-Monitor. Die Layout-Struktur, Schriftgrößen, Bilder und Navigation passen sich flexibel an, ohne dass der User zoomen oder scrollen muss.',
          'Im Jahr 2025 ist responsive Webdesign kein Feature mehr, sondern Standard. Google straft Websites ab, die nicht mobil-optimiert sind — sowohl im Ranking als auch in der Nutzererfahrung. Über 70% des Web-Traffics kommt von mobilen Geräten. Eine nicht-responsive Website ist 2025 gleichbedeutend mit "geschlossen".',
        ],
      },
      {
        heading: 'Mobile-First: Warum Google es vorschreibt',
        paragraphs: [
          'Google nutzt Mobile-First Indexing. Das bedeutet: Google crawlt und indexiert die mobile Version deiner Website zuerst. Wenn deine mobile Version schlecht ist, rankt auch die Desktop-Version schlechter. Das ist kein Gerücht — es ist offizielle Google-Richtlinie seit 2019.',
          'Dazu kommen die Core Web Vitals: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift) und INP (Interaction to Next Paint). Diese Metriken messen, wie schnell deine Website lädt, wie stabil sie ist und wie schnell sie reagiert — alles aus Sicht eines mobilen Nutzers. Schlechte Core Web Vitals = schlechtes Ranking.',
        ],
      },
      {
        heading: 'Was responsive Webdesign in der Praxis bedeutet',
        paragraphs: [
          'Responsive Webdesign ist nicht nur "die Website wird auf dem Handy kleiner". Es bedeutet:',
        ],
        list: [
          'Touch-optimierte Navigation (Hamburger-Menü statt horizontaler Navigation)',
          'Lesbare Schriftgrößen auf kleinen Screens (mindestens 16px Body-Text)',
          'Bilder, die sich proportional skalieren (srcset und sizes Attribute)',
          'Kein horizontales Scrollen — alles passt in den Viewport',
          'Buttons, die groß genug für Touch sind (mindestens 44×44px)',
          'Formulare, die auf dem Handy auszufüllen sind — ohne Zoom',
          'Schnelle Ladezeiten auf 3G/4G-Verbindungen (unter 3 Sekunden)',
        ],
      },
      {
        heading: 'Die technische Umsetzung',
        paragraphs: [
          'Bei TnT Studio bauen wir mit Tailwind CSS, das ein Mobile-First-System verwendet. Das bedeutet: Wir designen zuerst für Mobile, dann skalieren wir für größere Screens hoch. Das ist der richtige Ansatz, weil Mobile die schwierigste Plattform ist — wenn es auf dem Handy funktioniert, funktioniert es überall.',
          'Wir verwenden responsive Grid-Systeme, flexible Typografie (clamp() für fließende Schriftgrößen), moderne Bildformate (WebP mit Fallback) und lazy loading für Bilder und Videos. Das Ergebnis: Ladezeiten unter einer Sekunde und Lighthouse-Scores von 95+.',
        ],
      },
      {
        heading: 'Häufige responsive-Fehler, die wir sehen',
        paragraphs: [
          'Wir sehen viele Websites, die "responsive" sein sollen, aber in der Praxis scheitern. Die häufigsten Fehler:',
          'Text, der auf dem Handy zu klein ist (unter 14px). Buttons, die zu nah beieinander liegen und falsch getappt werden. Bilder, die nicht skalieren und das Layout sprengen. Pop-ups, die den gesamten Mobile-Screen blockieren. Navigation, die auf dem Handy unbrauchbar ist.',
          'All diese Fehler sind vermeidbar — mit einer Agentur, die Mobile-First denkt. TnT Studio testet jede Website auf echten Geräten, nicht nur im Browser-Emulator. Weil das, was im Chrome-Emulator funktioniert, auf einem alten Android-Phone oft anders aussieht.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist responsive Webdesign?', answer: 'Responsive Webdesign bedeutet, dass sich eine Website automatisch an die Bildschirmgröße des Geräts anpasst. Ob Smartphone, Tablet oder Desktop — die Website sieht überall gut aus und funktioniert einwandfrei, ohne dass der User zoomen muss.' },
      { question: 'Warum ist responsive Webdesign 2025 wichtig?', answer: 'Über 70% des Web-Traffics kommt von mobilen Geräten. Google nutzt Mobile-First Indexing und straft nicht-responsive Websites im Ranking ab. Eine nicht-responsive Website verliert Kunden und Google-Platzierungen.' },
      { question: 'Was ist der Unterschied zwischen responsive und mobile-first?', answer: 'Responsive Webdesign passt sich an alle Bildschirmgrößen an. Mobile-First ist ein Design-Ansatz, bei dem man zuerst für Mobile designet und dann für größere Screens erweitert. Mobile-First ist die beste Methode, um responsive Websites zu bauen.' },
      { question: 'Was sind Core Web Vitals?', answer: 'Core Web Vitals sind drei Metriken von Google: LCP (Ladezeit des größten Elements), CLS (visuelle Stabilität) und INP (Reaktionszeit). Sie messen die Nutzererfahrung, vor allem auf Mobile. Schlechte Werte führen zu schlechterem Ranking.' },
      { question: 'Kann man eine bestehende Website responsive machen?', answer: 'Ja, aber oft ist ein Neubau sinnvoller. Eine nachträgliche Responsive-Anpassung ist bei alten Websites oft teurer und schlechter als ein kompletter Neubau mit moderner Technologie. Wir beraten dich ehrlich, was für deinen Fall besser ist.' },
      { question: 'Was kostet eine responsive Website?', answer: 'Eine responsive Business-Website startet bei etwa 3.500€. E-Commerce-Websites ab 5.000€. Der Preis hängt vom Funktionsumfang ab, nicht von der Responsive-Optimierung — denn bei TnT Studio ist Responsive Standard, kein Add-on.' },
      { question: 'Wie teste ich, ob meine Website responsive ist?', answer: 'Öffne deine Website auf dem Smartphone. Wenn du zoomen musst, horizontal scrollen musst oder Buttons nicht richtig treffen kannst, ist sie nicht responsive. Alternativ: Google Mobile-Friendly Test oder Lighthouse-Audit in Chrome DevTools.' },
      { question: 'Baut TnT Studio responsive Websites?', answer: 'Ja, ausschließlich. Wir bauen mit Tailwind CSS und einem Mobile-First-Ansatz. Jede Website wird auf echten Geräten getestet — nicht nur im Browser. Responsive ist bei uns Standard, kein Aufpreis.' },
      { question: 'Was passiert, wenn meine Website nicht responsive ist?', answer: 'Du verlierst mobile Besucher (über 70% des Traffics), dein Google-Ranking sinkt durch Mobile-First Indexing, und die Absprungrate steigt. Eine nicht-responsive Website ist 2025 ein Business-Risiko.' },
      { question: 'Ist eine separate mobile Website (m.tnt-studio.de) besser?', answer: 'Nein. Separate mobile Websites (m.subdomains) sind veraltet und verursachen Duplicate-Content-Probleme. Responsive Webdesign ist der moderne Standard — eine URL, ein Content, alle Geräte.' },
    ],
  },
  {
    slug: 'webdesign-preise-2025-was-eine-website-kostet',
    title: 'Webdesign Preise 2025: Was eine Website wirklich kostet',
    excerpt: '2.000€ oder 20.000€? Die Preisspanne für Websites ist riesig. Hier ist ein ehrlicher Breakdown — was was kostet, was inklusive sein sollte und wo versteckte Kosten lauern.',
    date: '2025-07-15',
    author: 'Tiago Esteves',
    readingTime: '10 min',
    category: 'Web Design',
    emoji: '💰',
    sections: [
      {
        heading: 'Die kurze Antwort',
        paragraphs: [
          'Eine professionelle Business-Website kostet in Deutschland 2025 zwischen 3.500€ und 8.000€. E-Commerce-Websites starten ab 5.000€. Komplexe Softwarelösungen beginnen bei 10.000€ und können deutlich höher liegen. Wer dir eine komplette Business-Website für unter 2.000€ anbietet, spart irgendwo — meist bei Qualität, SEO oder Support.',
        ],
      },
      {
        heading: 'Preiskategorien im Überblick',
        paragraphs: [
          'Hier ist eine realistische Preisaufschlüsselung für den deutschen Markt 2025:',
        ],
        list: [
          'Baukasten (Wix, Jimdo): 0-30€/Monat — aber eingeschränkt, nicht skalierbar, schlecht für SEO',
          'Freelancer One-Pager: 1.000-2.500€ — okay für Startups, limitiert in Funktion und Skalierbarkeit',
          'Agentur Business-Website: 3.500-8.000€ — Custom Design, SEO-Grundlagen, CMS, mobil-optimiert',
          'E-Commerce-Website: 5.000-15.000€ — Shop-System, Payment, Produktdarstellung, SEO',
          'Komplexe Softwarelösung: 10.000€+ — Custom Development, API-Integrationen, Automatisierungen',
          'Enterprise-Plattform: 25.000€+ — Multi-Region, Multi-Language, komplexe Workflows',
        ],
      },
      {
        heading: 'Was den Preis bestimmt',
        paragraphs: [
          'Der Preis einer Website hängt von mehreren Faktoren ab. Hier sind die wichtigsten:',
          'Anzahl der Seiten: Eine One-Pager mit 5 Sektionen ist schneller gebaut als eine Website mit 20 Unterseiten. Design-Komplexität: Custom Animationen, interaktive Elemente und unique Layouts kosten mehr als Standard-Templates. Funktionalität: Kontaktformulare sind einfach; Buchungssysteme, Kundenportale oder API-Integrationen sind aufwendig.',
          'Content: Wer schreibt die Texte? Wer liefert die Bilder? Wenn die Agentur alles macht (Copywriting, Fotos, Design, Development), kostet das mehr — aber das Ergebnis ist konsistenter. CMS: Ein Headless CMS kostet mehr in der Einrichtung, spart aber langfristig Zeit, weil du Inhalte selbst ändern kannst.',
        ],
      },
      {
        heading: 'Versteckte Kosten, auf die du achten musst',
        paragraphs: [
          'Viele Agenturen locken mit niedrigen Grundpreisen und rechnen Extras drauf. Hier sind die Kosten, die oft nicht im Basispreis enthalten sind:',
        ],
        list: [
          'Hosting: 5-30€/Monat (sollte transparent kommuniziert werden)',
          'Domain: 10-20€/Jahr',
          'SSL-Zertifikat: Heute kostenlos (Let\'s Encrypt) — niemand sollte dafür zahlen',
          'SEO-Optimierung: Oft extra, sollte aber mindestens grundlegend inklusive sein',
          'Wartung & Updates: 50-200€/Monat für laufende Pflege',
          'Content-Erstellung: Texte, Bilder, Videos — oft extra berechnet',
          'Schulung: Wenn du das CMS selbst bedienen willst, kostet die Schulung oft extra',
          'Mehr-Sprachigkeit: Jede zusätzliche Sprache kostet Aufwand',
        ],
      },
      {
        heading: 'Was bei TnT Studio inklusive ist',
        paragraphs: [
          'Bei uns ist transparentes Pricing Standard. Eine Business-Website bei TnT Studio beinhaltet: Custom Design (keine Templates), Responsive Webdesign (Mobile-First), SEO-Grundlagen (Meta-Tags, Sitemap, strukturierte Daten, semantisches HTML), CMS-Integration, Ladezeiten unter 1 Sekunde, Lighthouse-Score 95+, Cross-Browser-Testing und Deployment.',
          'Was extra kostet: E-Commerce-Funktionen, Custom Software, tiefergehende SEO-Strategie, Content-Produktion (Texte, Fotos, Videos) und laufende Wartungsverträge. Aber das sagen wir vorab — nicht nach der Rechnung.',
        ],
      },
      {
        heading: 'Rendite: Wann zahlt sich eine Website aus?',
        paragraphs: [
          'Die Frage ist nicht, was eine Website kostet, sondern was sie bringt. Eine Website, die 5.000€ kostet und 5 neue Kunden pro Monat generiert, hat sich nach wenigen Monaten amortisiert — wenn dein Customer Lifetime Value hoch genug ist.',
          'Eine Website, die 2.000€ kostet und 0 Kunden generiert, ist teuer — egal wie wenig sie gekostet hat. Investiere in Qualität, nicht in den niedrigsten Preis. Deine Website ist dein 24/7-Vertriebsmitarbeiter. Gute Vertriebsmitglieder kosten Geld.',
        ],
      },
    ],
    faqs: [
      { question: 'Was kostet eine Website 2025?', answer: 'Eine professionelle Business-Website kostet 2025 zwischen 3.500€ und 8.000€. E-Commerce ab 5.000€. Komplexe Softwarelösungen ab 10.000€. Wer unter 2.000€ anbietet, spart bei Qualität.' },
      { question: 'Was kostet eine KMU-Website?', answer: 'Eine KMU-Website mit 5-10 Seiten, Kontaktformular und CMS liegt zwischen 3.500€ und 6.000€. Dazu kommen Hosting-Kosten von 5-20€ pro Monat und optional ein Wartungsvertrag.' },
      { question: 'Was kostet ein Online-Shop?', answer: 'Ein professioneller E-Commerce-Shop startet bei 5.000€ für kleine Shops. Mittelgroße Shops mit 50-200 Produkten liegen bei 8.000-15.000€. Große Plattformen können 20.000€+ kosten.' },
      { question: 'Gibt es versteckte Kosten?', answer: 'Ja, bei vielen Agenturen. Achte auf Hosting, Domain, SSL, Wartung, Content-Erstellung und SEO-Optimierung, die oft extra berechnet werden. Frag explizit: "Was ist im Preis inklusive und was kostet extra?"' },
      { question: 'Ist ein Website-Baukasten wie Wix günstiger?', answer: 'Kurzfristig ja (0-30€/Monat), langfristig nein. Baukasten-Websites sind limitiert, schlecht für SEO, nicht skalierbar und du besitzt nicht den Code. Bei Kündigung ist alles weg. Custom Code ist eine Investition, kein Abo.' },
      { question: 'Was kostet eine Website bei TnT Studio?', answer: 'Projekt-Websites starten bei 3.500€. E-Commerce ab 5.000€. Softwarelösungen nach Aufwand. Inklusive: Custom Design, Responsive, SEO-Grundlagen, CMS, Deployment. Extra: E-Commerce, Content-Produktion, laufende SEO.' },
      { question: 'Bietet ihr Ratenzahlung an?', answer: 'Ja, auf Anfrage. Wir bieten flexible Zahlungsmodelle — typischerweise 50% bei Projektstart und 50% bei Launch. Bei größeren Projekten sind monatliche Raten möglich.' },
      { question: 'Was kostet die Wartung nach dem Launch?', answer: 'Wartungsverträge starten bei 50-150€ pro Monat, je nach Aufwand. Beinhaltet: Updates, Backups, kleine Änderungen, Monitoring. Du kannst auch ohne Wartungsvertrag starten und bei Bedarf buchen.' },
      { question: 'Freelancer vs. Agentur — was ist günstiger?', answer: 'Ein Freelancer ist stundenweise günstiger (60-100€/h vs. 80-150€/h Agentur). Aber eine Agentur bietet das volle Paket (Design, Dev, SEO, Content) aus einer Hand. Gesamtkosten sind oft ähnlich, aber die Agentur liefert konsistentere Ergebnisse.' },
      { question: 'Was kostet ein Website-Relaunch?', answer: 'Ein Relaunch kostet ähnlich wie ein Neubau: 3.500-8.000€ für Business-Websites. Zusätzlich kommt SEO-Migration hinzu (Redirects, URL-Struktur, Content-Übertragung). Der Relaunch ist der beste Zeitpunkt für SEO-Optimierung.' },
      { question: 'Sind Texte und Bilder im Preis inklusive?', answer: 'Bei vielen Agenturen nein. Bei TnT Studio können Texte und Bilder als Paket dazugebucht werden. Wenn du eigene Texte und Bilder hast, sparst du. Wenn wir alles machen, ist das Ergebnis konsistenter.' },
      { question: 'Was kostet eine mehrsprachige Website?', answer: 'Jede zusätzliche Sprache kostet etwa 30-50% des Basis-Preises, je nach Anzahl der Seiten. Technisch ist es mit modernen CMS einfach umsetzbar. Die Kosten liegen hauptsächlich in der Übersetzung und im Content-Management.' },
    ],
  },
  {
    slug: 'website-relaunch-schritt-fuer-schritt',
    title: 'Website Relaunch: Schritt-für-Schritt Anleitung (mit SEO-Migration)',
    excerpt: 'Ein Relaunch ist riskant — wenn du es falsch machst, verlierst du Google-Rankings über Nacht. Hier ist unser bewährter Prozess, wie du deine Website sicher aufbaust.',
    date: '2025-07-12',
    author: 'Tiago Esteves',
    readingTime: '9 min',
    category: 'Web Design',
    emoji: '🔄',
    sections: [
      {
        heading: 'Warum ein Relaunch riskant ist',
        paragraphs: [
          'Ein Website-Relaunch ist eine der heikelsten Operationen im digitalen Marketing. Schätzungen zufolge verlieren 30-50% aller relaunchten Websites temporär oder dauerhaft Google-Rankings. Warum? Weil URLs sich ändern, Content verschwindet, Redirects fehlen oder die neue Website langsamer ist als die alte.',
          'Aber ein Relaunch ist auch eine Chance. Die beste Zeit für SEO-Optimierung ist während eines Relaunchs — weil du ohnehin alles neu aufbaust. Wenn du es richtig machst, kommst du mit besseren Rankings aus dem Relaunch als du hineingegangen bist.',
        ],
      },
      {
        heading: 'Schritt 1: Bestandsaufnahme',
        paragraphs: [
          'Bevor du etwas änderst, musst du wissen, was du hast. Wir erstellen ein vollständiges Inventar der aktuellen Website: alle URLs, alle Rankings, alle Backlinks, alle Traffic-Quellen. Tools dafür: Google Search Console, Google Analytics, Ahrefs oder Sistrix.',
          'Identifiziere die wichtigsten Seiten: Welche Seiten generieren Traffic? Welche ranken für relevante Keywords? Welche haben Backlinks? Diese Seiten brauchen besondere Aufmerksamkeit beim Relaunch — ihre URLs, ihr Content und ihre Rankings müssen geschützt werden.',
        ],
      },
      {
        heading: 'Schritt 2: URL-Struktur planen',
        paragraphs: [
          'Die neue URL-Struktur sollte logisch, SEO-freundlich und zukunftssicher sein. Faustregel: URLs sollten für Menschen lesbar sein (z.B. /leistungen/web-design/ statt /page.php?id=23). Verwende Bindestriche, keine Unterstriche. Kleinbuchstaben. Keine Umlaute.',
          'Erstelle eine Mapping-Tabelle: alte URL → neue URL. Jede alte URL muss entweder auf eine neue URL weitergeleitet werden (301 Redirect) oder bewusst aufgeben werden (410 Gone). Keine 404-Fehler — das ist der häufigste Relaunch-Fehler.',
        ],
      },
      {
        heading: 'Schritt 3: Redirect-Strategie',
        paragraphs: [
          '301 Redirects sind das wichtigste Werkzeug beim Relaunch. Sie leiten Traffic und SEO-Wert von der alten URL auf die neue URL weiter. Erstelle eine vollständige Redirect-Liste VOR dem Launch — nicht danach.',
          'Wichtige Regeln: Redirect auf die thematisch passende neue Seite, nicht auf die Startseite. Vermeide Redirect-Ketten (A→B→C). Teste alle Redirects vor dem Go-Live. Behalte die Redirects mindestens 6 Monate nach dem Relaunch.',
        ],
      },
      {
        heading: 'Schritt 4: Content-Migration',
        paragraphs: [
          'Migriere nicht blind alles. Ein Relaunch ist die Gelegenheit, Content zu bereinigen: Lösche veraltete Seiten, aktualisiere alte Inhalte, konsolidiere dünne Seiten. Aber: Behalte den Content, der Traffic oder Rankings generiert — auch wenn er "unschön" ist.',
          'Achte auf strukturierte Daten (Schema Markup). Wenn die alte Website FAQ-Schema hatte, muss die neue es auch haben. Wenn die alte Website LocalBusiness-Schema hatte, muss die neue es auch haben. Verlust von strukturierten Daten ist ein häufiger Ranking-Verlust-Faktor.',
        ],
      },
      {
        heading: 'Schritt 5: Testing und Go-Live',
        paragraphs: [
          'Vor dem Go-Live: Teste die neue Website in einer Staging-Umgebung. Lighthouse-Audit, Mobile-Test, Cross-Browser-Test, Redirect-Test, Speed-Test. Alles muss funktionieren, bevor du umschaltest.',
          'Beim Go-Live: Umschalten, Sitemap bei Google Search Console einreichen, Crawl-Rate erhöhen, Rankings und Traffic täglich monitorieren. Wenn Rankings einbrechen: sofort analysieren und beheben. Die ersten 2-4 Wochen nach dem Relaunch sind kritisch.',
        ],
      },
    ],
    faqs: [
      { question: 'Wie lange dauert ein Website-Relaunch?', answer: 'Ein typischer Relaunch dauert 4-8 Wochen, je nach Größe der Website. Kleinere Websites (5-10 Seiten) können in 2-3 Wochen relauncht werden. Große E-Commerce-Plattformen brauchen 2-4 Monate.' },
      { question: 'Verliere ich meine Google-Rankings beim Relaunch?', answer: 'Wenn der Relaunch richtig durchgeführt wird (301 Redirects, Content-Migration, SEO-Migration), nein. Wenn Redirects fehlen oder die neue Website langsamer ist, ja. 30-50% aller relaunchten Websites verlieren temporär Rankings — bei richtiger Durchführung gehörst du nicht dazu.' },
      { question: 'Was sind 301 Redirects?', answer: '301 Redirects sind permanente Weiterleitungen von einer alten URL auf eine neue URL. Sie leiten Traffic und SEO-Wert weiter. Jede alte URL muss auf die passende neue URL weitergeleitet werden — nicht auf die Startseite.' },
      { question: 'Was kostet ein Website-Relaunch?', answer: 'Ein Relaunch kostet ähnlich wie ein Neubau: 3.500-8.000€ für Business-Websites. Zusätzlich kommt die SEO-Migration hinzu (Redirect-Setup, Content-Übertragung, Testing). Budgetiere 20-30% extra für die Migration.' },
      { question: 'Wann ist der beste Zeitpunkt für einen Relaunch?', answer: 'Am besten außerhalb der Hochsaison. Vermeide Relaunches im Dezember (Weihnachtsgeschäft) oder während wichtiger Events. Der beste Zeitpunkt ist, wenn du genug Zeit für Testing und Monitoring hast.' },
      { question: 'Was muss ich nach dem Relaunch tun?', answer: 'Sitemap bei Google Search Console einreichen, Rankings und Traffic täglich monitorieren (erste 2-4 Wochen), Redirects auf Fehler prüfen, Core Web Vitals checken, strukturierte Daten validieren. Bei Ranking-Verlusten sofort handeln.' },
      { question: 'Kann ich den Relaunch selbst machen?', answer: 'Für eine kleine Website mit 5 Seiten: vielleicht. Für alles darüber: nein. Ein Relaunch ohne SEO-Expertise ist ein Risiko. Die Kosten für einen professionellen Relaunch sind geringer als die Kosten für verlorene Rankings.' },
      { question: 'Was ist eine SEO-Migration?', answer: 'SEO-Migration ist der Prozess, bei dem SEO-Wert (Rankings, Traffic, Backlinks) von der alten auf die neue Website übertragen wird. Beinhaltet: URL-Mapping, 301 Redirects, Content-Migration, Schema-Markup-Erhaltung, Sitemap-Update.' },
    ],
  },
  {
    slug: 'ecommerce-website-online-shop-wuppertal',
    title: 'E-Commerce Website: Online Shop erstellen lassen in Wuppertal',
    excerpt: 'Shopify, WooCommerce oder Custom Build? Welche Payment-Anbieter? Was kostet ein Online-Shop? Hier ist der komplette Guide für E-Commerce in Wuppertal und NRW.',
    date: '2025-07-10',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'Web Design',
    emoji: '🛒',
    sections: [
      {
        heading: 'Welche E-Commerce-Plattform ist die richtige?',
        paragraphs: [
          'Die Wahl der Plattform ist die wichtigste Entscheidung beim Online-Shop-Bau. Drei Optionen dominieren den Markt 2025: Shopify, WooCommerce und Custom Builds. Jede hat ihre Vor- und Nachteile.',
          'Shopify ist die einfachste Lösung. Startpreis 29€/Monat, schnell eingerichtet, gut für Anfänger. Aber: Transaktionsgebühren, limitierte Anpassbarkeit, du besitzt nicht den Code. WooCommerce ist flexibler und günstiger, aber technisch anspruchsvoller. Custom Builds (React + Headless CMS + Stripe) sind die teuerste, aber leistungsfähigste Lösung — volle Kontrolle, keine laufenden Gebühren, maximale Performance.',
        ],
      },
      {
        heading: 'Shopify vs. WooCommerce vs. Custom',
        paragraphs: [
          'Hier ist ein direkter Vergleich der drei Optionen:',
        ],
        list: [
          'Shopify: 29-299€/Monat, einfach, schnell startklar, limitierte Anpassbarkeit, Transaktionsgebühren',
          'WooCommerce: 0€/Monat (Hosting 10-50€), flexibel, WordPress-basiert, wartungsintensiv',
          'Custom (React+Stripe): 0€/Monat (Hosting 10-20€), volle Kontrolel, maximale Performance, höchste Initialkosten',
          'Shopify eignet sich für: Anfänger, kleine bis mittlere Shops, schnelle Launches',
          'WooCommerce eignet sich für: WordPress-Nutzer, budget-bewusste, mittelgroße Shops',
          'Custom eignet sich für: Professionelle Shops, spezielle Anforderungen, maximale SEO-Kontrolle',
        ],
      },
      {
        heading: 'Payment-Anbieter in Deutschland',
        paragraphs: [
          'In Deutschland musst du mehrere Zahlungsmethoden anbieten. Die wichtigsten: Kreditkarte (Stripe, PayPal), PayPal (Pflicht in D), Klarna (Kauf auf Rechnung), SEPA-Lastschrift und Apple Pay / Google Pay.',
          'Stripe ist unser empfohlener Payment-Anbieter. Geringe Gebühren (1.4% + 0.25€ pro Transaktion), alle Zahlungsmethoden, einfache Integration, keine monatlichen Kosten. PayPal ist Pflicht — 70% der deutschen Online-Shopper nutzen es.',
        ],
      },
      {
        heading: 'Was ein Online-Shop kosten sollte',
        paragraphs: [
          'Ein professioneller Online-Shop startet bei 5.000€. Das beinhaltet: Custom Design, Produktkatalog, Warenkorb, Checkout, Payment-Integration, SEO-Grundlagen, mobil-optimiert. Für kleinere Budgets ist Shopify eine gute Zwischenlösung — die monatlichen Kosten sind kalkulierbar.',
          'Zusätzlich zum Aufbau: Hosting (10-50€/Monat), Payment-Gebühren (1.5-3% pro Transaktion), optional Wartung (100-200€/Monat). Budgetiere auch für Produktfotografie — gute Produktfotos sind der wichtigste Conversion-Faktor im E-Commerce.',
        ],
      },
      {
        heading: 'E-Commerce SEO Grundlagen',
        paragraphs: [
          'Ein Online-Shop ohne SEO ist ein Laden in der Wüste. Die wichtigsten E-Commerce-SEO-Grundlagen: Unique Produktbeschreibungen (kein Hersteller-Text), strukturierte Daten (Product Schema mit Preis, Verfügbarkeit, Bewertung), schnelle Ladezeiten (unter 2 Sekunden), mobil-optimiertes Erlebnis, saubere URL-Struktur (/produkte/kategorie/produktname/).',
          'TnT Studio baut E-Commerce-Websites mit SEO von Tag 1. Wir integrieren Product Schema, optimieren Ladezeiten und strukturieren URLs korrekt. Weil ein Shop, der nicht gefunden wird, keine Verkäufe macht.',
        ],
      },
    ],
    faqs: [
      { question: 'Was kostet ein Online-Shop?', answer: 'Ein professioneller Custom-Online-Shop startet bei 5.000€. Mit Shopify startest du ab 29€/Monat plus Einrichtungskosten. WooCommerce ist "kostenlos", aber Hosting, Plugins und Einrichtung kosten 1.000-3.000€.' },
      { question: 'Shopify oder WooCommerce?', answer: 'Shopify ist einfacher und schneller startklar, aber monatlich teurer und weniger anpassbar. WooCommerce ist flexibler und günstiger, aber technisch anspruchsvoller. Für professionelle Shops mit speziellen Anforderungen empfehlen wir Custom Builds.' },
      { question: 'Welche Zahlungsmethoden brauche ich in Deutschland?', answer: 'Mindestens: Kreditkarte, PayPal und Klarna (Kauf auf Rechnung). Optional: SEPA-Lastschrift, Apple Pay, Google Pay. PayPal ist Pflicht — 70% der deutschen Online-Shopper nutzen es.' },
      { question: 'Wie lange dauert es, einen Online-Shop zu bauen?', answer: 'Ein kleiner Shop mit 10-50 Produkten dauert 4-6 Wochen. Mittelgroße Shops mit 100-500 Produkten 6-10 Wochen. Große E-Commerce-Plattformen 3+ Monate. Shopify-Shops können in 1-2 Wochen startklar sein.' },
      { question: 'Brauche ich Produktfotografie für meinen Shop?', answer: 'Ja, zwingend. Produktfotos sind der wichtigste Conversion-Faktor im E-Commerce. Schlechte Fotos = keine Verkäufe. TnT Studio bietet Produktfotografie aus einer Hand an — White Background und Lifestyle-Shoots.' },
      { question: 'Kann ich meinen Shop selbst verwalten?', answer: 'Ja. Wir integrieren ein CMS, mit dem du Produkte, Preise, Bestände und Bestellungen selbst verwaltest. Bei Shopify und WooCommerce ist das standardmäßig inklusive. Bei Custom Builds integrieren wir ein Headless CMS.' },
      { question: 'Was ist E-Commerce SEO?', answer: 'E-Commerce SEO umfasst: unique Produktbeschreibungen, Product Schema (strukturierte Daten), schnelle Ladezeiten, mobil-optimiertes Erlebnis, saubere URL-Struktur und interne Verlinkung. Ohne SEO findet niemand deinen Shop.' },
      { question: 'Bietet TnT Studio E-Commerce an?', answer: 'Ja. Wir bauen Custom E-Commerce-Websites mit React, Stripe und Headless CMS. Keine monatlichen Plattform-Gebühren, maximale Performance, volle Kontrolle. Startpreis 5.000€. Wir beraten dich, welche Lösung für dein Business die beste ist.' },
      { question: 'Brauche ich ein Impressum und AGB für meinen Shop?', answer: 'Ja, in Deutschland Pflicht. Du brauchst Impressum, AGB, Datenschutzerklärung, Widerrufsbelehrung und Cookie-Banner. TnT Studio richtet alle rechtlichen Seiten ein — aber die rechtlichen Texte solltest du von einem Anwalt prüfen lassen.' },
      { question: 'Kann ich meinen bestehenden Shop migrieren?', answer: 'Ja. Wir migrieren Shops von WooCommerce, Shopify oder anderen Plattformen auf Custom Builds. Die Migration beinhaltet Produktübertragung, URL-Redirects und SEO-Migration. Kontaktiere uns für eine individuelle Beratung.' },
    ],
  },
  {
    slug: 'core-web-vitals-website-speed-ranking-faktor',
    title: 'Core Web Vitals: Website-Speed als Ranking-Faktor erklärt',
    excerpt: 'LCP, CLS, INP — drei Metriken, die dein Google-Ranking bestimmen. Hier ist die einfache Erklärung, was Core Web Vitals sind und wie du sie optimierst.',
    date: '2025-07-08',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'Web Design',
    emoji: '⚡',
    sections: [
      {
        heading: 'Was sind Core Web Vitals?',
        paragraphs: [
          'Core Web Vitals sind drei Kennzahlen von Google, die messen, wie schnell, stabil und interaktiv eine Website ist. Sie sind offizielle Ranking-Faktoren seit 2021 und wurden 2024 um INP (Interaction to Next Paint) erweitert. Schlechte Core Web Vitals führen zu schlechterem Ranking, höheren Absprungraten und weniger Conversions.',
          'Die drei Metriken sind: LCP (Largest Contentful Paint) — wie schnell der größte sichtbare Inhalt lädt. CLS (Cumulative Layout Shift) — wie stabil das Layout beim Laden ist. INP (Interaction to Next Paint) — wie schnell die Website auf Nutzer-Eingaben reagiert.',
        ],
      },
      {
        heading: 'LCP: Largest Contentful Paint',
        paragraphs: [
          'LCP misst die Zeit, bis der größte sichtbare Inhalt (meist ein Bild oder ein großer Text-Block) vollständig geladen ist. Der Zielwert ist unter 2,5 Sekunden. Werte über 4 Sekunden sind "schlecht".',
          'Optimierung: Verwende moderne Bildformate (WebP statt JPG/PNG), lazy loading für Bilder unter dem Fold, CDN-basiertes Hosting (Netlify, Vercel), preloading von kritischen Ressourcen und vermeide riesige Hero-Bilder ohne Komprimierung.',
        ],
      },
      {
        heading: 'CLS: Cumulative Layout Shift',
        paragraphs: [
          'CLS misst, wie sehr Elemente auf der Seite während des Ladens springen. Wenn du auf einen Link klickst und der Link gerade verschoben wird, klickst du falsch — das ist ein Layout Shift. Der Zielwert ist unter 0,1.',
          'Optimierung: Definiere width und height für alle Bilder und Videos. Vermeide dynamisch injizierte Banner (Cookie-Banner, Pop-ups). Nutze CSS aspect-ratio für responsive Medien. Reserviere Platz für Ads und Embeds.',
        ],
      },
      {
        heading: 'INP: Interaction to Next Paint',
        paragraphs: [
          'INP misst die Zeit zwischen einer Nutzer-Interaktion (Klick, Tap, Tastendruck) und der nächsten sichtbaren Reaktion der Website. Der Zielwert ist unter 200 Millisekunden. INP ersetzt seit 2024 den alten FID (First Input Delay).',
          'Optimierung: Reduziere JavaScript-Ausführungszeit. Nutze Code-Splitting und lazy loading für JS-Module. Vermeide lange Tasks auf dem Main-Thread. Nutze Web Worker für rechenintensive Operationen.',
        ],
      },
      {
        heading: 'Wie TnT Studio Core Web Vitals optimiert',
        paragraphs: [
          'Wir bauen Websites, die von Haus aus gute Core Web Vitals haben. Wie? React mit Vite als Build-Tool sorgt für minimale JavaScript-Bundles. Tailwind CSS purgt ungenutzte Styles. Bilder werden als WebP geliefert mit lazy loading. Hosting auf Netlify oder Vercel bedeutet CDN weltweit.',
          'Das Ergebnis: Lighthouse-Scores von 95+, LCP unter 1 Sekunde, CLS nahe 0 und INP unter 100ms. Wir messen das mit echten CrUX-Daten (Chrome User Experience Report), nicht nur mit Lab-Daten. Weil das, was Lighthouse misst, nicht immer das ist, was echte Nutzer erleben.',
        ],
      },
    ],
    faqs: [
      { question: 'Was sind Core Web Vitals?', answer: 'Core Web Vitals sind drei Metriken von Google (LCP, CLS, INP), die die Nutzererfahrung einer Website messen. Sie sind offizielle Ranking-Faktoren. Schlechte Werte führen zu schlechterem Google-Ranking.' },
      { question: 'Was ist ein guter LCP-Wert?', answer: 'Ein guter LCP-Wert (Largest Contentful Paint) liegt unter 2,5 Sekunden. Werte zwischen 2,5 und 4 Sekunden sind "verbesserungsbedürftig", über 4 Sekunden "schlecht".' },
      { question: 'Was ist CLS?', answer: 'CLS (Cumulative Layout Shift) misst, wie sehr Elemente auf der Seite während des Ladens springen. Ein guter Wert liegt unter 0,1. Vermeide CLS durch Definieren von width/height für Bilder und Reservieren von Platz für dynamische Inhalte.' },
      { question: 'Was ist INP?', answer: 'INP (Interaction to Next Paint) misst die Reaktionszeit der Website auf Nutzer-Eingaben. Ein guter Wert liegt unter 200ms. INP ersetzt seit 2024 den alten FID-Metrik.' },
      { question: 'Wie optimiere ich Core Web Vitals?', answer: 'Verwende moderne Bildformate (WebP), lazy loading, CDN-Hosting, minimiere JavaScript, definiere Bild-Dimensionen und vermeide Layout-Shifts. Eine professionelle Agentur wie TnT Studio baut Websites, die von Haus aus gute Werte haben.' },
      { question: 'Kann ich Core Web Vitals selbst messen?', answer: 'Ja. Nutze den Lighthouse-Audit in Chrome DevTools (Lab-Daten) oder die Chrome User Experience Report API (Feld-Daten). Google Search Console zeigt dir ebenfalls Core Web Vitals für deine Website.' },
      { question: 'Sind Core Web Vitals ein Ranking-Faktor?', answer: 'Ja, seit 2021. Sie sind nicht der wichtigste Ranking-Faktor (Content und Relevanz sind wichtiger), aber bei sonst gleichwertigen Websites gibt die mit besseren Core Web Vitals den Ausschlag.' },
      { question: 'Was ist der Unterschied zwischen Lab-Daten und Feld-Daten?', answer: 'Lab-Daten werden in einer kontrollierten Umgebung gemessen (Lighthouse). Feld-Daten werden von echten Chrome-Nutzern gesammelt (CrUX). Feld-Daten sind realistischer, Lab-Daten sind besser zum Debuggen.' },
    ],
  },
  {
    slug: 'dsgvo-konforme-website-rechtssicher-2025',
    title: 'DSGVO-konforme Website: Rechtssicher in 2025',
    excerpt: 'Impressum, Datenschutzerklärung, Cookie-Banner — was muss auf deiner Website stehen, um DSGVO-konform zu sein? Hier ist die Checkliste für 2025.',
    date: '2025-07-05',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'Web Design',
    emoji: '🔒',
    sections: [
      {
        heading: 'Was die DSGVO von deiner Website verlangt',
        paragraphs: [
          'Die DSGVO (Datenschutz-Grundverordnung) gilt seit 2018 und ist in Deutschland unverändert relevant. Sie verlangt, dass Websites transparent über die Verarbeitung personenbezogener Daten informieren und Nutzer um Einwilligung bitten, bevor nicht-notwendige Cookies gesetzt werden.',
          'Die wichtigsten Pflichtelemente einer DSGVO-konformen Website: Impressum (§5 TMG), Datenschutzerklärung (Art. 13 DSGVO), Cookie-Banner mit freiwilliger Einwilligung, SSL-Verschlüsselung (HTTPS) und ein Widerrufsrecht für Online-Verträge.',
        ],
      },
      {
        heading: 'Impressum: Was rein muss',
        paragraphs: [
          'Das Impressum ist Pflicht für jede gewerbliche Website in Deutschland. Es muss folgende Informationen enthalten: Vollständiger Name des Betreibers, ladungsfähige Anschrift (Julius-Lucas-Weg 90, 42113 Wuppertal bei TnT Studio), Kontaktdaten (E-Mail, Telefon), Umsatzsteuer-Identifikationsnummer (falls vorhanden) und bei juristischen Personen: Rechtsform und Vertretungsberechtigter.',
          'Das Impressum muss von jeder Seite der Website mit einem Klick erreichbar sein — typischerweise im Footer. Verstecke es nicht in einem Dropdown oder hinter drei Klicks.',
        ],
      },
      {
        heading: 'Cookie-Banner: Was zulässig ist',
        paragraphs: [
          'Seit dem EuGH-Urteil (2023) und der TTDSG-Novelle müssen Cookie-Banner in Deutschland freiwillig sein. Das bedeutet: Es muss einen gleichberechtigten "Alle ablehnen"-Button geben. Pre-ticked Checkboxen sind unzulässig. Cookies dürfen erst nach ausdrücklicher Einwilligung gesetzt werden.',
          'Notwendige Cookies (Session-Cookies, Sicherheits-Cookies) dürfen ohne Einwilligung gesetzt werden. Aber Analytics-Cookies (Google Analytics), Marketing-Cookies (Meta Pixel) und Tracking-Cookies benötigen aktive Einwilligung. TnT Studio baut DSGVO-konforme Cookie-Banner — ohne Dark Patterns.',
        ],
      },
      {
        heading: 'SSL und Sicherheit',
        paragraphs: [
          'SSL-Verschlüsselung (HTTPS) ist 2025 Standard. Ohne SSL zeigt der Browser "Nicht sicher" in der Adressleiste — das verdirbt Vertrauen und schadet dem SEO-Ranking. SSL-Zertifikate sind heute kostenlos (Let\'s Encrypt). Keine Agentur sollte dafür Geld verlangen.',
          'Zusätzlich: Sichere Formulare (CSRF-Schutz), regelmäßige Backups, sichere Passwörter und Updates für alle verwendeten Software-Komponenten. TnT Studio hostet auf Netlify oder Vercel — beide bieten SSL automatisch und DDoS-Schutz inklusive.',
        ],
      },
    ],
    faqs: [
      { question: 'Was muss auf einer DSGVO-konformen Website stehen?', answer: 'Impressum (§5 TMG), Datenschutzerklärung (Art. 13 DSGVO), Cookie-Banner mit "Alle ablehnen"-Button, SSL-Verschlüsselung und bei E-Commerce: AGB, Widerrufsbelehrung und Versandbedingungen.' },
      { question: 'Ist ein Cookie-Banner Pflicht?', answer: 'Ja, wenn du nicht-notwendige Cookies verwendest (Analytics, Marketing, Tracking). Notwendige Cookies (Session, Sicherheit) dürfen ohne Einwilligung gesetzt werden. Das Cookie-Banner muss einen gleichberechtigten "Alle ablehnen"-Button haben.' },
      { question: 'Was kostet ein SSL-Zertifikat?', answer: 'Nichts. Let\'s Encrypt bietet kostenlose SSL-Zertifikate. Keine Agentur sollte dafür Geld verlangen. Bei TnT Studio ist SSL automatisch inklusive (Netlify/Vercel stellen SSL-Zertifikate automatisch aus).' },
      { question: 'Brauche ich eine Datenschutzerklärung?', answer: 'Ja, zwingend. Die Datenschutzerklärung muss alle Verarbeitungsvorgänge personenbezogener Daten transparent darstellen: welche Daten, wofür, wie lange, auf welcher Rechtsgrundlage. Verwende keine generischen Vorlagen — sie sollten auf deine Website zugeschnitten sein.' },
      { question: 'Was passiert bei DSGVO-Verstößen?', answer: 'Bußgelder bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes. Abmahnungen durch Wettbewerber sind häufig und kosten 500-2.000€. Ein DSGVO-Verstoß ist teuer — Prävention ist günstiger.' },
      { question: 'Ist Google Analytics DSGVO-konform?', answer: 'Nur mit Einwilligung. Google Analytics setzt Cookies und verarbeitet personenbezogene Daten. Du brauchst eine aktive Einwilligung über ein Cookie-Banner. Alternativ: Verwende datenschutzfreundliche Alternativen wie Plausible oder Fathom.' },
      { question: 'Baut TnT Studio DSGVO-konforme Websites?', answer: 'Ja. Wir integrieren Impressum, Datenschutzerklärung, Cookie-Banner und SSL in jede Website. Die rechtlichen Texte solltest du jedoch von einem Anwalt prüfen lassen — wir liefern die technische Umsetzung.' },
      { question: 'Was ist das BFSG und betrifft es meine Website?', answer: 'Das Barrierefreiheitsstärkungsgesetz (BFSG) tritt 2025 in Kraft und verlangt Barrierefreiheit für bestimmte digitale Produkte. Für Business-Websites gilt es teilweise. Wir bauen semantisches HTML und barrierefreie Strukturen ein.' },
    ],
  },
  {
    slug: 'conversion-rate-optimierung-mehr-kunden',
    title: 'Conversion Rate Optimierung: Mehr Kunden aus bestehendem Traffic',
    excerpt: 'Du brauchst nicht mehr Traffic — du brauchst mehr Conversions aus deinem bestehenden Traffic. Hier ist unser CRO-Framework, das funktioniert.',
    date: '2025-07-03',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'Web Design',
    emoji: '📈',
    sections: [
      {
        heading: 'Was ist Conversion Rate Optimierung?',
        paragraphs: [
          'Conversion Rate Optimierung (CRO) ist der Prozess, den Anteil der Website-Besucher zu erhöhen, die eine gewünschte Aktion ausführen — sei es ein Kauf, eine Kontaktaufnahme, eine Newsletter-Anmeldung oder ein Download. CRO bedeutet: mehr aus vorhandenem Traffic herausholen, ohne mehr Geld für Werbung auszugeben.',
          'Wenn deine Website 1.000 Besucher pro Monat hat und 2% konvertieren (20 Kunden), dann bringt eine Erhöhung auf 4% (40 Kunden) dir 100% mehr Kunden — ohne einen Cent mehr für Marketing. Das ist die Kraft von CRO.',
        ],
      },
      {
        heading: 'Die größten Conversion-Killer',
        paragraphs: [
          'Hier sind die häufigsten Gründe, warum Websites nicht konvertieren — und wie du sie behebst:',
        ],
        list: [
          'Unklare Value Proposition: Der Besucher versteht in 5 Sekunden nicht, was du anbietest.',
          'Zu viele Optionen: Paradox of Choice — je mehr Optionen, desto weniger Entscheidungen.',
          'Langsame Ladezeit: 53% der mobilen Nutzer verlassen Websites, die länger als 3 Sekunden laden.',
          'Schlechtes Mobile-Erlebnis: Formulare, die auf dem Handy nicht auszufüllen sind.',
          'Fehlendes Vertrauen: Keine Testimonials, keine Referenzen, kein Impressum sichtbar.',
          'Schwacher CTA: "Erfahren Sie mehr" statt "Jetzt kostenlos beraten lassen".',
          'Ablenkung: Auto-Play-Videos, Pop-ups, zu viele Banner — alles, was vom Hauptziel ablenkt.',
        ],
      },
      {
        heading: 'Unser CRO-Framework',
        paragraphs: [
          'Wir arbeiten in vier Schritten: Analysieren, Hypothesen bilden, Testen, Skalieren. Zuerst analysieren wir mit Heatmaps (Hotjar, Clarity), Analytics und User-Testing, wo Besucher abbrechen. Dann bilden wir Hypothesen: "Wenn wir den CTA-Button größer machen, steigt die Conversion-Rate."',
          'Dann testen wir mit A/B-Tests (VWO, Optimizely oder selbst gebaut). Zwei Versionen, gleicher Traffic, messbare Ergebnisse. Was funktioniert, skalieren wir. Was nicht funktioniert, verwerfen wir. Keine Bauchgefühl-Entscheidungen — nur Daten.',
        ],
      },
      {
        heading: 'Quick Wins, die du heute umsetzen kannst',
        paragraphs: [
          'Nicht jede CRO-Maßnahme braucht einen A/B-Test. Hier sind Quick Wins, die du sofort umsetzen kannst:',
          'Mach deinen CTA-Button sichtbar ohne zu scrollen (above the fold). Reduziere Formularfelder auf das Minimum. Füge Testimonials prominent auf der Startseite ein. Erhöhe die Ladezeit unter 2 Sekunden. Nutze aktive Sprache in CTAs ("Jetzt starten" statt "Mehr erfahren"). Entferne Ablenkungen — weniger ist mehr.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Conversion Rate Optimierung?', answer: 'CRO ist der Prozess, den Anteil der Website-Besucher zu erhöhen, die eine gewünschte Aktion ausführen (Kauf, Kontakt, Anmeldung). Ziel: mehr Kunden aus bestehendem Traffic, ohne mehr Marketing-Budget.' },
      { question: 'Was ist eine gute Conversion Rate?', answer: 'Branchenabhängig. E-Commerce: 2-3% ist durchschnittlich, 5%+ ist gut. B2B-Lead-Generation: 5-10% ist realistisch. Landing Pages mit klarem Fokus können 15-20% erreichen.' },
      { question: 'Was ist A/B-Testing?', answer: 'A/B-Testing vergleicht zwei Versionen einer Seite (A und B) mit jeweils 50% des Traffics. Die Version mit der höheren Conversion Rate gewinnt. So triffst du Entscheidungen basierend auf Daten, nicht Bauchgefühl.' },
      { question: 'Wie verbessere ich meine Conversion Rate?', answer: 'Klare Value Proposition, starker CTA, schnelle Ladezeit, mobil-optimiertes Erlebnis, Vertrauen durch Testimonials und Referenzen, reduzierte Formulare und A/B-Testing für datenbasierte Optimierung.' },
      { question: 'Welche Tools für CRO?', answer: 'Hotjar und Microsoft Clarity für Heatmaps. Google Analytics für Traffic-Analyse. VWO oder Optimizely für A/B-Testing. TnT Studio nutzt diese Tools in der CRO-Beratung.' },
      { question: 'Wie lange dauert CRO?', answer: 'CRO ist ein kontinuierlicher Prozess. Erste Quick Wins können in 1-2 Wochen umgesetzt werden. A/B-Tests brauchen 2-4 Wochen pro Test für statistische Signifikanz. CRO ist kein Einmal-Projekt.' },
      { question: 'Bietet TnT Studio CRO an?', answer: 'Ja. Wir analysieren deine Website, identifizieren Conversion-Killer, setzen Quick Wins um und führen A/B-Tests durch. CRO ist oft rentabler als mehr Werbebudget auszugeben.' },
      { question: 'Was kostet CRO?', answer: 'CRO-Projekte starten bei 1.500€ für eine Analyse und Quick-Win-Implementierung. Laufende CRO-Betreuung mit monatlichen A/B-Tests ab 500€/Monat. Die ROI ist meist höher als bei Werbeausgaben.' },
    ],
  },
  {
    slug: 'local-seo-wuppertal-google-business-profile',
    title: 'Local SEO Wuppertal: Bei Google gefunden werden (Google Business Profile Guide)',
    excerpt: 'Wenn jemand in Wuppertal nach "Webdesign Agentur" sucht, musst du auftauchen. Hier ist der komplette Guide für Local SEO — mit Google Business Profile, lokalen Keywords und mehr.',
    date: '2025-07-01',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'SEO',
    emoji: '📍',
    sections: [
      {
        heading: 'Was ist Local SEO?',
        paragraphs: [
          'Local SEO ist die Optimierung deiner Online-Präsenz, um in lokalen Suchergebnissen gefunden zu werden. Wenn jemand in Wuppertal "Webdesign Agentur" sucht, zeigt Google drei Ergebnisse im Local Pack (die Karte oben in den Ergebnissen). Local SEO bestimmt, ob du dort auftauchst — oder deine Konkurrenz.',
          'Local SEO ist für lokale Unternehmen überlebenswichtig. 76% der Menschen, die eine lokale Suche durchführen, besuchen das Geschäft innerhalb eines Tages. 28% kaufen etwas. Wenn du nicht im Local Pack bist, existierst du praktisch nicht.',
        ],
      },
      {
        heading: 'Google Business Profile: Das Fundament',
        paragraphs: [
          'Google Business Profile (früher Google My Business) ist das wichtigste Local-SEO-Tool. Es ist kostenlos und bestimmt, ob du im Local Pack, in Google Maps und in der lokalen Wissensgrafik auftauchst.',
          'Schritt-für-Schritt: 1. Beantrage dein Profil bei google.com/business. 2. Verifiziere deine Adresse (Postkarte oder Video-Anruf). 3. Fülle ALLE Felder aus: Name, Adresse, Telefon, Öffnungszeiten, Website, Kategorie, Beschreibung, Fotos. 4. Poste regelmäßig Updates. 5. Sammle und beantworte Bewertungen.',
        ],
      },
      {
        heading: 'NAP-Konsistenz',
        paragraphs: [
          'NAP steht für Name, Address, Phone. Diese Informationen müssen auf deiner Website, in Google Business Profile, in Verzeichnissen (Yelp, Gelbe Seiten, Branchenbuch) und auf Social Media identisch sein. Jede Abweichung verwirrt Google und schwächt dein Local SEO.',
          'Bei TnT Studio ist die NAP-Information: TnT Studio, Julius-Lucas-Weg 90, 42113 Wuppertal, info@tnt-studio.de. Diese Information steht im Footer, im Impressum und in Google Business Profile — überall identisch.',
        ],
      },
      {
        heading: 'Lokale Keywords auf der Website',
        paragraphs: [
          'Deine Website muss lokale Keywords enthalten, damit Google versteht, wo du bist und für wen du da bist. Integriere natürlich: "Webdesign Wuppertal", "Medienagentur Wuppertal", "Agentur Bergisches Land", "Webdesign Solingen", "Webdesign Remscheid". Nicht als Keyword-Stuffing, sondern organisch in Texten, Überschriften und Meta-Tags.',
          'Erstelle lokale Landing Pages: Wenn du Kunden in Solingen hast, erstelle eine Seite "Webdesign Solingen". Für Remscheid: "Webdesign Remscheid". Jede Stadt bekommt eine eigene Seite mit lokal relevantem Content. Das ist die effektivste Local-SEO-Strategie.',
        ],
      },
      {
        heading: 'Bewertungen: Der Local-SEO-Boost',
        paragraphs: [
          'Google-Bewertungen sind ein direkter Local-SEO-Ranking-Faktor. Mehr Bewertungen + bessere Sterne = besseres Local Ranking. Bitte zufriedene Kunden aktiv um Bewertungen — per E-Mail, per WhatsApp, mit einem QR-Code im Geschäft.',
          'Wichtig: Antworte auf jede Bewertung — positive und negative. Google sieht, dass du aktiv bist. Negative Bewertungen professionell zu beantworten ist besser als sie zu ignorieren. Zeigt, dass du kundenorientiert bist.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Local SEO?', answer: 'Local SEO optimiert deine Online-Präsenz für lokale Suchergebnisse. Wenn jemand in Wuppertal nach "Webdesign Agentur" sucht, bestimmt Local SEO, ob du im Local Pack (die drei Karten-Ergebnisse) auftauchst.' },
      { question: 'Was ist Google Business Profile?', answer: 'Google Business Profile (früher Google My Business) ist ein kostenloses Tool, mit dem du dein Unternehmen bei Google einträgst. Es bestimmt dein Auftreten im Local Pack, in Google Maps und in der Wissensgrafik.' },
      { question: 'Wie richte ich Google Business Profile ein?', answer: 'Gehe zu google.com/business, beantrage dein Profil, verifiziere deine Adresse, fülle alle Felder aus (Name, Adresse, Telefon, Öffnungszeiten, Fotos), poste Updates und sammle Bewertungen.' },
      { question: 'Was ist das Local Pack?', answer: 'Das Local Pack sind die drei lokalen Ergebnisse, die Google oben in den Suchergebnissen mit Karte anzeigt. 44% der Klicks auf lokale Suchen gehen an das Local Pack. Wenn du dort nicht bist, verlierst du fast die Hälfte des Traffics.' },
      { question: 'Was bedeutet NAP-Konsistenz?', answer: 'NAP (Name, Address, Phone) muss auf deiner Website, in Google Business Profile und in allen Verzeichnissen identisch sein. Abweichungen verwirren Google und schwächen dein Local SEO Ranking.' },
      { question: 'Wie bekomme ich Google-Bewertungen?', answer: 'Bitte zufriedene Kunden aktiv um Bewertungen — per E-Mail, WhatsApp oder QR-Code. Mehr Bewertungen mit guten Sternen verbessern dein Local Ranking. Antworte auf jede Bewertung.' },
      { question: 'Hilft Local SEO für Wuppertal?', answer: 'Ja, massiv. Wenn jemand in Wuppertal oder Umgebung nach deinen Services sucht, bestimmt Local SEO, ob du gefunden wirst. TnT Studio optimiert für "Webdesign Wuppertal", "Medienagentur Wuppertal" und lokale Begriffe.' },
      { question: 'Was kostet Local SEO?', answer: 'Google Business Profile ist kostenlos. Die Optimierung (Keyword-Integration, lokale Landing Pages, Bewertungsmanagement) kostet je nach Aufwand. TnT Studio bietet Local SEO als Teil des SEO-Services an.' },
      { question: 'Wie lange dauert Local SEO?', answer: 'Google Business Profile ist in 1-2 Wochen eingerichtet. Sichtbare Ranking-Verbesserungen dauern 2-3 Monate. Local SEO ist ein kontinuierlicher Prozess — nicht einmalig.' },
      { question: 'Brauche ich lokale Landing Pages?', answer: 'Ja, wenn du in mehreren Städten aktiv bist. Erstelle für jede Stadt eine eigene Seite (z.B. "Webdesign Solingen", "Webdesign Remscheid"). Das ist die effektivste Local-SEO-Strategie für mehrere Standorte.' },
    ],
  },
  {
    slug: 'social-media-marketing-wuppertal-lokale-marken',
    title: 'Social Media Marketing in Wuppertal: Lokale Marken aufbauen',
    excerpt: 'Social Media ist das Schaufenster deiner Marke. Hier ist, wie wir in Wuppertal und NRW lokale Marken über Instagram, TikTok und Co. aufbauen — mit Strategie, nicht mit Bauchgefühl.',
    date: '2025-06-28',
    author: 'Theo Spingys',
    readingTime: '8 min',
    category: 'Social Media',
    emoji: '🚀',
    sections: [
      {
        heading: 'Warum Social Media für lokale Unternehmen',
        paragraphs: [
          'Social Media ist kein Bonus für lokale Unternehmen in Wuppertal — es ist das Schaufenster. 81% der Deutschen nutzen Social Media. Wenn du dort nicht bist, bist du für 81% deiner potenziellen Kunden unsichtbar. Social Media Marketing in Wuppertal bedeutet: lokal präsent sein, lokale Kunden erreichen, lokale Marke aufbauen.',
          'Bei TnT Studio betreuen wir Kunden im Bergischen Land und darüber hinaus. Ein Beispiel: Für die Lackmann Gruppe (lackmangruppe.de) produzieren wir regelmäßig Social Media Content — Reels, Posts, Stories. Der Fokus liegt auf authentischem Content, der die Marke lokal und überregional stärkt.',
        ],
      },
      {
        heading: 'Die richtige Plattform-Wahl',
        paragraphs: [
          'Nicht jede Plattform ist für jedes Unternehmen richtig. Hier ist unsere Empfehlung nach Branche:',
        ],
        list: [
          'Instagram: Visuelle Branchen (Fashion, Food, Beauty, Automotive) — 60% der Nutzer unter 35',
          'TikTok: Zielgruppe 16-30 — perfekt für virale, authentische Content',
          'LinkedIn: B2B, Recruiting, Thought Leadership — 30+ und Entscheidungsträger',
          'Facebook: Lokale Unternehmen, 35+ — noch immer relevant für lokale Reichweite',
          'YouTube: Tutorials, Erklärvideos, Long-Form Content — zweitgrößte Suchmaschine',
        ],
      },
      {
        heading: 'Content-Strategie für lokale Marken',
        paragraphs: [
          'Eine Content-Strategie ohne lokale Relevanz ist wertvoll. Eine mit lokaler Relevanz ist unschlagbar. Wir integrieren lokale Elemente: Wuppertaler Events, Bergisches Land Kultur, lokale Kooperationen, Stadtteil-Bezüge. Das schafft Verbindung und Vertrauen.',
          'Unsere Content-Pillar-Methode: 3-4 Hauptthemen, die deine Marke definieren. Für ein Autohaus: Neuwagen-Vorstellungen, Behind-the-Scenes, Kunden-Stories, Wissen. Für ein Restaurant: Gerichte, Team, Events, Rezensionen. Jeder Post fällt in einen Pillar — das sorgt für Konsistenz.',
        ],
      },
      {
        heading: 'Lokale Social Media Ads',
        paragraphs: [
          'Organische Reichweite reicht nicht mehr. Meta Ads (Facebook & Instagram) erlauben dir, lokal zu targetieren: Wuppertal + 20km Umkreis, Alter 25-45, Interessen: Auto, Hausbau, etc. Mit 300-500€/Monat Ad-Budget erreichst du tausende potenzielle Kunden in deiner Region.',
          'TnT Studio betreut Meta Ads für Kunden in Wuppertal und NRW. Wir setzen A/B-Tests auf, optimieren Targeting, messen ROAS (Return on Ad Spend) und liefern wöchentliche Reports. Keine Vanity Metrics — nur Zahlen, die zählen.',
        ],
      },
      {
        heading: 'Erfolg messen — richtig',
        paragraphs: [
          'Follower sind eine Vanity Metric. Was zählt: Engagement Rate, Website-Klicks, Lead-Generierung, Conversions. Ein Account mit 1.000 Followern und 8% Engagement ist mehr wert als einer mit 10.000 Followern und 0,5% Engagement.',
          'Wir tracken wöchentlich: Reach, Engagement, Saves, Shares, Profile Visits, Website Clicks, Lead Conversions. Monatliche Strategie-Calls. Quartalsweise Pivot-Sessions. So bleibt die Social-Media-Strategie immer an den Business-Zielen ausgerichtet.',
        ],
      },
    ],
    faqs: [
      { question: 'Was kostet Social Media Marketing in Wuppertal?', answer: 'Social Media Betreuung startet bei etwa 800-1.500€ pro Monat, je nach Umfang. Dazu kommt Ad-Budget (empfohlen min. 300€/Monat). Full-Service Pakete mit Content-Produktion liegen bei 1.500-3.000€/Monat.' },
      { question: 'Wie oft sollte ich posten?', answer: 'Mindestens 3x pro Woche auf Instagram, 2x auf TikTok. Quality over Quantity — aber konsistent. Der Algorithmus belohnt Engagement, nicht Frequenz. Ein Reel mit 50K Views ist mehr wert als 30 Posts mit 200 Views.' },
      { question: 'Welche Plattform ist für mein Unternehmen richtig?', answer: 'Instagram für visuelle Branchen (Fashion, Food, Automotive). TikTok für Zielgruppe 16-30. LinkedIn für B2B und Recruiting. Facebook für lokale Unternehmen 35+. YouTube für Tutorials und Long-Form Content.' },
      { question: 'Brauche ich Social Media Ads?', answer: 'Organisches Wachstum allein reicht selten. Ads beschleunigen Reichweite und Lead-Generierung. Wir empfehlen min. 300€/Monat Ad-Budget für erste Tests. Mit Ads erreichst du gezielt lokale Zielgruppen in Wuppertal und Umgebung.' },
      { question: 'Was ist eine gute Engagement Rate?', answer: 'Branchenabhängig. 1-3% ist durchschnittlich, 4-6% ist gut, 8%+ ist exzellent. Wichtiger als die absolute Zahl: Steigt die Engagement Rate über Zeit? Das zeigt, dass dein Content resoniert.' },
      { question: 'Macht TnT Studio Social Media für Wuppertaler Unternehmen?', answer: 'Ja. Wir betreuen Kunden in Wuppertal, Solingen, Remscheid und NRW. Full-Service: Strategie, Content-Produktion, Community Management, Ads. Alles aus einer Hand — keine externen Fotografen oder Freelancer.' },
      { question: 'Wie lange bis ich Social Media Ergebnisse sehe?', answer: 'Organisches Wachstum: 3-6 Monate für sichtbare Ergebnisse. Mit Ads: erste Leads innerhalb 1-2 Wochen. Social Media ist ein Marathon, kein Sprint — aber mit der richtigen Strategie kommt der Erfolg.' },
      { question: 'Was ist die Content-Pillar-Methode?', answer: '3-4 Hauptthemen definieren deine Marke. Jeder Post fällt in einen Pillar. Das sorgt für Konsistenz und verhindert, dass man nicht weiß, was man posten soll. Beispiel Autohaus: Neuwagen, Behind-the-Scenes, Kunden-Stories, Wissen.' },
      { question: 'Sollte ich Reels oder Posts machen?', answer: 'Beides, aber Reels haben 2025 die höchste organische Reichweite. Der Instagram-Algorithmus pusht Reels aktiv. Wenn du nur eine Content-Form wählen müsstest: Reels. Aber Posts bleiben wichtig für Evergreen-Content.' },
      { question: 'Könnt ihr Content für lackmangruppe.de produzieren?', answer: 'Wir produzieren bereits Social Media Content für die Lackmann Gruppe. Regelmäßige Reels, Posts und Stories mit professionellem Editing und Color-Grading. Schau dir die Referenzen auf unserer Startseite an.' },
    ],
  },
  {
    slug: 'instagram-strategie-2025-reels-algorithmus-wachstum',
    title: 'Instagram Strategie 2025: Reels, Algorithmus & Wachstum',
    excerpt: 'Der Instagram-Algorithmus 2025 ist anders als 2024. Hier ist, was funktioniert, was nicht, und wie du organisch wächst — ohne Ads, ohne Fakes, ohne Bullshit.',
    date: '2025-06-25',
    author: 'Theo Spingys',
    readingTime: '7 min',
    category: 'Social Media',
    emoji: '📸',
    sections: [
      {
        heading: 'Der Instagram-Algorithmus 2025',
        paragraphs: [
          'Der Instagram-Algorithmus 2025 belohnt drei Dinge: Watch Time (wie lange jemand deinen Content ansieht), Saves (wenn jemand deinen Post speichert) und Shares (wenn jemand ihn weiterleitet). Likes und Kommentare sind sekundär. Wer 2025 auf Instagram wachsen will, muss Content produzieren, der gespeichert und geteilt wird — nicht nur geliked.',
          'Reels haben die höchste organische Reichweite. Ein gut gemachtes Reel kann 10x mehr Reach generieren als ein Feed-Post. Der Algorithmus pusht Reels aktiv, um TikTok-Konkurrenz zu bekämpfen. Wenn du 2025 auf Instagram wachsen willst: Reels zuerst, alles andere danach.',
        ],
      },
      {
        heading: 'Reels, die funktionieren',
        paragraphs: [
          'Nicht jedes Reel funktioniert. Nach 500+ produzierten Reels haben wir bei TnT Studio gelernt, was funktioniert:',
        ],
        list: [
          'Hook in den ersten 1,5 Sekunden — wenn der Scroller nicht im ersten Moment gepackt ist, scrollt er weiter',
          'Kurz und knackig: 7-15 Sekunden für maximale Watch Time Rate',
          'Untertitel/Captions: 80% schauen Reels ohne Sound — ohne Untertitel verlierst du 80%',
          'Trending-Audio nutzen — aber nicht zwingend. Guter Content funktioniert auch ohne Trend-Audio',
          'Call-to-Action am Ende: "Speicher diesen Post" oder "Folge für mehr"',
          'Konsistenz: 3-5 Reels pro Woche, jede Woche. Der Algorithmus liebt Vorhersehbarkeit',
        ],
      },
      {
        heading: 'Posting-Zeiten und Frequenz',
        paragraphs: [
          'Die "beste Posting-Zeit" ist ein Mythos. Sie hängt von deiner Zielgruppe ab. B2B: werktags 9-11 Uhr und 16-18 Uhr. B2C: abends 18-21 Uhr und am Wochenende. Teste verschiedene Zeiten und schau in deinen Insights, wann deine Follower aktiv sind.',
          'Frequenz: 3-5 Posts pro Woche (inkl. Reels), 1-2 Stories pro Tag. Konsistenz ist wichtiger als Frequenz. Lieber 3 Posts jede Woche als 7 Posts eine Woche und 0 die nächste.',
        ],
      },
      {
        heading: 'Hashtag-Strategie 2025',
        paragraphs: [
          'Hashtags sind 2025 weniger wichtig als früher, aber nicht irrelevant. Instagram nutzt Hashtags als Kontext-Signal, nicht als Reichweiten-Booster. 3-5 relevante Hashtags sind besser als 30 generische.',
          'Mix: 1-2 breite Hashtags (#webdesign, #socialmedia), 2-3 spezifische (#webdesignwuppertal, #medienagentur), 1 branded Hashtag (#tntstudio). Vermeide gesperrte oder irrelevante Hashtags — sie können den Post shadowban-gefährden.',
        ],
      },
      {
        heading: 'Wachstum ohne Ads',
        paragraphs: [
          'Organisches Wachstum auf Instagram ist 2025 schwieriger als 2020, aber nicht unmöglich. Der Schlüssel: Wert. Wenn dein Content einen echten Wert bietet (Information, Entertainment, Inspiration), wird er geteilt. Shares sind der stärkste Wachstums-Treiber.',
          'Zusätzliche Strategien: Kollaborationen mit anderen Accounts (Collab-Posts), User-Generated Content (Reposts von Kunden), Instagram Live für Echtzeit-Interaktion, und Reels mit Trending-Audio. TnT Studio wächst organisch — ohne gekaufte Follower, ohne Bots, ohne Fakes. Weil echte Reichweite mehr wert ist als inflated Numbers.',
        ],
      },
    ],
    faqs: [
      { question: 'Wie oft sollte ich auf Instagram posten?', answer: '3-5 Posts pro Woche (inkl. Reels), 1-2 Stories pro Tag. Konsistenz ist wichtiger als Frequenz. Lieber regelmäßig 3 Posts als unregelmäßig 7.' },
      { question: 'Was ist die beste Posting-Zeit auf Instagram?', answer: 'Zielgruppenabhängig. B2B: werktags 9-11 Uhr und 16-18 Uhr. B2C: abends 18-21 Uhr und am Wochenende. Teste verschiedene Zeiten und prüfe deine Insights.' },
      { question: 'Wie viele Hashtags sollte ich verwenden?', answer: '3-5 relevante Hashtags sind optimal. Mix aus breiten (#webdesign), spezifischen (#webdesignwuppertal) und branded (#tntstudio). 30 Hashtags sind 2025 nicht mehr nötig und können als Spam markiert werden.' },
      { question: 'Sind Reels wichtiger als Feed-Posts?', answer: 'Ja, 2025 haben Reels die höchste organische Reichweite. Der Algorithmus pusht Reels aktiv. Wenn du nur eine Content-Form wählen müsstest: Reels. Feed-Posts bleiben wichtig für Evergreen-Content und Markenkonsistenz.' },
      { question: 'Wie lang sollte ein Reel sein?', answer: '7-15 Sekunden für maximale Watch Time Rate. Wenn der Content es erfordert, bis 30 Sekunden. Alles darüber hinaus braucht einen extrem starken Hook, sonst scrollen die Leute weg.' },
      { question: 'Brauche ich Untertitel für Reels?', answer: 'Ja, zwingend. 80% der Nutzer schauen Reels ohne Sound. Ohne Untertitel verlierst du 80% deiner potenziellen Reichweite. TnT Studio fügt Captions automatisch zu jedem Reel hinzu.' },
      { question: 'Wie wächst man organisch auf Instagram?', answer: 'Wertvoller Content, der gespeichert und geteilt wird. Konsistenz (3-5 Posts/Woche). Kollaborationen mit anderen Accounts. User-Generated Content. Trending-Audio in Reels. Echtes Engagement — antworte auf jeden Kommentar.' },
      { question: 'Hilft TnT Studio bei Instagram-Strategie?', answer: 'Ja. Wir entwickeln Content-Strategien, produzieren Reels und Posts, managen Community und optimieren basierend auf Daten. Für Kunden in Wuppertal und NRW — alles aus einer Hand.' },
      { question: 'Sollte ich Instagram Ads schalten?', answer: 'Organisches Wachstum ist die Basis, aber Ads beschleunigen. Mit 300-500€/Monat erreichst du gezielt neue Zielgruppen. Wir empfehlen: erst organisch aufbauen, dann Ads für Skalierung.' },
      { question: 'Was ist der Instagram-Algorithmus 2025?', answer: 'Der Algorithmus belohnt Watch Time, Saves und Shares. Likes und Kommentare sind sekundär. Produziere Content, der gespeichert und geteilt wird — nicht nur geliked. Reels haben die höchste organische Reichweite.' },
    ],
  },
  {
    slug: 'meta-ads-agentur-facebook-instagram-werbung',
    title: 'Meta Ads Agentur: Facebook & Instagram Werbung die funktioniert',
    excerpt: 'Meta Ads sind der schnellste Weg, um neue Kunden zu erreichen. Aber 90% der Kampagnen sind schlecht. Hier ist, wie wir Meta Ads für Kunden in Wuppertal und NRW schalten — mit ROI.',
    date: '2025-06-22',
    author: 'Theo Spingys',
    readingTime: '8 min',
    category: 'Social Media',
    emoji: '🎯',
    sections: [
      {
        heading: 'Warum die meisten Meta Ads scheitern',
        paragraphs: [
          '90% der Meta Ads-Kampagnen, die wir sehen, sind schlecht. Warum? Falsches Targeting, schwache Creatives, keine Conversion-Tracking, kein A/B-Testing. Die meisten Unternehmen schalten Ads "einfach mal" und wundern sich, dass sie Geld verlieren.',
          'Meta Ads funktionieren — aber nur mit Strategie. Eine gut optimierte Kampagne kann einen ROAS (Return on Ad Spend) von 3-10x erreichen. Das bedeutet: Für jeden Euro Werbebudget bekommst du 3-10€ Umsatz zurück. Aber das passiert nicht von alleine.',
        ],
      },
      {
        heading: 'Unsere Meta Ads-Strategie',
        paragraphs: [
          'Wir arbeiten in vier Phasen: Research, Setup, Optimierung, Skalierung. In der Research-Phase analysieren wir Zielgruppe, Wettbewerber und Angebote. Im Setup erstellen wir Kampagnenstruktur, Creatives und Targeting. In der Optimierung testen wir laufend (A/B-Tests) und passen an. In der Skalierung erhöhen wir Budget bei funktionierenden Kampagnen.',
          'Wichtig: Wir tracken Conversions, nicht Klicks. Ein Klick ist kein Erfolg — ein Kauf oder ein Lead ist ein Erfolg. Wir installieren Meta Pixel und Conversions API für genaues Tracking. Ohne Tracking verbrennst du Geld.',
        ],
      },
      {
        heading: 'Targeting in 2025',
        paragraphs: [
          'Das Meta-Targeting hat sich verändert. Detaillierte Targeting-Optionen wurden eingeschränkt (iOS 14.5+). 2025 funktioniert am besten: Broad Targeting (nur Alter, Ort, Sprache) + starken Creatives, die die Zielgruppe selbst filtern. Oder Custom Audiences (Website-Besucher, E-Mail-Liste) und Lookalike Audiences.',
          'Lokales Targeting für Wuppertal: Wuppertal + 20km Umkreis, Alter 25-55, Sprache Deutsch. Das reicht oft schon — der Creative macht den Rest. TnT Studio hat Erfahrung mit lokalen Meta Ads-Kampagnen im Bergischen Land und NRW.',
        ],
      },
      {
        heading: 'Creatives, die konvertieren',
        paragraphs: [
          'Der Creative ist der wichtigste Faktor für Meta Ads. 80% des Erfolgs hängen am Creative, 20% am Targeting. Ein guter Meta Ads-Creative: Hält in den ersten 1,5 Sekunden auf (Hook), zeigt das Problem, präsentiert die Lösung, hat einen klaren Call-to-Action.',
          'Formate, die funktionieren: Reel-Ads (vertikal, 9:16) mit hohem Entertainment-Wert. Carousel-Ads für Produktdarstellung. Image-Ads für einfache Botschaften. Video-Ads für komplexe Angebote. TnT Studio produziert alle Creatives im Haus — kein Koordination mit externen Freelancern.',
        ],
      },
      {
        heading: 'Budget und ROAS',
        paragraphs: [
          'Mindestbudget für Meta Ads: 300-500€/Monat. Darunter ist die Datenmenge zu gering für sinnvolle Optimierung. Realistischer ROAS: 2-5x für E-Commerce, 3-10x für Lead-Generation (je nach Customer Lifetime Value). Wer dir "10x ROAS garantiert" verspricht, lügt — ROAS hängt von Branche, Angebot und Wettbewerb ab.',
          'Wir liefern wöchentliche Reports: Impressions, Klicks, CTR, CPC, Conversions, CPA, ROAS. Volle Transparenz. Du weißt genau, was passiert mit deinem Geld — und was es bringt.',
        ],
      },
    ],
    faqs: [
      { question: 'Was kosten Meta Ads?', answer: 'Das Ad-Budget bestimmst du. Minimum 300-500€/Monat für sinnvolle Ergebnisse. Dazu kommt die Agentur-Betreuung (300-800€/Monat). TnT Studio bietet Meta Ads-Betreuung für Wuppertal und NRW an.' },
      { question: 'Was ist ROAS?', answer: 'ROAS (Return on Ad Spend) ist das Verhältnis von Umsatz zu Werbeausgaben. ROAS 3x bedeutet: Für jeden Euro Werbebudget bekommst du 3€ Umsatz. Realistisch: 2-5x für E-Commerce, 3-10x für Lead-Generation.' },
      { question: 'Wie lange bis Meta Ads Ergebnisse zeigen?', answer: 'Erste Daten innerhalb 3-7 Tagen. Sinnvolle Optimierung nach 2-3 Wochen (genug Daten für A/B-Tests). Skalierung nach 4-6 Wochen. Meta Ads brauchen Zeit zum Lernen — nicht zu früh abbrechen.' },
      { question: 'Brauche ich Meta Pixel?', answer: 'Ja, zwingend. Meta Pixel trackt Conversions auf deiner Website. Ohne Pixel weiß Meta nicht, wer gekauft oder kontaktiert hat — und kann die Kampagne nicht optimieren. Wir installieren Pixel und Conversions API.' },
      { question: 'Facebook oder Instagram Ads?', answer: 'Beides. Meta Ads Manager schaltet auf beiden Plattformen gleichzeitig. Die Creatives sollten plattformspezifisch sein (Reels für Instagram, Image-Ads für Facebook). TnT Studio produziert plattformspezifische Creatives.' },
      { question: 'Was ist A/B-Testing bei Meta Ads?', answer: 'A/B-Testing vergleicht zwei Versionen (zwei Creatives, zwei Targetings, zwei Texte) und misst, welche besser performt. So optimieren wir datenbasiert statt nach Bauchgefühl. Kontinuierliches A/B-Testing ist der Schlüssel zu gutem ROAS.' },
      { question: 'Kann ich Meta Ads selbst schalten?', answer: 'Ja, aber die Lernkurve ist steil. Ohne Erfahrung verbrennst du Budget. Eine Agentur wie TnT Studio hat Erfahrung mit Dutzenden Kampagnen und weiß, was funktioniert — und was nicht. Die Agentur-Kosten amortisieren sich meist durch besseren ROAS.' },
      { question: 'Was ist Lookalike Targeting?', answer: 'Lookalike Audiences sind von Meta erstellte Zielgruppen, die deiner bestehenden Kunden ähneln. Du gibst Meta eine Quelle (z.B. Website-Besucher) und Meta findet Menschen mit ähnlichen Merkmalen. Sehr effektiv für Neukunden-Gewinnung.' },
      { question: 'Sind Meta Ads DSGVO-konform?', answer: 'Ja, mit korrektem Setup. Du brauchst: Cookie-Banner mit Einwilligung für Marketing-Cookies, Meta Pixel mit Consent Mode, Datenschutzerklärung mit Meta-Referenz. TnT Studio richtet alles DSGVO-konform ein.' },
      { question: 'Bietet TnT Studio Meta Ads-Betreuung an?', answer: 'Ja. Vollumfänglich: Strategie, Creative-Produktion, Kampagnen-Setup, Optimierung, Reporting. Für Kunden in Wuppertal, Solingen, Remscheid und ganz NRW. Wöchentliche Reports mit klaren KPIs.' },
    ],
  },
  {
    slug: 'tiktok-marketing-fuer-unternehmen-2025-guide',
    title: 'TikTok Marketing für Unternehmen: 2025 Guide',
    excerpt: 'TikTok ist nicht mehr nur für Teenies. 2025 sind 40% der Nutzer über 30. Hier ist, wie Unternehmen TikTok für Marketing nutzen — mit echten Ergebnissen.',
    date: '2025-06-20',
    author: 'Theo Spingys',
    readingTime: '6 min',
    category: 'Social Media',
    emoji: '🎵',
    sections: [
      {
        heading: 'TikTok 2025: Nicht mehr nur Gen Z',
        paragraphs: [
          'TikTok hat sich verändert. 2025 sind 40% der deutschen Nutzer über 30 Jahre alt. B2B-Unternehmen, Handwerker, Restaurants, Autohäuser — alle sind auf TikTok vertreten. Wer TikTok 2025 noch als "Teenie-Plattform" abtut, verlässt eine der größten organischen Reichweite-Quellen.',
          'Der TikTok-Algorithmus ist einzigartig: Er belohnt Content-Qualität, nicht Follower-Anzahl. Ein Account mit 0 Followern kann ein Video mit 1 Million Views haben. Das ist auf Instagram fast unmöglich. TikTok ist die Plattform mit der höchsten organischen Reichweite 2025.',
        ],
      },
      {
        heading: 'TikTok für B2B: Geht das?',
        paragraphs: [
          'Ja. TikTok für B2B funktioniert anders als B2C, aber es funktioniert. B2B-TikTok-Content: Behind-the-Scenes (wie eure Werkstatt aussieht), Expertisen-Sharing (Tipps aus eurem Fachgebiet), Unternehmenskultur (Team vorstellen), Kunden-Stories (Case Studies als Video).',
          'Der Schlüssel: Authentizität. TikTok-Nutzer hassen poliertes Marketing. Zeig, wie ihr wirklich arbeitet. Zeig Fehler. Zeig den Prozess. Echtheit gewinnt auf TikTok — Perfektion verliert.',
        ],
      },
      {
        heading: 'Content-Ideen für Unternehmen',
        paragraphs: [
          'Hier sind Content-Ideen, die auf TikTok funktionieren — für jede Branche:',
        ],
        list: [
          '"3 Dinge, die du über [deine Branche] wissen musst" — Educational Content',
          '"Ein Tag bei [Firmenname]" — Behind-the-Scenes',
          '"Vorher/Nachher" — Transformationen zeigen (besonders effektiv für Handwerker, Design)',
          '"Kunde fragt, wir antworten" — FAQ als Video',
          '"Häufige Fehler bei [Thema]" — Problem-Lösung-Content',
          '"Trend + deine Branche" — Trending-Audio mit Branchen-Bezug',
        ],
      },
      {
        heading: 'TikTok Ads vs. organisch',
        paragraphs: [
          'TikTok Ads sind 2025 günstiger als Meta Ads — der Wettbewerb ist geringer, die Klickpreise niedriger. TikTok Ads eignen sich für: Reichweiten-Aufbau, App-Downloads, E-Commerce. Mindestbudget: 200-500€/Monat.',
          'Aber: Organischer Content ist auf TikTok wertvoller als Ads. Ein organisches Video mit 100K Views ist mehr wert als eine Ad mit 100K Impressions — weil organischer Content Vertrauen aufbaut und Ads als Werbung wahrgenommen werden. Unsere Empfehlung: Erst organisch aufbauen, dann Ads für Skalierung.',
        ],
      },
    ],
    faqs: [
      { question: 'Ist TikTok für Unternehmen sinnvoll?', answer: 'Ja. 40% der deutschen TikTok-Nutzer sind 2025 über 30. B2B, Handwerker, Restaurants — alle nutzen TikTok. Die organische Reichweite ist höher als auf jeder anderen Plattform. Wer TikTok ignoriert, lässt Reichweite liegen.' },
      { question: 'TikTok für B2B — funktioniert das?', answer: 'Ja, mit authentischem Content. Behind-the-Scenes, Expertisen-Sharing, Unternehmenskultur, FAQ-Videos. TikTok-Nutzer hassen poliertes Marketing — Echtheit gewinnt.' },
      { question: 'Wie oft sollte ich auf TikTok posten?', answer: '1-2 Videos pro Tag ist ideal auf TikTok. TikTok belohnt Frequenz mehr als Instagram. Aber: Qualität muss stimmen. Lieber 1 gutes Video pro Tag als 3 schlechte.' },
      { question: 'Brauche ich TikTok Ads?', answer: 'Nicht zwingend. Organischer Content ist auf TikTok wertvoller als Ads. Erst organisch aufbauen, dann Ads für Skalierung. TikTok Ads sind 2025 günstiger als Meta Ads (geringerer Wettbewerb).' },
      { question: 'Was kostet TikTok Marketing?', answer: 'Organisch: nur Zeit und Content-Produktion. TikTok Ads: ab 200-500€/Monat. Agentur-Betreuung: 500-1.500€/Monat. TnT Studio produziert TikTok-Content und betreut Ads.' },
      { question: 'Wie lang sollten TikTok-Videos sein?', answer: '15-30 Sekunden für maximale Watch Time. Bis 60 Sekunden für Educational Content. Über 60 Sekunden nur bei extrem gutem Hook. Kurz ist besser — die Attention Span auf TikTok ist gering.' },
      { question: 'Kann TnT Studio TikTok-Content produzieren?', answer: 'Ja. Wir produzieren TikTok-Videos im Haus — vom Konzept über Dreh bis zum Schnitt. Mit Untertiteln, Trending-Audio und plattformspezifischem Editing. Für Kunden in Wuppertal und NRW.' },
      { question: 'Ist TikTok 2025 noch relevant?', answer: 'Ja, mehr denn je. TikTok hat über 2 Milliarden aktive Nutzer weltweit. In Deutschland nutzen 20+ Millionen Menschen TikTok. Die organische Reichweite ist unübertroffen. Wer 2025 nicht auf TikTok ist, verpasst eine enorme Chance.' },
    ],
  },
  {
    slug: 'employer-branding-talente-social-media-gewinnen',
    title: 'Employer Branding: Talente mit Social Media gewinnen',
    excerpt: 'Fachkräftemangel ist das größte Problem deutscher Unternehmen. Hier ist, wie wir mit Employer Branding und Social Media Talente finden — am Beispiel von Esteves Recruiting.',
    date: '2025-06-18',
    author: 'Theo Spingys',
    readingTime: '7 min',
    category: 'Recruiting',
    emoji: '🤝',
    sections: [
      {
        heading: 'Warum Employer Branding 2025 entscheidend ist',
        paragraphs: [
          'Fachkräftemangel ist 2025 das größte Problem deutscher Unternehmen. 70% der Unternehmen suchen Personal und finden keine passenden Kandidaten. Klassische Recruiting-Methoden — Jobboards, Personalagenturen — funktionieren nicht mehr. Was funktioniert: Employer Branding mit Social Media.',
          'Employer Branding bedeutet: dein Unternehmen als attraktiven Arbeitgeber positionieren. Nicht mit leeren Versprechen, sondern mit echten Einblicken. Zeig, wie es ist, bei dir zu arbeiten. Zeig dein Team. Zeig deine Kultur. Zeig, warum jemand zu dir kommen sollte — und nicht zur Konkurrenz.',
        ],
      },
      {
        heading: 'Der Esteves Recruiting-Ansatz',
        paragraphs: [
          'Bei TnT Studio haben wir mit Esteves Recruiting (esteves-recruiting.com) eine eigene Recruiting-Sparte aufgebaut. Der Grund: unsere Kunden hatten alle das gleiche Problem — sie fanden keine guten Leute. Also haben wir eine Lösung gebaut, die Recruiting mit Marketing verbindet.',
          'Esteves Recruiting fokussiert sich auf Logistik und Gesundheitswesen — Branchen mit massivem Fachkräftemangel. Statt Lebensläufe zu schaufeln, bauen wir Employer Brands. Wir nutzen Social Media, Content und gezielte Kampagnen, um Talente zu erreichen — nicht Jobboards, wo jeder postet.',
        ],
      },
      {
        heading: 'Social Media für Recruiting',
        paragraphs: [
          'Social Media ist 2025 der effektivste Recruiting-Kanal. LinkedIn für B2B-Positionen und Fachkräfte. Instagram für Young Talents und Azubis. TikTok für Gen Z. Die Plattform-Wahl hängt von deiner Zielgruppe ab.',
          'Content, der funktioniert: "Ein Tag bei [Firmenname]" — Behind-the-Scenes. Team-Vorstellungen — wer arbeitet bei dir und warum? Unternehmenskultur — wie feiert ihr Erfolge? Benefits — was bietet ihr über das Gehalt hinaus? Erfolgsgeschichten — wie haben Mitarbeiter bei dir Karriere gemacht?',
        ],
      },
      {
        heading: 'Employer Branding Strategie',
        paragraphs: [
          'Employer Branding ist kein einmaliges Projekt, sondern eine kontinuierliche Strategie. Unsere Schritte: 1. Analyse: Was macht euch attraktiv? Was sagt euer Team? 2. Positionierung: Wie positioniert ihr euch als Arbeitgeber? 3. Content-Produktion: Social Media Content, der eure Kultur zeigt. 4. Verteilung: LinkedIn, Instagram, TikTok, Karriereseite. 5. Messung: Bewerbungen, Retention Rate, Employer Branding Score.',
          'Das Ergebnis: Mehr qualifizierte Bewerbungen, geringere Fluktuation, stärkere Arbeitgebermarke. Und das Wichtigste: Du ziehst die richtigen Leute an — und die falschen bleiben weg. Weil eine klare Employer Brand filtert.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Employer Branding?', answer: 'Employer Branding positioniert dein Unternehmen als attraktiven Arbeitgeber. Ziel: mehr qualifizierte Bewerbungen, geringere Fluktuation, stärkere Arbeitgebermarke. In Zeiten des Fachkräftemangels entscheidend.' },
      { question: 'Wie hilft Social Media beim Recruiting?', answer: 'Social Media erreicht Talente dort, wo sie sind. LinkedIn für Fachkräfte, Instagram für Young Talents, TikTok für Gen Z. Authentischer Content (Behind-the-Scenes, Team-Vorstellungen) zieht die richtigen Bewerber an.' },
      { question: 'Was ist Esteves Recruiting?', answer: 'Esteves Recruiting (esteves-recruiting.com) ist die Recruiting-Sparte von TnT Studio. Fokus: Logistik und Gesundheitswesen. Approach: Recruiting + Marketing — Employer Brands aufbauen statt Lebensläufe schaufeln.' },
      { question: 'Was kostet Employer Branding?', answer: 'Employer Branding-Projekte starten bei 3.000-5.000€ für Strategie und Content-Produktion. Laufende Betreuung ab 1.000-2.000€/Monat. Die Investition amortisiert sich durch geringere Recruiting-Kosten und niedrigere Fluktuation.' },
      { question: 'Auf welcher Plattform sollte ich Recruiting machen?', answer: 'LinkedIn für B2B und Fachkräfte. Instagram für Young Talents und Azubis. TikTok für Gen Z. Die Plattform-Wahl hängt von deiner Zielgruppe ab. TnT Studio berät dich, welche Plattform für dein Recruiting die richtige ist.' },
      { question: 'Wie messe ich Employer Branding Erfolg?', answer: 'KPIs: Anzahl qualifizierte Bewerbungen, Retention Rate (wie lange bleiben Mitarbeiter), Employer Branding Score (Markenbekanntheit als Arbeitgeber), Cost per Hire, Time to Hire.' },
      { question: 'Kann TnT Studio Employer Branding für uns übernehmen?', answer: 'Ja. Von der Strategie über Content-Produktion bis zur Kampagnen-Verteilung. Mit unserer Recruiting-Sparte Esteves Recruiting haben wir eigene Erfahrung im Recruiting-Markt. Wir wissen, was funktioniert.' },
      { question: 'Was ist der Unterschied zwischen Recruiting und Employer Branding?', answer: 'Recruiting ist der aktive Suchprozess (Stellenanzeigen, Kandidatenansprache). Employer Branding ist der strategische Aufbau der Arbeitgebermarke. Employer Branding macht Recruiting einfacher — weil Bewerber von alleine kommen.' },
      { question: 'Wie lange dauert Employer Branding?', answer: 'Strategie und Content-Produktion: 4-8 Wochen. Sichtbare Ergebnisse (mehr Bewerbungen): 3-6 Monate. Employer Branding ist ein kontinuierlicher Prozess — keine Einmal-Kampagne.' },
      { question: 'Funktioniert Employer Branding für KMU?', answer: 'Ja, besonders. KMU haben oft den Vorteil, dass sie persönlicher sind als Konzerne. Zeig dein Team, deine Kultur, deine Nähe zum Mitarbeiter. Das zieht Talente an, die im Konzern nur eine Nummer wären.' },
    ],
  },
  {
    slug: 'content-creation-wuppertal-imagefilm-bis-reel',
    title: 'Content Creation in Wuppertal: Vom Imagefilm bis zum Reel',
    excerpt: 'Content ist König — aber nur wenn er gut ist. Hier ist, wie wir in Wuppertal Video-Content produzieren, der ins Auge springt und hängen bleibt.',
    date: '2025-06-15',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'Content Creation',
    emoji: '🎬',
    sections: [
      {
        heading: 'Content Creation in Wuppertal',
        paragraphs: [
          'Content Creation bedeutet bei TnT Studio: Video-Content, der emotionalisiert, Fotos, die ins Auge springen, und Geschichten, die hängen bleiben. Wir produzieren in Wuppertal und NRW — vom Reel bis zum Imagefilm. Alles im Haus: Konzept, Dreh, Post-Produktion, Distribution.',
          'Warum Content wichtig ist: Social Media ohne Content ist wie ein Schaufenster ohne Ware. Du brauchst regelmäßig frischen, hochwertigen Content, um sichtbar zu bleiben. Aber nicht irgendeinen Content — Content, der einen Zweck hat, eine Zielgruppe und eine Botschaft.',
        ],
      },
      {
        heading: 'Unsere Content-Formate',
        paragraphs: [
          'Wir produzieren verschiedene Formate, je nach Ziel und Plattform:',
        ],
        list: [
          'Reels & TikToks: Vertikale Videos (9:16), 15-30 Sekunden, für Instagram und TikTok',
          'Imagefilme: Hochwertige Unternehmensfilme, 1-3 Minuten, für Website und YouTube',
          'Produktvideos: Produkt im Fokus, 30-60 Sekunden, für Shop und Social Media',
          'Explainer Videos: Komplexe Themen einfach erklärt, 60-90 Sekunden',
          'Behind-the-Scenes: Authentischer Einblick in eure Arbeit, 30-60 Sekunden',
          'Event-Dokumentation: Events filmisch festhalten, 1-5 Minuten',
        ],
      },
      {
        heading: 'Der Produktionsprozess',
        paragraphs: [
          'Unser Prozess ist strukturiert: 1. Konzept & Storyboard — wir entwickeln die Idee, schreiben das Skript, erstellen Storyboards. 2. Produktion — Drehtag mit professionellem Equipment (Kamera, Licht, Audio). Wir regeln Location, Talents und alle Details. 3. Post-Produktion — Schnitt, Color-Grading, Sound-Design, Motion Graphics. 4. Distribution — wir optimieren für jeden Kanal und liefern fertige Content-Pakete.',
          'Lieferzeit: Reels innerhalb 48h nach Drehtag. Imagefilme innerhalb 5-7 Tagen. Großprojekte nach Absprache mit Milestones. Express-Service auf Anfrage.',
        ],
      },
      {
        heading: 'Equipment und Qualität',
        paragraphs: [
          'Wir filmen in 4K mit professionellen Kameras, Studio-Blitzanlagen und Makro-Objektiven. Audio mit Richtmikrofonen und Lavalier-Mikros. Drohnen-Aufnahmen für Luftbilder. Post-Produktion in DaVinci Resolve (Color-Grading) und Premiere Pro (Schnitt).',
          'Das bedeutet für dich: Content in Kino-Qualität, der auf jedem Screen gut aussieht — vom Smartphone bis zum Fernseher. Weil hochwertiger Content nicht nur gut aussieht, sondern auch Vertrauen aufbaut und Conversions steigert.',
        ],
      },
      {
        heading: 'Content-Strategie: Nicht nur produzieren',
        paragraphs: [
          'Content ohne Strategie ist verschwendetes Budget. Wir denken in Content-Serien, nicht in einzelnen Posts. Ein Drehtag kann 10+ Reels produzieren, die über Wochen verteilt werden. Das ist effizient und sorgt für konsistente Präsenz.',
          'Für die Lackmann Gruppe (lackmangruppe.de) produzieren wir regelmäßig Content — vom Formentor-Shoot bis zu Kunden-Stimmen-Videos. Jedes Stück Content hat einen Zweck: Marke stärken, Vertrauen aufbauen, Reichweite generieren.',
        ],
      },
    ],
    faqs: [
      { question: 'Was kostet Content Creation in Wuppertal?', answer: 'Reels ab 300€, Imagefilme ab 1.500€, Content-Pakete mit 10+ Videos pro Monat nach Paket. Drehtag-Pakete ab 1.000€. Express-Service (24h) gegen Aufpreis.' },
      { question: 'Kommt ihr zu uns oder drehen wir im Studio?', answer: 'Beides. Wir kommen zu deiner Location (Reisekosten innerhalb NRW inklusive). Für Studio-Shoots haben wir Räumlichkeiten in Wuppertal. Für Produktfotografie haben wir ein eigenes Studio-Setup.' },
      { question: 'Wie schnell liefert ihr den Content?', answer: 'Reels innerhalb 48h nach Drehtag. Imagefilme innerhalb 5-7 Tagen. Großprojekte nach Absprache mit Milestones. Express-Service (24h) auf Anfrage möglich.' },
      { question: 'Bekomme ich das Rohmaterial?', answer: 'Ja, auf Wunsch liefern wir alle Raw-Files. Du hast volle Rechte an allen produzierten Inhalten. Keine versteckten Lizenzgebühren oder Nutzungsbeschränkungen.' },
      { question: 'In welcher Qualität liefert ihr?', answer: '4K für Imagefilme und Produktvideos. 1080p für Reels und Social Media Content. Web-optimiert (WebM/MP4) und Print-ready. Alle Formate: vertikal (9:16), horizontal (16:9), quadratisch (1:1).' },
      { question: 'Macht ihr auch Drohnen-Aufnahmen?', answer: 'Ja, wir haben Drohnen-Kompetenz und die entsprechenden Genehmigungen. Drohnen-Aufnahmen eignen sich für Immobilien, Events, Landschaften und Unternehmensgelände.' },
      { question: 'Könnt ihr Musikrechte klären?', answer: 'Ja. Wir nutzen lizenzfreie Musik (Epidemic Sound, Artlist) oder klären GEMA-Rechte für kommerzielle Nutzung. Du bekommst Content, das du rechtssicher überall veröffentlichen kannst.' },
      { question: 'Produziert TnT Studio für lackmangruppe.de?', answer: 'Ja. Wir produzieren regelmäßig Content für die Lackmann Gruppe — Reels, Imagefilme, Produktvideos. Vom Formentor-Shoot bis zu Kunden-Stimmen-Videos. Schau dir die Referenzen auf unserer Startseite an.' },
      { question: 'Was ist ein Content-Paket?', answer: 'Ein Content-Paket beinhaltet eine feste Anzahl Videos pro Monat (z.B. 10 Reels + 2 Imagefilme) zu einem monatlichen Preis. Effizienter als Einzelbuchungen und sorgt für konsistente Social-Media-Präsenz.' },
      { question: 'Bietet ihr auch Fotografie an?', answer: 'Ja. Wir bieten Produktfotografie, Eventfotografie und Corporate-Fotografie. Mit professionellem Studio-Setup und Retusche. Fotografie und Video aus einer Hand — konsistente Bildsprache.' },
    ],
  },
  {
    slug: 'produktfotografie-wuppertal-shop-social-media',
    title: 'Produktfotografie in Wuppertal: Für Shop, Social Media & Print',
    excerpt: 'Schlechte Produktfotos kosten dich Kunden. Gute Produktfotos verkaufen. Hier ist, was gute Produktfotografie ausmacht und wie wir in Wuppertal produzieren.',
    date: '2025-06-12',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'Content Creation',
    emoji: '📷',
    sections: [
      {
        heading: 'Warum Produktfotografie entscheidend ist',
        paragraphs: [
          'Produktfotografie ist der wichtigste Conversion-Faktor im E-Commerce. Studien zeigen: 75% der Online-Shopper entscheiden sich basierend auf Produktfotos. Schlechte Fotos = keine Verkäufe. Gute Fotos = höhere Conversion Rate, weniger Retouren, stärkere Marke.',
          'Bei TnT Studio produzieren wir Produktfotografie in Wuppertal — im Studio und on Location. White-Background-Shoots für E-Commerce, Lifestyle-Shoots für Social Media, Creative-Shoots für Kampagnen. Alles mit professionellem Equipment und Retusche.',
        ],
      },
      {
        heading: 'White Background vs. Lifestyle',
        paragraphs: [
          'White-Background-Fotos sind Standard für E-Commerce: Produkt auf weißem Hintergrund, gut beleuchtet, alle Details sichtbar. Amazon, Zalando und alle großen Plattformen verlangen dieses Format. Es ist die Basis — jedes Produkt braucht mindestens ein gutes White-Background-Foto.',
          'Lifestyle-Fotos zeigen das Produkt in Aktion: ein Auto auf der Straße, Kleidung am Model, Möbel im Raum. Lifestyle-Fotos emotionalisieren und sind perfekt für Social Media und Marketing-Kampagnen. Die Kombination aus White-Background (Shop) und Lifestyle (Social Media) ist optimal.',
        ],
      },
      {
        heading: 'Was gute Produktfotografie ausmacht',
        paragraphs: [
          'Gute Produktfotografie ist mehr als "ein Foto vom Produkt". Hier sind die Kriterien:',
        ],
        list: [
          'Beleuchtung: Professionelle Studio-Blitzanlagen, kein Aufblitzen, keine Schatten',
          'Schärfe: Produkt komplett scharf, Details erkennbar, keine Unschärfe',
          'Farbtreue: Farben müssen exakt stimmen — sonst gibt es Retouren',
          'Hintergrund: Sauberer Hintergrund, keine Ablenkung vom Produkt',
          'Perspektive: Mehrere Winkel (Front, Seite, Detail, Verwendung)',
          'Konsistenz: Alle Produktfotos einer Serie müssen denselben Stil haben',
          'Retusche: Staub, Kratzer und Unreinheiten entfernen — aber nicht übertreiben',
        ],
      },
      {
        heading: 'Unser Studio-Setup',
        paragraphs: [
          'Wir fotografieren mit professionellen Kameras (Vollformat-Sensor), Studio-Blitzanlagen, Softboxen und Makro-Objektiven für Detailaufnahmen. Für White-Background nutzen wir eine Lightbox oder einen Infinity-Tisch. Für Lifestyle-Shoots kommen zu dir oder an eine Location.',
          'Post-Produktion: Retusche in Photoshop, Color-Correction in Lightroom. Wir liefern Web-optimiert (WebP, JPEG) und Print-ready (TIFF, PNG). Alle Formate: quadratisch (1:1), horizontal (16:9), vertikal (4:5 für Instagram).',
        ],
      },
    ],
    faqs: [
      { question: 'Was kostet Produktfotografie in Wuppertal?', answer: 'White-Background-Fotos ab 30€ pro Produkt. Lifestyle-Shoots ab 50€ pro Produkt. Content-Pakete mit 20+ Produkten günstiger. Drehtag-Pakete ab 800€. Retusche inklusive.' },
      { question: 'Wie viele Fotos pro Produkt?', answer: 'Empfehlung: 5-8 Fotos pro Produkt (Front, Seite, Rückseite, Detail, Verwendungsszene). Amazon verlangt mindestens 1 White-Background-Foto. Mehr Fotos = höhere Conversion Rate.' },
      { question: 'White-Background oder Lifestyle?', answer: 'Beides. White-Background für Shop und Plattformen (Amazon, Zalando). Lifestyle für Social Media und Marketing. Die Kombination ist optimal — Basis für Shop, Emotion für Social.' },
      { question: 'Kommt ihr zu uns oder fotografieren wir im Studio?', answer: 'Beides. White-Background-Shoots im Studio in Wuppertal. Lifestyle-Shoots on Location bei dir. Für große Produkte (Möbel, Autos) kommen wir zu dir.' },
      { question: 'Wie schnell liefert ihr die Fotos?', answer: 'White-Background-Fotos innerhalb 48h. Lifestyle-Shoots innerhalb 3-5 Tagen. Retusche inklusive. Express-Service (24h) auf Anfrage.' },
      { question: 'Bekomme ich die Raw-Files?', answer: 'Ja, auf Wunsch. Du hast volle Rechte an allen Fotos. Keine versteckten Lizenzgebühren. Du kannst die Fotos überall nutzen — Shop, Social Media, Print, Ads.' },
      { question: 'Könnt ihr auch 360°-Fotos produzieren?', answer: 'Ja, auf Anfrage. 360°-Produktfotografie für Premium-Produkte. Der Kunde kann das Produkt aus allen Winkeln betrachten. Erhöht die Conversion Rate um 20-40%.' },
      { question: 'Was ist Farbtreue und warum ist sie wichtig?', answer: 'Farbtreue bedeutet, dass die Farben auf dem Foto exakt dem realen Produkt entsprechen. Abweichungen führen zu Retouren ("Farbton passt nicht"). Wir kalibrieren unsere Monitore und nutzen Color-Management für exakte Farben.' },
      { question: 'Bietet TnT Studio auch Modefotografie an?', answer: 'Ja. Wir fotografieren Mode am Model und als Flatlay. Mit professionellem Styling, Beleuchtung und Retusche. Für Brautmoden, Streetwear, Corporate Fashion — alles aus einer Hand.' },
      { question: 'Könnt ihr Produktvideos produzieren?', answer: 'Ja. Produktvideos sind die logische Ergänzung zur Fotografie. 360°-Drehs, Detail-Videos, Verwendungsvideos. Foto und Video aus einer Hand sorgt für konsistente Bildsprache.' },
    ],
  },
  {
    slug: 'branding-corporate-identity-marke-aufbauen',
    title: 'Branding & Corporate Identity: Eine Marke aufbauen, die bleibt',
    excerpt: 'Ein Logo ist keine Marke. Eine Marke ist ein Gefühl. Hier ist, wie wir Corporate Identity aufbauen — vom Logo bis zur Markenstimme.',
    date: '2025-06-10',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'Branding',
    emoji: '🎨',
    sections: [
      {
        heading: 'Was ist Branding?',
        paragraphs: [
          'Branding ist mehr als ein Logo. Branding ist die Gesamtheit aller Eindrücke, die ein Kunde von deinem Unternehmen hat — visuell, verbal, emotional. Corporate Identity (CI) ist das Werkzeug, um diese Eindrücke konsistent zu steuern.',
          'Eine starke Marke erkennt man daran, dass man sie ohne Logo identifizieren kann. Apple ohne Apple-Logo? Erkennbar am Design, an der Sprache, am Gefühl. Nike ohne Swoosh? Erkennbar an der Botschaft. Das ist Branding — Identität schaffen, die über das Logo hinausgeht.',
        ],
      },
      {
        heading: 'Bestandteile einer Corporate Identity',
        paragraphs: [
          'Eine vollständige Corporate Identity besteht aus mehreren Ebenen:',
        ],
        list: [
          'Logo: Das visuelle Herzstück. Einfach, erkennbar, skalierbar, zeitlos.',
          'Farbsystem: 2-3 Hauptfarben, die die Marke definieren. Konsistent überall.',
          'Typografie: 1-2 Schriftarten, die die Markenstimme tragen.',
          'Bildsprache: Fotografie-Stil, Illustrations-Stil, Grafik-Stil.',
          'Tonalität: Wie spricht die Marke? Formell oder locker? Technisch oder emotional?',
          'Markenwerte: Wofür steht die Marke? Was sind die Kernwerte?',
          'Markenstory: Woher kommt die Marke? Wohin will sie? Warum existiert sie?',
        ],
      },
      {
        heading: 'Unser Branding-Prozess',
        paragraphs: [
          'Wir arbeiten in vier Phasen: Discovery, Konzept, Design, Umsetzung. In der Discovery analysieren wir Markt, Wettbewerb und Zielgruppe. Im Konzept definieren wir Markenwerte, Tonalität und Positionierung. Im Design entwickeln wir Logo, Farbsystem, Typografie und Bildsprache. In der Umsetzung erstellen wir Brand Guidelines und rollen die CI aus.',
          'Dauer: 4-8 Wochen für ein komplettes Branding. Ergebnis: Brand Guidelines (PDF), Logo-Dateien (alle Formate), Farbsystem, Typografie, Templates (Briefpapier, Visitenkarte, Social Media). Alles, was du brauchst, um die Marke konsistent zu führen.',
        ],
      },
      {
        heading: 'Branding-Beispiele von TnT Studio',
        paragraphs: [
          'Für Esteves Recruiting (esteves-recruiting.com) haben wir ein komplettes Branding entwickelt: Logo, Farbsystem (Dunkelblau und Gold), Typografie, Bildsprache und Tonalität. Das Branding strahlt Professionalität und Vertrauen aus — passend für eine Recruiting-Agentur im Logistik- und Gesundheitssektor.',
          'Für die Lackmann Gruppe (lackmangruppe.de) produzieren wir Content im Marken-Stil: konsistente Bildsprache, Farbsystem und Tonalität. Jedes Reel, jeder Post, jedes Video folgt der Corporate Identity. Das stärkt die Marke bei jedem Touchpoint.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist der Unterschied zwischen Branding und Corporate Identity?', answer: 'Branding ist der strategische Prozess, eine Marke aufzubauen. Corporate Identity (CI) ist das visuelle und verbale Werkzeug dafür — Logo, Farben, Schriften, Tonalität. Branding ist die Strategie, CI ist die Umsetzung.' },
      { question: 'Was kostet ein Branding?', answer: 'Ein komplettes Branding (Logo, Farbsystem, Typografie, Bildsprache, Brand Guidelines) startet bei 2.500-5.000€. Premium-Branding mit umfassender Strategie: 5.000-15.000€. TnT Studio bietet Branding als Teil des Full-Service-Pakets an.' },
      { question: 'Wie lange dauert ein Branding-Prozess?', answer: '4-8 Wochen für ein komplettes Branding. Discovery (1 Woche), Konzept (1-2 Wochen), Design (2-3 Wochen), Umsetzung (1-2 Wochen). Express-Branding in 2 Wochen möglich, aber nicht empfohlen.' },
      { question: 'Brauche ich Brand Guidelines?', answer: 'Ja, zwingend. Brand Guidelines (auch Style Guide genannt) dokumentieren, wie die Marke angewendet wird — Logo-Regeln, Farben, Schriften, Abstände. Ohne Guidelines driftet die Marke auseinander.' },
      { question: 'Kann ich mein bestehendes Logo behalten?', answer: 'Ja, wenn es gut ist. Wir analysieren dein bestehendes Branding und beraten ehrlich: behalten, optimieren oder neu machen. Manchmal reicht ein Refresh (Logo modernisieren), manchmal ist ein kompletter Neuanfang besser.' },
      { question: 'Was ist eine Markenstimme (Tonalität)?', answer: 'Die Tonalität definiert, wie deine Marke spricht. Formell oder locker? Technisch oder emotional? Direkt oder höflich? TnT Studio spricht direkt, kompetent, kein Bullshit. Das ist unsere Tonalität.' },
      { question: 'Könnt ihr mein Branding auf Social Media übertragen?', answer: 'Ja. Wir erstellen Social Media Templates, die deine CI konsistent anwenden. Jeder Post folgt dem Farbsystem, der Typografie und der Bildsprache. Konsistenz über alle Touchpoints stärkt die Marke.' },
      { question: 'Was ist ein Logo-Refresh?', answer: 'Ein Logo-Refresh modernisiert ein bestehendes Logo, ohne die Marke zu verändern. Feinjustierung von Proportionen, Farben, Schriften. Ein Rebrand hingegen ist ein kompletter Neuanfang. Wir beraten, was für dich richtig ist.' },
      { question: 'Brauche ich ein professionelles Branding als KMU?', answer: 'Ja. Ein konsistentes Branding unterscheidet dich vom Wettbewerb, schafft Vertrauen und erhöht den wahrgenommenen Wert. KMU mit professionellem Branding können höhere Preise durchsetzen als KMU ohne.' },
      { question: 'Könnt ihr Branding für esteves-recruiting.com übernehmen?', answer: 'Wir haben das Branding für Esteves Recruiting bereits entwickelt. Logo, Farbsystem, Typografie, Bildsprache — alles aus dem TnT Studio. Schau dir esteves-recruiting.com an, um das Ergebnis zu sehen.' },
    ],
  },
  {
    slug: 'copywriting-texte-die-verkaufen',
    title: 'Copywriting: Texte, die verkaufen (und nicht langweilen)',
    excerpt: 'Worte sind das mächtigste Werkzeug im Marketing. Hier ist, wie wir Texte schreiben, die konvertieren — für Websites, Social Media und Ads.',
    date: '2025-06-08',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'Copywriting',
    emoji: '✍️',
    sections: [
      {
        heading: 'Warum Copywriting entscheidend ist',
        paragraphs: [
          'Design zieht Aufmerksamkeit. Worte machen den Verkauf. Du kannst die schönste Website haben — wenn die Texte schlecht sind, konvertiert sie nicht. Copywriting ist die Kunst, Worte so zu arrangieren, dass sie den Leser zur Aktion bewegen.',
          'Gutes Copywriting ist unsichtbar. Der Leser fühlt sich verstanden, nicht verkauft. Es ist klar, präzise und menschlich. Keine Floskeln, kein Marketing-Bla, keine leeren Versprechen. Echte Kommunikation, die resoniert.',
        ],
      },
      {
        heading: 'Die Prinzipien guten Copywritings',
        paragraphs: [
          'Hier sind die Prinzipien, nach denen wir bei TnT Studio schreiben:',
        ],
        list: [
          'Klarheit vor Kreativität: Der Leser muss verstehen, was du anbietest — sofort.',
          'Nutzen vor Features: "Schnelle Website" (Nutzen) statt "React mit Vite" (Feature).',
          'Aktiv statt Passiv: "Wir bauen deine Website" statt "Ihre Website wird gebaut".',
          'Kurz vor Lang: Jedes Wort muss verdienen, da zu sein. Streiche alles Unnötige.',
          'Du-Form: Sprich den Leser direkt an. "Du" schafft Nähe. "Sie" schafft Distanz.',
          'Konkret vor Abstrakt: "3.500€" statt "fairer Preis". "48 Stunden" statt "schnell".',
          'Emotion + Logik: Erst fühlen, dann rationalisieren. Beides braucht der Kunde.',
        ],
      },
      {
        heading: 'Copywriting für verschiedene Kanäle',
        paragraphs: [
          'Copywriting ändert sich je nach Kanal. Website-Texte sind anders als Social Media-Posts, die anders sind als Ad-Copy. Hier sind die Unterschiede:',
          'Website: Ausführlich, SEO-optimiert, strukturirt mit Überschriften. 300-2.000 Wörter pro Seite. Social Media: Kurz, knackig, emotional. 50-150 Wörter pro Post. Ads: Extrem komprimiert. 10-30 Wörter, die auf den Punkt bringen. E-Mail: Persönlich, konversationell. 100-300 Wörter. Blog Posts: Ausführlich, wertvoll, SEO-optimiert. 800-2.000 Wörter.',
        ],
      },
      {
        heading: 'SEO-Copywriting',
        paragraphs: [
          'SEO-Copywriting verbindet zwei Ziele: für Google ranken und für Menschen überzeugen. Der häufigste Fehler: Keywords stopfen, bis der Text unlesbar ist. Das funktioniert 2025 nicht mehr — Google erkennt Keyword-Stuffing und bestraft es.',
          'Richtiges SEO-Copywriting: Keywords natürlich in Überschriften, erstem Absatz und Meta-Description integrieren. Synonyme und verwandte Begriffe verwenden (LSI Keywords). Content, der eine Frage besser beantwortet als jeder andere Text auf Seite 1. Länge, die dem Thema gerecht wird — nicht künstlich aufgebläht.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Copywriting?', answer: 'Copywriting ist das Schreiben von Texten mit dem Ziel, den Leser zur Aktion zu bewegen — Kauf, Kontakt, Anmeldung. Es unterscheidet sich von Journalismus (informieren) und Literatur (unterhalten) durch das klare Verkaufsziel.' },
      { question: 'Was kostet Copywriting?', answer: 'Website-Texte ab 50€ pro Seite. Blog-Posts ab 100€ pro Post. Social Media-Copy ab 30€ pro Post. Ad-Copy ab 50€ pro Kampagne. Pakete mit monatlichem Content günstiger.' },
      { question: 'Kann ich meine Texte selbst schreiben?', answer: 'Ja, aber... die meisten Unternehmer schreiben zu sehr aus ihrer Perspektive, nicht aus der des Kunden. Gutes Copywriting stellt den Kunden in den Mittelpunkt, nicht das Unternehmen. Ein professioneller Copywriter spart Zeit und verbessert die Conversion.' },
      { question: 'Was ist SEO-Copywriting?', answer: 'SEO-Copywriting verbindet Keyword-Optimierung mit lesenswerten Texten. Keywords natürlich integrieren, Synonyme verwenden, Fragen beantworten. Ziel: bei Google ranken UND Menschen überzeugen. Kein Keyword-Stuffing.' },
      { question: 'Du oder Sie?', answer: 'Für die meisten modernen Marken: Du. Es schafft Nähe, ist direkt und kommt authentisch. Für konservative Branchen (Recht, Banking, Medizin): Sie. TnT Studio verwendet Du — weil wir direkt und nahbar sind.' },
      { question: 'Wie lang sollten Website-Texte sein?', answer: 'Startseite: 300-500 Wörter. Service-Seiten: 500-1.000 Wörter. Blog-Posts: 800-2.000 Wörter. Über uns: 300-500 Wörter. Länge muss dem Thema gerecht werden — nicht künstlich aufgebläht für SEO.' },
      { question: 'Schreibt TnT Studio Texte für uns?', answer: 'Ja. Wir schreiben Website-Texte, Blog-Posts, Social Media-Copy und Ad-Copy. Im TnT-Stil: direkt, kompetent, kein Bullshit. Deutsch und Englisch.' },
      { question: 'Was ist der Unterschied zwischen Features und Nutzen?', answer: 'Features sind Eigenschaften ("React mit Vite"). Nutzen ist, was der Kunde davon hat ("Schnelle Website, die Besucher nicht abschreckt"). Gutes Copywriting führt immer mit dem Nutzen, nicht mit Features.' },
      { question: 'Wie verbessere ich meine Conversion Rate mit Texten?', answer: 'Klare Value Proposition (was bekommst du?), starker Call-to-Action (was sollst du tun?), soziale Beweise (Testimonials, Referenzen), Dringlichkeit (begrenztes Angebot) und einfache Sprache. Keine Hürden, keine Ablenkung.' },
      { question: 'Bietet ihr Copywriting für lackmangruppe.de an?', answer: 'Wir produzieren regelmäßig Content für die Lackmann Gruppe — Social Media-Copy, Video-Skripte, Werbetexte. Alles im Marken-Stil: professionell, automotive, emotional. Schau dir lackmangruppe.de an.' },
    ],
  },
  {
    slug: 'seo-grundlagen-2025-anfaenger-guide',
    title: 'SEO Grundlagen 2025: Der komplette Anfänger-Guide',
    excerpt: 'Was ist SEO? Wie funktioniert Google? Und wie kommst du auf Seite 1? Hier ist die einfache Erklärung — ohne Fachchinesisch, ohne Bullshit.',
    date: '2025-06-05',
    author: 'Tiago Esteves',
    readingTime: '10 min',
    category: 'SEO',
    emoji: '🔍',
    sections: [
      {
        heading: 'Was ist SEO?',
        paragraphs: [
          'SEO (Search Engine Optimization) ist die Optimierung deiner Website, um in den Suchergebnissen von Google und anderen Suchmaschinen höher zu ranken. Höheres Ranking = mehr Traffic = mehr Kunden. SEO ist kein Geheimwissen — es ist systematische Arbeit an drei Säulen: Technik, Content und Autorität.',
          'Warum SEO wichtig ist: 68% aller Online-Erfahrungen beginnen mit einer Suchmaschine. 75% der Nutzer klicken nur auf Ergebnisse der ersten Seite. Wer nicht auf Seite 1 ist, existiert praktisch nicht. Und im Gegensatz zu Paid Ads (die aufhören, wenn du nicht mehr zahlst) funktioniert SEO langfristig — einmal ranken, dauerhaft Traffic.',
        ],
      },
      {
        heading: 'Wie Google funktioniert',
        paragraphs: [
          'Google durchsucht das Internet in drei Schritten: Crawling (Google-Bot besucht deine Website), Indexing (Google speichert deine Seiten in seiner Datenbank) und Ranking (Google sortiert die Ergebnisse nach Relevanz). Deine Aufgabe als Website-Betreiber: es Google so einfach wie möglich machen, deine Website zu crawlen, zu indexieren und als relevant einzustufen.',
          'Google bewertet über 200 Faktoren für das Ranking. Die wichtigsten: Content-Qualität (ist dein Content besser als der der Konkurrenz?), Backlinks (wie viele andere Websites verlinken auf dich?), technische Performance (wie schnell und fehlerfrei ist deine Website?) und User Experience (wie verhalten sich Nutzer auf deiner Website?).',
        ],
      },
      {
        heading: 'Die drei Säulen der SEO',
        paragraphs: [
          'SEO besteht aus drei Säulen, die zusammenwirken:',
        ],
        list: [
          'Technisches SEO: Schnelle Ladezeiten, mobile-optimiert, SSL, Sitemap, robots.txt, strukturierte Daten',
          'On-Page SEO: Keywords, Meta-Tags, Überschriften-Struktur, Content-Qualität, interne Verlinkung',
          'Off-Page SEO: Backlinks (Links von anderen Websites auf deine), Social Signals, Markenbekanntheit',
        ],
      },
      {
        heading: 'On-Page SEO: Was du auf deiner Website machst',
        paragraphs: [
          'On-Page SEO ist alles, was du auf deiner Website kontrollieren kannst. Die wichtigsten Elemente: Title-Tag (der wichtigste SEO-Tag, 50-60 Zeichen), Meta-Description (155-160 Zeichen, beschreibt die Seite), H1-Überschrift (eine pro Seite, enthält Haupt-Keyword), H2/H3-Überschriften (strukturieren den Content), URL-Struktur (kurz, lesbar, mit Keyword), Alt-Texte für Bilder und interne Verlinkung.',
          'Content ist König — aber nur guter Content. Google bewertet: Relevanz (beantwortet der Content die Suchanfrage?), Tiefe (wie ausführlich ist der Content?), Einzigartigkeit (bietet der Content etwas, das andere nicht haben?) und Aktualität (ist der Content aktuell?).',
        ],
      },
      {
        heading: 'Off-Page SEO: Backlinks',
        paragraphs: [
          'Backlinks sind Links von anderen Websites auf deine Website. Sie sind wie "Empfehlungen" — je mehr qualitativ hochwertige Websites auf dich verlinken, desto vertrauenswürdiger bist du für Google. Ein Backlink von einer hochautoritären Website (z.B. Spiegel.de) ist mehr wert als 100 Backlinks von unbekannten Blogs.',
          'Wie bekommst du Backlinks? Erstelle Content, der so gut ist, dass andere darauf verlinken wollen. Veröffentliche Pressemitteilungen. Kooperiere mit anderen Unternehmen. Schreibe Gastartikel. Verzeichniseinträge (Yelp, Branchenbuch). TnT Studio hat für esteves-recruiting.com Backlinks durch Kooperationen und Content-Marketing aufgebaut.',
        ],
      },
      {
        heading: 'Local SEO: Für lokale Unternehmen entscheidend',
        paragraphs: [
          'Wenn du ein lokales Unternehmen in Wuppertal bist, ist Local SEO wichtiger als allgemeines SEO. Local SEO optimiert deine Sichtbarkeit in lokalen Suchergebnissen ("Webdesign Wuppertal", "Restaurant Wuppertal"). Die wichtigsten Faktoren: Google Business Profile, NAP-Konsistenz, lokale Keywords auf der Website und Google-Bewertungen.',
          'Lies dazu auch unseren ausführlichen Guide: Local SEO Wuppertal — dort gehen wir tief ins Detail.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist SEO?', answer: 'SEO (Search Engine Optimization) ist die Optimierung deiner Website, um in Google-Suchergebnissen höher zu ranken. Höheres Ranking = mehr Traffic = mehr Kunden. SEO besteht aus drei Säulen: Technik, Content und Autorität (Backlinks).' },
      { question: 'Wie lange dauert SEO?', answer: 'Erste Verbesserungen: 4-8 Wochen. Sichtbare Ranking-Steigerungen: 3-6 Monate. Top-Rankings: 6-12 Monate. SEO ist ein Marathon, kein Sprint. Aber einmal etabliert, bringt es dauerhaft Traffic — ohne laufende Werbekosten.' },
      { question: 'Was kostet SEO?', answer: 'SEO-Betreuung startet bei 500-1.500€/Monat. Einmalige SEO-Audits ab 500€. Komplette SEO-Strategien mit Content-Produktion: 1.500-3.000€/Monat. Die Investition amortisiert sich durch organischen Traffic, der keine Klick-Kosten verursacht.' },
      { question: 'Kann ich SEO selbst machen?', answer: 'Grundlagen ja (Keywords, Meta-Tags, Content). Fortgeschrittenes SEO (strukturierte Daten, Backlink-Strategie, Core Web Vitals) braucht Expertise. TnT Studio bietet SEO-Schulungen und Full-Service-Betreuung an.' },
      { question: 'Was sind Keywords?', answer: 'Keywords sind die Suchbegriffe, die Menschen bei Google eingeben. Ziel: herausfinden, wonach deine Zielgruppe sucht, und diese Begriffe in deinen Content integrieren. Tools: Google Keyword Planner, Ahrefs, Sistrix.' },
      { question: 'Was ist der Unterschied zwischen SEO und SEA?', answer: 'SEO (Search Engine Optimization) optimiert für organische Suchergebnisse (kostenlos, aber zeitaufwendig). SEA (Search Engine Advertising) sind bezahlte Anzeigen (Google Ads — sofort sichtbar, aber kosten pro Klick). Beides ergänzt sich.' },
      { question: 'Was sind Backlinks?', answer: 'Backlinks sind Links von anderen Websites auf deine Website. Sie sind wie Empfehlungen. Je mehr qualitativ hochwertige Websites auf dich verlinken, desto vertrauenswürdiger bist du für Google. Ein Backlink von Spiegel.de ist mehr wert als 100 von unbekannten Blogs.' },
      { question: 'Was ist eine Sitemap?', answer: 'Eine Sitemap (sitemap.xml) ist eine Liste aller Seiten deiner Website. Sie hilft Google, alle Seiten zu finden und zu indexieren. Bei TnT Studio ist jede Website mit Sitemap ausgestattet — automatisch aktualisiert bei neuen Inhalten.' },
      { question: 'Was sind strukturierte Daten (Schema Markup)?', answer: 'Strukturierte Daten (Schema.org) sind Code, der Google erklärt, was dein Content bedeutet. FAQPage Schema zeigt Google, dass du FAQs hast. LocalBusiness Schema zeigt, dass du ein lokales Unternehmen bist. Das verbessert die Darstellung in Suchergebnissen (Rich Snippets).' },
      { question: 'Was ist der wichtigste SEO-Faktor 2025?', answer: 'Content-Qualität. Google will den besten Content auf Seite 1. Wenn dein Content die Suchanfrage besser beantwortet als jeder andere, rankst du. Technik und Backlinks sind wichtig, aber Content ist der entscheidende Faktor.' },
    ],
  },
  {
    slug: 'keyword-recherche-so-findest-du-die-richtigen-keywords',
    title: 'Keyword-Recherche: So findest du die Keywords, die Kunden bringen',
    excerpt: 'Die falschen Keywords bringen Traffic, aber keine Kunden. Die richtigen Keywords bringen beides. Hier ist unsere Methode für effektive Keyword-Recherche.',
    date: '2025-06-03',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'SEO',
    emoji: '🔑',
    sections: [
      {
        heading: 'Warum Keyword-Recherche das Fundament ist',
        paragraphs: [
          'Keyword-Recherche ist der erste Schritt jeder SEO-Strategie. Ohne die richtigen Keywords optimierst du blind — und wunderst dich, warum der Traffic nicht kommt oder nicht konvertiert. Keyword-Recherche beantwortet die Frage: Wonach sucht meine Zielgruppe? Und wie suche ich danach?',
          'Der häufigste Fehler: Keywords wählen, weil sie hohes Suchvolumen haben. Aber hohes Suchvolumen bedeutet oft hohe Konkurrenz und geringe Conversion. Besser: Keywords mit mittlerem Suchvolumen, geringer Konkurrenz und hoher Kaufabsicht. "Webdesign Agentur Wuppertal" (spezifisch, lokal, Kaufabsicht) ist mehr wert als "Webdesign" (breit, global, unklar).' ,
        ],
      },
      {
        heading: 'Keyword-Typen',
        paragraphs: [
          'Keywords lassen sich in drei Kategorien einteilen:',
        ],
        list: [
          'Informational: "Was ist Webdesign" — Nutzer will Informationen. Gut für Blog Posts.',
          'Navigational: "TnT Studio Website" — Nutzer sucht eine spezifische Website. Gut für Marken-Keywords.',
          'Transactional: "Webdesign Agentur Wuppertal" — Nutzer will kaufen. Gut für Service-Seiten.',
        ],
      },
      {
        heading: 'Unsere Keyword-Recherche-Methode',
        paragraphs: [
          'Wir arbeiten in fünf Schritten: 1. Brainstorming: Was würden unsere Kunden suchen? 2. Tool-Recherche: Google Keyword Planner, Ahrefs, Sistrix für Suchvolumen und Konkurrenz. 3. SERP-Analyse: Was rankt aktuell auf Seite 1? 4. Long-Tail-Keywords: Spezifische, längere Keywords mit geringer Konkurrenz. 5. Clustering: Keywords nach Themen gruppieren und Content-Plan erstellen.',
          'Für TnT Studio haben wir Keywords wie "Agentur für Webdesign Wuppertal", "Medienagentur Wuppertal", "responsive Webdesign Agentur", "Social Media Marketing Wuppertal" identifiziert — lokale, transaktionale Keywords mit klarer Kaufabsicht.',
        ],
      },
      {
        heading: 'Long-Tail Keywords: Der versteckte Schatz',
        paragraphs: [
          'Long-Tail Keywords sind längere, spezifischere Suchbegriffe (z.B. "Webdesign Agentur Wuppertal Preise" statt "Webdesign"). Sie haben weniger Suchvolumen, aber: geringere Konkurrenz, höhere Conversion Rate und klarere Kaufabsicht. Wer auf Long-Tail Keywords optimiert, rankt schneller und konvertiert besser.',
          'Beispiel: "Webdesign" hat 10.000 Suchanfragen/Monat, aber 90% suchen Informationen, nicht eine Agentur. "Webdesign Agentur Wuppertal" hat 200 Suchanfragen/Monat, aber 80% suchen eine Agentur. Das ist der Unterschied zwischen Traffic und Kunden.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Keyword-Recherche?', answer: 'Keyword-Recherche ist der Prozess, herauszufinden, wonach deine Zielgruppe bei Google sucht. Ziel: die Keywords finden, die Traffic UND Kunden bringen. Es ist der erste Schritt jeder SEO-Strategie.' },
      { question: 'Welche Tools für Keyword-Recherche?', answer: 'Google Keyword Planner (kostenlos), Google Search Console (kostenlos, zeigt deine aktuellen Keywords), Ahrefs (kostenpflichtig, umfassend), Sistrix (kostenpflichtig, deutsch). Für den Anfang reicht Google Keyword Planner + Search Console.' },
      { question: 'Was sind Long-Tail Keywords?', answer: 'Long-Tail Keywords sind längere, spezifische Suchbegriffe (z.B. "Webdesign Agentur Wuppertal Preise" statt "Webdesign"). Weniger Suchvolumen, aber geringere Konkurrenz und höhere Conversion Rate. Der versteckte Schatz der SEO.' },
      { question: 'Wie viele Keywords sollte ich optimieren?', answer: 'Pro Seite 1 Haupt-Keyword + 3-5 sekundäre Keywords. Nicht mehr — sonst verwässerst du den Fokus. Lieber 10 Seiten mit je 1 klaren Keyword als 1 Seite mit 10 Keywords. Qualität vor Quantität.' },
      { question: 'Was ist Suchvolumen?', answer: 'Suchvolumen = wie oft ein Keyword pro Monat bei Google gesucht wird. Hohes Suchvolumen = viel Traffic-Potenzial, aber oft hohe Konkurrenz. Niedriges Suchvolumen = weniger Traffic, aber oft leichter zu ranken.' },
      { question: 'Was ist Keyword Difficulty?', answer: 'Keyword Difficulty (KD) ist ein Metrik, die angibt, wie schwer es ist, für ein Keyword zu ranken. KD 0-30: relativ leicht. KD 30-60: mittel. KD 60+: schwer. Für neue Websites: fangt mit KD < 30 an.' },
      { question: 'Sollte ich auf lokale Keywords optimieren?', answer: 'Ja, wenn du lokale Kunden suchst. "Webdesign Wuppertal" hat weniger Konkurrenz als "Webdesign" und bringt genau die Kunden, die dich suchen. Local SEO ist für lokale Unternehmen der effektivste SEO-Ansatz.' },
      { question: 'Wie oft sollte ich Keywords in meinem Text verwenden?', answer: 'Natürlich. Das Keyword im Title-Tag, in der H1, im ersten Absatz und 2-3 mal im Text. Kein Keyword-Stuffing — Google bestraft das. Der Text muss natürlich lesbar bleiben.' },
      { question: 'Was ist Keyword-Clustering?', answer: 'Keyword-Clustering gruppiert verwandte Keywords nach Themen. Statt für jedes Keyword eine separate Seite zu bauen, erstellst du eine umfassende Seite, die mehrere verwandte Keywords abdeckt. Das ist effizienter und besser für SEO.' },
      { question: 'Macht TnT Studio Keyword-Recherche für uns?', answer: 'Ja. Keyword-Recherche ist Teil unserer SEO-Strategie. Wir identifizieren die Keywords, die Traffic UND Kunden bringen, erstellen einen Content-Plan und optimieren deine Website dafür. Für Wuppertal und NRW.' },
    ],
  },
  {
    slug: 'schema-markup-strukturierte-daten-website',
    title: 'Schema Markup: Strukturierte Daten für mehr Sichtbarkeit bei Google',
    excerpt: 'Schema Markup ist der Code, der Google erklärt, was dein Content bedeutet. Es kann deine Klickrate um 30% steigern. Hier ist, wie es funktioniert.',
    date: '2025-05-30',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'SEO',
    emoji: '🏗️',
    sections: [
      {
        heading: 'Was ist Schema Markup?',
        paragraphs: [
          'Schema Markup (strukturierte Daten) ist Code, den du deiner Website hinzufügst, um Suchmaschinen zu erklären, was dein Content bedeutet. Ohne Schema Markup sieht Google nur Text. Mit Schema Markup versteht Google: "Das ist ein FAQ", "Das ist ein lokales Unternehmen", "Das ist ein Artikel", "Das ist ein Produkt mit Preis".',
          'Das Ergebnis: Rich Snippets in den Suchergebnissen. Statt eines einfachen Titels und einer Beschreibung zeigt Google zusätzliche Informationen — Sterne-Bewertungen, Preise, FAQs, Breadcrumbs, Event-Daten. Rich Snippets erhöhen die Klickrate um 20-30%, weil sie in den Suchergebnissen auffallen.',
        ],
      },
      {
        heading: 'Die wichtigsten Schema-Typen',
        paragraphs: [
          'Es gibt über 800 Schema-Typen, aber für die meisten Websites reichen 5-8:',
        ],
        list: [
          'Organization: Wer ist dein Unternehmen? Name, Adresse, Logo, Social Media.',
          'LocalBusiness: Lokales Unternehmen mit Adresse, Öffnungszeiten, Telefon.',
          'FAQPage: Liste von Fragen und Antworten. Zeigt FAQs direkt in Google an.',
          'Article: Blog-Post oder Artikel. Zeigt Autor, Datum, Bild.',
          'BreadcrumbList: Navigationspfad. Zeigt Breadcrumbs in Suchergebnissen.',
          'Service: Dienstleistung mit Beschreibung und Preis.',
          'Product: Produkt mit Preis, Verfügbarkeit, Bewertung.',
          'HowTo: Schritt-für-Schritt-Anleitung. Zeigt Schritte in Google an.',
        ],
      },
      {
        heading: 'Wie man Schema Markup implementiert',
        paragraphs: [
          'Schema Markup wird in JSON-LD-Format implementiert (JavaScript Object Notation for Linked Data). Das ist ein JavaScript-Block im Head oder Body deiner Seite. Google empfiehlt JSON-LD ausdrücklich — es ist die einfachste und fehlerresistenteste Methode.',
          'Bei TnT Studio implementieren wir Schema Markup automatisch in jeder Website. Die Homepage hat Organization und LocalBusiness Schema. Blog-Posts haben Article und FAQPage Schema. Service-Seiten haben Service und FAQPage Schema. Jede Seite hat BreadcrumbList Schema. Das alles automatisch — kein manueller Aufwand.',
        ],
      },
      {
        heading: 'Schema Markup und AI-Suchmaschinen',
        paragraphs: [
          'Schema Markup ist 2025 nicht nur für Google wichtig, sondern auch für AI-Suchmaschinen wie ChatGPT, Perplexity und Gemini. Diese Systeme nutzen strukturierte Daten, um Inhalte zu verstehen und zu zitieren. Wenn deine Website Schema Markup hat, können AI-Systeme deine Inhalte besser extrahieren und in Antworten einbinden.',
          'Das ist ein Aspekt von GEO (Generative Engine Optimization) — der Optimierung für AI-Antworten. Schema Markup ist das Fundament dafür. Ohne strukturierte Daten sind deine Inhalte für AI-Systeme schwerer verständlich.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Schema Markup?', answer: 'Schema Markup (strukturierte Daten) ist Code, der Suchmaschinen erklärt, was dein Content bedeutet. Es ermöglicht Rich Snippets in Google-Suchergebnissen — FAQs, Sterne-Bewertungen, Preise direkt in den Ergebnissen. Klickrate steigt um 20-30%.' },
      { question: 'Was sind Rich Snippets?', answer: 'Rich Snippets sind erweiterte Suchergebnisse, die zusätzliche Informationen zeigen — FAQs, Sterne-Bewertungen, Preise, Breadcrumbs. Sie fallen in den Suchergebnissen auf und erhöhen die Klickrate signifikant.' },
      { question: 'Was ist JSON-LD?', answer: 'JSON-LD (JavaScript Object Notation for Linked Data) ist das von Google empfohlene Format für Schema Markup. Es ist ein JavaScript-Block, der strukturierte Daten definiert. Einfacher zu implementieren und fehlerresistenter als andere Formate.' },
      { question: 'Welche Schema-Typen brauche ich?', answer: 'Organization/LocalBusiness für die Homepage, Article für Blog-Posts, FAQPage für FAQs, Service für Dienstleistungen, BreadcrumbList für Navigation, Product für E-Commerce. 5-8 Typen reichen für die meisten Websites.' },
      { question: 'Wie implementiere ich Schema Markup?', answer: 'JSON-LD-Code im Head oder Body der Seite. Bei TnT Studio ist Schema Markup automatisch in jeder Website inklusive — Organization, LocalBusiness, Article, FAQPage, BreadcrumbList. Kein manueller Aufwand.' },
      { question: 'Hilft Schema Markup bei SEO?', answer: 'Ja. Schema Markup verbessert nicht direkt das Ranking, aber die Darstellung in Suchergebnissen (Rich Snippets). Das erhöht die Klickrate, was indirekt das Ranking verbessert. Außerdem hilft es AI-Suchmaschinen, deine Inhalte zu verstehen.' },
      { question: 'Kann ich Schema Markup selbst hinzufügen?', answer: 'Ja, aber es ist fehleranfällig. Ein Tippfehler im JSON-LD bricht das gesamte Markup. Google bietet den Rich Results Test zur Validierung an. TnT Studio implementiert Schema Markup professionell und testet es.' },
      { question: 'Was ist der Google Rich Results Test?', answer: 'Ein kostenloses Tool von Google, das deine Schema Markup validiert. Zeigt, welche Rich Snippets deine Seite qualifiziert ist und ob es Fehler gibt. URL: search.google.com/test/rich-results' },
      { question: 'Brauche ich Schema Markup für AI-Suchmaschinen?', answer: 'Ja. ChatGPT, Perplexity und Gemini nutzen strukturierte Daten, um Inhalte zu verstehen. Schema Markup hilft diesen Systemen, deine Inhalte zu extrahieren und in Antworten einzubinden. Das ist Teil von GEO (Generative Engine Optimization).' },
      { question: 'Bietet TnT Studio Schema Markup an?', answer: 'Ja, automatisch in jeder Website. Organization, LocalBusiness, Article, FAQPage, BreadcrumbList, Service — alles inklusive. Wir validieren jedes Schema mit dem Google Rich Results Test.' },
    ],
  },
  {
    slug: 'on-page-seo-checkliste-2025',
    title: 'On-Page SEO Checkliste 2025: Jedes Element, das zählt',
    excerpt: 'Title-Tag, Meta-Description, H1, Alt-Texte, interne Verlinkung — hier ist die komplette On-Page SEO Checkliste, die wir für jede Website durchgehen.',
    date: '2025-05-28',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'SEO',
    emoji: '✅',
    sections: [
      {
        heading: 'Was ist On-Page SEO?',
        paragraphs: [
          'On-Page SEO umfasst alle Optimierungen, die du direkt auf deiner Website durchführst — im Gegensatz zu Off-Page SEO (Backlinks) und technischem SEO (Server, Performance). On-Page SEO ist das, was du am direktesten kontrollieren kannst, und es ist die Basis jedes Rankings.',
          'Hier ist unsere komplette On-Page SEO Checkliste, die wir für jede Website bei TnT Studio durchgehen. Punkt für Punkt.',
        ],
      },
      {
        heading: 'Title-Tag',
        paragraphs: [
          'Der Title-Tag ist das wichtigste On-Page SEO-Element. Er erscheint als blauer Link in Google-Suchergebnissen und als Browser-Tab. Optimale Länge: 50-60 Zeichen (mehr wird abgeschnitten). Format: Haupt-Keyword | Markenname. Beispiel: "Webdesign Agentur Wuppertal | TnT Studio".',
          'Regeln: Haupt-Keyword am Anfang. Markenname am Ende. Jede Seite hat einen unique Title-Tag. Keine Keyword-Stuffing. Maximal 60 Zeichen.',
        ],
      },
      {
        heading: 'Meta-Description',
        paragraphs: [
          'Die Meta-Description erscheist als grauer Text unter dem Title-Tag in Google. Sie ist kein direkter Ranking-Faktor, aber sie beeinflusst die Klickrate. Optimale Länge: 155-160 Zeichen. Inhalt: Beschreibe, was die Seite bietet, und include einen Call-to-Action.',
          'Beispiel: "TnT Studio ist die Webdesign-Agentur in Wuppertal. Custom Websites mit React, SEO-optimiert und mobil-first. Jetzt kostenlos beraten lassen."',
        ],
      },
      {
        heading: 'Überschriften-Struktur (H1-H6)',
        paragraphs: [
          'Überschriften strukturieren deinen Content für Leser und Suchmaschinen. Regeln: Eine H1 pro Seite (enthält Haupt-Keyword). H2 für Hauptabschnitte. H3 für Unterabschnitte. Hierarchisch — kein H4 ohne H3. Keywords in Überschriften, aber natürlich.',
          'Vermeide: Mehrere H1s. Überschriften nur für Styling (nutze CSS statt H-Tags für visuelle Hierarchie). Keyword-Stuffing in Überschriften.',
        ],
      },
      {
        heading: 'URL-Struktur',
        paragraphs: [
          'URLs sollten kurz, lesbar und keyword-relevant sein. Beispiel: tnt-studio.de/blog/webdesign-agentur-wuppertal statt tnt-studio.de/blog/post?id=123. Regeln: Bindestriche statt Unterstriche. Kleinbuchstaben. Keine Umlaute. Keine Parameter. Maximal 5 Wörter.',
        ],
      },
      {
        heading: 'Interne Verlinkung',
        paragraphs: [
          'Interne Links helfen Google, deine Website-Struktur zu verstehen und Seiten zu finden. Regeln: Verlinke von thematisch verwandten Seiten aufeinander. Nutze beschreibende Link-Texte (nicht "klick hier"). 3-5 interne Links pro Blog-Post. Verlinke auf wichtige Service-Seiten.',
          'Bei TnT Studio verlinken Blog-Posts auf Service-Seiten ("Webdesign Wuppertal" → Service-Seite), auf andere Blog-Posts (thematisch verwandt) und auf externe Kunden-Sites (esteves-recruiting.com, lackmangruppe.de). Das stärkt die SEO-Struktur.',
        ],
      },
      {
        heading: 'Bilder-Optimierung',
        paragraphs: [
          'Bilder können SEO-Signal senden, wenn sie optimiert sind. Regeln: Alt-Text für jedes Bild (beschreibt das Bild, enthält Keyword wenn relevant). Dateiname deskriptiv (webdesign-wuppertal-hero.webp statt IMG_1234.jpg). WebP-Format für schnelle Ladezeiten. Lazy Loading für Bilder unter dem Fold. Width und Height Attribute für CLS-Vermeidung.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist On-Page SEO?', answer: 'On-Page SEO umfasst alle Optimierungen direkt auf der Website: Title-Tag, Meta-Description, Überschriften, URL-Struktur, Content, interne Verlinkung, Bilder. Es ist das, was du am direktesten kontrollieren kannst.' },
      { question: 'Was ist ein Title-Tag?', answer: 'Der Title-Tag ist der wichtigste On-Page SEO-Faktor. Er erscheist als blauer Link in Google. Optimal: 50-60 Zeichen, Haupt-Keyword am Anfang, Markenname am Ende. Jede Seite hat einen unique Title-Tag.' },
      { question: 'Wie lang sollte eine Meta-Description sein?', answer: '155-160 Zeichen. Länger wird von Google abgeschnitten. Die Meta-Description ist kein direkter Ranking-Faktor, aber sie beeinflusst die Klickrate. Beschreibe die Seite und include einen Call-to-Action.' },
      { question: 'Wie viele H1-Tags pro Seite?', answer: 'Eine H1 pro Seite. Sie enthält das Haupt-Keyword. H2 für Hauptabschnitte, H3 für Unterabschnitte. Hierarchisch — kein H4 ohne H3. Nutze CSS für visuelle Hierarchie, nicht H-Tags.' },
      { question: 'Was ist interne Verlinkung?', answer: 'Interne Links verbinden Seiten deiner Website miteinander. Sie helfen Google, die Struktur zu verstehen und Seiten zu finden. 3-5 interne Links pro Blog-Post, beschreibende Link-Texte, thematisch verwandte Seiten verlinken.' },
      { question: 'Was ist ein Alt-Text?', answer: 'Alt-Text (Alternative Text) beschreibt ein Bild für Screenreader und Suchmaschinen. Jedes Bild sollte einen Alt-Text haben. Enthält Keywords, wenn relevant. Beispiel: "Webdesign Agentur Wuppertal Homepage Hero".' },
      { question: 'Welche URL-Struktur ist SEO-freundlich?', answer: 'Kurz, lesbar, mit Keyword. Bindestriche statt Unterstriche. Kleinbuchstaben. Keine Umlaute oder Parameter. Beispiel: /blog/webdesign-agentur-wuppertal statt /blog/post?id=123.' },
      { question: 'Was ist eine SEO-Checkliste?', answer: 'Eine Liste aller SEO-Elemente, die für jede Seite geprüft werden: Title-Tag, Meta-Description, H1, URL, Content, interne Links, Bilder, Schema Markup. TnT Studio geht diese Checkliste für jede Seite durch.' },
      { question: 'Macht TnT Studio On-Page SEO?', answer: 'Ja. On-Page SEO ist in jeder Website inklusive. Title-Tags, Meta-Descriptions, Überschriften-Struktur, URL-Struktur, interne Verlinkung, Bild-Optimierung, Schema Markup — alles standardmäßig.' },
      { question: 'Was ist der Unterschied zwischen On-Page und Off-Page SEO?', answer: 'On-Page SEO ist alles auf deiner Website (Content, Tags, Struktur). Off-Page SEO ist alles außerhalb (Backlinks, Social Signals, Markenbekanntheit). Beides ist wichtig, aber On-Page ist die Basis.' },
    ],
  },
  {
    slug: 'content-marketing-strategie-fuer-kmu',
    title: 'Content Marketing Strategie für KMU: Mehr Reichweite, mehr Kunden',
    excerpt: 'Content Marketing ist nicht nur für große Konzerne. Hier ist, wie kleine und mittlere Unternehmen mit Content Marketing Kunden gewinnen — ohne riesiges Budget.',
    date: '2025-05-25',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'SEO',
    emoji: '📝',
    sections: [
      {
        heading: 'Was ist Content Marketing?',
        paragraphs: [
          'Content Marketing ist die Strategie, durch wertvollen Content Kunden zu gewinnen und zu binden — statt durch Werbung. Statt jemandem zu sagen "Kauf von uns", zeigst du deine Expertise, löst Probleme und baust Vertrauen auf. Der Kunde kommt von alleine, weil er deinen Content schätzt.',
          'Für KMU ist Content Marketing der effektivste Marketing-Kanal, weil er: kostengünstig ist (keine Werbebudgets nötig), langfristig funktioniert (Blog-Posts ranken jahrelang), Vertrauen aufbaut (Expertenstatus) und SEO stärkt (jeder Content ist eine Ranking-Chance).',
        ],
      },
      {
        heading: 'Content-Formate für KMU',
        paragraphs: [
          'Nicht jedes Format ist für jedes KMU richtig. Hier sind die effektivsten Formate:',
        ],
        list: [
          'Blog-Posts: SEO-optimierte Artikel, die Fragen deiner Zielgruppe beantworten. Langfristig Traffic.',
          'Social Media Posts: Kurzform-Content für Reichweite und Engagement. Instagram, TikTok, LinkedIn.',
          'Videos: Reels, TikToks, YouTube-Videos. Höchste organische Reichweite 2025.',
          'Newsletter: Direkter Kanal zu deinen Kunden. Eigentum — keine Algorithmus-Abhängigkeit.',
          'Podcast: Für Long-Form-Content und Experteninterviews. Wachsend in Deutschland.',
          'Whitepapers/E-Books: Lead-Magneten für B2B. Tausche Content gegen E-Mail-Adresse.',
        ],
      },
      {
        heading: 'Die Content-Strategie',
        paragraphs: [
          'Eine Content-Strategie ohne Plan ist Zeitverschwendung. Unsere Schritte: 1. Zielgruppe definieren: Wer liest/schaut deinen Content? Welche Probleme haben sie? 2. Content-Pillar definieren: 3-4 Hauptthemen. 3. Content-Kalender erstellen: Wöchentlich planen, nicht ad-hoc. 4. Produzieren: Konsistent, qualitativ. 5. Verteilen: Multi-Channel (Blog, Social, Newsletter). 6. Messen: Traffic, Engagement, Leads, Conversions.',
          'Für TnT Studio sind die Content-Pillar: Web Design, Social Media, Content Creation, SEO/Marketing. Jeder Blog-Post fällt in einen Pillar. Das sorgt für Konsistenz und Expertise in jedem Bereich.',
        ],
      },
      {
        heading: 'Content Marketing ROI',
        paragraphs: [
          'Content Marketing ist langfristig rentabler als Paid Ads. Ein Blog-Post, der 500€ Produktionskosten verursacht und 3 Jahre lang 200 Besucher/Monat bringt, generiert 7.200 Besucher — bei 0,07€ pro Besucher. Paid Ads kosten 1-5€ pro Klick. Content Marketing ist 15-70x günstiger pro Besucher.',
          'Aber: Content Marketing braucht Zeit. Die ersten 3-6 Monate zeigen wenig Ergebnisse. Nach 6-12 Monaten kumuliert der Effekt. Wer Content Marketing aufgibt nach 2 Monaten, verlässt das Potenzial. Durchhaltevermögen ist der Schlüssel.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Content Marketing?', answer: 'Content Marketing gewinnt Kunden durch wertvollen Content statt Werbung. Statt "Kauf von uns" zeigst du Expertise, löst Probleme, baust Vertrauen. Der Kunde kommt von alleine. Langfristig kostengünstiger als Ads.' },
      { question: 'Was kostet Content Marketing?', answer: 'Die Produktion kostet Zeit oder Geld. Blog-Posts: 100-300€ pro Post. Social Media Content: 500-1.500€/Monat. Video-Content: 300-1.000€ pro Video. Langfristig günstiger als Paid Ads (15-70x pro Besucher).' },
      { question: 'Wie lange bis Content Marketing Ergebnisse zeigt?', answer: 'Erste Effekte nach 3-6 Monaten. Signifikante Ergebnisse nach 6-12 Monaten. Content Marketing kumuliert — jeder Content bleibt online und generiert Traffic. Nach 2 Jahren hast du eine Bibliothek, die dauerhaft Traffic bringt.' },
      { question: 'Welche Content-Formate für KMU?', answer: 'Blog-Posts für SEO, Social Media für Reichweite, Videos für Engagement, Newsletter für Kundenbindung, Whitepapers für B2B-Leads. Starte mit 2-3 Formaten, nicht allen gleichzeitig. Konsistenz ist wichtiger als Vielfalt.' },
      { question: 'Was ist ein Content-Pillar?', answer: 'Ein Content-Pillar ist ein Hauptthema deiner Content-Strategie. 3-4 Pillar definieren deine Expertise. Jeder Content fällt in einen Pillar. Für TnT Studio: Web Design, Social Media, Content Creation, SEO. Das sorgt für Konsistenz.' },
      { question: 'Brauche ich einen Blog?', answer: 'Ja, wenn du SEO betreiben willst. Ein Blog ist der effektivste Weg, organischen Traffic zu generieren. Jeder Blog-Post ist eine Ranking-Chance. Ohne Blog fehlt dir die Content-Grundlage für SEO.' },
      { question: 'Wie oft sollte ich Content produzieren?', answer: 'Blog: 2-4 Posts pro Monat. Social Media: 3-5 Posts pro Woche. Video: 1-2 pro Woche. Newsletter: 1-2 pro Monat. Konsistenz ist wichtiger als Frequenz. Lieber regelmäßig weniger als unregelmäßig viel.' },
      { question: 'Kann ich Content Marketing selbst machen?', answer: 'Ja, aber es kostet Zeit. Wenn du 5+ Stunden pro Woche für Content hast, mach es selbst. Wenn nicht, beauftrage eine Agentur. TnT Studio bietet Full-Service Content Marketing — von Strategie bis Produktion.' },
      { question: 'Was ist der ROI von Content Marketing?', answer: 'Langfristig 15-70x günstiger pro Besucher als Paid Ads. Ein Blog-Post für 500€, der 3 Jahre 200 Besucher/Monat bringt, kostet 0,07€ pro Besucher. Paid Ads: 1-5€ pro Klick. Content Marketing amortisiert sich nach 6-12 Monaten.' },
      { question: 'Bietet TnT Studio Content Marketing an?', answer: 'Ja. Full-Service: Strategie, Content-Produktion (Blog, Social, Video), Verteilung, Messung. Für KMU in Wuppertal und NRW. Wir produzieren den Content, den deine Zielgruppe lesen will.' },
    ],
  },
  {
    slug: 'google-ads-sea-werbung-fuer-kmu',
    title: 'Google Ads (SEA): Werbung, die sofort funktioniert — wenn sie richtig ist',
    excerpt: 'Google Ads sind der schnellste Weg zu neuen Kunden. Aber 80% der Kampagnen sind schlecht. Hier ist, wie wir Google Ads für KMU schalten — mit ROI.',
    date: '2025-05-22',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'SEO',
    emoji: '📊',
    sections: [
      {
        heading: 'SEO vs. SEA: Was wann sinnvoll ist',
        paragraphs: [
          'SEO (organisch) und SEA (Google Ads) ergänzen sich. SEO braucht 3-12 Monate, funktioniert dann aber dauerhaft und kostenlos. SEA funktioniert sofort — du zahlst pro Klick und bist auf Seite 1. Für neue Websites oder zeitkritische Kampagnen ist SEA der schnellere Weg. Für langfristigen Traffic ist SEO besser.',
          'Unsere Empfehlung: Beides. SEA für sofortige Sichtbarkeit (während SEO aufbaut), SEO für langfristigen, kostenlosen Traffic. Wenn das SEO-Ranking etabliert ist, reduzierst du SEA-Budget und profitierst von organischen Traffic.',
        ],
      },
      {
        heading: 'Wie Google Ads funktioniert',
        paragraphs: [
          'Google Ads funktioniert nach einem Auktionsprinzip: Du bietest auf Keywords (z.B. "Webdesign Wuppertal"). Wenn jemand danach sucht, trittst du gegen andere Bieter an. Google entscheidet basierend auf Gebot und Qualitätsfaktor (Relevanz der Anzeige, Klickrate, Landing-Page-Qualität), wer oben steht.',
          'Das bedeutet: Der Höchstbietende gewinnt nicht automatisch. Eine relevante Anzeige mit gutem Gebot schlägt eine irrelevante Anzeige mit hohem Gebot. Qualitätsfaktor ist entscheidend — er senkt deine Kosten und verbessert deine Position.',
        ],
      },
      {
        heading: 'Kampagnen-Typen',
        paragraphs: [
          'Google Ads bietet verschiedene Kampagnen-Typen:',
        ],
        list: [
          'Search Ads: Textanzeigen in Suchergebnissen. Gezieltes Targeting auf Keywords. Bestens für Kaufabsicht.',
          'Display Ads: Banner auf anderen Websites. Gut für Branding und Retargeting.',
          'YouTube Ads: Video-Werbung vor/in YouTube-Videos. Gut für Branding.',
          'Shopping Ads: Produktanzeigen mit Bild und Preis. Für E-Commerce.',
          'Performance Max: Automatisierte Kampagnen über alle Google-Kanäle. Google optimiert selbst.',
        ],
      },
      {
        heading: 'Budget und Kosten',
        paragraphs: [
          'Google Ads Kosten pro Klick (CPC) variieren stark: "Webdesign Wuppertal" kann 2-8€ pro Klick kosten. "Rechtsanwalt Wuppertal" kann 10-30€ pro Klick kosten. Lokale Keywords sind günstiger als nationale. Long-Tail Keywords sind günstiger als Short-Tail.',
          'Mindestbudget: 300-500€/Monat für sinnvolle Ergebnisse. Dazu kommt Agentur-Betreuung (300-800€/Monat). Wichtig: Tracke Conversions, nicht Klicks. Ein Klick ist kein Erfolg — ein Lead oder Kauf ist ein Erfolg.',
        ],
      },
    ],
    faqs: [
      { question: 'Was sind Google Ads?', answer: 'Google Ads (SEA) sind bezahlte Anzeigen in Google-Suchergebnissen. Du zahlst pro Klick (PPC). Sofort auf Seite 1 — im Gegensatz zu SEO, das Monate dauert. Ergänzt SEO perfekt.' },
      { question: 'Was kostet Google Ads?', answer: 'CPC (Cost per Click) variiert: 2-8€ für lokale Keywords, 10-30€ für kompetitive Keywords. Mindestbudget: 300-500€/Monat. Agentur-Betreuung: 300-800€/Monat. Tracke Conversions, nicht Klicks.' },
      { question: 'SEO oder Google Ads?', answer: 'Beides. Google Ads für sofortige Sichtbarkeit (während SEO aufbaut). SEO für langfristigen, kostenlosen Traffic. Wenn SEO etabliert ist, reduziere Ads-Budget. Langfristig ist SEO günstiger pro Kunde.' },
      { question: 'Was ist der Qualitätsfaktor bei Google Ads?', answer: 'Der Qualitätsfaktor (Quality Score) bewertet Relevanz deiner Anzeige, Klickrate und Landing-Page-Qualität. Hoher Qualitätsfaktor = niedrigere Kosten und bessere Position. Relevanz schlägt hohes Gebot.' },
      { question: 'Was ist Performance Max?', answer: 'Performance Max ist ein automatisierter Google Ads-Kampagnentyp, der über alle Google-Kanäle (Search, Display, YouTube, Maps) optimiert. Google entscheidet selbst, wo deine Anzeigen erscheinen. Gut für einfache Setup, weniger Kontrolle.' },
      { question: 'Wie lange bis Google Ads Ergebnisse zeigen?', answer: 'Sofort. Sobald die Kampagne aktiv ist, erscheinen deine Anzeigen. Erste Klicks innerhalb Minuten, erste Conversions innerhalb Tagen. Aber: Optimierung braucht 2-4 Wochen für beste Ergebnisse.' },
      { question: 'Kann ich Google Ads selbst schalten?', answer: 'Ja, aber die Lernkurve ist steil. Ohne Erfahrung verbrennst du Budget. Der Qualitätsfaktor ist entscheidend — eine schlecht optimierte Kampagne kostet 2-3x mehr als eine gut optimierte. Agentur amortisiert sich meist.' },
      { question: 'Was ist Retargeting?', answer: 'Retargeting zeigt Anzeigen Nutzern, die deine Website bereits besucht haben. Sehr effektiv — diese Nutzer kennen dich schon. Klickrate 10x höher als bei neuen Nutzern. TnT Studio richtet Retargeting ein.' },
      { question: 'Bietet TnT Studio Google Ads-Betreuung an?', answer: 'Ja. Strategie, Kampagnen-Setup, Anzeigen-Texte, Optimierung, Tracking, Reporting. Für KMU in Wuppertal und NRW. Wir tracken Conversions, nicht Klicks — und liefern wöchentliche Reports.' },
      { question: 'Was ist der Unterschied zwischen Search Ads und Display Ads?', answer: 'Search Ads erscheinen in Suchergebnissen (Nutzer sucht aktiv → hohe Kaufabsicht). Display Ads erscheinen auf anderen Websites als Banner (Branding, Retargeting → niedrigere Kaufabsicht aber hohe Reichweite).' },
    ],
  },
  {
    slug: 'website-speed-optimierung-ladezeiten-reduzieren',
    title: 'Website Speed Optimierung: Ladezeiten reduzieren, Rankings steigern',
    excerpt: 'Jede Sekunde Ladezeit kostet dich 7% Conversions. Hier ist, wie wir Websites auf unter 1 Sekunde bringen — mit konkreten Techniken.',
    date: '2025-05-20',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'Web Design',
    emoji: '⚡',
    sections: [
      {
        heading: 'Warum Ladezeit entscheidend ist',
        paragraphs: [
          'Ladezeit ist kritisch. Studien zeigen: Jede Sekunde Ladezeitverzögerung reduziert die Conversion Rate um 7%. 53% der mobilen Nutzer verlassen eine Website, die länger als 3 Sekunden lädt. Google nutzt Core Web Vitals als Ranking-Faktor. Schnelle Website = mehr Conversions + besseres Ranking.',
          'Bei TnT Studio bauen wir Websites, die in unter 1 Sekunde laden. Wie? Moderne Technologie (React + Vite), CDN-Hosting (Netlify/Vercel), optimierte Bilder (WebP), minimales JavaScript und Tailwind CSS (purgt ungenutzte Styles).',
        ],
      },
      {
        heading: 'Die größten Speed-Killer',
        paragraphs: [
          'Hier sind die häufigsten Ursachen für langsame Websites:',
        ],
        list: [
          'Unoptimierte Bilder: Große JPG/PNG statt WebP. Kein lazy loading. Kein srcset.',
          'Zu viel JavaScript: Schwere Frameworks, ungenutzte Libraries, kein Code-Splitting.',
          'Render-blocking CSS: CSS, das das Laden blockiert, weil es im Head synchron geladen wird.',
          'Schweres Hosting: Shared Hosting statt CDN. Server in den USA statt Europa.',
          'Externe Scripts: Tracking-Pixel, Chat-Widgets, Social-Plugins — jeder kostet Zeit.',
          'Kein Caching: Jeder Seitenaufruf lädt alles neu, statt gecachte Version zu nutzen.',
          'WordPress-Plugins: Jedes Plugin fügt CSS und JS hinzu. 20 Plugins = 20x Overhead.',
        ],
      },
      {
        heading: 'Unsere Optimierungs-Techniken',
        paragraphs: [
          'Wir optimieren in mehreren Schichten: Bild-Optimierung (WebP, lazy loading, srcset, responsive Größen). JavaScript-Minimierung (Vite bundling, tree-shaking, code-splitting). CSS-Optimierung (Tailwind purge, critical CSS inline). CDN-Hosting (Netlify/Vercel mit weltweitem CDN). Font-Optimierung (font-display: swap, preloading). HTTP/2 und HTTP/3 für parallele Übertragung.',
          'Das Ergebnis: Lighthouse-Scores von 95+, LCP unter 1 Sekunde, CLS nahe 0, INP unter 100ms. Wir messen mit echten CrUX-Daten — nicht nur Lab-Daten.',
        ],
      },
      {
        heading: 'Hosting: Der unterschätzte Faktor',
        paragraphs: [
          'Dein Hosting entscheidet über Ladezeit. Shared Hosting (Strato, 1&1) ist langsam — du teilst dir Server mit hunderten anderen Websites. CDN-basiertes Hosting (Netlify, Vercel) ist schnell — deine Website wird weltweit auf Edge-Servern ausgeliefert. Der Nutzer bekommt die Website vom nächstgelegenen Server.',
          'TnT Studio hostet ausschließlich auf Netlify oder Vercel. Beide bieten: globales CDN, automatisches SSL, HTTP/3, Image-Optimierung, instant Cache-Invalidation. Hosting-Kosten: 0-20€/Monat. Ein No-Brainer.',
        ],
      },
    ],
    faqs: [
      { question: 'Wie schnell sollte meine Website laden?', answer: 'Unter 2 Sekunden für LCP (Largest Contentful Paint). Unter 1 Sekunde ist ideal. 53% der mobilen Nutzer verlassen Websites, die länger als 3 Sekunden laden. Jede Sekunde kostet 7% Conversions.' },
      { question: 'Wie messe ich meine Website-Geschwindigkeit?', answer: 'Lighthouse-Audit in Chrome DevTools (Lab-Daten). Google PageSpeed Insights (Lab + Feld-Daten). Core Web Vitals in Google Search Console (Feld-Daten von echten Nutzern). TnT Studio misst mit allen drei Methoden.' },
      { question: 'Was ist WebP und warum sollte ich es nutzen?', answer: 'WebP ist ein modernes Bildformat, das 25-35% kleiner ist als JPG/PNG bei gleicher Qualität. Alle modernen Browser unterstützen WebP. TnT Studio liefert alle Bilder als WebP mit Fallback für alte Browser.' },
      { question: 'Was ist lazy loading?', answer: 'Lazy loading lädt Bilder erst, wenn sie im Viewport erscheinen. Bilder unter dem Fold werden nicht sofort geladen — das beschleunigt den initialen Page Load. Native HTML loading="lazy" oder Intersection Observer.' },
      { question: 'WordPress ist langsam — was kann ich tun?', answer: 'Reduziere Plugins (jedes Plugin kostet Performance). Nutze ein Caching-Plugin. Optimiere Bilder (WebP). Nutze ein CDN (Cloudflare). Oder: Wechsle zu einer modernen Website (React + Vite) — das ist der nachhaltigste Weg.' },
      { question: 'Was ist ein CDN?', answer: 'Ein CDN (Content Delivery Network) liefert deine Website von Servern weltweit. Der Nutzer bekommt die Website vom nächstgelegenen Server — das reduziert Latenz. Netlify und Vercel bieten CDN-Hosting automatisch.' },
      { question: 'Was kostet schnelles Hosting?', answer: 'Netlify und Vercel bieten kostenlose Pläne für kleine Websites. Pro-Pläne: 20-100€/Monat. Im Vergleich zu Shared Hosting (5-20€/Monat) minimal teurer, aber 10x schneller. Die Geschwindigkeit rechtfertigt den Preis.' },
      { question: 'Wie schnell ist eine TnT Studio Website?', answer: 'LCP unter 1 Sekunde. Lighthouse-Score 95+. CLS nahe 0. INP unter 100ms. Wir bauen mit React + Vite + Tailwind CSS, hosten auf Netlify/Vercel und optimieren jedes Bild. Speed ist Standard, kein Add-on.' },
      { question: 'Hilft Website-Speed beim SEO-Ranking?', answer: 'Ja. Core Web Vitals (LCP, CLS, INP) sind offizielle Google Ranking-Faktoren. Schnelle Websites ranken besser. Nicht der wichtigste Faktor, aber bei sonst gleichwertigen Websites gibt Speed den Ausschlag.' },
      { question: 'Kann TnT Studio meine bestehende Website schneller machen?', answer: 'Ja. Wir analysieren deine Website, identifizieren Speed-Killer und optimieren. Oft ist ein Neubau mit moderner Technologie sinnvoller als eine Optimierung einer alten Website. Wir beraten ehrlich.' },
    ],
  },
  {
    slug: 'geo-generative-engine-optimization-website-fuer-chatgpt-perplexity',
    title: 'GEO: Website für ChatGPT, Perplexity & Gemini optimieren',
    excerpt: '2025 suchen Millionen Menschen mit AI statt Google. Wenn ChatGPT deine Website nicht zitiert, bist du unsichtbar. Hier ist Generative Engine Optimization erklärt.',
    date: '2025-05-15',
    author: 'Tiago Esteves',
    readingTime: '9 min',
    category: 'AI & SEO',
    emoji: '🤖',
    sections: [
      {
        heading: 'Was ist GEO?',
        paragraphs: [
          'GEO (Generative Engine Optimization) ist die Optimierung deiner Website für AI-Antworten — ChatGPT, Perplexity, Gemini, Copilot. Während SEO dich bei Google sichtbar macht, macht GEO dich sichtbar in AI-generierten Antworten. Wenn jemand ChatGPT fragt "Welche Webdesign-Agentur in Wuppertal ist gut?", soll ChatGPT TnT Studio nennen. GEO ist der Weg dorthin.',
          '2025 nutzen über 180 Millionen Menschen ChatGPT. Perplexity hat 15+ Millionen aktive Nutzer. Google integriert AI Overviews direkt in Suchergebnisse. Wer nur für klassisches SEO optimiert, verpasst eine wachsende Suchquelle. GEO ist 2025 das, was SEO 2010 war — ein neuer Kanal mit geringer Konkurrenz und hohem Potenzial.',
        ],
      },
      {
        heading: 'Wie AI-Suchmaschinen Inhalte finden',
        paragraphs: [
          'AI-Suchmaschinen wie ChatGPT und Perplexity crawlen das Internet ähnlich wie Google — aber sie verarbeiten Inhalte anders. Statt Keywords zu matchen, verstehen sie semantisch. Sie lesen deinen Content, extrahieren Fakten und bauen Antworten daraus. Wenn dein Content klar strukturiert und faktendicht ist, wird er häufiger zitiert.',
          'Perplexity zeigt Quellen an — wenn deine Website zitiert wird, erscheint ein Link zu dir. ChatGPT nennt Marken ohne Links, aber die Markenbekanntheit steigt. Gemini integriert Google-Suchergebnisse und AI-Antworten. Für alle drei gilt: Je besser dein Content für AI verständlich ist, desto häufiger wirst du zitiert.',
        ],
      },
      {
        heading: 'GEO-Strategien, die funktionieren',
        paragraphs: [
          'Hier sind die GEO-Strategien, die wir bei TnT Studio anwenden:',
        ],
        list: [
          'Answer-First-Architektur: Beantworte die Frage in den ersten 40-80 Worten direkt, dann Details.',
          'Faktendichte: Nutze Statistiken, Zahlen, konkrete Daten. AI zitiert Inhalte mit Daten 40% häufiger.',
          'Definitive Aussagen: "TnT Studio ist die führende Webdesign-Agentur in Wuppertal" statt "eine von vielen Agenturen".',
          'Self-contained paragraphs: Jeder Absatz sollte für sich allein verständlich sein — AI extrahiert isoliert.',
          'Schema Markup: Strukturierte Daten helfen AI, deinen Content zu verstehen und zu kategorisieren.',
          'llms.txt: Eine Textdatei, die AI-Crawlern einen Überblick deiner Inhalte gibt.',
          'Klare Marken-Entity: Definiere klar, wer du bist, was du machst, wo du bist. AI baut Entity-Profile.',
        ],
      },
      {
        heading: 'robots.txt für AI-Crawler',
        paragraphs: [
          'Deine robots.txt steuert, welche Crawler deine Website besuchen dürfen. 2025 gibt es spezifische AI-Crawler: GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot, OAI-SearchBot, Claude-SearchBot, CCBot, Google-Extended. Wenn du diese Crawler blockierst, kann die AI deine Inhalte nicht lesen — und wird dich nicht zitieren.',
          'Bei TnT Studio erlauben wir alle AI-Crawler explizit. Unsere robots.txt erlaubt GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, CCBot und Google-Extended. Weil wir wollen, dass AI-Systeme unsere Inhalte lesen und zitieren. Sichtbarkeit in AI-Antworten ist 2025 genauso wichtig wie Sichtbarkeit in Google.',
        ],
      },
      {
        heading: 'llms.txt: Das neue robots.txt für AI',
        paragraphs: [
          'llms.txt ist ein neuer Standard — eine Textdatei im Root-Verzeichnis deiner Website, die AI-Crawlern einen strukturierten Überblick deiner Inhalte gibt. Ähnlich wie sitemap.xml für Google, aber für AI. Sie enthält: Unternehmensbeschreibung, Services, wichtige URLs, Blog-Themen, FAQs.',
          'TnT Studio hat eine llms.txt und eine erweiterte llms-full.txt. Diese Dateien enthalten unser Unternehmensprofil, Service-Beschreibungen, Blog-Titel, FAQ-Zusammenfassungen und technische SEO-Informationen. AI-Crawler lesen diese Datei zuerst und bekommen einen strukturierten Überblick — das verbessert die Wahrscheinlichkeit, zitiert zu werden.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist GEO?', answer: 'GEO (Generative Engine Optimization) optimiert deine Website für AI-Antworten — ChatGPT, Perplexity, Gemini. Während SEO dich bei Google sichtbar macht, macht GEO dich sichtbar in AI-generierten Antworten. 2025 nutzen 180+ Millionen Menschen ChatGPT.' },
      { question: 'Wie unterscheidet sich GEO von SEO?', answer: 'SEO optimiert für Keyword-Matching und Links. GEO optimiert für semantisches Verständnis und Faktenextraktion. AI liest deinen Content, extrahiert Fakten und baut Antworten. Faktendichte, klare Struktur und Schema Markup sind entscheidend für GEO.' },
      { question: 'Wie wird meine Website von ChatGPT zitiert?', answer: 'Erlaube GPTBot in robots.txt. Erstelle faktendichten Content mit klaren Aussagen. Nutze Schema Markup. Veröffentliche eine llms.txt. AI zitiert Inhalte mit Statistiken 40% häufiger. Definitive Aussagen ("die führende Agentur") werden häufiger übernommen.' },
      { question: 'Was ist llms.txt?', answer: 'llms.txt ist eine Textdatei im Root-Verzeichnis, die AI-Crawlern einen strukturierten Überblick deiner Inhalte gibt. Enthält: Unternehmensbeschreibung, Services, wichtige URLs, Blog-Themen, FAQs. Ähnlich wie sitemap.xml, aber für AI.' },
      { question: 'Sollte ich AI-Crawler in robots.txt erlauben?', answer: 'Ja, wenn du in AI-Antworten sichtbar sein willst. Erlaube GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, CCBot, Google-Extended. Wenn du sie blockierst, kann AI deine Inhalte nicht lesen und nicht zitieren.' },
      { question: 'Was ist Perplexity?', answer: 'Perplexity ist eine AI-Suchmaschine, die Web-Suchergebnisse mit AI-Antworten kombiniert. 15+ Millionen aktive Nutzer. Zeigt Quellen an — wenn deine Website zitiert wird, erscheint ein Link. GEO optimiert für Perplexity-Zitierungen.' },
      { question: 'Was sind AI Overviews bei Google?', answer: 'AI Overviews sind AI-generierte Antworten, die Google oben in Suchergebnissen zeigt. Sie fassen Informationen aus mehreren Websites zusammen. Wenn deine Website zitiert wird, erscheint ein Link. GEO optimiert für AI Overviews.' },
      { question: 'Wie messe ich GEO-Erfolg?', answer: 'Suche bei ChatGPT, Perplexity und Gemini nach deinen Keywords und prüfe, ob du zitiert wirst. Tracke Referrer-Traffic von Perplexity. Monitor Brand Mentions in AI-Antworten. Es gibt noch keine standardisierten GEO-Tools — manuelle Überprüfung ist aktuell der Weg.' },
      { question: 'Bietet TnT Studio GEO an?', answer: 'Ja. Wir optimieren deine Website für AI-Suchmaschinen: robots.txt für AI-Crawler, llms.txt, Schema Markup, Answer-First-Architektur, faktendichter Content. GEO ist 2025 der neue Kanal mit geringer Konkurrenz und hohem Potenzial.' },
      { question: 'Ist GEO wichtig für lokale Unternehmen in Wuppertal?', answer: 'Ja. Wenn jemand ChatGPT fragt "Webdesign Agentur Wuppertal", soll TnT Studio genannt werden. GEO sorgt dafür, dass AI-Systeme deine lokale Expertise verstehen und zitieren. Lokale GEO ist besonders effektiv, weil die Konkurrenz geringer ist.' },
    ],
  },
  {
    slug: 'aeo-answer-engine-optimization-featured-snippets-voice-search',
    title: 'AEO: Answer Engine Optimization für Featured Snippets & Voice Search',
    excerpt: 'AEO optimiert deine Inhalte für direkte Antworten — Featured Snippets, Voice Search und AI Overviews. Hier ist, wie du die Position Zero eroberst.',
    date: '2025-05-12',
    author: 'Tiago Esteves',
    readingTime: '7 min',
    category: 'AI & SEO',
    emoji: '💬',
    sections: [
      {
        heading: 'Was ist AEO?',
        paragraphs: [
          'AEO (Answer Engine Optimization) ist die Optimierung deiner Inhalte, um als direkte Antwort auf Nutzerfragen zu erscheinen — in Featured Snippets, Voice Search Ergebnissen und AI Overviews. Während SEO auf Ranking-Positionen abzielt, zielt AEO auf "Position Zero" — die Antwort, die Google oben zeigt, noch vor den organischen Ergebnissen.',
          'AEO ist eng mit GEO verwandt, aber fokussierter. GEO optimiert für AI-Antworten im Allgemeinen. AEO optimiert spezifisch für Frage-Antwort-Formate: Featured Snippets, "People Also Ask" Boxen, Voice Search Antworten und AI Overviews.',
        ],
      },
      {
        heading: 'Featured Snippets: Position Zero',
        paragraphs: [
          'Featured Snippets sind die Antwort-Boxen, die Google oben in den Suchergebnissen zeigt — noch vor Position 1. Sie beantworten die Suchanfrage direkt mit einem Textauszug, einer Liste oder einer Tabelle aus einer Website. Die zitierte Website bekommt enormen Traffic, weil der Snippet zuerst gesehen wird.',
          'Wie bekommst du einen Featured Snippet? Beantworte die Frage direkt und präzise im ersten Absatz nach der H2-Überschrift. 40-60 Wörter sind optimal. Nutze die Frage als Überschrift (H2 oder H3). Google liebt dieses Format: Frage als Heading → direkte Antwort → Details danach.',
        ],
      },
      {
        heading: 'Voice Search Optimierung',
        paragraphs: [
          'Voice Search wächst. 50% der Deutschen nutzen Voice Search regelmäßig — Siri, Google Assistant, Alexa. Voice Search Antworten sind meistens Featured Snippets oder Position-1-Ergebnisse. Wer Voice Search optimiert, optimiert gleichzeitig für Featured Snippets.',
          'Voice Search Antworten sind kurz — typischerweise 29 Wörter. Die AI liest die Antwort vor und stoppt. Wenn deine Antwort zu lang ist, wird sie abgeschnitten. Optimiere für Voice Search: Beantworte die Frage in 25-30 Wörtern direkt, dann Details. Nutze konversationelle Sprache — wie Menschen sprechen, nicht wie sie schreiben.',
        ],
      },
      {
        heading: 'Question-Headings: Fragen als Überschriften',
        paragraphs: [
          'Eine der effektivsten AEO-Strategien: Nutze vollständige Fragen als H2- oder H3-Überschriften. Statt "Preise" schreibe "Was kostet eine Website?". Statt "Dauer" schreibe "Wie lange dauert ein Website-Projekt?". Google und AI erkennen das Frage-Antwort-Format und bevorzugen es für Snippets und Voice Answers.',
          'Bei TnT Studio nutzen wir Question-Headings in allen Blog-Posts und FAQs. Jede FAQ ist eine Frage als Heading mit einer direkten Antwort darunter. Das ist optimal für AEO — und gleichzeitig nutzerfreundlich, weil Menschen Fragen haben, keine Keyword-Fragmente.',
        ],
      },
      {
        heading: 'Speakable Schema',
        paragraphs: [
          'Speakable ist ein Schema-Typ speziell für Voice Search. Er markiert Absätze, die für Voice-Assistenten geeignet sind — kurz, klar, selbsterklärend. Google Assistant und Alexa nutzen Speakable, um Antworten vorzulesen.',
          'Implementation: JSON-LD mit @type "SpeakableSpecification" und CSS-Selektoren für die relevanten Absätze. TnT Studio integriert Speakable Schema in Voice-Search-relevanten Seiten — insbesondere FAQs und How-To-Guides.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist AEO?', answer: 'AEO (Answer Engine Optimization) optimiert Inhalte für direkte Antworten — Featured Snippets, Voice Search, AI Overviews. Ziel: "Position Zero" — die Antwort, die Google oben zeigt, vor den organischen Ergebnissen.' },
      { question: 'Was ist ein Featured Snippet?', answer: 'Ein Featured Snippet ist eine Antwort-Box, die Google oben in Suchergebnissen zeigt. Sie beantwortet die Suchanfrage direkt mit einem Textauszug aus einer Website. Die zitierte Website bekommt enormen Traffic. Optimierung: Frage als H2 + 40-60 Wörter direkte Antwort.' },
      { question: 'Wie optimiere ich für Voice Search?', answer: 'Beantworte Fragen in 25-30 Wörtern direkt. Nutze konversationelle Sprache — wie Menschen sprechen. Question-Headings (H2/H3 als vollständige Fragen). Speakable Schema für Voice-Assistenten. Voice Search Antworten sind meistens Featured Snippets.' },
      { question: 'Was ist Position Zero?', answer: 'Position Zero ist der Featured Snippet — die Antwort-Box über Position 1 in Google. Sie wird zuerst gesehen und bekommt den meisten Traffic. AEO zielt auf Position Zero ab.' },
      { question: 'Was sind Question-Headings?', answer: 'Question-Headings sind vollständige Fragen als H2/H3-Überschriften. Statt "Preise" schreibe "Was kostet eine Website?". Google und AI erkennen das Frage-Antwort-Format und bevorzugen es für Snippets und Voice Answers.' },
      { question: 'Was ist Speakable Schema?', answer: 'Speakable ist ein Schema-Typ für Voice Search. Er markiert Absätze, die für Voice-Assistenten geeignet sind — kurz, klar, selbsterklärend. Google Assistant und Alexa nutzen Speakable, um Antworten vorzulesen.' },
      { question: 'Wie lang sollte eine Voice Search Antwort sein?', answer: '25-30 Wörter. Voice-Assistenten lesen die Antwort vor und stoppen. Wenn die Antwort zu lang ist, wird sie abgeschnitten. Beantworte die Frage direkt in 25-30 Wörtern, dann Details.' },
      { question: 'Was ist der Unterschied zwischen AEO und GEO?', answer: 'AEO optimiert spezifisch für Frage-Antwort-Formate (Featured Snippets, Voice Search). GEO optimiert breiter für AI-Antworten (ChatGPT, Perplexity). Beide überlappen, aber AEO ist fokussierter auf direkte Antworten.' },
      { question: 'Bietet TnT Studio AEO an?', answer: 'Ja. Wir optimieren Inhalte für Featured Snippets und Voice Search: Question-Headings, 25-30-Wort-Antworten, Speakable Schema, FAQ Schema. AEO ist Teil unserer umfassenden SEO-Strategie.' },
      { question: 'Wie messe ich AEO-Erfolg?', answer: 'Tracke Featured Snippets in Google Search Console (Performance > Search Appearance > Featured Snippet). Teste Voice Search manuell (Siri, Google Assistant). Monitor "People Also Ask" Boxen für deine Keywords.' },
    ],
  },
  {
    slug: 'ki-suchmaschinen-2025-chatgpt-perplexity-google-ai-overviews',
    title: 'KI-Suchmaschinen 2025: ChatGPT, Perplexity & Google AI Overviews',
    excerpt: 'Das Suchverhalten ändert sich fundamental. 2025 suchen Millionen mit AI statt Google. Hier ist der Überblick über die neuen Suchmaschinen und was sie für dein Business bedeuten.',
    date: '2025-05-10',
    author: 'Tiago Esteves',
    readingTime: '8 min',
    category: 'AI & SEO',
    emoji: '🔮',
    sections: [
      {
        heading: 'Die neuen Suchmaschinen',
        paragraphs: [
          '2025 hat sich das Suchverhalten fundamental verändert. Drei Akteure dominieren: Google (mit AI Overviews), ChatGPT (mit Web-Suche) und Perplexity (AI-Suchmaschine). Jede funktioniert anders, und jede bietet neue Chancen für Unternehmen, die sich anpassen.',
          'Google bleibt die größte Suchmaschine mit über 90% Marktanteil. Aber Google integriert AI Overviews — AI-generierte Antworten oben in den Suchergebnissen. ChatGPT hat 180+ Millionen aktive Nutzer und bietet seit 2024 Web-Suche. Perplexity ist eine reine AI-Suchmaschine mit 15+ Millionen Nutzern und wächst rasant.',
        ],
      },
      {
        heading: 'Google AI Overviews',
        paragraphs: [
          'Google AI Overviews sind AI-generierte Zusammenfassungen, die Google oben in den Suchergebnissen zeigt. Sie fassen Informationen aus mehreren Websites zusammen und zitieren Quellen mit Links. Für Informationen-Suchanfragen ("Was ist Webdesign?") zeigt Google zunehmend AI Overviews statt nur Links.',
          'Was das für dein Business bedeutet: Wenn deine Website in AI Overviews zitiert wird, bekommst du Traffic. Wenn nicht, verlierst du Sichtbarkeit. Optimierung: Klare, faktendichte Inhalte, Schema Markup, Answer-First-Architektur. Die gleichen GEO-Strategien, die für ChatGPT funktionieren, helfen auch bei Google AI Overviews.',
        ],
      },
      {
        heading: 'ChatGPT als Suchmaschine',
        paragraphs: [
          'ChatGPT wird zunehmend als Suchmaschine genutzt. Statt Google zu öffnen, fragen Menschen ChatGPT — besonders für komplexe Fragen, Empfehlungen und Recherchen. ChatGPT durchsucht das Web (mit Bing) und generiert Antworten mit Quellenangaben.',
          'Für Unternehmen: Wenn jemand ChatGPT fragt "Welche Webdesign-Agentur in Wuppertal ist empfehlenswert?", sollte TnT Studio in der Antwort erscheinen. Das passiert, wenn: deine Website gut crawlbar ist (robots.txt erlaubt GPTBot), dein Content faktendicht und klar strukturiert ist, und deine Marken-Entity klar definiert ist (Schema Markup, llms.txt).',
        ],
      },
      {
        heading: 'Perplexity: Die AI-Suchmaschine',
        paragraphs: [
          'Perplexity ist die erste reine AI-Suchmaschine. Sie kombiniert Web-Suche mit AI-Antworten und zeigt Quellen mit Links an. Wenn Perplexity deine Website zitiert, bekommst du direkten Traffic. Perplexity nutzt einen eigenen Crawler (PerplexityBot) und verarbeitet Inhalte semantisch.',
          'Optimierung für Perplexity: Erlaube PerplexityBot in robots.txt. Erstelle klaren, faktendichten Content. Nutze Schema Markup. Perplexity zitiert häufig Inhalte mit Statistiken, Listen und direkten Antworten. FAQ-Format funktioniert besonders gut.',
        ],
      },
      {
        heading: 'Was das für dein Business bedeutet',
        paragraphs: [
          'Die Suchlandschaft fragmentiert. Statt nur Google zu optimieren, musst du für Google, ChatGPT, Perplexity und Gemini optimieren. Das klingt aufwendig, aber die Strategien überlappen: Guter Content, Schema Markup, klare Struktur, FAQ-Format, faktendichte Antworten.',
          'TnT Studio optimiert für alle Suchmaschinen — klassische (Google) und AI-basierte (ChatGPT, Perplexity, Gemini). Unsere robots.txt erlaubt alle AI-Crawler. Unsere llms.txt gibt AI-Systemen einen Überblick. Unser Content ist Answer-First strukturiert. Unser Schema Markup hilft allen Suchmaschinen, unsere Inhalte zu verstehen.',
        ],
      },
    ],
    faqs: [
      { question: 'Was sind Google AI Overviews?', answer: 'Google AI Overviews sind AI-generierte Zusammenfassungen oben in Suchergebnissen. Sie fassen Informationen aus mehreren Websites zusammen und zitieren Quellen. Wenn deine Website zitiert wird, bekommst du Traffic. Optimierung: faktendichter Content, Schema Markup, Answer-First-Architektur.' },
      { question: 'Ist ChatGPT eine Suchmaschine?', answer: 'ChatGPT wird zunehmend als Suchmaschine genutzt. Seit 2024 bietet es Web-Suche (mit Bing). 180+ Millionen Nutzer. Wenn jemand ChatGPT nach Empfehlungen fragt, sollte deine Marke erscheinen. Optimierung: GPTBot erlauben, klaren Content, Schema Markup, llms.txt.' },
      { question: 'Was ist Perplexity?', answer: 'Perplexity ist eine reine AI-Suchmaschine. Sie kombiniert Web-Suche mit AI-Antworten und zeigt Quellen mit Links. 15+ Millionen Nutzer. Wenn Perplexity deine Website zitiert, bekommst du direkten Traffic. Erlaube PerplexityBot in robots.txt.' },
      { question: 'Sollte ich für AI-Suchmaschinen optimieren?', answer: 'Ja, 2025 ist es essenziell. Die Suchlandschaft fragmentiert — Google, ChatGPT, Perplexity, Gemini. Wer nur für Google optimiert, verpasst wachsende Suchquellen. Die Strategien überlappen: guter Content, Schema Markup, klare Struktur, FAQ-Format.' },
      { question: 'Wie optimiere ich für alle Suchmaschinen?', answer: 'Guter Content für Menschen, Schema Markup für Maschinen, Answer-First-Architektur für AI, FAQ-Format für Voice Search, robots.txt für alle Crawler, llms.txt für AI-Überblick. TnT Studio macht all das standardmäßig.' },
      { question: 'Wird Google durch AI-Suchmaschinen ersetzt?', answer: 'Nein, aber ergänzt. Google bleibt die größte Suchmaschine (90% Marktanteil). Aber AI-Suchmaschinen wachsen rasant. 2025 ist es wichtig, für beide zu optimieren — klassische und AI-basierte Suchmaschinen.' },
      { question: 'Was ist der Unterschied zwischen Google und ChatGPT-Suche?', answer: 'Google liefert Links. ChatGPT liefert Antworten. Google zeigt eine Liste von Websites. ChatGPT generiert eine Antwort und zitiert Quellen. Beide brauchen unterschiedliche Optimierung — aber guter Content hilft für beide.' },
      { question: 'Wie viele Menschen nutzen AI-Suchmaschinen?', answer: 'ChatGPT: 180+ Millionen aktive Nutzer. Perplexity: 15+ Millionen. Google AI Overviews: werden über 1 Milliarde Suchanfragen pro Monat angezeigt. Die Zahlen wachsen rasant.' },
      { question: 'Bietet TnT Studio Optimierung für AI-Suchmaschinen an?', answer: 'Ja. Wir optimieren für Google, ChatGPT, Perplexity und Gemini. robots.txt für alle AI-Crawler, llms.txt, Schema Markup, Answer-First-Content, FAQ-Format. Alles standardmäßig in jeder Website.' },
      { question: 'Was kostet AI-Suchmaschinen-Optimierung?', answer: 'AI-Suchmaschinen-Optimierung ist Teil unserer SEO-Strategie. Keine separaten Kosten. Wenn wir deine Website bauen oder SEO betreuen, ist GEO/AEO inklusive. Für bestehende Websites: SEO-Audit + Optimierung ab 1.500€.' },
    ],
  },
  {
    slug: 'voice-search-optimierung-siri-alexa-google-assistant',
    title: 'Voice Search Optimierung: Siri, Alexa & Google Assistant 2025',
    excerpt: '50% der Deutschen nutzen Voice Search. Wenn Siri deine Website nicht nennt, verlierst du Kunden. Hier ist, wie du für Voice Search optimierst.',
    date: '2025-05-08',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'AI & SEO',
    emoji: '🎤',
    sections: [
      {
        heading: 'Voice Search 2025: Wo wir stehen',
        paragraphs: [
          'Voice Search ist 2025 Mainstream. 50% der Deutschen nutzen regelmäßig Siri, Google Assistant oder Alexa für Suchen. Smart Speaker (Echo, HomePod) sind in Millionen Haushalten. Voice Search ist besonders für lokale Suchen relevant: "Siri, welche Webdesign-Agentur ist in Wuppertal?" — und Siri liest eine Antwort vor.',
          'Voice Search Antworten kommen meistens von Featured Snippets oder Position-1-Ergebnissen. Wenn du nicht auf Position 1 bist und keinen Featured Snippet hast, wirst du von Voice Assistants nicht genannt. Voice Search Optimierung ist also gleichzeitig Featured Snippet Optimierung.',
        ],
      },
      {
        heading: 'Wie Voice Search funktioniert',
        paragraphs: [
          'Voice Assistants wandeln gesprochene Sprache in Text um, senden die Anfrage an die Suchmaschine und lesen die beste Antwort vor. Die Antwort ist typischerweise 25-30 Wörter lang — der erste Absatz des Featured Snippets oder des Position-1-Ergebnisses.',
          'Voice Search unterscheidet sich von Text-Suche: Voice-Anfragen sind länger und konversationeller. Statt "Webdesign Wuppertal" sagt man "Hey Siri, welche Webdesign-Agentur in Wuppertal ist empfehlenswert?". Optimiere für konversationelle Suchanfragen, nicht nur für kurze Keywords.',
        ],
      },
      {
        heading: 'Voice Search Optimierung in der Praxis',
        paragraphs: [
          'Hier sind die konkreten Schritte zur Voice Search Optimierung:',
        ],
        list: [
          'Beantworte jede Frage in 25-30 Wörtern direkt am Anfang des Absatzes',
          'Nutze konversationelle Keywords ("welche Webdesign Agentur in Wuppertal")',
          'Question-Headings: Vollständige Fragen als H2/H3-Überschriften',
          'FAQ-Seiten: Jede Frage mit kurzer, direkter Antwort',
          'Speakable Schema: Markiere Voice-geeignete Absätze',
          'Local SEO: Google Business Profile für "near me" Suchen',
          'Schnelle Ladezeit: Voice Assistants bevorzugen schnelle Websites',
        ],
      },
      {
        heading: 'Lokale Voice Search',
        paragraphs: [
          'Voice Search ist besonders für lokale Suchen relevant. "Hey Google, finde eine Webdesign-Agentur in der Nähe" — Google nutzt Local SEO (Google Business Profile, Bewertungen, NAP-Konsistenz), um die Antwort zu finden. Wenn dein Local SEO gut ist, wirst du von Voice Assistants eher genannt.',
          'TnT Studio optimiert für lokale Voice Search: Google Business Profile mit vollständigen Informationen, lokale Keywords auf der Website, klare NAP-Information (Julius-Lucas-Weg 90, 42113 Wuppertal), FAQ-Seiten mit lokalen Fragen. Wenn jemand Siri nach einer Webdesign-Agentur in Wuppertal fragt, wollen wir genannt werden.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist Voice Search Optimierung?', answer: 'Voice Search Optimierung passt Inhalte für Sprachassistenten (Siri, Alexa, Google Assistant) an. Voice-Antworten sind 25-30 Wörter lang und kommen meistens von Featured Snippets. Optimierung: kurze direkte Antworten, konversationelle Keywords, Question-Headings.' },
      { question: 'Wie viele Menschen nutzen Voice Search?', answer: '50% der Deutschen nutzen regelmäßig Voice Search. Smart Speaker sind in Millionen Haushalten. Voice Search ist besonders für lokale Suchen relevant: "Webdesign-Agentur in Wuppertal".' },
      { question: 'Wie lang sollte eine Voice Search Antwort sein?', answer: '25-30 Wörter. Voice-Assistenten lesen die Antwort vor und stoppen. Beantworte die Frage direkt in 25-30 Wörtern, dann folge mit Details. Der erste Absatz nach der Frage-Überschrift ist entscheidend.' },
      { question: 'Was sind konversationelle Keywords?', answer: 'Konversationelle Keywords sind längere, natürlichere Suchanfragen — wie Menschen sprechen, nicht wie sie tippen. Statt "Webdesign Wuppertal" sagt man "Welche Webdesign-Agentur in Wuppertal ist empfehlenswert?". Optimiere für natürliche Sprache.' },
      { question: 'Was ist Speakable Schema?', answer: 'Speakable Schema markiert Absätze, die für Voice-Assistenten geeignet sind — kurz, klar, selbsterklärend. Google Assistant und Alexa nutzen Speakable, um Antworten vorzulesen. JSON-LD mit SpeakableSpecification.' },
      { question: 'Hilft Local SEO für Voice Search?', answer: 'Ja, massiv. Voice Search ist besonders für lokale Suchen relevant ("near me"). Google Business Profile, Bewertungen und NAP-Konsistenz sind entscheidend. Wenn dein Local SEO gut ist, wirst du von Voice Assistants eher genannt.' },
      { question: 'Kann ich Voice Search selbst optimieren?', answer: 'Grundlagen ja: FAQ-Seiten mit kurzen Antworten, Question-Headings, konversationelle Keywords. Speakable Schema und fortgeschrittene Optimierung brauchen Expertise. TnT Studio bietet Voice Search Optimierung als Teil der SEO-Strategie.' },
      { question: 'Bietet TnT Studio Voice Search Optimierung an?', answer: 'Ja. FAQ-Seiten mit 25-30-Wort-Antworten, Question-Headings, Speakable Schema, Local SEO für "near me" Suchen. Voice Search ist Teil unserer umfassenden SEO- und AEO-Strategie.' },
      { question: 'Welche Voice Assistants gibt es?', answer: 'Siri (Apple), Google Assistant (Android, Google Home), Alexa (Amazon Echo). Alle drei nutzen Web-Suche + AI, um Antworten zu finden. Optimierung für einen hilft für alle — die Strategien sind universell.' },
      { question: 'Wie messe ich Voice Search Erfolg?', answer: 'Schwierig — Voice Search liefert keine direkten Analytics. Indirekte Messung: Featured Snippets in Google Search Console, "People Also Ask" Boxen, Voice-Tests (frage Siri/Google Assistant nach deinen Keywords). TnT Studio führt Voice-Tests durch.' },
    ],
  },
  {
    slug: 'llms-txt-robots-txt-ai-crawler-konfiguration',
    title: 'llms.txt & robots.txt: AI-Crawler-Konfiguration für maximale Sichtbarkeit',
    excerpt: 'robots.txt und llms.txt steuern, wie AI-Crawler deine Website sehen. Falsch konfiguriert = unsichtbar für ChatGPT & Co. Hier ist die richtige Konfiguration.',
    date: '2025-05-05',
    author: 'Tiago Esteves',
    readingTime: '6 min',
    category: 'AI & SEO',
    emoji: '⚙️',
    sections: [
      {
        heading: 'robots.txt 2025: Mehr als Google',
        paragraphs: [
          'Die robots.txt steuert, welche Crawler deine Website besuchen dürfen. 2025 gibt es nicht mehr nur Googlebot — es gibt Dutzende von AI-Crawlern: GPTBot (OpenAI/ChatGPT), ClaudeBot (Anthropic/Claude), PerplexityBot, OAI-SearchBot, Claude-SearchBot, CCBot (Common Crawl), Google-Extended (Google AI). Jeder hat einen eigenen User-Agent.',
          'Der häufigste Fehler: Websites blockieren AI-Crawler aus "Datenschutz-Gründen" oder weil sie es nicht besser wissen. Das Ergebnis: ChatGPT, Perplexity und Gemini können die Website nicht lesen — und werden sie nicht zitieren. In einer Welt, in der 180+ Millionen Menschen AI-Suchmaschinen nutzen, ist das ein strategischer Fehler.',
        ],
      },
      {
        heading: 'Die richtige robots.txt-Konfiguration',
        paragraphs: [
          'Hier ist die robots.txt-Konfiguration, die wir bei TnT Studio verwenden:',
        ],
        list: [
          'User-agent: * → Allow: / (erlaube alle Crawler standardmäßig)',
          'User-agent: GPTBot → Allow: / (ChatGPT darf crawlen)',
          'User-agent: ClaudeBot → Allow: / (Claude darf crawlen)',
          'User-agent: PerplexityBot → Allow: / (Perplexity darf crawlen)',
          'User-agent: OAI-SearchBot → Allow: / (OpenAI Search darf crawlen)',
          'User-agent: Claude-SearchBot → Allow: / (Claude Search darf crawlen)',
          'User-agent: CCBot → Allow: / (Common Crawl darf crawlen)',
          'User-agent: Google-Extended → Allow: / (Google AI darf crawlen)',
          'Disallow: /admin/ und /draft/ (schütze interne Bereiche)',
          'Sitemap: https://tnt-studio.de/sitemap.xml',
        ],
      },
      {
        heading: 'llms.txt: Der neue Standard',
        paragraphs: [
          'llms.txt ist ein neuer Standard, der 2024 eingeführt wurde. Es ist eine Textdatei im Root-Verzeichnis (tnt-studio.de/llms.txt), die AI-Crawlern einen strukturierten Überblick deiner Website gibt. Ähnlich wie sitemap.xml für Google, aber für AI-Systeme.',
          'Inhalt der llms.txt: Unternehmensbeschreibung (wer bist du?), Services (was bietest du?), wichtige URLs (Startseite, Blog, Services), Blog-Themen (welche Themen behandelst du?), FAQ-Zusammenfassungen (welche Fragen beantwortest du?), Kontaktinformationen. AI-Crawler lesen diese Datei und bekommen einen schnellen, strukturierten Überblick.',
        ],
      },
      {
        heading: 'llms-full.txt: Die erweiterte Version',
        paragraphs: [
          'Zusätzlich zur llms.txt gibt es die llms-full.txt — eine erweiterte Version mit detaillierteren Informationen. Sie enthält: vollständige Service-Beschreibungen, Portfolio-Referenzen, Gründer-Informationen, detaillierte Blog-Zusammenfassungen, technische SEO-Informationen und Kontakt-Daten.',
          'TnT Studio hat beide Dateien: llms.txt (kompakter Überblick) und llms-full.txt (detaillierte Version). AI-Crawler können je nach Bedarf die kurze oder die lange Version lesen. Das verbessert die Wahrscheinlichkeit, dass AI-Systeme unsere Inhalte korrekt verstehen und zitieren.',
        ],
      },
    ],
    faqs: [
      { question: 'Was ist robots.txt?', answer: 'robots.txt steuert, welche Crawler deine Website besuchen dürfen. 2025 gibt es AI-Crawler wie GPTBot (ChatGPT), ClaudeBot, PerplexityBot. Wenn du sie blockierst, kann die AI deine Website nicht lesen und nicht zitieren.' },
      { question: 'Was ist llms.txt?', answer: 'llms.txt ist eine Textdatei im Root-Verzeichnis, die AI-Crawlern einen strukturierten Überblick deiner Website gibt. Enthält: Unternehmensbeschreibung, Services, wichtige URLs, Blog-Themen, FAQ-Zusammenfassungen. Ähnlich wie sitemap.xml, aber für AI.' },
      { question: 'Sollte ich AI-Crawler erlauben?', answer: 'Ja, wenn du in AI-Antworten sichtbar sein willst. Erlaube GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, CCBot, Google-Extended. Blockieren macht dich unsichtbar für 180+ Millionen AI-Nutzer.' },
      { question: 'Was ist der Unterschied zwischen llms.txt und llms-full.txt?', answer: 'llms.txt ist ein kompakter Überblick für AI-Crawler. llms-full.txt ist die erweiterte Version mit detaillierten Service-Beschreibungen, Portfolio-Referenzen, Blog-Zusammenfassungen. AI-Crawler können je nach Bedarf die kurze oder lange Version lesen.' },
      { question: 'Wo platziere ich llms.txt?', answer: 'Im Root-Verzeichnis deiner Website: tnt-studio.de/llms.txt. AI-Crawler suchen dort automatisch. Genau wie robots.txt und sitemap.xml.' },
      { question: 'Was passiert, wenn ich AI-Crawler blockiere?', answer: 'ChatGPT, Perplexity und Gemini können deine Website nicht lesen. Wenn jemand eine AI-Suchmaschine nach deinem Unternehmen fragt, wirst du nicht genannt. In einer Welt mit 180+ Millionen AI-Nutzern ist das ein strategischer Nachteil.' },
      { question: 'Ist es DSGVO-konform, AI-Crawler zu erlauben?', answer: 'Ja, wenn deine Datenschutzerklärung die Verarbeitung durch AI-Crawler erwähnt. AI-Crawler lesen öffentliche Inhalte — das ist rechtlich unbedenklich. TnT Studio erlaubt alle AI-Crawler und ist DSGVO-konform.' },
      { question: 'Wie erstelle ich eine llms.txt?', answer: 'Erstelle eine Textdatei mit: Unternehmensbeschreibung, Services, wichtige URLs, Blog-Themen, FAQ-Zusammenfassungen, Kontakt. Lade sie ins Root-Verzeichnis. TnT Studio erstellt llms.txt und llms-full.txt für jede Website.' },
      { question: 'Bietet TnT Studio robots.txt und llms.txt Konfiguration an?', answer: 'Ja, standardmäßig in jeder Website. Wir erlauben alle AI-Crawler, erstellen llms.txt und llms-full.txt, und konfigurieren robots.txt korrekt. Alles inklusive — kein Aufpreis.' },
      { question: 'Wie oft sollte ich llms.txt aktualisieren?', answer: 'Bei jedem größeren Content-Update — neue Blog-Posts, neue Services, neue FAQs. TnT Studio aktualisiert llms.txt automatisch mit neuen Inhalten. Die Datei sollte immer den aktuellen Stand deiner Website widerspiegeln.' },
    ],
  },
]
