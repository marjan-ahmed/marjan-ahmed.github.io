<div align="center">
<img alt="Marjan Ahmed Portfolio" src="/marjan-avatar.jpg" width="120" style="border-radius: 50%">

# Muhammad Marjan Ahmed — Portfolio

**Full-Stack Developer & Agentic AI Engineer**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarjan-ahmed%2Fportfolio)

</div>

A case-study-driven portfolio built as a terminal/dossier-style dashboard rather than a resume-card
layout — deployment write-ups, an architecture diagram per project, a command palette (`⌘K` / `Ctrl+K`),
and a proof strip of checkable numbers instead of adjectives. Built with Next.js 16 (App Router,
Turbopack), TypeScript, and Tailwind CSS v4, statically exported for GitHub Pages.

## Features

- **Fully internationalized** — English, French, German, Japanese, Arabic, and Urdu via
  [`next-intl`](https://next-intl.dev/), with automatic RTL layout for ar/ur
- **Deployment case studies** — each shipped project told as Friction → Constraint → System → Impact,
  with a real architecture diagram and screenshot, not just a description
- **Command palette** — jump to any section, copy contact info, switch theme or language, all from the
  keyboard
- Config-driven content: identity/work/projects in [`src/data/resume.tsx`](./src/data/resume.tsx),
  case studies in [`src/data/deployments.ts`](./src/data/deployments.ts), translated copy in
  [`locales/`](./locales)
- Static export, deployable to GitHub Pages or Vercel

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
