import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { getAssetPath } from "@/lib/basePath";

export const DATA = {
  name: "Marjan Ahmed",
  initials: "MA",
  url: "https://marjan-ahmed.vercel.app",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Full-Stack Developer & Agentic AI Enthusiast. I build responsive web applications and integrate AI-driven solutions to solve real-world problems.",
  summary:
    "With over **2 years of experience** as a Full-Stack Developer, I specialize in building responsive web applications, collaborating with cross-functional teams, and integrating AI-driven solutions—including **Agentic AI**. I leverage modern frameworks like [Next.js](https://nextjs.org) and [React](https://react.dev), headless CMS platforms like [Sanity](https://sanity.io), and am currently expanding my expertise in the [OpenAI Agent SDK](https://platform.openai.com). I'm passionate about delivering scalable, innovative projects that create real impact.",
  // avatarUrl: getAssetPath("1769214012687.jpg"),
  avatarUrl: getAssetPath("1769290774696.jpg"),
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "React Native", icon: ReactLight },
    { name: "Firebase", icon: null },
    { name: "Supabase", icon: null },
    { name: "Prisma", icon: null },
    { name: "Tailwind CSS", icon: null },
    { name: "WordPress", icon: null },
    { name: "Figma", icon: null },
  ],
  favouriteTools: [
    { name: "Claude", url: "https://claude.ai", icon: "https://mintlify.s3.us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3" },
    { name: "Claude Code", url: "https://claude.ai", icon: "data:image/png;base64,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" },
    { name: "Copilot CLI", url: "https://github.com/features/copilot", icon: "data:image/jpeg;base64,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" },
    { name: "Nano Banana", url: "https://nanobanana.com", icon: "https://miro.medium.com/v2/resize:fit:1076/0*Xx3WhHdyXHm14pt4.png" },
    { name: "OpenAI Chatkit", url: "https://platform.openai.com", icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png" },
    { name: "Remotion", url: "https://remotion.dev", icon: "data:image/png;base64,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" },
    { name: "v0", url: "https://v0.dev", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEX///8AAAAqKiry8vLd3d10dHT5+fn29vbn5+dcXFxfX19JSUlAQEBUVFTq6urDw8MiIiKQkJCvr6+4uLicnJwaGhrLy8s6OjoJCQkTExM1NTV+fn6IiIhoaGiioqJOTk6RqC4UAAAD5ElEQVR4nO2abXuqMAyGW3C8KeKcMl+m/v9/eTjXxLVN0qZFvPyQ5+Noy72HEGJapUQikUgkEolEIpFIJBKJRCKRSBRUzlBZvJapOmVhrZrztctfCLXRTGXty7j4UINOu9dgRUENdm3L94PSulm8IZTWX+8IpXfvCKU/3xHq4dVnW9v6CKXZ6mKMbon/Lg1qjKsqizVxYd3v46lQ+/s7uKBwSSjr33gulF7d5+8o3ElQ+zQovb0v8AOovOmVgCoWpvpLE1SNgWfV73Llyb1yToCqbsb3f9PkZUjqC7XqOq4HAsAX7BTUyvxzGy6VepRJ6/F6B670s0N1BwKqG0eAYM/oYH8OFPRh1OUxpnEvfc8LRfo0ZIX1OKj4dq+Rwf4MKNonbYZOD97PLbHgE6C8TOaN4QtKhNV0KD+T9YxADl1V80AFmHRtjC1q39XnQSFMByvsM3M0M4dOhEKY9t3SQrTGwxyLFQzToDCfOmVBaXvG1R1/RIJ9EhTCdBxSuA9KfbgzVrBgmAKFxfj/p+GFKpbulAtYeAIU4VMASi1ADr2CIclQlE8hKGRi54xIhsJi/P5JCUCpT3fixsmhqVC0T2GoAgR7awd7IhTG9Pj0hqBUDubaBUMalM8nBpRaHN3ZVrAnQXl94kCprTv9YObQFCispjO/FgwodXYX2Kz/LiZABXziQRWtu0QzBSrkEw9KlZ6CIRoq6BMTypdDY6EQnw5u9cGDgsH+qI4joRg+saHUxV1pzKFxUByf+FDlzV3skgDF8okPpSqw2jUaCqtVsGqWDUUFewQUXvtOgoIFwzGPguL6FAWlwI+uWxkBxfYpDmoNquMzH4qsfSdCoV1aHlSMT5FQSMHQVziU7WqL9A5Jn2KhYLBnC6tF+oDKrbwGSjI0Z6ZCwYLhm+gOg74b26doqFCb/q+PDmp7W94tg1gosovrQoEHbcrrUwIU7NLiUF74wNZKPJT3wRjbIPSgg6cDngpVghyKQoFXgutTEpSzm0ZB4dsa2rtTMAGKvp8JVYG2N9OnRCjYTkOgiPevK8J7R/XGPG7ChSIDxoQq0RFNHVTbW/tybKiSeDbWJiT8tcHUmrptQLBggFAFqOtnhiJssLdrYV0/MxTsMECo1AeYDoUGu9sSJV/TuaDsmvNXIAmBLZ6ZoZBv7gn22VO8mgIFbwga2oO28WcSJkG5wU7sc9Gf5lmg7K/UkjhLV1wjzZoIVRofuDO9qZfvwAmMGaGGaK83h6FuywKn6PKuRl7WuaCGn3j99qtnnILMu+tPs2ScQt0/ASpGRck5sPtaJpFIJBKJRCKRSCQSiUQikUgkeqX+Aet1O/hSv8lXAAAAAElFTkSuQmCC" },
    { name: "Bolt", url: "https://bolt.new", icon: "data:image/jpeg;base64,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" },
    { name: "Lovable", url: "https://lovable.dev", icon: "data:image/jpeg;base64,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" },
    { name: "Antigravity", url: "https://antigravity.dev", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcovsjL27xHp8vHp2UZcH-dbAiNQy4JR64kK2Yl-nQ3Q&s" },
    { name: 'Vercel Agent Skills', url: "https://skills.sh", icon: getAssetPath('skillssh.png') }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "marjanahmed.dev@gmail.com",
    tel: "",
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
      company: "Reintechs",
      href: "https://reintechs.com",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: getAssetPath("reintechs.png"),
      start: "June 2025",
      end: "Oct 2025",
      description:
        "Developed dynamic websites and eCommerce stores using WordPress, WooCommerce, React, and Next.js. Collaborated with clients to deliver custom solutions, optimized site performance, and implemented responsive designs that improved user engagement and conversion rates.",
    },
  ],
  education: [
    {
      school: "GIAIC - Governor Initiative for AI and Computing",
      href: "https://linktr.ee/giaic",
      degree: "Agentic AI Developer Program",
      logoUrl: getAssetPath("giaic.png"),
      start: "2024",
      end: "Present",
    },
    {
      school: "Professional Technologies",
      href: "#",
      degree: "WordPress Development Certification",
      logoUrl: "",
      start: "2023",
      end: "2023",
    },
    {
      school: "Nasra School",
      href: "https://nasraschool.edu.pk/",
      degree: "Matriculation (Science) - AKU-EB",
      logoUrl: getAssetPath("nasra.png"),
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Clima Website",
      href: "https://clima-webapp-project.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A hackathon project delivering real-time climate data visualization. Built with a focus on clean UI and intuitive user experience for exploring environmental information.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://clima-webapp-project.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Asphalt Legends - Webpage Clone",
      href: "https://asphaltlegends.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A pixel-perfect recreation of the Asphalt Legends game website, demonstrating strong attention to detail and front-end development skills.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://asphaltlegends.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Joke Engine",
      href: "https://joke-engine.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A fun web application that generates random jokes using the JokeAPI. Features a clean interface and smooth user interactions for endless entertainment.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "JokeAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://joke-engine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Dynamic Resume Builder",
      href: "https://dynamic-resume-builder-six-lake.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A comprehensive web application enabling users to create professional resumes with live preview and PDF export functionality. Built with modern web technologies for a seamless experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://dynamic-resume-builder-six-lake.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hacktoberfest Karachi",
      dates: "October 2024",
      location: "Karachi, Pakistan",
      description:
        "Won 2nd place at DigitalOcean's local Hacktoberfest event. Our team contributed to the openai-agents Python SDK by identifying and fixing a critical bug, demonstrating strong open-source collaboration skills.",
      image: getAssetPath("digitalocean.png"),
      win: "2nd Place Winner",
      links: [],
    },
    {
      title: "National Agentic AI Hackathon",
      dates: "2024",
      location: "Karachi, Pakistan",
      description:
        "Built an EdTech application at the Innovista Indus hackathon enabling students to track learning progress with AI-powered responses in Pakistan's national languages (Urdu, Sindhi, Punjabi, Pashto).",
      image: getAssetPath("innovista.png"),
      links: [],
    },
    {
      title: "Built with AI - GDG Kolachi",
      dates: "2024",
      location: "Karachi, Pakistan",
      description:
        "Developed a marketplace platform empowering Pakistani women from rural areas to showcase and sell their handmade crafts and skills online, promoting economic independence through technology.",
      image: getAssetPath("gdg.png"),
      links: [],
    },
  ],
} as const;
