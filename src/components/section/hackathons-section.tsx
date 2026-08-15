/* eslint-disable @next/next/no-img-element */
'use client';

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { useTranslations } from 'next-intl';

// Define the type for a Hackathon
type Hackathon = {
  readonly title?: string;
  readonly dates?: string;
  readonly location?: string;
  readonly description?: string;
  readonly image?: string;
  readonly links?: readonly { readonly href: string; readonly title: string; readonly icon?: React.ReactNode }[];
};

export default function HackathonsSection() {
  const t = useTranslations();

  // Only render if there are hackathons to show
  if (!DATA.hackathons || DATA.hackathons.length < 1) {
    return null;
  }

  // Cast DATA.hackathons to Hackathon[]
  const hackathons: readonly Hackathon[] = DATA.hackathons;

  const hackathonKeys = ['landingai', 'hacktoberfest', 'gdg', 'ibm', 'nasa', 'innovista'] as const;

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">{t("hackathons.title")}</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("hackathons.tagline")}</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {t("hackathons.description")}
            </p>
          </div>
        </div>
        <Timeline>
          {hackathons.map((hack, idx) => {
            const key = hackathonKeys[idx];
            const translatedDesc = key ? t(`hackathons.items.${key}.description`) : hack.description;
            return (
              <TimelineItem key={hack.title || idx + idx} className="w-full flex items-start justify-between gap-10">
                <TimelineConnectItem className="flex items-start justify-center">
                  {hack.image ? (
                    <img
                      src={hack.image}
                      alt={hack.title}
                      className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    />
                  ) : (
                    <div className="size-10 bg-card z-10 shrink-0 border rounded-full shadow ring-2 ring-border flex-none flex items-center justify-center text-xs font-semibold text-muted-foreground">
                      {hack.title
                        ? hack.title
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()
                        : t("common.notAvailable")}
                    </div>
                  )}
                </TimelineConnectItem>
                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                  {hack.dates && <time className="text-xs text-muted-foreground">{hack.dates}</time>}
                  {hack.title && <h3 className="font-semibold leading-none">{hack.title}</h3>}
                  {hack.location && <p className="text-sm text-muted-foreground">{hack.location}</p>}
                  {translatedDesc && (
                    <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">{translatedDesc}</p>
                  )}
                  {hack.links && hack.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {hack.links.map((link, linkIdx) => (
                        <Link
                          href={link.href}
                          key={linkIdx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                            {link.icon}
                            {link.title}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}