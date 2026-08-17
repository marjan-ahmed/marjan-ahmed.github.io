export default {
  hero: {
    hi: "Je suis {name}",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "FULL-STACK · IA AGENTIQUE",
    headline: "Je construis des systèmes, pas des projets isolés.",
    sub: "17 ans, je code depuis la classe 8, avec environ six onglets ouverts dans ma tête en permanence, et je livre quand même des choses réelles : applications de production et agents IA pour une startup, des clients freelance, et plus de 3 700 personnes qui ont installé quelque chose que j'ai construit. Une fois que je commence, je termine. Quoi qu'il arrive.",
    cta: {
      primary: "Voir les réalisations",
      copied: "Copié",
      copyEmail: "Copier l'email",
    },
    card: {
      role: "Développeur Full-Stack & Ingénieur IA Agentique",
      base: "Base",
      local: "Heure locale",
      focus: "Focus",
      focusValue: "Systèmes d'IA agentique",
      status: "Statut",
      statusValue: "Disponible",
    },
  },
  proof: {
    title: "Preuves",
    items: {
      downloads: { label: "Téléchargements PyPI", note: "Gemini Starter Agent, open source" },
      repos: { label: "Dépôts publics", note: "code livré sur GitHub" },
      sites: { label: "Sites clients", note: "livrés de bout en bout chez Reintechs" },
      hackathons: { label: "Hackathons", note: "finaliste, top 10, 2ème place, depuis 2024" },
      age: { label: "Âge", note: "je code depuis la classe 8" },
    },
  },
  deployments: {
    eyebrow: "RÉALISATIONS",
    title: "Ce qui a vraiment été livré",
    lede: "Cinq systèmes, de bout en bout. Le point de friction qui les a déclenchés, la contrainte autour de laquelle j'ai conçu, et ce qui a changé grâce à ça.",
    beats: {
      friction: "Friction",
      constraint: "Contrainte",
      system: "Système",
      impact: "Impact",
      stack: "Stack",
    },
    status: {
      won: "Gagné",
      live: "En ligne",
      shipped: "Livré",
    },
    architecture: "Architecture",
    collapse: "Voir moins",
    expand: "Lire le détail complet",
    items: {
      docsamajh: {
        friction: "La réconciliation facture-BON était manuelle, ligne par ligne, le vrai goulot d'étranglement autour duquel le brief du hackathon était construit.",
        constraint: "Les factures arrivent sous forme de scans et de photos avec des formats incohérents. Pas de texte propre en entrée, et aucune vérité terrain pour évaluer l'extraction du modèle.",
        system: "LandingAI ADE extrayait les lignes structurées des PDF scannés, Gemini les normalisait, et des agents OpenAI Agents SDK associaient les factures aux bons de commande, avec une couche de révision Streamlit pour les exceptions que le rapprochement ne pouvait pas résoudre seul.",
      },
      textbook: {
        friction: "Un contenu de cours façon documentation, sans moyen de poser une question et d'obtenir une réponse ancrée dans le programme réel.",
        constraint: "Budget d'hébergement nul, une seule personne construisant trois services distincts (docs, auth, RAG) sur trois plateformes différentes.",
        system: "Un frontend Docusaurus sur GitHub Pages, un service Express + Better Auth, et un backend RAG FastAPI sur Railway utilisant des embeddings Cohere dans Qdrant. Trois services, trois plateformes, tenus ensemble par une seule personne.",
      },
      vault: {
        friction: "Des signaux qui méritent une action (email, WhatsApp, changements de fichiers) dispersés sur plusieurs canaux, sans endroit unique pour les examiner et approuver une action.",
        constraint: "Toute automatisation qui écrit en mon nom a besoin d'une étape d'approbation humaine avant de toucher à quoi que ce soit de réel. Sans exception.",
        system: "Des veilleurs de signaux alimentent un serveur MCP personnalisé ; Claude Code exécute contre une porte d'approbation ; chaque action atterrit dans un coffre Obsidian comme piste d'audit lisible.",
      },
      "gemini-starter": {
        friction: "Chaque nouveau projet d'agent commençait par les mêmes trente minutes de code standard fournisseur avant de pouvoir écrire une seule ligne de logique d'agent réelle.",
        constraint: "Devait fonctionner avec Gemini et OpenAI sans demander aux utilisateurs de réécrire leur code d'agent en changeant de fournisseur.",
        system: "Une seule commande CLI génère un agent fonctionnel, une couche fournisseur bascule entre Gemini et l'Agents SDK d'OpenAI en dessous, et vous avez un agent qui tourne en moins d'une minute.",
      },
      hekto: {
        friction: "Un brief de hackathon pour une plateforme e-commerce de meubles complète (catalogue, panier, paiement, expédition) sans rien de construit encore.",
        constraint: "Six jours, en solo, avec un demo day GIAIC à la clé. Aucune place pour des décisions non documentées ou des parcours de paiement non testés.",
        system: "Une boutique Next.js 14 avec Redux pour l'état du panier, Sanity comme catalogue headless, Clerk pour l'authentification, et ShipEngine pour l'expédition. Construite en six phases documentées, des objectifs métier au déploiement, avec 18 cas de test QA consignés dans deux rapports CSV structurés et une analyse des Core Web Vitals avant la mise en ligne.",
      },
    },
  },
  capabilities: {
    eyebrow: "COMPÉTENCES",
    title: "En quoi je suis utile",
    lede: "Regroupées par problème résolu, pas par langage, pour refléter la façon dont le travail se déroule réellement.",
    items: {
      ship: {
        title: "Livrer l'interface",
        body: "La couche que l'utilisateur touche vraiment: rapide, accessible, construite avec le même stack sur chaque projet pour que rien ne soit un cas isolé.",
      },
      reason: {
        title: "Raisonner sur les données",
        body: "Agents, recherche documentaire, orchestration multi-agents. La partie du système qui décide, pas seulement qui répond.",
      },
      serve: {
        title: "Servir de façon fiable",
        body: "APIs, authentification et stockage qui continuent de tourner après la démo.",
      },
      run: {
        title: "Faire tourner en production",
        body: "Conteneurs, CI et hébergement choisis pour un budget nul et une vraie disponibilité, pas pour la ligne sur le CV.",
      },
    },
  },
  principles: {
    eyebrow: "MÉTHODE",
    title: "Comment je travaille quand on me confie un problème",
    lede: "Cinq habitudes, chacune avec une preuve. Un principe sans preuve n'est qu'un slogan.",
    receipt: "Preuve :",
    closer: "Tout ce qui précède est vérifiable. C'est voulu. Je préfère que vous trouviez vous-même les failles plutôt que de me croire sur parole.",
    items: {
      friction: {
        title: "Partir de la friction",
        body: "Je choisis des problèmes qui ont une vraie friction derrière eux, pas ceux qui font bien dans un portfolio, puis je trouve comment construire la solution.",
      },
      constraint: {
        title: "Les contraintes sont le brief",
        body: "Un build de trois heures avec un chrono en direct est ce qui m'a poussé à lire le code source de l'OpenAI Agents SDK assez attentivement pour y contribuer une fonctionnalité, pas juste l'utiliser.",
      },
      ownership: {
        title: "Assumer de bout en bout",
        body: "5 à 7 sites clients, en solo, du CMS au paiement jusqu'au compte-rendu que le client lit vraiment. Pas de transfert pour les parties moins amusantes.",
      },
      systems: {
        title: "Penser en systèmes",
        body: "Trois services, trois plateformes, une seule personne, parce qu'un vrai système se juge sur ce qui se passe quand un morceau tombe en panne, pas sur la démo.",
      },
      measure: {
        title: "Le rendre vérifiable",
        body: "3 723+ téléchargements PyPI, pas « utilisé par des développeurs ». Si un chiffre est sur ce site, c'est un chiffre que vous pouvez aller vérifier.",
      },
    },
  },
  shipLog: {
    eyebrow: "JOURNAL",
    title: "Tout ce qui a été livré",
    lede: "Deux ans, une seule chronologie, du plus récent au plus ancien.",
    kinds: {
      won: "Gagné",
      shipped: "Livré",
      published: "Publié",
      joined: "Rejoint",
      started: "Débuté",
      attended: "Participé",
    },
    fieldNoteLabel: "Note de terrain",
    entries: {
      khinext: {
        title: "Sommet Tech KhiNext, Karachi",
        detail: "Panel « IA, Commerce et Futur Consommateur ».",
      },
      mlsa: {
        title: "Ambassadeurs Étudiants Microsoft, Karachi",
        detail: "Équipe de gestion d'événements.",
      },
      naxasware: {
        title: "Naxasware, Développeur Full Stack",
        detail: "Livrer des fonctionnalités de production avec l'équipe fondatrice.",
      },
      landingai: {
        title: "Hackathon AI Financial, Soumis",
        detail: "LandingAI, DocSamajh AI.",
      },
      devfest: {
        title: "DevFest Karachi, 10e anniversaire de GDG Kolachi",
        detail: "Événement communautaire à NASTP.",
      },
      ibm: {
        title: "Hackathon Agentic AI, Finaliste",
        detail: "IBM watsonx, lablab.ai.",
      },
      hacktoberfest: {
        title: "Cloudways x DigitalOcean Hacktoberfest, 2e place",
        detail: "Build de trois heures. Contribution d'une fonctionnalité à l'OpenAI Agents SDK.",
        note: "Chef d'équipe. Deux heures après, rien ne fonctionnait. Le SDK n'avait pas ce que le brief nécessitait. Nous avons trouvé la faille, contourné le problème, et n'avons pas de démo fonctionnelle avant la dernière heure. 2e place, à côté d'Aaqib Sayed, le juge qui l'a dit.",
      },
      nasa: {
        title: "NASA Space Apps, Kalkia",
        detail: "Probabilité météo sur 44 ans de données NASA.",
        note: "Première fois ambassadeur pour quoi que ce soit. J'ai fait un formulaire Google, l'ai partagé dans l'école, obtenu 16 réponses. Puis j'ai construit Kalkia pour le défi moi-même : probabilité météo sur 44 ans de données NASA.",
      },
      pypi: {
        title: "Gemini Starter Agent, PyPI",
        detail: "Plus de 3 723 téléchargements.",
      },
      reintechs: {
        title: "Reintechs, Développeur Web (Freelance)",
        detail: "5 à 7 sites clients en production sur cinq mois.",
      },
      gdg: {
        title: "Google Build with AI, Top 10",
        detail: "GDG Kolachi, Hunar Bazaar.",
        note: "Top 10 sur le terrain, GDG Kolachi. Nous avons construit Hunar Bazaar, une plateforme de freelancing pour les femmes rurales pakistanaises, avec des descriptions de gigs générées par IA.",
      },
      innovista: {
        title: "Hackathon National Agentic AI, Innovista Indus",
        detail: "Premier hackathon. EdTech en ourdou, sindhi, pendjabi, pachto.",
        note: "Mon premier hackathon. L'idée était bonne, des réponses IA en ourdou, sindhi, pendjabi et pachto, mais je n'étais pas aussi rapide ou organisé que maintenant. Tout depuis a été pour rattraper cette idée.",
      },
      giaic: {
        title: "GIAIC, Agentic AI et Cloud Engineering",
        detail: "En parallèle du lycée.",
      },
    },
  },
  palette: {
    label: "Palette de commandes",
    placeholder: "Rechercher sections, contact, réglages…",
    close: "Fermer",
    empty: "Aucun résultat pour « {query} »",
    groups: {
      jump: "Aller à",
      contact: "Contact",
      settings: "Réglages",
      language: "Langue",
    },
    actions: {
      copyEmail: "Copier l'email",
      copied: "Copié",
      github: "Ouvrir GitHub",
      linkedin: "Ouvrir LinkedIn",
      light: "Passer en mode clair",
      dark: "Passer en mode sombre",
    },
    legend: {
      move: "Naviguer",
      select: "Sélectionner",
    },
  },
  nav: {
    method: "Méthode",
    deployments: "Réalisations",
    capabilities: "Compétences",
    log: "Journal",
    contact: "Contact",
  },
  contact: {
    title: "Contact",
    letsConnect: "Connectons-nous",
    description: "Vous avez un projet ou voulez collaborer ? Contactez-moi via {email} ou {linkedin}. Je suis ouvert au travail contractuel.",
    emailLink: "email",
    linkedinLink: "LinkedIn",
  },
  common: {
    notAvailable: "N/A",
    pageNotFound: "Page non trouvée",
    pageNotFoundDescription: "La page que vous recherchez n'existe pas ou a été déplacée.",
    goToHome: "Retour à l'accueil",
    selectLanguage: "Choisir la langue",
  },
} as const;
