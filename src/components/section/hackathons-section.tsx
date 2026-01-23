/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function HackathonsSection() {
  // Only render if there are hackathons to show
  if (!DATA.hackathons || DATA.hackathons.length < 1) {
    return null;
  }

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Building Under Pressure</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Hackathons are where innovation meets adrenaline. Collaborating with talented individuals
              to build solutions in limited time has sharpened my problem-solving skills and taught me
              the value of rapid prototyping.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => {
            const hack = hackathon as NonNullable<typeof DATA.hackathons[number]>;
            return (
            <TimelineItem key={hack.title + hack.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {hack.image ? (
                  <img
                    src={hack.image}
                    alt={hack.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 border rounded-full shadow ring-2 ring-border flex-none flex items-center justify-center text-xs font-semibold text-muted-foreground">
                    {hack.title.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase()}
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {hack.dates && (
                  <time className="text-xs text-muted-foreground">{hack.dates}</time>
                )}
                {hack.title && (
                  <h3 className="font-semibold leading-none">{hack.title}</h3>
                )}
                {hack.location && (
                  <p className="text-sm text-muted-foreground">{hack.location}</p>
                )}
                {hack.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hack.description}
                  </p>
                )}
                {hack.links && hack.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {hack.links.map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
