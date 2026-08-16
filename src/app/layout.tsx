import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import "./globals.css";

export const metadata: Metadata = {
  // Root-level metadata-image conventions (opengraph-image.tsx, icon.tsx, apple-icon.tsx)
  // live outside [locale]/, so they need their own metadataBase — without it, Next.js
  // falls back to a hardcoded http://localhost:3000, baking an unreachable URL into
  // the static export's og:image tag.
  metadataBase: new URL(DATA.url),
  title: DATA.name,
  description: DATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
