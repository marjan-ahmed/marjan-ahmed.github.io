"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import type { Deployment } from "@/data/deployments";
import { cn } from "@/lib/utils";
import { ArchitectureFlow } from "./architecture-flow";
import { Chip, StatusDot } from "./primitives";

const originTone: Record<Deployment["origin"], string> = {
  self: "border-signal/35 bg-signal-soft text-signal",
  hackathon: "border-rule bg-surface text-muted-foreground",
};

/**
 * One labelled beat of the case study. The label is what makes the whole
 * page legible: every deployment answers the same four questions in the
 * same order, so they can be compared instead of just admired.
 */
function Beat({
  label,
  children,
  tone = "default",
}: {
  label: string;
  children: React.ReactNode;
  tone?: "default" | "signal";
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "mono-label",
            tone === "signal" ? "text-signal" : "text-muted-foreground"
          )}
        >
          {label}
        </span>
        <span aria-hidden className="h-px flex-1 bg-rule" />
      </div>
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

export function DeploymentCard({
  deployment,
  index,
  defaultOpen = false,
}: {
  deployment: Deployment;
  index: number;
  defaultOpen?: boolean;
}) {
  const t = useTranslations("deployments");
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const d = deployment;

  const headline = d.metrics.find((m) => m.headline) ?? d.metrics[0];
  const rest = d.metrics.filter((m) => m !== headline);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-sm",
        "transition-colors duration-300",
        open ? "border-signal/30" : "border-rule hover:border-foreground/20"
      )}
    >
      {/* Index rail — turns a list of cards into a numbered dossier. */}
      <span
        aria-hidden
        className="mono-label absolute end-4 top-5 text-muted-foreground sm:end-6"
      >
        D-{String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-5 p-5 sm:p-7">
        {/* ---------------- Header ---------------- */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pe-16">
            <span className="inline-flex items-center gap-2">
              <StatusDot tone={d.status} />
              <span className="mono-label text-muted-foreground">
                {t(`status.${d.status}`)}
              </span>
            </span>
            <span aria-hidden className="text-muted-foreground">
              ·
            </span>
            <span className="mono-label text-muted-foreground">{d.year}</span>
            <Chip className={cn("mono-label", originTone[d.origin])}>
              {t(`origin.${d.origin}`)}
            </Chip>
          </div>

          <h3 className="text-balance text-xl font-semibold tracking-tight sm:text-2xl">
            {d.name}
          </h3>

          <p className="font-mono text-xs text-muted-foreground">{d.context}</p>

          {d.award ? (
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-signal/35 bg-signal-soft px-3 py-1.5">
              <span className="mono-label text-signal">{d.award}</span>
            </p>
          ) : null}
        </div>

        {/* ---------------- The hook: friction ---------------- */}
        <Beat label={t("beats.friction")} tone="signal">
          {t(`items.${d.id}.friction`)}
        </Beat>

        {/* ---------------- Impact ---------------- */}
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4 rounded-xl border border-rule bg-surface/70 p-4">
          <div className="flex flex-col">
            <span className="numeric text-2xl font-semibold tracking-tight text-signal sm:text-3xl">
              {headline.value}
            </span>
            <span className="mono-label mt-1.5 text-muted-foreground">
              {headline.label}
            </span>
          </div>

          {rest.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="numeric text-base font-medium tracking-tight sm:text-lg">
                {m.value}
              </span>
              <span className="mono-label mt-1.5 text-muted-foreground">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* ---------------- Disclosure ---------------- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          data-focus-custom
          className={cn(
            "-mx-1 flex items-center justify-between gap-4 rounded-lg px-1 py-2 text-start",
            "transition-colors duration-200 hover:text-foreground",
            "focus-visible:ring-2 focus-visible:ring-signal"
          )}
        >
          <span className="mono-label text-foreground">
            {open ? t("collapse") : t("expand")}
          </span>
          <ChevronDown
            aria-hidden
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              open && "rotate-180"
            )}
          />
        </button>

        {/* ---------------- Panel ---------------- */}
        {open ? (
          <div
            id={panelId}
            className="animate-panel-open flex flex-col gap-6 border-t border-rule pt-6"
          >
            <Beat label={t("beats.constraint")}>
              {t(`items.${d.id}.constraint`)}
            </Beat>

            <Beat label={t("beats.system")}>{t(`items.${d.id}.system`)}</Beat>

            {d.image ? (
              <div className="overflow-hidden rounded-xl border border-rule bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.image}
                  alt={d.name}
                  width={d.imageWidth}
                  height={d.imageHeight}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : null}

            <ArchitectureFlow nodes={d.arch} />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="mono-label text-muted-foreground">
                  {t("beats.stack")}
                </span>
                <span aria-hidden className="h-px flex-1 bg-rule" />
              </div>
              <ul className="flex list-none flex-wrap gap-2 p-0">
                {d.stack.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            {d.links.length ? (
              <div className="flex flex-wrap gap-2">
                {d.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-focus-custom
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border border-rule px-3.5 py-2",
                      "font-mono text-[11px] text-muted-foreground",
                      "transition-all duration-200 hover:border-signal/50 hover:text-foreground",
                      "active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-signal"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden className="size-3" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
