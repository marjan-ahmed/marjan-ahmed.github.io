import { cn } from "@/lib/utils";
import { Reticle } from "./primitives";

/**
 * A photo treated as instrumentation, not decoration — the same corner
 * reticles that frame the hero avatar, extended to real event photos.
 * Graded with the site's own signal colour instead of a stock filter, so
 * it reads as evidence that belongs to this page, not an attached snapshot.
 */
export function FieldFrame({
  src,
  alt,
  meta,
  captionLabel,
  caption,
  aspectClassName = "aspect-[4/5]",
  className,
}: {
  src: string;
  alt: string;
  meta: string;
  captionLabel: string;
  caption: string;
  aspectClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2.5 border-y border-rule py-2">
        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-signal" />
        <span className="mono-label text-muted-foreground">{meta}</span>
      </div>

      <div className="relative p-1.5">
        <Reticle className="start-0 top-0 border-s-2 border-t-2" />
        <Reticle className="end-0 top-0 border-e-2 border-t-2" />
        <Reticle className="bottom-0 start-0 border-b-2 border-s-2" />
        <Reticle className="bottom-0 end-0 border-b-2 border-e-2" />
        <div className={cn("relative overflow-hidden rounded-lg", aspectClassName)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="size-full object-cover grayscale contrast-[1.12] brightness-[0.95]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-signal mix-blend-color opacity-25"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-3">
        <div className="flex items-center gap-2.5">
          <span className="mono-label text-muted-foreground">{captionLabel}</span>
          <span aria-hidden className="h-px flex-1 bg-rule" />
        </div>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {caption}
        </p>
      </div>
    </div>
  );
}
