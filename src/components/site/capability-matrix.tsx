"use client";

import { useTranslations } from "next-intl";

import { CAPABILITIES } from "@/data/deployments";
import { Container, Reveal, SectionHeader } from "./primitives";

/**
 * Skills, grouped by the problem they solve rather than by language.
 * A recruiter scanning for "React" still finds it in two seconds; an
 * engineer reading it sees someone who thinks in outcomes.
 */
export function CapabilityMatrix() {
  const t = useTranslations("capabilities");

  return (
    <section id="capabilities" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          index="003"
          eyebrow={t("eyebrow")}
          title={t("title")}
          lede={t("lede")}
        />

        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal as="li" key={cap.id} index={i} className="min-w-0">
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-rule bg-card/50 p-6 transition-colors duration-300 hover:border-foreground/20">
                <div className="flex items-start gap-3">
                  <span className="mono-label mt-1 shrink-0 text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-balance text-base font-semibold leading-snug tracking-tight sm:text-lg">
                    {t(`items.${cap.id}.title`)}
                  </h3>
                </div>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${cap.id}.body`)}
                </p>

                <ul className="mt-auto flex list-none flex-wrap gap-1.5 p-0 pt-2">
                  {cap.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-rule bg-surface px-2 py-1 font-mono text-[11px] leading-none text-muted-foreground transition-colors duration-200 group-hover:border-foreground/15 group-hover:text-foreground/85"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
