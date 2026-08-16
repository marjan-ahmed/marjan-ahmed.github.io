import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { getAssetPath } from "@/lib/basePath";

export const DATA = {
  name: "Muhammad Marjan Ahmed",
  initials: "MA",
  url: "https://marjanahmed.vercel.app",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Muhammad Marjan Ahmed — Full-Stack Developer & Agentic AI Engineer in Karachi, Pakistan. Building production web apps and shipped AI agent systems.",
  summary:
    "17, coding since Class 8. I build production web apps and AI agents that solve real problems. At Naxasware, I shipped full-stack features across the MERN stack for a startup. At Reintechs, I built 5-7 client websites end-to-end, including a Next.js + headless WooCommerce storefront. I built an open-source CLI tool (Gemini Starter Agent) that crossed 3,723+ PyPI downloads. Built DocSamajh AI for the LandingAI Financial Hackathon — an invoice-to-PO reconciliation system that cut manual effort by 70%. Currently building AI-native learning platforms with RAG chatbots and multi-agent systems. I picked Next.js, FastAPI, OpenAI Agents SDK, and MCP because they ladder toward my goal of building an IT agency that serves international clients. I think in systems, not one-off builds.",
  avatarUrl: getAssetPath("marjan-avatar.jpg"),
  /** IANA zone drives the live clock in the hero. */
  timezone: "Asia/Karachi",
  /**
   * Proof strip. Every number here is checkable — that is the point.
   * `to` is the count-up target; `prefix`/`suffix` render around it.
   */
  proof: [
    { id: "downloads", to: 3723, prefix: "", suffix: "+", href: "https://pypi.org/project/gemini-starter-agent/" },
    { id: "repos", to: 160, prefix: "", suffix: "+", href: "https://github.com/marjan-ahmed" },
    { id: "sites", to: 7, prefix: "", suffix: "", href: "" },
    { id: "hackathons", to: 6, prefix: "", suffix: "", href: "" },
    { id: "age", to: 17, prefix: "", suffix: "", href: "" },
  ],
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: undefined },
    { name: "Python", icon: Python },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React.js", icon: ReactLight },
    { name: "FastAPI", icon: undefined },
    { name: "Node.js", icon: Nodejs },
    { name: "Tailwind CSS", icon: undefined },
    { name: "Supabase", icon: undefined },
    { name: "Sanity CMS", icon: undefined },
    { name: "Docker", icon: undefined },
    { name: "OpenAI Agents SDK", icon: undefined },
    { name: "Model Context Protocol", icon: undefined },
    { name: "RAG", icon: undefined },
    { name: "Multi-Agent Orchestration", icon: undefined },
    { name: "Vercel", icon: undefined },
    { name: "GitHub Pages", icon: undefined },
    { name: "Railway", icon: undefined },
  ],
  favouriteTools: [
    { name: "Claude Code", url: "https://claude.ai", icon: "https://mintlify.s3.us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3" },
    { name: "OpenAI Chatkit", url: "https://platform.openai.com", icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png" },
    { name: "v0", url: "https://v0.dev", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEX///8AAAAqKiry8vLd3d10dHT5+fn29vbn5+dcXFxfX19JSUlAQEBUVFTq6urDw8MiIiKQkJCvr6+4uLicnJwaGhrLy8s6OjoJCQkTExM1NTV+fn6IiIhoaGiioqJOTk6RqC4UAAAD5ElEQVR4nO2abXuqMAyGW3C8KeKcMl+m/v9/eTjXxLVN0qZFvPyQ5+Noy72HEGJapUQikUgkEolEIpFIJBKJRCKRSBRUzlBZvJapOmVhrZrztctfCLXRTGXty7j4UINOu9dgRUENdm3L94PSulm8IZTWX+8IpXfvCKU/3xHq4dVnW9v6CKXZ6mKMbon/Lg1qjKsqizVxYd3v46lQ+/s7uKBwSSjr33gulF7d5+8o3ElQ+zQovb0v8AOovOmVgCoWpvpLE1SNgWfV73Llyb1yToCqbsb3f9PkZUjqC7XqOq4HAsAX7BTUyvxzGy6VepRJ6/F6B670s0N1BwKqG0eAYM/oYH8OFPRh1OUxpnEvfc8LRfo0ZIX1OKj4dq+Rwf4MKNonbYZOD97PLbHgE6C8TOaN4QtKhNV0KD+T9YxADl1V80AFmHRtjC1q39XnQSFMByvsM3M0M4dOhEKY9t3SQrTGwxyLFQzToDCfOmVBaXvG1R1/RIJ9EhTCdBxSuA9KfbgzVrBgmAKFxfj/p+GFKpbulAtYeAIU4VMASi1ADr2CIclQlE8hKGRi54xIhsJi/P5JCUCpT3fixsmhqVC0T2GoAgR7awd7IhTG9Pj0hqBUDubaBUMalM8nBpRaHN3ZVrAnQXl94kCprTv9YObQFCispjO/FgwodXYX2Kz/LiZABXziQRWtu0QzBSrkEw9KlZ6CIRoq6BMTypdDY6EQnw5u9cGDgsH+qI4joRg+saHUxV1pzKFxUByf+FDlzV3skgDF8okPpSqw2jUaCqtVsGqWDUUFewQUXvtOgoIFwzGPguL6FAWlwI+uWxkBxfYpDmoNquMzH4qsfSdCoV1aHlSMT5FQSMHQVziU7WqL9A5Jn2KhYLBnC6tF+oDKrbwGSjI0Z6ZCwYLhm+gOg74b26doqFCb/q+PDmp7W94tg1gosovrQoEHbcrrUwIU7NLiUF74wNZKPJT3wRjbIPSgg6cDngpVghyKQoFXgutTEpSzm0ZB4dsa2rtTMAGKvp8JVYG2N9OnRCjYTkOgiPevK8J7R/XGPG7ChSIDxoQq0RFNHVTbW/tybKiSeDbWJiT8tcHUmrptQLBggFAFqOtnhiJssLdrYV0/MxTsMECo1AeYDoUGu9sSJV/TuaDsmvNXIAmBLZ6ZoZBv7gn22VO8mgIFbwga2oO28WcSJkG5wU7sc9Gf5lmg7K/UkjhLV1wjzZoIVRofuDO9qZfvwAmMGaGGaK83h6FuywKn6PKuRl7WuaCGn3j99qtnnILMu+tPs2ScQt0/ASpGRck5sPtaJpFIJBKJRCKRSCQSiUQikUgkeqX+Aet1O/hSv8lXAAAAAElFTkSuQmCC" },
    { name: "Bolt", url: "https://bolt.new", icon: undefined },
    { name: "Lovable", url: "https://lovable.dev", icon: undefined },
    { name: "Remotion", url: "https://remotion.dev", icon: undefined },
    { name: "Vercel Agent Skills", url: "https://skills.sh", icon: getAssetPath('skillssh.png') },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "marjanahmed.dev@gmail.com",
    tel: "+92 305-112-6649",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/marjan-ahmed",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hafizmarjanahmed",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/marjan_ahmed_",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:marjanahmed.dev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Naxasware",
      href: "#",
      badges: [],
      location: "Karachi, Pakistan (Remote)",
      title: "Full Stack Developer (Internship)",
      logoUrl: "",
      start: "May 2026",
      end: "Aug 2026",
      description:
        "Shipped full-stack features across Next.js and Node.js on production apps, working directly with the founding team to turn product requirements into deployed code. Contributed across the company GitHub org — shared repos, pull requests, code review.",
    },
    {
      company: "Reintechs",
      href: "https://reintechs.com",
      badges: [],
      location: "Remote",
      title: "Web Developer (Freelance)",
      logoUrl: getAssetPath("reintechs.png"),
      start: "Jul 2025",
      end: "Nov 2025",
      description:
        "Architected and deployed 5–7 production client sites — including a Next.js + headless WordPress/WooCommerce storefront — owning UI, CMS and checkout across 3–4 week cycles. Written commendation from leadership for command across multiple areas.",
    },
  ],
  education: [
    {
      school: "GIAIC - Governor Initiative for AI & Computing",
      href: "https://linktr.ee/giaic",
      degree: "Agentic AI & Cloud Engineering — building the technical foundation for my agency",
      logoUrl: getAssetPath("giaic.png"),
      start: "Feb 2024",
      end: "Present",
    },
    {
      school: "Education Trust Nasra School",
      href: "https://nasraschool.edu.pk/",
      degree: "Matriculation (AKU-EB Board) — finishing school while building production systems and winning hackathons",
      logoUrl: getAssetPath("nasra.png"),
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Physical AI & Humanoid Robotics Textbook",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "AI-native learning platform with embedded RAG chatbot. 3-service system: Docusaurus, FastAPI RAG backend, Express auth service.",
      technologies: [
        "Docusaurus",
        "FastAPI",
        "Cohere",
        "Qdrant",
        "Express.js",
        "Better Auth",
        "Neon Postgres",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/marjan-ahmed",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/textbook-hero.png",
      video: "",
    },
    {
      title: "AI Employee Vault",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Human-in-the-loop automation. Obsidian vault + Claude Code + MCP server. Approval-gated actions for Gmail, WhatsApp, filesystem.",
      technologies: [
        "Python",
        "Claude Code",
        "MCP",
        "Obsidian",
        "FastAPI",
      ],
      links: [],
      image: "/projects/ai-vault.png",
      video: "",
    },
    {
      title: "Gemini Starter Agent",
      href: "https://pypi.org/project/gemini-starter-agent/",
      dates: "2025",
      active: true,
      description:
        "Open-source CLI for scaffolding AI agent projects. OpenAI Agents SDK + multi-provider support. 3,723+ PyPI downloads.",
      technologies: [
        "Python",
        "OpenAI Agents SDK",
        "CLI",
        "PyPI",
      ],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/gemini-starter-agent/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/marjan-ahmed",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gemini-pypi.png",
      video: "",
    },
    {
      title: "DocSamajh AI",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Built for the LandingAI Financial Hackathon. Invoice-to-PO reconciliation with LandingAI ADE, Gemini, and OpenAI Agents SDK. 70% reduction in manual effort.",
      technologies: [
        "Python",
        "Streamlit",
        "LandingAI",
        "Google Gemini",
        "OpenAI Agents SDK",
      ],
      links: [],
      image: "/projects/docsamajh-ui.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Financial Hackathon - LandingAI",
      dates: "December 2025",
      location: "Karachi, Pakistan",
      description:
        "DocSamajh AI: multi-agent invoice-to-PO matching at 85-90% accuracy. LandingAI ADE + Gemini + OpenAI Agents SDK. Submitted — no placement.",
      image: "",
      links: [],
    },
    {
      title: "Cloudways x DigitalOcean Hacktoberfest",
      dates: "October 2025",
      location: "Karachi, Pakistan",
      description:
        "2nd Place. Three-hour hackathon, built everything in the last hour. Contributed feature to OpenAI Agents SDK.",
      image: getAssetPath("digitalocean.png"),
      win: "2nd Place",
      links: [],
    },
    {
      title: "Google Build with AI - GDG Kolachi",
      dates: "June 2024",
      location: "Karachi, Pakistan",
      description:
        "Top 10 finalist team. Hunar Bazaar: freelancing platform for rural Pakistani women with AI-generated gig descriptions.",
      image: getAssetPath("gdg.png"),
      win: "Top 10",
      links: [],
    },
    {
      title: "IBM watsonx / lablab.ai Agentic AI Hackathon",
      dates: "November 2025",
      location: "Remote",
      description:
        "Finalist. Multi-agent orchestration system.",
      image: "",
      links: [],
    },
    {
      title: "NASA Space Apps Challenge 2025",
      dates: "October 2025",
      location: "Karachi, Pakistan",
      description:
        "Kalkia: weather probability checker using 44 years of NASA data.",
      image: "",
      links: [],
    },
    {
      title: "National Agentic AI Hackathon - Innovista Indus",
      dates: "2024",
      location: "Karachi, Pakistan",
      description:
        "EdTech app with AI responses in Urdu, Sindhi, Punjabi, Pashto. First hackathon.",
      image: getAssetPath("innovista.png"),
      links: [],
    },
  ],
  certifications: [
    { name: "Claude 101 — Anthropic Academy", issuer: "Anthropic", date: "Mar 2026" },
    { name: "Responsive Web Design — freeCodeCamp", issuer: "freeCodeCamp", date: "" },
  ],
  volunteering: [
    {
      org: "Microsoft Student Ambassadors (MLSA) — Karachi",
      role: "Event Management Team Member",
      start: "Apr 2026",
      end: "Present",
      description: "Selected to support the MLSA Karachi Chapter in organizing large-scale technical events and workshops for the student community.",
    },
    {
      org: "NASA International Space Apps Challenge",
      role: "Ambassador",
      start: "Sep 2025",
      end: "Oct 2025",
      description: "Created a Google interest form, spread awareness through social media and school network. Got over 16 responses. First time being an ambassador for anything.",
    },
  ],
} as const;
