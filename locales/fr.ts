export default {
  hero: {
    hi: "Je suis {name}",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "FULL-STACK · IA AGENTIQUE",
    headline: "Je construis des systèmes, pas des projets isolés.",
    sub: "17 ans, je code depuis la classe 8. Applications de production et agents IA pour une startup, des clients freelance, et plus de 3 700 personnes qui ont installé quelque chose que j'ai livré.",
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
      hackathons: { label: "Hackathons", note: "finaliste, top 10, 2ème place — depuis 2024" },
      age: { label: "Âge", note: "je code depuis la classe 8" },
    },
  },
  deployments: {
    eyebrow: "RÉALISATIONS",
    title: "Ce qui a vraiment été livré",
    lede: "Cinq systèmes, de bout en bout — le point de friction qui les a déclenchés, la contrainte autour de laquelle j'ai conçu, et ce qui a changé grâce à ça.",
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
        friction: "La réconciliation facture-BON était manuelle, ligne par ligne — le vrai goulot d'étranglement autour duquel le brief du hackathon était construit.",
        constraint: "Les factures arrivent sous forme de scans et de photos avec des formats incohérents — pas de texte propre en entrée, et aucune vérité terrain pour évaluer l'extraction du modèle.",
        system: "LandingAI ADE extrayait les lignes structurées des PDF scannés, Gemini les normalisait, et des agents OpenAI Agents SDK associaient les factures aux bons de commande — avec une couche de révision Streamlit pour les exceptions que le rapprochement ne pouvait pas résoudre seul.",
      },
      textbook: {
        friction: "Un contenu de cours façon documentation, sans moyen de poser une question et d'obtenir une réponse ancrée dans le programme réel.",
        constraint: "Budget d'hébergement nul, une seule personne construisant trois services distincts — docs, auth, RAG — sur trois plateformes différentes.",
        system: "Un frontend Docusaurus sur GitHub Pages, un service Express + Better Auth, et un backend RAG FastAPI sur Railway utilisant des embeddings Cohere dans Qdrant — trois services, trois plateformes, tenus ensemble par une seule personne.",
      },
      vault: {
        friction: "Des signaux qui méritent une action — email, WhatsApp, changements de fichiers — dispersés sur plusieurs canaux, sans endroit unique pour les examiner et approuver une action.",
        constraint: "Toute automatisation qui écrit en mon nom a besoin d'une étape d'approbation humaine avant de toucher à quoi que ce soit de réel — sans exception.",
        system: "Des veilleurs de signaux alimentent un serveur MCP personnalisé ; Claude Code exécute contre une porte d'approbation ; chaque action atterrit dans un coffre Obsidian comme piste d'audit lisible.",
      },
      "gemini-starter": {
        friction: "Chaque nouveau projet d'agent commençait par les mêmes trente minutes de code standard fournisseur avant de pouvoir écrire une seule ligne de logique d'agent réelle.",
        constraint: "Devait fonctionner avec Gemini et OpenAI sans demander aux utilisateurs de réécrire leur code d'agent en changeant de fournisseur.",
        system: "Une seule commande CLI génère un agent fonctionnel, une couche fournisseur bascule entre Gemini et l'Agents SDK d'OpenAI en dessous, et vous avez un agent qui tourne en moins d'une minute.",
      },
      hekto: {
        friction: "Un brief de hackathon pour une plateforme e-commerce de meubles complète — catalogue, panier, paiement, expédition — sans rien de construit encore.",
        constraint: "Six jours, en solo, avec un demo day GIAIC à la clé — aucune place pour des décisions non documentées ou des parcours de paiement non testés.",
        system: "Une boutique Next.js 14 avec Redux pour l'état du panier, Sanity comme catalogue headless, Clerk pour l'authentification, et ShipEngine pour l'expédition — construite en six phases documentées, des objectifs métier au déploiement, avec 18 cas de test QA consignés dans deux rapports CSV structurés et une analyse des Core Web Vitals avant la mise en ligne.",
      },
    },
  },
  capabilities: {
    eyebrow: "COMPÉTENCES",
    title: "En quoi je suis utile",
    lede: "Regroupées par problème résolu — pas par langage, pour refléter la façon dont le travail se déroule réellement.",
    items: {
      ship: {
        title: "Livrer l'interface",
        body: "La couche que l'utilisateur touche vraiment — rapide, accessible, construite avec le même stack sur chaque projet pour que rien ne soit un cas isolé.",
      },
      reason: {
        title: "Raisonner sur les données",
        body: "Agents, recherche documentaire, orchestration multi-agents — la partie du système qui décide, pas seulement qui répond.",
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
    lede: "Cinq habitudes, chacune avec une preuve — un principe sans preuve n'est qu'un slogan.",
    receipt: "Preuve :",
    closer: "Tout ce qui précède est vérifiable. C'est voulu.",
    items: {
      friction: {
        title: "Partir de la friction",
        body: "Je choisis des problèmes qui ont une vraie friction derrière eux, pas ceux qui font bien dans un portfolio — puis je trouve comment construire la solution.",
      },
      constraint: {
        title: "Les contraintes sont le brief",
        body: "Un build de trois heures avec un chrono en direct est ce qui m'a poussé à lire le code source de l'OpenAI Agents SDK assez attentivement pour y contribuer une fonctionnalité, pas juste l'utiliser.",
      },
      ownership: {
        title: "Assumer de bout en bout",
        body: "5 à 7 sites clients, en solo — du CMS au paiement jusqu'au compte-rendu que le client lit vraiment. Pas de transfert pour les parties moins amusantes.",
      },
      systems: {
        title: "Penser en systèmes",
        body: "Trois services, trois plateformes, une seule personne — parce qu'un vrai système se juge sur ce qui se passe quand un morceau tombe en panne, pas sur la démo.",
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
    lede: "Deux ans, une seule chronologie — du plus récent au plus ancien.",
    kinds: {
      won: "Gagné",
      shipped: "Livré",
      published: "Publié",
      joined: "Rejoint",
      started: "Débuté",
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
  about: {
    title: "À propos",
    summary: "17 ans, je code depuis la classe 8. Je construis des applications web complètes et des agents IA qui résolvent des problèmes concrets. Chez Naxasware, j'ai livré des fonctionnalités complètes sur le stack MERN. Chez Reintechs, j'ai construit 5-7 sites clients, dont une boutique Next.js + WooCommerce. J'ai créé un outil CLI open-source (Gemini Starter Agent) avec 3 723+ téléchargements PyPI. J'ai construit DocSamajh AI pour le Hackathon Financier LandingAI, un système de réconciliation facture-BON qui a réduit l'effort manuel de 70%. Je construis actuellement des plateformes d'apprentissage natives IA avec chatbots RAG et systèmes multi-agents. Je pense en systèmes, pas en constructions isolées.",
  },
  work: {
    title: "Expérience professionnelle",
    present: "Présent",
    items: {
      naxasware: {
        title: "Développeur Full Stack (Stage)",
        description: "Fonctionnalités de production livrées sur le stack MERN. Débogage de bout en bout, livraison à temps en équipe distante.",
      },
      reintechs: {
        title: "Développeur Web (Freelance)",
        description: "5-7 sites clients construits et déployés. Boutique Next.js + WooCommerce. Lettre de félicitations de la direction.",
      },
    },
  },
  education: {
    title: "Formation",
    items: {
      giaic: {
        degree: "IA Agentic & Ingénierie Cloud - construire la fondation technique pour mon agence",
      },
      nasra: {
        degree: "Matriculation (AKU-EB Board) - terminer l'école tout en construisant des systèmes de production et en gagnant des hackathons",
      },
    },
  },
  skills: {
    title: "Compétences techniques",
  },
  favouriteTools: {
    title: "Outils préférés",
  },
  certifications: {
    title: "Certifications et prix",
  },
  volunteering: {
    title: "Bénévolat",
  },
  contact: {
    title: "Contact",
    letsConnect: "Connectons-nous",
    description: "Vous avez un projet ou voulez collaborer ? Contactez-moi via {email} ou {linkedin}. Je suis ouvert au travail contractuel.",
    emailLink: "email",
    linkedinLink: "LinkedIn",
  },
  hackathons: {
    title: "Hackathons et prix",
    tagline: "Problème d'abord, code ensuite",
    description: "Six hackathons depuis 2024 — Top 10 chez Google Build with AI, 2ème chez Hacktoberfest, finaliste chez IBM watsonx. Je choisis des problèmes qui ont de la friction réelle - puis je trouve comment construire la solution.",
    items: {
      landingai: {
        description: "DocSamajh AI : correspondance multi-agents facture-BON à 85-90% de précision. Soumis, sans classement.",
      },
      hacktoberfest: {
        description: "2ème Place. Hackathon de trois heures, tout construit dans la dernière heure.",
      },
      gdg: {
        description: "Équipe finaliste Top 10. Hunar Bazaar : plateforme de freelancing pour femmes rurales pakistanaises.",
      },
      ibm: {
        description: "Finaliste. Système d'orchestration multi-agents.",
      },
      nasa: {
        description: "Kalkia : vérificateur de probabilité météo avec 44 ans de données NASA.",
      },
      innovista: {
        description: "Application EdTech avec réponses IA en ourdou, sindhi, pendjabi, pashto. Premier hackathon.",
      },
    },
  },
  projects: {
    title: "Projets",
    tagline: "Projets en vedette",
    description: "Applications complètes, outils open-source et systèmes IA - ce que j'ai réellement construit.",
    imageAlt: "Image de {title}",
    openLink: "Ouvrir {title}",
    items: {
      textbook: {
        description: "Plateforme d'apprentissage native IA avec chatbot RAG intégré. Système 3 services : Docusaurus, FastAPI RAG, Express auth.",
      },
      aiVault: {
        description: "Automatisation humain-dans-la-boucle. Coffre Obsidian + Claude Code + MCP. Actions avec approbation.",
      },
      geminiAgent: {
        description: "CLI open-source pour scaffolding de projets agents IA. OpenAI Agents SDK + multi-provider. 3 723+ téléchargements PyPI.",
      },
      docSamajh: {
        description: "Construit pour le Hackathon Financier LandingAI. Réconciliation facture-BON avec LandingAI ADE, Gemini et OpenAI Agents SDK.",
      },
      shooter: {
        description: "Jeu de tir dans le navigateur. Rendu Canvas, détection de collisions, physique temps réel.",
      },
    },
  },
  common: {
    notAvailable: "N/A",
    pageNotFound: "Page non trouvée",
    pageNotFoundDescription: "La page que vous recherchez n'existe pas ou a été déplacée.",
    goToHome: "Retour à l'accueil",
    selectLanguage: "Choisir la langue",
  },
} as const;
