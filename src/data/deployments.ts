/**
 * Deployments = projects told the way an engineer who gets sent into a problem
 * tells them. Every one has the same anatomy:
 *
 *   FRICTION   what actually hurt, observed in the real workflow
 *   CONSTRAINT what I could not change, and had to design around
 *   SYSTEM     what I built, as architecture
 *   IMPACT     what moved, in numbers
 *
 * Prose for those four lives in `locales/*` so it translates.
 * Everything structural — stack, architecture graph, metrics, links — lives here.
 */

import { getAssetPath } from "@/lib/basePath";

export type NodeKind =
  | "source" // raw input entering the system
  | "service" // something I wrote and deployed
  | "model" // an LLM / embedding call
  | "store" // persistence
  | "surface"; // where a human actually touches it

export interface ArchNode {
  id: string;
  label: string;
  /** Concrete tech, shown small under the label. */
  detail?: string;
  kind: NodeKind;
}

export interface Metric {
  value: string;
  label: string;
  /** Marks the single number that matters most in this deployment. */
  headline?: boolean;
}

export interface DeploymentLink {
  label: string;
  href: string;
  kind: "source" | "live" | "package";
}

export interface Deployment {
  id: string;
  name: string;
  /** Short English classification, shown as a mono tag. */
  context: string;
  year: string;
  /** Drives the status dot colour + label key. */
  status: "won" | "live" | "shipped";
  /** Who initiated it — self-directed build vs. a hackathon/competition brief. */
  origin: "self" | "hackathon";
  /** Awards render as a signal-coloured ribbon. */
  award?: string;
  /** Real screenshot of the shipped product — shown as evidence, not decoration. */
  image?: string;
  /** Screenshot's real pixel dimensions, so the browser can reserve its aspect ratio before it loads (avoids layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  stack: string[];
  arch: ArchNode[];
  metrics: Metric[];
  links: DeploymentLink[];
}

export const DEPLOYMENTS: Deployment[] = [
  {
    id: "textbook",
    name: "Physical AI & Humanoid Robotics",
    context: "AI-native learning platform",
    year: "2025 — present",
    status: "live",
    origin: "self",
    image: getAssetPath("projects/textbook-hero.png"),
    imageWidth: 2560,
    imageHeight: 1600,
    stack: [
      "Docusaurus",
      "FastAPI",
      "UV",
      "Cohere",
      "Qdrant",
      "Express",
      "Better Auth",
      "Neon Postgres",
    ],
    arch: [
      { id: "book", label: "Course frontend", detail: "Docusaurus · Pages", kind: "surface" },
      { id: "auth", label: "Auth service", detail: "Express · Better Auth", kind: "service" },
      { id: "rag", label: "RAG API", detail: "FastAPI · UV · Railway", kind: "service" },
      { id: "embed", label: "Embeddings", detail: "Cohere", kind: "model" },
      { id: "qdrant", label: "Vector store", detail: "Qdrant", kind: "store" },
    ],
    metrics: [
      { value: "3", label: "services, 3 platforms", headline: true },
      { value: "0", label: "hosting budget" },
      { value: "5", label: "curriculum domains" },
    ],
    links: [
      { label: "Source", href: "https://github.com/marjan-ahmed/humanoid-textbook", kind: "source" },
    ],
  },
  {
    id: "gemini-starter",
    name: "Gemini Starter Agent",
    context: "Open source · PyPI",
    year: "Sep 2025",
    status: "live",
    origin: "self",
    image: getAssetPath("projects/gemini-pypi.png"),
    imageWidth: 2560,
    imageHeight: 1600,
    stack: ["Python", "OpenAI Agents SDK", "Gemini API", "CLI", "PyPI"],
    arch: [
      { id: "cmd", label: "One command", detail: "pip install · run", kind: "source" },
      { id: "scaffold", label: "Scaffolder", detail: "project template", kind: "service" },
      { id: "provider", label: "Provider shim", detail: "Gemini · OpenAI", kind: "model" },
      { id: "agent", label: "Running agent", detail: "Agents SDK", kind: "surface" },
    ],
    metrics: [
      { value: "3,723+", label: "PyPI downloads", headline: true },
      { value: "<60s", label: "to a running agent" },
      { value: "160+", label: "public repos behind it" },
    ],
    links: [
      {
        label: "PyPI",
        href: "https://pypi.org/project/gemini-starter-agent/",
        kind: "package",
      },
      { label: "Source", href: "https://github.com/marjan-ahmed/gemini-starter-agent", kind: "source" },
    ],
  },
  {
    id: "docsamajh",
    name: "DocSamajh AI",
    context: "AI Financial Hackathon · LandingAI",
    year: "Dec 2025",
    status: "shipped",
    origin: "hackathon",
    image: getAssetPath("projects/docsamajh-ui.png"),
    imageWidth: 2560,
    imageHeight: 1600,
    stack: [
      "Python",
      "LandingAI ADE",
      "Google Gemini",
      "OpenAI Agents SDK",
      "Streamlit",
    ],
    arch: [
      { id: "docs", label: "Scanned invoices", detail: "PDF · image", kind: "source" },
      { id: "ade", label: "Structure extraction", detail: "LandingAI ADE", kind: "model" },
      { id: "norm", label: "Line-item normaliser", detail: "Gemini", kind: "model" },
      { id: "agents", label: "Matching agents", detail: "OpenAI Agents SDK", kind: "service" },
      { id: "review", label: "Exception review", detail: "Streamlit", kind: "surface" },
    ],
    metrics: [
      { value: "85–90%", label: "match accuracy", headline: true },
      { value: "~70%", label: "manual effort removed" },
    ],
    links: [
      { label: "Source", href: "https://github.com/marjan-ahmed/docsamajh-ai", kind: "source" },
    ],
  },
  {
    id: "vault",
    name: "AI Employee Vault",
    context: "GIAIC Hackathon 0",
    year: "2025",
    status: "shipped",
    origin: "hackathon",
    image: getAssetPath("projects/ai-vault.png"),
    imageWidth: 1312,
    imageHeight: 816,
    stack: ["Python", "MCP", "Claude Code", "Obsidian", "FastAPI"],
    arch: [
      { id: "watch", label: "Signal watchers", detail: "Gmail · WhatsApp · FS", kind: "source" },
      { id: "mcp", label: "Custom MCP server", detail: "Model Context Protocol", kind: "service" },
      { id: "worker", label: "Execution worker", detail: "Claude Code", kind: "model" },
      { id: "gate", label: "Approval gate", detail: "human-in-the-loop", kind: "service" },
      { id: "vault", label: "Obsidian vault", detail: "audit trail", kind: "surface" },
    ],
    metrics: [
      { value: "100%", label: "writes gated on approval", headline: true },
      { value: "3", label: "channels watched" },
      { value: "1", label: "readable audit trail" },
    ],
    links: [
      { label: "Source", href: "https://github.com/marjan-ahmed/ai_employee_vault", kind: "source" },
    ],
  },
  {
    id: "hekto",
    name: "Hekto Marketplace",
    context: "Hackathon Sprint · GIAIC",
    year: "Jan–Feb 2025",
    status: "shipped",
    award: "Featured — GIAIC Demo Day",
    origin: "hackathon",
    image: getAssetPath("projects/hekto-store.png"),
    imageWidth: 2412,
    imageHeight: 1600,
    stack: ["Next.js 14", "TypeScript", "Sanity CMS", "Clerk", "Redux", "ShipEngine", "Tailwind CSS"],
    arch: [
      { id: "sanity", label: "Product catalog", detail: "Sanity CMS", kind: "source" },
      { id: "next", label: "Storefront", detail: "Next.js 14 · Redux", kind: "surface" },
      { id: "auth", label: "Auth", detail: "Clerk", kind: "service" },
      { id: "ship", label: "Shipping", detail: "ShipEngine", kind: "service" },
      { id: "qa", label: "QA reports", detail: "18 cases · CSV", kind: "store" },
    ],
    metrics: [
      { value: "6 days", label: "zero to deployed", headline: true },
      { value: "18", label: "QA test cases logged" },
      { value: "8/8", label: "checkout flow tests passed" },
    ],
    links: [
      { label: "Live Demo", href: "https://hekto-store.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/marjan-ahmed/Marketplace_Technical_Foundation-Hekto", kind: "source" },
    ],
  },
];

/* ------------------------------------------------------------------
   Capability matrix — grouped by the problem it solves, not by language.
   A recruiter scanning for "React" still finds it; an engineer reading
   it sees someone who thinks in outcomes.
   ------------------------------------------------------------------ */

export interface Capability {
  id: string;
  tools: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "ship",
    tools: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],
  },
  {
    id: "reason",
    tools: [
      "OpenAI Agents SDK",
      "Model Context Protocol",
      "RAG",
      "Cohere",
      "Qdrant",
      "Multi-agent orchestration",
      "Claude Code",
    ],
  },
  {
    id: "serve",
    tools: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "Supabase",
      "Neon Postgres",
      "Sanity CMS",
    ],
  },
  {
    id: "run",
    tools: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Railway",
      "GitHub Pages",
      "FastAPI Cloud",
    ],
  },
];

/* ------------------------------------------------------------------
   Ship log — everything that left my machine, in order.
   ------------------------------------------------------------------ */

export type LogKind = "won" | "shipped" | "published" | "joined" | "started" | "attended";

export interface LogEntry {
  id: string;
  date: string;
  /** Sort key, newest first. */
  sort: number;
  kind: LogKind;
  title: string;
  detail?: string;
  /** Real photos, shown as small receipts — evidence, not decoration. */
  images?: { src: string; alt: string }[];
  /**
   * A handful of entries get the full reticle-framed treatment instead of
   * small thumbnails — `images[0]` is used as the photo. Meant for two or
   * three a year, not every entry; the rest stay compact.
   */
  note?: string;
  noteMeta?: string;
}

export const SHIP_LOG: LogEntry[] = [
  {
    id: "khinext",
    date: "Jun 2026",
    sort: 202606,
    kind: "attended",
    title: "KhiNext Tech Summit — Karachi",
    detail: "\"AI, Commerce & The Future Consumer\" panel.",
    images: [
      { src: getAssetPath("khinext_event.jpg"), alt: "At the KhiNext tech summit in Karachi" },
    ],
  },
  {
    id: "mlsa",
    date: "Apr 2026",
    sort: 202604,
    kind: "joined",
    title: "Microsoft Student Ambassadors, Karachi",
    detail: "Event management team",
  },
  {
    id: "naxasware",
    date: "May 2026",
    sort: 202605,
    kind: "joined",
    title: "Naxasware — Full Stack Developer",
    detail: "Shipping production features with the founding team",
  },
  {
    id: "landingai",
    date: "Dec 2025",
    sort: 202512,
    kind: "shipped",
    title: "AI Financial Hackathon — Submitted",
    detail: "LandingAI · DocSamajh AI",
  },
  {
    id: "devfest",
    date: "Dec 2025",
    sort: 202512.5,
    kind: "attended",
    title: "DevFest Karachi — GDG Kolachi's 10th anniversary",
    detail: "Community event at NASTP.",
    images: [
      { src: getAssetPath("devfest-event.jpg"), alt: "At DevFest Karachi, GDG Kolachi's 10th anniversary event" },
    ],
  },
  {
    id: "ibm",
    date: "Nov 2025",
    sort: 202511,
    kind: "won",
    title: "Agentic AI Hackathon — Finalist",
    detail: "IBM watsonx · lablab.ai",
  },
  {
    id: "hacktoberfest",
    date: "Oct 2025",
    sort: 202510,
    kind: "won",
    title: "Cloudways × DigitalOcean Hacktoberfest — 2nd Place",
    detail: "Three-hour build. Contributed a feature to OpenAI Agents SDK.",
    images: [
      { src: getAssetPath("hacktoberfest-2nd-place.webp"), alt: "Team announced 2nd place at Hacktoberfest, with judge Aaqib Sayed" },
      { src: getAssetPath("hacktoberfest-working.jpg"), alt: "Team working together mid-hackathon" },
      { src: getAssetPath("hacktoberfest-sdk-contribution.webp"), alt: "GitHub thread on the OpenAI Agents SDK contribution" },
    ],
    noteMeta: "Won · Oct 2025 · Karachi",
    note: "Led the team. Two hours in, we had nothing working — the SDK didn't have what the brief needed. We found the gap, built around it, and didn't have a working demo until the last hour. 2nd place, standing next to Aaqib Sayed, the judge who called it.",
  },
  {
    id: "nasa",
    date: "Oct 2025",
    sort: 202509.5,
    kind: "shipped",
    title: "NASA Space Apps — Kalkia",
    detail: "Weather probability over 44 years of NASA data",
    images: [
      { src: getAssetPath("nasa-spaceapps-presentation.jpg"), alt: "Presenting Kalkia in the NASA Space Apps Karachi Discord" },
    ],
    noteMeta: "Shipped · Oct 2025 · Karachi",
    note: "First time being an ambassador for anything — I made a Google form, posted it around school, got 16 responses. Then built Kalkia for the challenge myself: weather probability from 44 years of NASA data.",
  },
  {
    id: "pypi",
    date: "Sep 2025",
    sort: 202509,
    kind: "published",
    title: "Gemini Starter Agent → PyPI",
    detail: "3,723+ downloads",
  },
  {
    id: "reintechs",
    date: "Jul 2025",
    sort: 202507,
    kind: "joined",
    title: "Reintechs — Web Developer (Freelance)",
    detail: "5–7 production client sites over five months",
  },
  {
    id: "gdg",
    date: "Jun 2024",
    sort: 202406,
    kind: "won",
    title: "Google Build with AI — Top 10",
    detail: "GDG Kolachi · Hunar Bazaar",
    images: [
      { src: getAssetPath("gdg-buildwithai-presenting.jpg"), alt: "Team presenting Hunar Bazaar at Build with AI" },
      { src: getAssetPath("gdg-buildwithai-team.jpg"), alt: "Team behind Hunar Bazaar at Build with AI" },
    ],
    noteMeta: "Won · Jun 2024 · Karachi",
    note: "Top 10 out of the field, GDG Kolachi. We built Hunar Bazaar — a freelancing platform for rural Pakistani women, with AI-generated gig descriptions.",
  },
  {
    id: "innovista",
    date: "2024",
    sort: 202412,
    kind: "shipped",
    title: "National Agentic AI Hackathon — Innovista Indus",
    detail: "First hackathon. EdTech in Urdu, Sindhi, Punjabi, Pashto.",
    images: [
      { src: getAssetPath("innovista-event.jpg"), alt: "At Innovista Indus for the National Agentic AI Hackathon" },
      { src: getAssetPath("innovista-team.jpg"), alt: "With teammates at Innovista, first hackathon" },
    ],
    noteMeta: "Shipped · 2024 · Karachi",
    note: "My first hackathon. The idea was right — AI responses in Urdu, Sindhi, Punjabi, and Pashto — but I was nowhere near as fast or as organised as I am now. Everything since has been catching up to that idea.",
  },
  {
    id: "giaic",
    date: "Feb 2024",
    sort: 202402,
    kind: "started",
    title: "GIAIC — Agentic AI & Cloud Engineering",
    detail: "Alongside matriculation",
  },
];

/* ------------------------------------------------------------------
   Operating principles — how I work when dropped into a problem.
   Prose lives in locales; this is just the ordering + the receipt
   that proves each one isn't a slogan.
   ------------------------------------------------------------------ */

export const PRINCIPLES = [
  { id: "friction", receipt: "DocSamajh AI" },
  { id: "constraint", receipt: "3-hour hackathon → 2nd place" },
  { id: "ownership", receipt: "5–7 client sites, solo" },
  { id: "systems", receipt: "3 services, 3 platforms" },
  { id: "measure", receipt: "3,723 downloads" },
] as const;
