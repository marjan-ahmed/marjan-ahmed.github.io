export default {
  hero: {
    hi: "I am {name}",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "FULL-STACK · AGENTIC AI",
    headline: "I build systems, not one-off builds.",
    sub: "17, coding since Class 8. Production apps and AI agents for a startup, freelance clients, and 3,700+ people who installed something I shipped.",
    cta: {
      primary: "See the deployments",
      copied: "Copied",
      copyEmail: "Copy email",
    },
    card: {
      role: "Full-Stack Developer & Agentic AI Engineer",
      base: "Base",
      local: "Local time",
      focus: "Focus",
      focusValue: "Agentic AI systems",
      status: "Status",
      statusValue: "Open to work",
    },
  },
  proof: {
    title: "Proof",
    items: {
      downloads: { label: "PyPI downloads", note: "Gemini Starter Agent, open source" },
      repos: { label: "Public repos", note: "shipped code on GitHub" },
      sites: { label: "Client sites", note: "shipped end to end at Reintechs" },
      hackathons: { label: "Hackathons", note: "finalist, top 10, 2nd place — since 2024" },
      age: { label: "Age", note: "coding since Class 8" },
    },
  },
  deployments: {
    eyebrow: "DEPLOYMENTS",
    title: "What actually shipped",
    lede: "Five systems, end to end — the friction that started them, the constraint I designed around, and what moved because of it.",
    beats: {
      friction: "Friction",
      constraint: "Constraint",
      system: "System",
      impact: "Impact",
      stack: "Stack",
    },
    status: {
      won: "Won",
      live: "Live",
      shipped: "Shipped",
    },
    architecture: "Architecture",
    collapse: "Show less",
    expand: "Read the full breakdown",
    items: {
      docsamajh: {
        friction: "Invoice-to-PO reconciliation was manual, line by line — the actual bottleneck the hackathon brief was built around.",
        constraint: "Invoices arrive as scans and photos with inconsistent formats — no clean text input, and no ground truth to grade the model's extraction against.",
        system: "LandingAI ADE pulled structured line items out of scanned PDFs, Gemini normalised them, and OpenAI Agents SDK agents matched invoices to purchase orders — with a Streamlit review layer for the exceptions the matching couldn't resolve alone.",
      },
      textbook: {
        friction: "Docs-style course content with no way to ask a question and get an answer grounded in the actual curriculum.",
        constraint: "Zero hosting budget, one person building three separate services — docs, auth, RAG — on three different platforms.",
        system: "A Docusaurus frontend on GitHub Pages, an Express + Better Auth service, and a FastAPI RAG backend on Railway using Cohere embeddings in Qdrant — three services, three platforms, held together by one person.",
      },
      vault: {
        friction: "Signals worth acting on — email, WhatsApp, filesystem changes — scattered across channels with no single place to review and approve action.",
        constraint: "Any automation that writes on my behalf needs a human approval step before it touches anything real — no exceptions.",
        system: "Signal watchers feed a custom MCP server; Claude Code executes against an approval gate; every action lands in an Obsidian vault as a readable audit trail.",
      },
      "gemini-starter": {
        friction: "Every new agent project started with the same thirty minutes of provider boilerplate before you could write a single line of actual agent logic.",
        constraint: "Had to work across both Gemini and OpenAI without asking users to rewrite their agent code when they switched providers.",
        system: "One CLI command scaffolds a working agent, a provider shim swaps Gemini and OpenAI's Agents SDK underneath it, and you have a running agent in under a minute.",
      },
      hekto: {
        friction: "A hackathon brief for a full furniture e-commerce platform — catalog, cart, checkout, shipping — with nothing built yet.",
        constraint: "Six days, solo, with a GIAIC demo day at the end of it — no room for undocumented decisions or untested checkout flows.",
        system: "A Next.js 14 storefront with Redux for cart state, Sanity as the headless catalog, Clerk for auth, and ShipEngine for shipping — built across six documented phases, from business goals to deployment, with 18 QA test cases logged across two structured CSV reports and a Core Web Vitals performance pass before shipping.",
      },
    },
  },
  capabilities: {
    eyebrow: "CAPABILITIES",
    title: "How I'm useful",
    lede: "Grouped by the problem each one solves — not by language, so it reads the way the work actually happens.",
    items: {
      ship: {
        title: "Ship the interface",
        body: "The layer a user actually touches — fast, accessible, and built with the same stack across every project so nothing is a one-off.",
      },
      reason: {
        title: "Reason over data",
        body: "Agents, retrieval, and multi-agent orchestration — the part of the system that decides, not just responds.",
      },
      serve: {
        title: "Serve it reliably",
        body: "APIs, auth, and storage that keep running after the demo is over.",
      },
      run: {
        title: "Run it in production",
        body: "Containers, CI, and hosting chosen for zero budget and real uptime, not for the resume line.",
      },
    },
  },
  principles: {
    eyebrow: "METHOD",
    title: "How I work when I'm dropped into a problem",
    lede: "Five habits, each with a receipt — a principle without evidence is just a slogan.",
    receipt: "Receipt:",
    closer: "Everything above is checkable. That's on purpose.",
    items: {
      friction: {
        title: "Start from friction",
        body: "I pick problems that have real friction behind them, not the ones that look good in a portfolio — then figure out how to build the solution.",
      },
      constraint: {
        title: "Constraints are the brief",
        body: "A three-hour build with a live clock is what pushed me to read the OpenAI Agents SDK source closely enough to contribute a feature back, not just use it.",
      },
      ownership: {
        title: "Own it end to end",
        body: "5–7 client sites, solo — from CMS to checkout to the write-up the client actually reads. No handoffs for the parts that aren't fun.",
      },
      systems: {
        title: "Think in systems",
        body: "Three services, three platforms, one person — because a real system is judged on what happens when a piece of it fails, not on the demo.",
      },
      measure: {
        title: "Make it checkable",
        body: "3,723+ PyPI downloads, not \"used by developers.\" If a number is on this site, it's a number you can go verify.",
      },
    },
  },
  shipLog: {
    eyebrow: "LOG",
    title: "Everything that shipped",
    lede: "Two years, one timeline — newest first.",
    kinds: {
      won: "Won",
      shipped: "Shipped",
      published: "Published",
      joined: "Joined",
      started: "Started",
    },
  },
  palette: {
    label: "Command palette",
    placeholder: "Search sections, contact, settings…",
    close: "Close",
    empty: "No results for \"{query}\"",
    groups: {
      jump: "Jump to",
      contact: "Contact",
      settings: "Settings",
      language: "Language",
    },
    actions: {
      copyEmail: "Copy email",
      copied: "Copied",
      github: "Open GitHub",
      linkedin: "Open LinkedIn",
      light: "Switch to light mode",
      dark: "Switch to dark mode",
    },
    legend: {
      move: "Navigate",
      select: "Select",
    },
  },
  nav: {
    method: "Method",
    deployments: "Deployments",
    capabilities: "Capabilities",
    log: "Log",
    contact: "Contact",
  },
  about: {
    title: "About",
    summary: "17, coding since Class 8. I build production web apps and AI agents that solve real problems. At Naxasware, I shipped full-stack features across the MERN stack for a startup. At Reintechs, I built 5-7 client websites end-to-end, including a Next.js + headless WooCommerce storefront. I built an open-source CLI tool (Gemini Starter Agent) that crossed 3,723+ PyPI downloads. Built DocSamajh AI for the LandingAI Financial Hackathon — an invoice-to-PO reconciliation system that cut manual effort by 70%. Currently building AI-native learning platforms with RAG chatbots and multi-agent systems. I picked Next.js, FastAPI, OpenAI Agents SDK, and MCP because they ladder toward my goal of building an IT agency that serves international clients. I think in systems, not one-off builds.",
  },
  work: {
    title: "Work Experience",
    present: "Present",
    items: {
      naxasware: {
        title: "Full Stack Developer (Internship)",
        description: "Shipped production features across the full MERN stack. Debugged end-to-end, delivered on time in a remote team.",
      },
      reintechs: {
        title: "Web Developer (Freelance)",
        description: "Built and deployed 5-7 production client websites end-to-end. Next.js + headless WooCommerce storefront. Written commendation from leadership.",
      },
    },
  },
  education: {
    title: "Education",
    items: {
      giaic: {
        degree: "Agentic AI & Cloud Engineering - building the technical foundation for my agency",
      },
      nasra: {
        degree: "Matriculation (AKU-EB Board) - finishing school while building production systems and winning hackathons",
      },
    },
  },
  skills: {
    title: "Technical Skills",
  },
  favouriteTools: {
    title: "Favourite Tools",
  },
  certifications: {
    title: "Certifications & Awards",
  },
  volunteering: {
    title: "Volunteering",
  },
  contact: {
    title: "Contact",
    letsConnect: "Let's Connect",
    description: "Got a project idea or want to work together? Reach out via {email} or connect on {linkedin}. I'm open to contract work right now and full-time roles.",
    emailLink: "email",
    linkedinLink: "LinkedIn",
  },
  hackathons: {
    title: "Hackathons & Awards",
    tagline: "Problem-First, Code-Second",
    description: "Six hackathons since 2024 — Top 10 at Google Build with AI, 2nd at Hacktoberfest, finalist at IBM watsonx. I pick problems that have real friction - then I figure out how to build the solution.",
    items: {
      landingai: {
        description: "DocSamajh AI: multi-agent invoice-to-PO matching at 85-90% accuracy. LandingAI ADE + Gemini + OpenAI Agents SDK. Submitted, no placement.",
      },
      hacktoberfest: {
        description: "2nd Place. Three-hour hackathon, built everything in the last hour. Contributed feature to OpenAI Agents SDK.",
      },
      gdg: {
        description: "Top 10 finalist team. Hunar Bazaar: freelancing platform for rural Pakistani women with AI-generated gig descriptions.",
      },
      ibm: {
        description: "Finalist. Multi-agent orchestration system.",
      },
      nasa: {
        description: "Kalkia: weather probability checker using 44 years of NASA data.",
      },
      innovista: {
        description: "EdTech app with AI responses in Urdu, Sindhi, Punjabi, Pashto. First hackathon.",
      },
    },
  },
  projects: {
    title: "Projects",
    tagline: "Featured Work",
    description: "Production apps, open-source tools, and AI systems - the things I've actually shipped, not just planned.",
    imageAlt: "{title} image",
    openLink: "Open {title}",
    items: {
      textbook: {
        description: "AI-native learning platform with embedded RAG chatbot. 3-service system: Docusaurus, FastAPI RAG backend, Express auth service.",
      },
      aiVault: {
        description: "Human-in-the-loop automation. Obsidian vault + Claude Code + MCP server. Approval-gated actions.",
      },
      geminiAgent: {
        description: "Open-source CLI for scaffolding AI agent projects. OpenAI Agents SDK + multi-provider support. 3,723+ PyPI downloads.",
      },
      docSamajh: {
        description: "Built for the LandingAI Financial Hackathon. Invoice-to-PO reconciliation with LandingAI ADE, Gemini, and OpenAI Agents SDK. 70% reduction in manual effort.",
      },
      shooter: {
        description: "Browser-based shooter game. Canvas rendering, collision detection, real-time physics.",
      },
    },
  },
  common: {
    notAvailable: "N/A",
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist or may have been moved.",
    goToHome: "Go to Home",
    selectLanguage: "Select Language",
  },
} as const;
