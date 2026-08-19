<div align="center">
<img alt="Marjan Ahmed Portfolio" src="/public/35756-clean.png" width="120" style="border-radius: 50%">

# Muhammad Marjan Ahmed — Portfolio

**Builder — Agentic AI Systems**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarjan-ahmed%2Fportfolio)

</div>

A case-study-driven portfolio built as a terminal/dossier-style dashboard rather than a resume-card
layout — deployment write-ups, an architecture diagram per project, a command palette (`⌘K` / `Ctrl+K`),
and a proof strip of checkable numbers instead of adjectives. Built with Next.js 16 (App Router,
Turbopack), TypeScript, and Tailwind CSS v4.

**Live:** [marjanahmed.vercel.app](https://marjanahmed.vercel.app) (canonical) ·
[marjan-ahmed.github.io/portfolio](https://marjan-ahmed.github.io/portfolio) (mirror)

## Features

- **Fully internationalized** — English, French, German, Japanese, Chinese, Arabic, and Urdu via
  [`next-intl`](https://next-intl.dev/), with automatic RTL layout for ar/ur, and a first-visit
  browser-language auto-detect that only ever runs once per visitor
- **Deployment case studies** — each shipped project told as Friction → Constraint → System → Impact,
  with a real architecture diagram and screenshot, not just a description
- **Command palette** — jump to any section, copy contact info, switch theme or language, all from the
  keyboard
- **Roadmap section** — the one deliberately future-tense claim on the page, given its own oversized
  typographic treatment instead of a fake "evidence" card, with an honest disclaimer that it isn't a
  receipt like the rest of the site
- **SEO-complete** — Person structured data (JSON-LD), per-locale hreflang + canonical tags, sitemap.xml,
  robots.txt
- **Accessible** — 96/100 Lighthouse (the remaining points are one intentionally-decorative,
  aria-hidden background watermark that a WCAG-compliant fix would have to make solid and un-ghostlike)
- Config-driven content: identity/work/projects in [`src/data/resume.tsx`](./src/data/resume.tsx),
  case studies in [`src/data/deployments.ts`](./src/data/deployments.ts), translated copy in
  [`locales/`](./locales)
- Static export, deployable to GitHub Pages or Vercel — both hosted simultaneously (see
  [`next.config.mjs`](./next.config.mjs) for how basePath/output are switched per target)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/marjan-ahmed/portfolio
   ```

2. Navigate to the project:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Edit [`src/data/resume.tsx`](./src/data/resume.tsx) and
   [`src/data/deployments.ts`](./src/data/deployments.ts) to customize content, and the matching keys in
   [`locales/en.ts`](./locales/en.ts) (mirror into the other locale files to keep translations in sync)

# License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).
