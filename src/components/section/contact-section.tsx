'use client';

import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail } from "lucide-react";

import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Container, Reveal, SectionHeader } from "@/components/site/primitives";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ContactSection() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          index="006"
          eyebrow={t("nav.contact")}
          title={t("contact.letsConnect")}
          lede={t("contact.description", {
            email: t("contact.emailLink"),
            linkedin: t("contact.linkedinLink"),
          })}
        />

        <Reveal index={2}>
          <div className="relative overflow-hidden rounded-2xl border border-rule bg-card/60 p-8 backdrop-blur-sm sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 blueprint opacity-20"
            />
            <FlickeringGrid
              className="pointer-events-none absolute inset-0 h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "radial-gradient(60% 85% at 50% 50%, black, transparent)",
                WebkitMaskImage: "radial-gradient(60% 85% at 50% 50%, black, transparent)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 start-1/2 size-72 -translate-x-1/2 rounded-full bg-signal/[0.08] blur-3xl"
            />

            <div className="relative flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${DATA.contact.email}`}
                data-focus-custom
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3",
                  "text-sm font-medium text-background",
                  "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  "hover:scale-[1.03] active:scale-[0.97]",
                  "focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <Mail aria-hidden className="size-4" />
                {DATA.contact.email}
              </a>

              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                data-focus-custom
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-5 py-3",
                  "text-sm font-medium text-muted-foreground",
                  "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  "hover:border-signal/50 hover:text-foreground active:scale-[0.97]",
                  "focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <Icons.linkedin className="size-4" />
                {t("contact.linkedinLink")}
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
