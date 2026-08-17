"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/lib/hooks";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Transform + opacity only, so it stays on the
 * compositor. `index` staggers siblings — follow-through, per the
 * animation principles: children finish after the parent.
 */
export function Reveal({
  children,
  index = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      // @ts-expect-error -- one ref type across the allowed tags
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none",
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className
      )}
      style={{ transitionDelay: inView ? `${Math.min(index, 8) * 60}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

/**
 * Numbered section header. The index number is what makes the page read
 * like a document rather than a scroll of cards.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-col gap-4", className)}>
      <Reveal className="flex items-center gap-3">
        <span className="mono-label text-signal shrink-0">{index}</span>
        <span className="mono-label text-muted-foreground shrink-0">
          {eyebrow}
        </span>
        <span aria-hidden className="h-px flex-1 bg-rule" />
      </Reveal>

      <Reveal index={1} className="flex flex-col gap-3">
        <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {lede ? (
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {lede}
          </p>
        ) : null}
      </Reveal>
    </header>
  );
}

/** The one horizontal rhythm the whole page shares. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Live/won/shipped indicator. The halo only renders for genuinely live things. */
export function StatusDot({
  tone = "live",
  className,
}: {
  tone?: "live" | "won" | "shipped";
  className?: string;
}) {
  const color =
    tone === "shipped" ? "bg-muted-foreground" : "bg-signal";

  return (
    <span className={cn("relative flex size-2 shrink-0", className)} aria-hidden>
      {tone !== "shipped" ? (
        <span
          className={cn(
            "absolute inset-0 rounded-full animate-signal-halo",
            color
          )}
        />
      ) : null}
      <span
        className={cn(
          "relative size-2 rounded-full",
          color,
          tone !== "shipped" && "animate-signal-pulse"
        )}
      />
    </span>
  );
}

/** Corner reticles — turns a photo or avatar frame into a technical drawing. */
export function Reticle({ className }: { className: string }) {
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

/** Small mono chip used for stack items and tags. */
export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-rule bg-surface px-2 py-1",
        "font-mono text-[11px] leading-none text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
