export default {
  hero: {
    hi: "I am {name}",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "BUILDER · AGENTIC AI",
    headline: "Give me the problem. I ship the system.",
    sub: "17, coding since Class 8, running about six tabs in my head at once, and still shipping real things: production apps and AI agents for a startup, freelance clients, and 3,700+ people who installed something I built. Once I start, I finish. No matter what.",
    cta: {
      primary: "See the deployments",
      copied: "Copied",
      copyEmail: "Copy email",
    },
    card: {
      role: "Builder — Agentic AI Systems",
      base: "Base",
      local: "Local time",
      focus: "Focus",
      focusValue: "Agentic AI systems",
      status: "Status",
      statusValue: "Open to co-build",
    },
  },
  proof: {
    title: "Proof",
    items: {
      downloads: { label: "PyPI downloads", note: "Gemini Starter Agent, open source" },
      repos: { label: "Public repos", note: "shipped code on GitHub" },
      sites: { label: "Client sites", note: "shipped end to end at Reintechs" },
      hackathons: { label: "Hackathons", note: "finalist, top 10, 2nd place, since 2024" },
      age: { label: "Age", note: "coding since Class 8" },
    },
  },
  deployments: {
    eyebrow: "DEPLOYMENTS",
    title: "What actually shipped",
    lede: "Five systems, end to end. The friction that started them, the constraint I designed around, and what moved because of it.",
    origin: {
      self: "Self-initiated",
      hackathon: "Hackathon build",
    },
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
        friction: "Invoice-to-PO reconciliation was manual, line by line, the actual bottleneck the hackathon brief was built around.",
        constraint: "Invoices arrive as scans and photos with inconsistent formats. No clean text input, and no ground truth to grade the model's extraction against.",
        system: "LandingAI ADE pulled structured line items out of scanned PDFs, Gemini normalised them, and OpenAI Agents SDK agents matched invoices to purchase orders, with a Streamlit review layer for the exceptions the matching couldn't resolve alone.",
      },
      textbook: {
        friction: "Docs-style course content with no way to ask a question and get an answer grounded in the actual curriculum.",
        constraint: "Zero hosting budget, one person building three separate services (docs, auth, RAG) on three different platforms.",
        system: "A Docusaurus frontend on GitHub Pages, an Express + Better Auth service, and a FastAPI RAG backend on Railway using Cohere embeddings in Qdrant. Three services, three platforms, held together by one person.",
      },
      vault: {
        friction: "Signals worth acting on (email, WhatsApp, filesystem changes) scattered across channels with no single place to review and approve action.",
        constraint: "Any automation that writes on my behalf needs a human approval step before it touches anything real. No exceptions.",
        system: "Signal watchers feed a custom MCP server; Claude Code executes against an approval gate; every action lands in an Obsidian vault as a readable audit trail.",
      },
      "gemini-starter": {
        friction: "Every new agent project started with the same thirty minutes of provider boilerplate before you could write a single line of actual agent logic.",
        constraint: "Had to work across both Gemini and OpenAI without asking users to rewrite their agent code when they switched providers.",
        system: "One CLI command scaffolds a working agent, a provider shim swaps Gemini and OpenAI's Agents SDK underneath it, and you have a running agent in under a minute.",
      },
      hekto: {
        friction: "A hackathon brief for a full furniture e-commerce platform (catalog, cart, checkout, shipping) with nothing built yet.",
        constraint: "Six days, solo, with a GIAIC demo day at the end of it. No room for undocumented decisions or untested checkout flows.",
        system: "A Next.js 14 storefront with Redux for cart state, Sanity as the headless catalog, Clerk for auth, and ShipEngine for shipping. Built across six documented phases, from business goals to deployment, with 18 QA test cases logged across two structured CSV reports and a Core Web Vitals performance pass before shipping.",
      },
    },
  },
  capabilities: {
    eyebrow: "CAPABILITIES",
    title: "How I operate",
    lede: "Grouped by the problem each one solves, not by language, so it reads the way the work actually happens.",
    items: {
      ship: {
        title: "Ship the interface",
        body: "The layer a user actually touches: fast, accessible, and built with the same stack across every project so nothing is a one-off.",
      },
      reason: {
        title: "Reason over data",
        body: "Agents, retrieval, and multi-agent orchestration. The part of the system that decides, not just responds.",
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
    lede: "Five habits, each with a receipt. A principle without evidence is just a slogan.",
    receipt: "Receipt:",
    closer: "Everything above is checkable. That's on purpose. I'd rather you find the gaps yourself than take my word for it.",
    items: {
      friction: {
        title: "Start from friction",
        body: "I pick problems that have real friction behind them, not the ones that look good in a portfolio, then figure out how to build the solution.",
      },
      constraint: {
        title: "Constraints are the brief",
        body: "A three-hour build with a live clock is what pushed me to read the OpenAI Agents SDK source closely enough to contribute a feature back, not just use it.",
      },
      ownership: {
        title: "Own it end to end",
        body: "5–7 client sites, solo, from CMS to checkout to the write-up the client actually reads. No handoffs for the parts that aren't fun.",
      },
      systems: {
        title: "Think in systems",
        body: "Three services, three platforms, one person, because a real system is judged on what happens when a piece of it fails, not on the demo.",
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
    lede: "Two years, one timeline, newest first.",
    kinds: {
      won: "Won",
      shipped: "Shipped",
      published: "Published",
      joined: "Joined",
      started: "Started",
      attended: "Attended",
    },
    fieldNoteLabel: "Field note",
    entries: {
      khinext: {
        title: "KhiNext Tech Summit, Karachi",
        detail: "\"AI, Commerce & The Future Consumer\" panel.",
      },
      mlsa: {
        title: "Microsoft Student Ambassadors, Karachi",
        detail: "Event management team.",
      },
      naxasware: {
        title: "Naxasware, Full Stack Developer",
        detail: "Shipping production features with the founding team.",
      },
      landingai: {
        title: "AI Financial Hackathon, Submitted",
        detail: "LandingAI, DocSamajh AI.",
      },
      devfest: {
        title: "DevFest Karachi, GDG Kolachi's 10th anniversary",
        detail: "Community event at NASTP.",
      },
      ibm: {
        title: "Agentic AI Hackathon, Finalist",
        detail: "IBM watsonx, lablab.ai.",
      },
      hacktoberfest: {
        title: "Cloudways x DigitalOcean Hacktoberfest, 2nd Place",
        detail: "Three-hour build. Contributed a feature to OpenAI Agents SDK.",
        note: "Led the team. Two hours in, we had nothing working. The SDK didn't have what the brief needed. We found the gap, built around it, and didn't have a working demo until the last hour. 2nd place, standing next to Aaqib Sayed, the judge who called it.",
      },
      nasa: {
        title: "NASA Space Apps, Kalkia",
        detail: "Weather probability over 44 years of NASA data.",
        note: "First time being an ambassador for anything. I made a Google form, posted it around school, got 16 responses. Then built Kalkia for the challenge myself: weather probability from 44 years of NASA data.",
      },
      pypi: {
        title: "Gemini Starter Agent, PyPI",
        detail: "3,723+ downloads.",
      },
      reintechs: {
        title: "Reintechs, Web Developer (Freelance)",
        detail: "5 to 7 production client sites over five months.",
      },
      gdg: {
        title: "Google Build with AI, Top 10",
        detail: "GDG Kolachi, Hunar Bazaar.",
        note: "Top 10 out of the field, GDG Kolachi. We built Hunar Bazaar, a freelancing platform for rural Pakistani women, with AI-generated gig descriptions.",
      },
      innovista: {
        title: "National Agentic AI Hackathon, Innovista Indus",
        detail: "First hackathon. EdTech in Urdu, Sindhi, Punjabi, Pashto.",
        note: "My first hackathon. The idea was right, AI responses in Urdu, Sindhi, Punjabi, and Pashto, but I was nowhere near as fast or as organised as I am now. Everything since has been catching up to that idea.",
      },
      giaic: {
        title: "GIAIC, Agentic AI & Cloud Engineering",
        detail: "Alongside matriculation.",
      },
    },
  },
  roadmap: {
    eyebrow: "ROADMAP",
    body: "First on my roadmap: an AI-native company on a Forward-Deployed-Engineer Agent Factory (FDE-AF) model, agents shipped into real companies, not demos. Partnering with ambitious startups now is where that starts.",
    disclaimer: "Not a receipt like the rest of this page — this is direction.",
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
    roadmap: "Roadmap",
    contact: "Contact",
  },
  contact: {
    title: "Contact",
    letsConnect: "Bring me the problem",
    description: "If you're an AI startup, anywhere, looking for a long-term partner to own the system through to scale, not another hire, that's what I'm looking for. Reach out via {email} or {linkedin}.",
    emailLink: "email",
    linkedinLink: "LinkedIn",
  },
  common: {
    notAvailable: "N/A",
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist or may have been moved.",
    goToHome: "Go to Home",
    selectLanguage: "Select Language",
  },
} as const;
