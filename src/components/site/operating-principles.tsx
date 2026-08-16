"use client";

import { useTranslations } from "next-intl";

import { PRINCIPLES } from "@/data/deployments";
import { cn } from "@/lib/utils";
import { Container, Reveal, SectionHeader } from "./primitives";

/**
 * How I work when I'm dropped into someone else's problem.
 * Every principle carries a receipt, because a principle without evidence
 * is just a slogan.
 */
export function OperatingPrinciples() {
  const t = useTranslations("principles");

  return (
    <section
      id="method"
      className="relative border-y border-rule bg-surface/50 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint opacity-40 [mask-image:radial-gradient(90%_60%_at_50%_50%,black,transparent)]"
      />

      <Container className="relative flex flex-col gap-12">
        <SectionHeader
          index="001"
          eyebrow={t("eyebrow")}
          title={t("title")}
          lede={t("lede")}
        />

        <ol className="grid list-none grid-cols-1 gap-px overflow-hidden rounded-2xl border border-rule bg-rule p-0 md:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal as="li" key={principle.id} index={i} className="min-w-0">
              <div
                className={cn(
                  "group relative flex h-full flex-col gap-3 bg-background p-6 sm:p-7",
                  "transition-colors duration-300 hover:bg-card"
                )}
              >
                {/* Ghost numeral — structure without shouting. */}
                <span
                  aria-hidden
                  className="numeric absolute end-5 top-4 text-4xl font-semibold text-foreground/[0.045] transition-colors duration-300 group-hover:text-signal/15 sm:text-5xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="mono-label text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-balance pe-12 text-lg font-semibold tracking-tight sm:text-xl">
                  {t(`items.${principle.id}.title`)}
                </h3>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${principle.id}.body`)}
                </p>

                <p className="mt-auto flex items-center gap-2 pt-3">
                  <span className="mono-label text-muted-foreground">
                    {t("receipt")}
                  </span>
                  <span className="font-mono text-[11px] text-foreground/80">
                    {principle.receipt}
                  </span>
                </p>

                {/* Signal edge grows in on hover — secondary action. */}
                <span
                  aria-hidden
                  className="absolute bottom-0 start-0 h-0.5 w-full origin-left scale-x-0 bg-signal transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100 rtl:origin-right"
                />
              </div>
            </Reveal>
          ))}

          {/* Five principles into a two-column grid leaves one cell open.
              It gets the closing thought rather than dead space. */}
          <li className="bg-background">
            <div className="flex h-full items-end p-6 sm:p-7">
              <p className="max-w-xs text-pretty font-mono text-xs leading-relaxed text-muted-foreground">
                {t("closer")}
              </p>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
