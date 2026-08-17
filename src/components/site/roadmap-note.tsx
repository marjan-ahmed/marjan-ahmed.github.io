"use client";

import { useTranslations } from "next-intl";
import { Fragment } from "react";

import { Container, Reveal } from "./primitives";

/**
 * Splits after a sentence-ending stop (Latin ".", CJK "。") so the vision
 * statement can cascade in as 2-3 beats instead of landing as one flat
 * block. Works across every locale without needing per-language markup.
 */
function sentences(text: string): string[] {
  return text.split(/(?<=[.。])\s*/).filter(Boolean);
}

/** The one term worth pulling out of the running sentence — echoes the
 * ghost wordmark behind it instead of introducing a whole new palette. */
function withEmphasis(text: string) {
  const parts = text.split("FDE-AF");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 ? (
        <span className="text-signal">FDE-AF</span>
      ) : null}
    </Fragment>
  ));
}

/**
 * The one deliberately future-tense beat on the page, between the log of
 * what already shipped and the ask to get in touch. Every other section
 * argues its case with a card and a receipt — this one breaks that pattern
 * on purpose: no card, no grid, just an oversized statement, because it's
 * the one claim on this page that isn't checkable yet, and pretending
 * otherwise with a fake "evidence" card would be dishonest.
 */
export function RoadmapNote() {
  const t = useTranslations("roadmap");

  return (
    <section id="roadmap" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ghost wordmark — the destination, oversized and almost invisible,
          sitting behind the statement like a watermark on a flight plan. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-mono text-[26vw] font-bold leading-none tracking-tighter text-foreground/[0.025] sm:text-[9rem]"
      >
        FDE-AF
      </span>

      <Container className="relative flex flex-col gap-8">
        <Reveal className="flex items-center gap-3">
          <span className="mono-label text-signal shrink-0">005</span>
          <span className="mono-label text-muted-foreground shrink-0">
            {t("eyebrow")}
          </span>
          <span aria-hidden className="h-px flex-1 bg-rule" />
        </Reveal>

        <div className="flex max-w-4xl flex-col gap-4">
          {sentences(t("body")).map((sentence, i) => (
            <Reveal key={i} index={i + 1}>
              <p className="text-pretty text-2xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-3xl lg:text-[2.75rem] lg:leading-[1.15]">
                {withEmphasis(sentence)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal index={4}>
          <p className="mono-label text-muted-foreground">{t("disclaimer")}</p>
        </Reveal>
      </Container>
    </section>
  );
}
