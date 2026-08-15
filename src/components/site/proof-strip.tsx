"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { DATA } from "@/data/resume";
import { useCountUp, useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";

function ProofValue({
  to,
  prefix,
  suffix,
  active,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const value = useCountUp(to, active);
  return (
    <span className="numeric text-3xl font-semibold tracking-tight sm:text-4xl">
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix ? <span className="text-signal">{suffix}</span> : null}
    </span>
  );
}

export function ProofStrip() {
  const t = useTranslations("proof");
  const { ref, inView } = useInView<HTMLDivElement>("-5% 0px");

  return (
    <section
      aria-labelledby="proof-heading"
      className="relative mt-16 border-y border-rule bg-surface/60 sm:mt-24"
    >
      <h2 id="proof-heading" className="sr-only">
        {t("title")}
      </h2>

      <Container>
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3",
            // Exactly one row at lg, so `divide-x` lands correctly on
            // children 2..n and nowhere else.
            "lg:grid-cols-5 lg:gap-x-0 lg:divide-x lg:divide-rule lg:rtl:divide-x-reverse"
          )}
        >
          {DATA.proof.map((item) => {
            const label = t(`items.${item.id}.label`);
            const note = t(`items.${item.id}.note`);

            const body = (
              <>
                <ProofValue
                  to={item.to}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  active={inView}
                />
                <span className="mono-label mt-2.5 text-muted-foreground">
                  {label}
                </span>
                <span className="mt-1.5 text-xs leading-snug text-muted-foreground/70">
                  {note}
                </span>
              </>
            );

            const shared =
              "flex flex-col items-start rounded-lg px-2 py-6 sm:py-7 lg:px-6";

            return item.href ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                data-focus-custom
                className={cn(
                  shared,
                  "group relative transition-colors duration-200 hover:bg-signal-soft",
                  "focus-visible:bg-signal-soft focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal"
                )}
              >
                {body}
                <ArrowUpRight
                  aria-hidden
                  className="absolute end-2 top-5 size-3.5 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:end-5"
                />
              </a>
            ) : (
              <div key={item.id} className={shared}>
                {body}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
