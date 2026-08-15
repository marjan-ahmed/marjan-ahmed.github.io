"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowDown, Check, Copy } from "lucide-react";

import { DATA } from "@/data/resume";
import { useCopy, useZonedClock } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Container, StatusDot } from "./primitives";

/** Corner reticles — turns the avatar frame into a technical drawing. */
function Reticle({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-3 border-signal/70",
        className
      )}
    />
  );
}

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <dt className="mono-label shrink-0 text-muted-foreground/70">{label}</dt>
      <dd className="min-w-0 truncate text-end font-mono text-xs text-foreground">
        {children}
      </dd>
    </div>
  );
}

export function HeroConsole() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const clock = useZonedClock(DATA.timezone, locale);
  const { copied, copy } = useCopy();

  return (
    <section id="hero" className="relative overflow-hidden pt-16 sm:pt-24">
      {/* Blueprint ground, faded so it never competes with type. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blueprint opacity-[0.55] [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_75%)]"
      />
      {/* A single warm bloom behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 start-1/4 size-[34rem] rounded-full bg-signal/[0.07] blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ---------------- Positioning ---------------- */}
          <div className="lg:col-span-7">
            <div className="animate-rise-in flex items-center gap-2.5">
              <StatusDot tone="live" />
              <span className="mono-label text-signal">{t("eyebrow")}</span>
            </div>

            <h1
              className="animate-rise-in mt-6 border-s-2 border-signal ps-5 text-balance text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              {t("headline")}
            </h1>

            <p
              className="animate-rise-in mt-6 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              {t("sub")}
            </p>

            {/* ---------------- Actions ---------------- */}
            <div
              className="animate-rise-in mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href="#deployments"
                data-focus-custom
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3",
                  "text-sm font-medium text-background",
                  "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  "hover:scale-[1.03] active:scale-[0.97]",
                  "focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                {t("cta.primary")}
                <ArrowDown
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>

              <button
                type="button"
                onClick={() => copy(DATA.contact.email)}
                data-focus-custom
                aria-live="polite"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-5 py-3",
                  "font-mono text-xs text-muted-foreground",
                  "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  "hover:border-signal/50 hover:text-foreground active:scale-[0.97]",
                  "focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                {copied ? (
                  <Check aria-hidden className="size-3.5 text-signal" />
                ) : (
                  <Copy aria-hidden className="size-3.5" />
                )}
                <span className="hidden sm:inline">
                  {copied ? t("cta.copied") : DATA.contact.email}
                </span>
                <span className="sm:hidden">
                  {copied ? t("cta.copied") : t("cta.copyEmail")}
                </span>
              </button>
            </div>
          </div>

          {/* ---------------- Operator card ---------------- */}
          <div
            className="animate-rise-in lg:col-span-5"
            style={{ animationDelay: "240ms" }}
          >
            <div className="rounded-2xl border border-rule bg-card/70 p-5 shadow-[0_1px_0_0_var(--rule)] backdrop-blur-sm sm:p-6">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0 p-1.5">
                  <Reticle className="start-0 top-0 border-s-2 border-t-2" />
                  <Reticle className="end-0 top-0 border-e-2 border-t-2" />
                  <Reticle className="bottom-0 start-0 border-b-2 border-s-2" />
                  <Reticle className="bottom-0 end-0 border-b-2 border-e-2" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    width={72}
                    height={72}
                    className="size-[72px] rounded-lg object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-base font-semibold tracking-tight">
                    {DATA.name}
                  </p>
                  <p className="mono-label mt-1.5 text-muted-foreground">
                    {t("card.role")}
                  </p>
                </div>
              </div>

              <div
                aria-hidden
                className="my-4 h-px bg-rule"
              />

              <dl className="divide-y divide-rule">
                <MetaRow label={t("card.base")}>{DATA.location}</MetaRow>
                <MetaRow label={t("card.local")}>
                  {/* Fixed-width slot so the ticking seconds never shift layout. */}
                  <span className="numeric tabular-nums">
                    {clock ?? "--:--:--"}
                  </span>{" "}
                  <span className="text-muted-foreground">PKT</span>
                </MetaRow>
                <MetaRow label={t("card.focus")}>{t("card.focusValue")}</MetaRow>
                <MetaRow label={t("card.status")}>
                  <span className="inline-flex items-center gap-2 text-signal">
                    <StatusDot tone="live" />
                    {t("card.statusValue")}
                  </span>
                </MetaRow>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
