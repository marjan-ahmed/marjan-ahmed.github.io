"use client";

import { useTranslations } from "next-intl";

import { SHIP_LOG, type LogKind } from "@/data/deployments";
import { cn } from "@/lib/utils";
import { FieldFrame } from "./field-frame";
import { Container, Reveal, SectionHeader } from "./primitives";

const KIND_STYLE: Record<LogKind, string> = {
  won: "border-signal/40 bg-signal-soft text-signal",
  published: "border-signal/40 bg-signal-soft text-signal",
  shipped: "border-foreground/20 bg-card text-foreground/80",
  joined: "border-rule bg-surface text-muted-foreground",
  started: "border-rule bg-surface text-muted-foreground",
  attended: "border-rule bg-surface text-muted-foreground",
};

/**
 * Everything that left my machine, newest first. The point of this section
 * isn't any single line — it's the density. Two years, one timeline.
 */
export function ShipLog() {
  const t = useTranslations("shipLog");
  const entries = [...SHIP_LOG].sort((a, b) => b.sort - a.sort);

  return (
    <section
      id="log"
      className="relative border-y border-rule bg-surface/50 py-20 sm:py-28"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeader
          index="004"
          eyebrow={t("eyebrow")}
          title={t("title")}
          lede={t("lede")}
        />

        <ol className="relative list-none p-0">
          {/* The rail. Sits inside padding-start so it works in RTL too. */}
          <span
            aria-hidden
            className="absolute bottom-2 start-[5px] top-2 w-px bg-rule sm:start-[calc(5.5rem+5px)]"
          />

          {entries.map((entry, i) => (
            <Reveal as="li" key={entry.id} index={i} className="min-w-0">
              <div className="group relative flex gap-4 py-4 ps-6 sm:ps-0">
                {/* Date column — its own lane on desktop. */}
                <time
                  className="mono-label hidden w-22 shrink-0 pt-1 text-end text-muted-foreground sm:block"
                  dateTime={entry.date}
                >
                  {entry.date}
                </time>

                {/* Node on the rail. */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute start-0 top-[1.35rem] size-[11px] shrink-0 rounded-full border-2 border-background sm:start-[5.5rem]",
                    "transition-transform duration-200 group-hover:scale-125",
                    entry.kind === "won" || entry.kind === "published"
                      ? "bg-signal"
                      : "bg-muted-foreground/50"
                  )}
                />

                <div className="min-w-0 flex-1 sm:ps-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span
                      className={cn(
                        "mono-label inline-flex items-center rounded border px-1.5 py-1",
                        KIND_STYLE[entry.kind]
                      )}
                    >
                      {t(`kinds.${entry.kind}`)}
                    </span>
                    <time
                      className="mono-label text-muted-foreground sm:hidden"
                      dateTime={entry.date}
                    >
                      {entry.date}
                    </time>
                  </div>

                  <p className="mt-2 text-pretty text-sm font-medium leading-snug sm:text-base">
                    {entry.title}
                  </p>

                  {entry.detail ? (
                    <p className="mt-1 text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {entry.detail}
                    </p>
                  ) : null}

                  {entry.note && entry.images?.length ? (
                    <FieldFrame
                      className="mt-4 max-w-md"
                      src={entry.images[0].src}
                      alt={entry.images[0].alt}
                      meta={entry.noteMeta ?? entry.date}
                      captionLabel={t("fieldNoteLabel")}
                      caption={entry.note}
                      aspectClassName="aspect-[4/3]"
                    />
                  ) : entry.images?.length ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {entry.images.map((img) => (
                        <div
                          key={img.src}
                          className="size-24 shrink-0 overflow-hidden rounded-xl border border-rule bg-surface shadow-sm transition-transform duration-200 hover:scale-105 sm:size-32"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
