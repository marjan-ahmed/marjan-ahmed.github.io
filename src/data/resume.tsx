import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

export const DATA = {
  name: "Muhammad Marjan Ahmed",
  initials: "MA",
  url: "https://marjanahmed.vercel.app",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Muhammad Marjan Ahmed — Full-Stack Developer & Agentic AI Engineer in Karachi, Pakistan. Building production web apps and shipped AI agent systems.",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
} as const;
