"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";
import {
  Boxes,
  Database,
  FileInput,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

import type { ArchNode, NodeKind } from "@/data/deployments";
import { cn } from "@/lib/utils";

/**
 * Each node kind gets its own visual grammar so the shape of a system is
 * readable before you read a single word: dashed = data I don't control,
 * signal = an inference call, solid = a service I wrote and deployed.
 */
const KIND: Record<
  NodeKind,
  { icon: typeof Boxes; box: string; icn: string }
> = {
  source: {
    icon: FileInput,
    box: "border-dashed border-rule bg-transparent",
    icn: "text-muted-foreground",
  },
  service: {
    icon: Boxes,
    box: "border-solid border-foreground/25 bg-card",
    icn: "text-foreground",
  },
  model: {
    icon: Sparkles,
    box: "border-solid border-signal/45 bg-signal-soft",
    icn: "text-signal",
  },
  store: {
    icon: Database,
    box: "border-solid border-rule bg-surface",
    icn: "text-muted-foreground",
  },
  surface: {
    icon: MonitorSmartphone,
    box: "border-solid border-foreground/25 bg-foreground/[0.04]",
    icn: "text-foreground",
  },
};

function Edge({ animate }: { animate: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative shrink-0 self-center",
        // Vertical connector when the flow stacks, horizontal when it runs.
        "my-1 h-5 w-px sm:my-0 sm:h-px sm:w-6 lg:w-9"
      )}
    >
      <span
        className={cn(
          "absolute inset-0 sm:hidden",
          animate ? "flow-edge-y" : "bg-rule"
        )}
      />
      <span
        className={cn(
          "absolute inset-0 hidden sm:block",
          animate ? "flow-edge-x" : "bg-rule"
        )}
      />
    </div>
  );
}

export function ArchitectureFlow({
  nodes,
  animate = true,
  className,
}: {
  nodes: ArchNode[];
  animate?: boolean;
  className?: string;
}) {
  const t = useTranslations("deployments");

  return (
    <figure className={cn("m-0", className)}>
      <figcaption className="mono-label mb-4 text-muted-foreground">
        {t("architecture")}
      </figcaption>

      {/* Horizontal scroll is contained here so the page body never shifts. */}
      <div className="-mx-1 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]">
        <ol className="flex list-none flex-col items-stretch p-0 sm:flex-row sm:items-stretch">
          {nodes.map((node, i) => {
            const style = KIND[node.kind];
            const Icon = style.icon;

            return (
              <Fragment key={node.id}>
                <li
                  className={cn(
                    "group/node relative flex min-w-0 flex-1 items-start gap-2.5 rounded-lg border p-3",
                    "sm:min-w-[8.5rem] sm:flex-col sm:gap-2",
                    "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    "hover:-translate-y-0.5",
                    style.box
                  )}
                >
                  <Icon
                    aria-hidden
                    className={cn("mt-px size-4 shrink-0", style.icn)}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium leading-tight text-foreground">
                      {node.label}
                    </p>
                    {node.detail ? (
                      <p className="mt-1 font-mono text-[10px] leading-tight text-muted-foreground">
                        {node.detail}
                      </p>
                    ) : null}
                  </div>
                </li>

                {i < nodes.length - 1 ? <Edge animate={animate} /> : null}
              </Fragment>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}
