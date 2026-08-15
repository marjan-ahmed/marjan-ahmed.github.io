import { withContentCollections } from "@content-collections/next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Vercel serves this app at the domain root, not under a subpath — only GitHub Pages
// needs the `/portfolio` basePath and a static export. Vercel sets `VERCEL=1` during
// its builds, so any other production build (e.g. `next build` run locally for the
// GitHub Pages deploy script) is treated as a GitHub Pages export.
const isGithubPagesExport = process.env.NODE_ENV === 'production' && !process.env.VERCEL;
const basePath = isGithubPagesExport ? '/portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPagesExport ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  basePath,
  // Inlined into both server and client bundles so `getAssetPath` resolves the same
  // way everywhere — `process.env.VERCEL` itself is not available client-side.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
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
