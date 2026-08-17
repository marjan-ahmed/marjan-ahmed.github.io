export default {
  hero: {
    hi: "Ich bin {name}",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "FULL-STACK · AGENTIC AI",
    headline: "Ich baue Systeme, keine Einzelprojekte.",
    sub: "17, programmiere seit Klasse 8, mit ungefähr sechs offenen Tabs im Kopf gleichzeitig, und liefere trotzdem echte Dinge: Produktions-Apps und KI-Agenten für ein Startup, Freelance-Kunden und über 3.700 Menschen, die etwas installiert haben, das ich gebaut habe. Wenn ich anfange, ziehe ich es durch. Egal was kommt.",
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
      hackathons: { label: "Hackathons", note: "Finalist, Top 10, 2. Platz, seit 2024" },
      age: { label: "Alter", note: "programmiere seit Klasse 8" },
    },
  },
  deployments: {
    eyebrow: "PROJEKTE",
    title: "Was tatsächlich fertig wurde",
    lede: "Fünf Systeme, end-to-end. Der Reibungspunkt, der sie ausgelöst hat, die Einschränkung, um die herum ich entworfen habe, und was sich dadurch bewegt hat.",
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
        friction: "Der Rechnungs-BON-Abgleich war manuell, Zeile für Zeile, genau der Engpass, um den der Hackathon-Brief herum gebaut war.",
        constraint: "Rechnungen kommen als Scans und Fotos mit uneinheitlichem Format. Kein sauberer Texteingang und keine Ground Truth, um die Extraktion des Modells zu bewerten.",
        system: "LandingAI ADE zog strukturierte Positionen aus gescannten PDFs, Gemini normalisierte sie, und OpenAI-Agents-SDK-Agenten glichen Rechnungen mit Bestellungen ab, mit einer Streamlit-Prüfebene für die Ausnahmen, die der Abgleich allein nicht lösen konnte.",
      },
      textbook: {
        friction: "Kursinhalte im Doku-Stil ohne Möglichkeit, eine Frage zu stellen und eine Antwort zu bekommen, die im tatsächlichen Lehrplan verankert ist.",
        constraint: "Null Hosting-Budget, eine Person baut drei getrennte Dienste (Docs, Auth, RAG) auf drei verschiedenen Plattformen.",
        system: "Ein Docusaurus-Frontend auf GitHub Pages, ein Express + Better-Auth-Dienst und ein FastAPI-RAG-Backend auf Railway mit Cohere-Embeddings in Qdrant. Drei Dienste, drei Plattformen, von einer Person zusammengehalten.",
      },
      vault: {
        friction: "Signale, auf die es sich zu reagieren lohnt (E-Mail, WhatsApp, Dateisystemänderungen) verteilt über mehrere Kanäle, ohne einen einzigen Ort, um Aktionen zu prüfen und freizugeben.",
        constraint: "Jede Automatisierung, die in meinem Namen schreibt, braucht einen menschlichen Freigabeschritt, bevor sie irgendetwas Reales berührt. Ohne Ausnahme.",
        system: "Signal-Watcher speisen einen eigenen MCP-Server; Claude Code führt gegen ein Freigabe-Gate aus; jede Aktion landet als lesbarer Audit-Trail in einem Obsidian-Tresor.",
      },
      "gemini-starter": {
        friction: "Jedes neue Agent-Projekt begann mit denselben dreißig Minuten Provider-Boilerplate, bevor man auch nur eine Zeile echter Agent-Logik schreiben konnte.",
        constraint: "Musste sowohl mit Gemini als auch mit OpenAI funktionieren, ohne dass Nutzer ihren Agent-Code beim Providerwechsel neu schreiben mussten.",
        system: "Ein einziger CLI-Befehl generiert einen funktionierenden Agenten, eine Provider-Schicht tauscht darunter Gemini und OpenAIs Agents SDK aus, und man hat in unter einer Minute einen laufenden Agenten.",
      },
      hekto: {
        friction: "Ein Hackathon-Briefing für eine komplette Möbel-E-Commerce-Plattform (Katalog, Warenkorb, Checkout, Versand) noch nichts gebaut.",
        constraint: "Sechs Tage, allein, mit einem GIAIC-Demo-Day am Ende. Kein Raum für undokumentierte Entscheidungen oder ungetestete Checkout-Abläufe.",
        system: "Ein Next.js-14-Storefront mit Redux für den Warenkorb-Zustand, Sanity als Headless-Katalog, Clerk für Auth und ShipEngine für Versand. Gebaut in sechs dokumentierten Phasen, von den Geschäftszielen bis zum Deployment, mit 18 QA-Testfällen in zwei strukturierten CSV-Berichten und einer Core-Web-Vitals-Prüfung vor dem Launch.",
      },
    },
  },
  capabilities: {
    eyebrow: "FÄHIGKEITEN",
    title: "Wo ich nützlich bin",
    lede: "Gruppiert nach dem Problem, das jede löst, nicht nach Sprache, damit es so liest, wie die Arbeit tatsächlich abläuft.",
    items: {
      ship: {
        title: "Die Oberfläche liefern",
        body: "Die Schicht, die ein Nutzer wirklich berührt: schnell, barrierefrei und in jedem Projekt mit demselben Stack gebaut, damit nichts ein Einzelfall ist.",
      },
      reason: {
        title: "Über Daten nachdenken",
        body: "Agenten, Retrieval und Multi-Agenten-Orchestrierung. Der Teil des Systems, der entscheidet, nicht nur antwortet.",
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
    lede: "Fünf Gewohnheiten, jede mit einem Beleg. Ein Prinzip ohne Beweis ist nur ein Slogan.",
    receipt: "Beleg:",
    closer: "Alles oben ist überprüfbar. Das ist Absicht. Ich würde lieber wollen, dass Sie die Lücken selbst finden, als mir aufs Wort zu glauben.",
    items: {
      friction: {
        title: "Bei der Reibung anfangen",
        body: "Ich wähle Probleme mit echter Reibung dahinter, nicht die, die im Portfolio gut aussehen, und finde dann heraus, wie man die Lösung baut.",
      },
      constraint: {
        title: "Einschränkungen sind der Auftrag",
        body: "Ein dreistündiger Build mit laufender Uhr hat mich dazu gebracht, den Quellcode des OpenAI Agents SDK genau genug zu lesen, um ein Feature beizutragen, statt es nur zu nutzen.",
      },
      ownership: {
        title: "Es end-to-end verantworten",
        body: "5–7 Kunden-Websites, allein, von CMS über Checkout bis zum Bericht, den der Kunde tatsächlich liest. Keine Übergabe für die unangenehmen Teile.",
      },
      systems: {
        title: "In Systemen denken",
        body: "Drei Dienste, drei Plattformen, eine Person, weil ein echtes System danach beurteilt wird, was passiert, wenn ein Teil ausfällt, nicht nach der Demo.",
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
    lede: "Zwei Jahre, eine Zeitleiste, neueste zuerst.",
    kinds: {
      won: "Gewonnen",
      shipped: "Fertig",
      published: "Veröffentlicht",
      joined: "Beigetreten",
      started: "Begonnen",
      attended: "Teilgenommen",
    },
    fieldNoteLabel: "Notiz vom Feld",
    entries: {
      khinext: {
        title: "KhiNext Tech Summit, Karachi",
        detail: "Panel « KI, Handel und der Zukunftskonsument ».",
      },
      mlsa: {
        title: "Microsoft Student Ambassadors, Karachi",
        detail: "Eventmanagement-Team.",
      },
      naxasware: {
        title: "Naxasware, Full Stack Entwickler",
        detail: "Produktionsfeatures mit dem Gründerteam ausliefern.",
      },
      landingai: {
        title: "AI Financial Hackathon, Eingereicht",
        detail: "LandingAI, DocSamajh AI.",
      },
      devfest: {
        title: "DevFest Karachi, 10. Jubiläum von GDG Kolachi",
        detail: "Community-Event bei NASTP.",
      },
      ibm: {
        title: "Agentic AI Hackathon, Finalist",
        detail: "IBM watsonx, lablab.ai.",
      },
      hacktoberfest: {
        title: "Cloudways x DigitalOcean Hacktoberfest, 2. Platz",
        detail: "Drei Stunden Build. Ein Feature zum OpenAI Agents SDK beigetragen.",
        note: "Teamleiter. Nach zwei Stunden funktionierte nichts. Das SDK hatte nicht, was der Brief brauchte. Wir fanden die Lücke, bauten drumherum herum, und hatten erst in der letzten Stunde eine funktionierende Demo. 2. Platz, neben Aaqib Sayed, dem Richter, der es nannte.",
      },
      nasa: {
        title: "NASA Space Apps, Kalkia",
        detail: "Wetterwahrscheinlichkeit über 44 Jahre NASA-Daten.",
        note: "Erstes Mal als Botschafter für irgendetwas. Ich habe ein Google-Formular erstellt, in der Schule verteilt, 16 Antworten bekommen. Dann habe ich Kalkia für die Challenge selbst gebaut: Wetterwahrscheinlichkeit aus 44 Jahren NASA-Daten.",
      },
      pypi: {
        title: "Gemini Starter Agent, PyPI",
        detail: "Über 3.723 Downloads.",
      },
      reintechs: {
        title: "Reintechs, Webentwickler (Freelance)",
        detail: "5 bis 7 Produktions-Clientseiten über fünf Monate.",
      },
      gdg: {
        title: "Google Build with AI, Top 10",
        detail: "GDG Kolachi, Hunar Bazaar.",
        note: "Top 10 im Feld, GDG Kolachi. Wir bauten Hunar Bazaar, eine Freelancing-Plattform für ländliche pakistanische Frauen, mit KI-generierten Gig-Beschreibungen.",
      },
      innovista: {
        title: "Nationaler Agentic AI Hackathon, Innovista Indus",
        detail: "Erster Hackathon. EdTech in Urdu, Sindhi, Punjabi, Pashto.",
        note: "Mein erster Hackathon. Die Idee war richtig, KI-Antworten in Urdu, Sindhi, Punjabi und Pashto, aber ich war nowhere near so schnell oder organisiert wie jetzt. Seitdem hol ich diese Idee auf.",
      },
      giaic: {
        title: "GIAIC, Agentic AI & Cloud Engineering",
        detail: "Neben dem Abitur.",
      },
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
  contact: {
    title: "Kontakt",
    letsConnect: "Verbinden wir uns",
    description: "Haben Sie ein Projekt oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich per {email} oder {linkedin}. Ich bin offen für Vertragsarbeit.",
    emailLink: "E-Mail",
    linkedinLink: "LinkedIn",
  },
  common: {
    notAvailable: "N/V",
    pageNotFound: "Seite nicht gefunden",
    pageNotFoundDescription: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    goToHome: "Zur Startseite",
    selectLanguage: "Sprache wählen",
  },
} as const;
