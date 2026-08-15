import { withContentCollections } from "@content-collections/next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// GitHub Pages needs a static export (no Node server available there); Vercel doesn't.
// Vercel sets `VERCEL=1` during its builds, so any other production build (e.g.
// `next build` run locally, or in the GitHub Pages deploy workflow) is treated as a
// GitHub Pages export. Both hosts now serve this app at the domain root — this repo
// is `marjan-ahmed.github.io`, GitHub Pages' user-site convention — so no basePath
// is needed either way.
const isGithubPagesExport = process.env.NODE_ENV === 'production' && !process.env.VERCEL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPagesExport ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

// Apply plugins in the correct order - withNextIntl must wrap withContentCollections
export default withContentCollections(withNextIntl(nextConfig));
