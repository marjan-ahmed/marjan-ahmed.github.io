import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marjan Ahmed",
  description: "Full-Stack Developer & Agentic AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
