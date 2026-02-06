# Marjan Ahmed Portfolio

Personal portfolio and blog built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **MDX**.

## About

This repository powers my portfolio website where I showcase:

- Professional summary and experience
- Projects and hackathon highlights
- Technical skills and favorite tools
- Blog posts written in MDX
- Contact and social links

Most portfolio content is managed from a single data file: `src/data/resume.tsx`.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui + Radix UI
- Content Collections + MDX
- Vercel deployment

## Project Structure

```txt
src/
  app/                 # App Router pages and layouts
  components/          # UI, sections, and reusable components
  data/resume.tsx      # Main portfolio/profile content
  lib/                 # Utilities (pagination, paths, MDX helpers)
content/               # Blog posts (.mdx)
public/                # Static assets (images, fonts, sounds)
```

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/marjan-ahmed/portfolio.git
cd portfolio
```

### 2) Install dependencies

```bash
pnpm install
```

### 3) Run the development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `pnpm dev` – start the local dev server
- `pnpm build` – create a production build
- `pnpm start` – run the production server
- `pnpm lint` – run ESLint checks
- `pnpm lint:fix` – run ESLint with automatic fixes

## Customization

### Portfolio content

Update `src/data/resume.tsx` to edit:

- Bio and summary
- Skills
- Work experience
- Education
- Projects
- Hackathons
- Social links

### Blog content

Add or edit `.mdx` files in `content/`.

## Deployment

This project is deployment-ready for Vercel.

```bash
pnpm build
```

Then deploy through Vercel CLI or Git integration.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
