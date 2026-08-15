"use client";

import { useTranslations } from "next-intl";

import { DEPLOYMENTS } from "@/data/deployments";
import { DeploymentCard } from "./deployment-card";
import { Container, Reveal, SectionHeader } from "./primitives";

/**
 * The anatomy legend. Stating the method up front is the whole trick —
 * it tells a reader that what follows is a repeatable way of working,
 * not four lucky projects.
 */
function AnatomyLegend() {
  const t = useTranslations("deployments");
  const beats = ["friction", "constraint", "system", "impact"] as const;

  return (
    <ol className="flex list-none flex-wrap items-center gap-x-2 gap-y-2 p-0">
      {beats.map((beat, i) => (
        <li key={beat} className="flex items-center gap-2">
          <span
            className={cnBeat(i)}
          >
            {t(`beats.${beat}`)}
          </span>
          {i < beats.length - 1 ? (
            <span
              aria-hidden
              className="mono-label text-muted-foreground/40 rtl:rotate-180"
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function cnBeat(i: number) {
  const base =
    "mono-label inline-flex items-center rounded-md border px-2.5 py-1.5";
  // First and last beats carry the weight: the problem, and the result.
  return i === 0 || i === 3
    ? `${base} border-signal/35 bg-signal-soft text-signal`
    : `${base} border-rule bg-surface text-muted-foreground`;
}

export function DeploymentsSection() {
  const t = useTranslations("deployments");

  return (
    <section id="deployments" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          index="002"
          eyebrow={t("eyebrow")}
          title={t("title")}
          lede={t("lede")}
        />

        <Reveal index={2}>
          <AnatomyLegend />
        </Reveal>

        <div className="flex flex-col gap-5">
          {DEPLOYMENTS.map((deployment, i) => (
            <Reveal key={deployment.id} index={i}>
              <DeploymentCard
                deployment={deployment}
                index={i}
                // First one opens by default: nobody should have to click
                // to find out whether this page is worth reading.
                defaultOpen={i === 0}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
