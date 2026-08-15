export default {
  hero: {
    hi: "Ich bin {name}",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "FULL-STACK · AGENTIC AI",
    headline: "Ich baue Systeme, keine Einzelprojekte.",
    sub: "17, programmiere seit Klasse 8. Produktions-Apps und KI-Agenten für ein Startup, Freelance-Kunden und über 3.700 Menschen, die etwas installiert haben, das ich gebaut habe.",
    cta: {
      primary: "Projekte ansehen",
      copied: "Kopiert",
      copyEmail: "E-Mail kopieren",
    },
    card: {
      role: "Full-Stack Developer & Agentic AI Engineer",
      base: "Standort",
      local: "Ortszeit",
      focus: "Fokus",
      focusValue: "Agentic-AI-Systeme",
      status: "Status",
      statusValue: "Verfügbar",
    },
  },
  proof: {
    title: "Belege",
    items: {
      downloads: { label: "PyPI-Downloads", note: "Gemini Starter Agent, Open Source" },
      repos: { label: "Öffentliche Repos", note: "veröffentlichter Code auf GitHub" },
      sites: { label: "Kunden-Websites", note: "end-to-end umgesetzt bei Reintechs" },
      hackathons: { label: "Hackathons", note: "Finalist, Top 10, 2. Platz — seit 2024" },
      age: { label: "Alter", note: "programmiere seit Klasse 8" },
    },
  },
  deployments: {
    eyebrow: "PROJEKTE",
    title: "Was tatsächlich fertig wurde",
    lede: "Fünf Systeme, end-to-end — der Reibungspunkt, der sie ausgelöst hat, die Einschränkung, um die herum ich entworfen habe, und was sich dadurch bewegt hat.",
    beats: {
      friction: "Reibung",
      constraint: "Einschränkung",
      system: "System",
      impact: "Wirkung",
      stack: "Stack",
    },
    status: {
      won: "Gewonnen",
      live: "Live",
      shipped: "Fertig",
    },
    architecture: "Architektur",
    collapse: "Weniger anzeigen",
    expand: "Vollständige Aufschlüsselung lesen",
    items: {
      docsamajh: {
        friction: "Der Rechnungs-BON-Abgleich war manuell, Zeile für Zeile — genau der Engpass, um den der Hackathon-Brief herum gebaut war.",
        constraint: "Rechnungen kommen als Scans und Fotos mit uneinheitlichem Format — kein sauberer Texteingang und keine Ground Truth, um die Extraktion des Modells zu bewerten.",
        system: "LandingAI ADE zog strukturierte Positionen aus gescannten PDFs, Gemini normalisierte sie, und OpenAI-Agents-SDK-Agenten glichen Rechnungen mit Bestellungen ab — mit einer Streamlit-Prüfebene für die Ausnahmen, die der Abgleich allein nicht lösen konnte.",
      },
      textbook: {
        friction: "Kursinhalte im Doku-Stil ohne Möglichkeit, eine Frage zu stellen und eine Antwort zu bekommen, die im tatsächlichen Lehrplan verankert ist.",
        constraint: "Null Hosting-Budget, eine Person baut drei getrennte Dienste — Docs, Auth, RAG — auf drei verschiedenen Plattformen.",
        system: "Ein Docusaurus-Frontend auf GitHub Pages, ein Express + Better-Auth-Dienst und ein FastAPI-RAG-Backend auf Railway mit Cohere-Embeddings in Qdrant — drei Dienste, drei Plattformen, von einer Person zusammengehalten.",
      },
      vault: {
        friction: "Signale, auf die es sich zu reagieren lohnt — E-Mail, WhatsApp, Dateisystemänderungen — verteilt über mehrere Kanäle, ohne einen einzigen Ort, um Aktionen zu prüfen und freizugeben.",
        constraint: "Jede Automatisierung, die in meinem Namen schreibt, braucht einen menschlichen Freigabeschritt, bevor sie irgendetwas Reales berührt — ohne Ausnahme.",
        system: "Signal-Watcher speisen einen eigenen MCP-Server; Claude Code führt gegen ein Freigabe-Gate aus; jede Aktion landet als lesbarer Audit-Trail in einem Obsidian-Tresor.",
      },
      "gemini-starter": {
        friction: "Jedes neue Agent-Projekt begann mit denselben dreißig Minuten Provider-Boilerplate, bevor man auch nur eine Zeile echter Agent-Logik schreiben konnte.",
        constraint: "Musste sowohl mit Gemini als auch mit OpenAI funktionieren, ohne dass Nutzer ihren Agent-Code beim Providerwechsel neu schreiben mussten.",
        system: "Ein einziger CLI-Befehl generiert einen funktionierenden Agenten, eine Provider-Schicht tauscht darunter Gemini und OpenAIs Agents SDK aus, und man hat in unter einer Minute einen laufenden Agenten.",
      },
      hekto: {
        friction: "Ein Hackathon-Briefing für eine komplette Möbel-E-Commerce-Plattform — Katalog, Warenkorb, Checkout, Versand — noch nichts gebaut.",
        constraint: "Sechs Tage, allein, mit einem GIAIC-Demo-Day am Ende — kein Raum für undokumentierte Entscheidungen oder ungetestete Checkout-Abläufe.",
        system: "Ein Next.js-14-Storefront mit Redux für den Warenkorb-Zustand, Sanity als Headless-Katalog, Clerk für Auth und ShipEngine für Versand — gebaut in sechs dokumentierten Phasen, von den Geschäftszielen bis zum Deployment, mit 18 QA-Testfällen in zwei strukturierten CSV-Berichten und einer Core-Web-Vitals-Prüfung vor dem Launch.",
      },
    },
  },
  capabilities: {
    eyebrow: "FÄHIGKEITEN",
    title: "Wo ich nützlich bin",
    lede: "Gruppiert nach dem Problem, das jede löst — nicht nach Sprache, damit es so liest, wie die Arbeit tatsächlich abläuft.",
    items: {
      ship: {
        title: "Die Oberfläche liefern",
        body: "Die Schicht, die ein Nutzer wirklich berührt — schnell, barrierefrei und in jedem Projekt mit demselben Stack gebaut, damit nichts ein Einzelfall ist.",
      },
      reason: {
        title: "Über Daten nachdenken",
        body: "Agenten, Retrieval und Multi-Agenten-Orchestrierung — der Teil des Systems, der entscheidet, nicht nur antwortet.",
      },
      serve: {
        title: "Zuverlässig bereitstellen",
        body: "APIs, Auth und Speicher, die auch nach der Demo weiterlaufen.",
      },
      run: {
        title: "In Produktion betreiben",
        body: "Container, CI und Hosting, gewählt für Nullbudget und echte Verfügbarkeit, nicht für die Lebenslaufzeile.",
      },
    },
  },
  principles: {
    eyebrow: "METHODE",
    title: "Wie ich arbeite, wenn ich in ein Problem geworfen werde",
    lede: "Fünf Gewohnheiten, jede mit einem Beleg — ein Prinzip ohne Beweis ist nur ein Slogan.",
    receipt: "Beleg:",
    closer: "Alles oben ist überprüfbar. Das ist Absicht.",
    items: {
      friction: {
        title: "Bei der Reibung anfangen",
        body: "Ich wähle Probleme mit echter Reibung dahinter, nicht die, die im Portfolio gut aussehen — und finde dann heraus, wie man die Lösung baut.",
      },
      constraint: {
        title: "Einschränkungen sind der Auftrag",
        body: "Ein dreistündiger Build mit laufender Uhr hat mich dazu gebracht, den Quellcode des OpenAI Agents SDK genau genug zu lesen, um ein Feature beizutragen, statt es nur zu nutzen.",
      },
      ownership: {
        title: "Es end-to-end verantworten",
        body: "5–7 Kunden-Websites, allein — von CMS über Checkout bis zum Bericht, den der Kunde tatsächlich liest. Keine Übergabe für die unangenehmen Teile.",
      },
      systems: {
        title: "In Systemen denken",
        body: "Drei Dienste, drei Plattformen, eine Person — weil ein echtes System danach beurteilt wird, was passiert, wenn ein Teil ausfällt, nicht nach der Demo.",
      },
      measure: {
        title: "Es überprüfbar machen",
        body: "3.723+ PyPI-Downloads, nicht „von Entwicklern genutzt\". Wenn eine Zahl auf dieser Seite steht, ist es eine Zahl, die man nachprüfen kann.",
      },
    },
  },
  shipLog: {
    eyebrow: "LOG",
    title: "Alles, was fertig wurde",
    lede: "Zwei Jahre, eine Zeitleiste — neueste zuerst.",
    kinds: {
      won: "Gewonnen",
      shipped: "Fertig",
      published: "Veröffentlicht",
      joined: "Beigetreten",
      started: "Begonnen",
    },
  },
  palette: {
    label: "Befehlspalette",
    placeholder: "Abschnitte, Kontakt, Einstellungen durchsuchen…",
    close: "Schließen",
    empty: "Keine Ergebnisse für „{query}\"",
    groups: {
      jump: "Springen zu",
      contact: "Kontakt",
      settings: "Einstellungen",
      language: "Sprache",
    },
    actions: {
      copyEmail: "E-Mail kopieren",
      copied: "Kopiert",
      github: "GitHub öffnen",
      linkedin: "LinkedIn öffnen",
      light: "Zum hellen Modus wechseln",
      dark: "Zum dunklen Modus wechseln",
    },
    legend: {
      move: "Navigieren",
      select: "Auswählen",
    },
  },
  nav: {
    method: "Methode",
    deployments: "Projekte",
    capabilities: "Fähigkeiten",
    log: "Log",
    contact: "Kontakt",
  },
  about: {
    title: "Über mich",
    summary: "17, programmiere seit Klasse 8. Ich baue produktionsreife Web-Apps und KI-Agenten, die reale Probleme lösen. Bei Naxasware habe ich Full-Stack-Features im gesamten MERN-Stack geliefert. Bei Reintechs habe ich 5-7 Kunden-Websites gebaut, darunter ein Next.js + Headless WooCommerce Storefront. Ich habe ein Open-Source-CLI-Tool (Gemini Starter Agent) mit 3.723+ PyPI-Downloads erstellt. Ich habe DocSamajh AI für den LandingAI Financial Hackathon gebaut, ein Rechnungs-BON-Abgleichssystem, das den manuellen Aufwand um 70% reduzierte. Ich baue derzeit KI-native Lernplattformen mit RAG-Chatbots und Multi-Agenten-Systemen. Ich denke in Systemen, nicht in Einzelbauten.",
  },
  work: {
    title: "Berufserfahrung",
    present: "Gegenwart",
    items: {
      naxasware: {
        title: "Full Stack Developer (Praktikum)",
        description: "Produktions-Features im gesamten MERN-Stack geliefert. Debugging von Ende zu Ende, rechtzeitig geliefert.",
      },
      reintechs: {
        title: "Web Developer (Freelance)",
        description: "5-7 Kunden-Websites gebaut und bereitgestellt. Next.js + Headless WooCommerce Storefront. Dankschreiben der Geschäftsführung.",
      },
    },
  },
  education: {
    title: "Bildung",
    items: {
      giaic: {
        degree: "Agentic AI & Cloud Engineering - die technische Grundlage für meine Agentur aufbauen",
      },
      nasra: {
        degree: "Matriculation (AKU-EB Board) - Schule beenden während ich Produktionssysteme baue und Hackathons gewinne",
      },
    },
  },
  skills: {
    title: "Technische Fähigkeiten",
  },
  favouriteTools: {
    title: "Lieblingswerkzeuge",
  },
  certifications: {
    title: "Zertifikate & Auszeichnungen",
  },
  volunteering: {
    title: "Ehrenamt",
  },
  contact: {
    title: "Kontakt",
    letsConnect: "Verbinden wir uns",
    description: "Haben Sie ein Projekt oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich per {email} oder {linkedin}. Ich bin offen für Vertragsarbeit.",
    emailLink: "E-Mail",
    linkedinLink: "LinkedIn",
  },
  hackathons: {
    title: "Hackathons & Auszeichnungen",
    tagline: "Problem zuerst, Code danach",
    description: "Sechs Hackathons seit 2024 — Top 10 bei Google Build with AI, 2. bei Hacktoberfest, Finalist bei IBM watsonx. Ich wähle Probleme mit echtem Reibungspunkt - dann finde ich heraus, wie ich die Lösung baue.",
    items: {
      landingai: {
        description: "DocSamajh AI: Multi-Agenten Rechnungs-BON-Abgleich mit 85-90% Genauigkeit. Eingereicht, ohne Platzierung.",
      },
      hacktoberfest: {
        description: "2. Platz. Dreistündiger Hackathon, alles in der letzten Stunde gebaut.",
      },
      gdg: {
        description: "Top-10-Finalistenteam. Hunar Bazaar: Freelancing-Plattform für ländliche pakistanische Frauen.",
      },
      ibm: {
        description: "Finalist. Multi-Agenten-Orchestrierungssystem.",
      },
      nasa: {
        description: "Kalkia: Wetterwahrscheinlichkeitsprüfer mit 44 Jahren NASA-Daten.",
      },
      innovista: {
        description: "EdTech-App mit KI-Antworten in Urdu, Sindhi, Punjabi, Pashto. Erster Hackathon.",
      },
    },
  },
  projects: {
    title: "Projekte",
    tagline: "Ausgewählte Projekte",
    description: "Produktions-Apps, Open-Source-Tools und KI-Systeme - was ich wirklich gebaut habe.",
    imageAlt: "{title} Bild",
    openLink: "{title} öffnen",
    items: {
      textbook: {
        description: "KI-native Lernplattform mit eingebettetem RAG-Chatbot. 3-Service-System: Docusaurus, FastAPI RAG, Express Auth.",
      },
      aiVault: {
        description: "Human-in-the-Loop-Automatisierung. Obsidian-Tresor + Claude Code + MCP Server. Genehmigungsgesteuerte Aktionen.",
      },
      geminiAgent: {
        description: "Open-Source-CLI für KI-Agenten-Projekte. OpenAI Agents SDK + Multi-Provider. 3.723+ PyPI-Downloads.",
      },
      docSamajh: {
        description: "Gebaut für den LandingAI Financial Hackathon. Rechnungs-BON-Abgleich mit LandingAI ADE, Gemini und OpenAI Agents SDK.",
      },
      shooter: {
        description: "Browser-basiertes Shooter-Spiel. Canvas-Rendering, Kollisionserkennung, Echtzeitphysik.",
      },
    },
  },
  common: {
    notAvailable: "N/V",
    pageNotFound: "Seite nicht gefunden",
    pageNotFoundDescription: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    goToHome: "Zur Startseite",
    selectLanguage: "Sprache wählen",
  },
} as const;
