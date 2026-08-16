"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  CornerDownLeft,
  Github,
  Globe,
  Linkedin,
  Mail,
  MoonStar,
  Search,
  SunMedium,
} from "lucide-react";

import { DATA } from "@/data/resume";
import { SECTIONS } from "@/data/nav";
import { languages } from "@/lib/constants";
import { useCopy } from "@/lib/hooks";
import { saveLocale } from "@/lib/locale-preference";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */

interface PaletteContextValue {
  open: () => void;
  isOpen: boolean;
}

const PaletteContext = createContext<PaletteContextValue>({
  open: () => {},
  isOpen: false,
});

export const useCommandPalette = () => useContext(PaletteContext);

/* ------------------------------------------------------------------ */

type Action = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
  /** Extra words that should match this action when typed. */
  keywords?: string;
};

export function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("palette");
  const tNav = useTranslations("nav");
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { copied, copy } = useCopy();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  /** Where focus was before we opened, so we can put it back. */
  const restoreRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setIsOpen(false), []);

  const open = useCallback(() => {
    restoreRef.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActive(0);
    setIsOpen(true);
  }, []);

  /* ---------------- Actions ---------------- */

  const actions = useMemo<Action[]>(() => {
    const go = (id: string) => () => {
      close();
      // Let the dialog unmount first, otherwise the scroll lock fights us.
      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    const switchLocale = (next: string) => () => {
      close();
      saveLocale(next);
      const segments = pathname.split("/");
      if (segments[1] && languages.some((l) => l.locale === segments[1])) {
        segments[1] = next;
        router.push(segments.join("/"));
      } else {
        router.push(`/${next}${pathname}`);
      }
    };

    const openExternal = (url: string) => () => {
      close();
      window.open(url, "_blank", "noopener,noreferrer");
    };

    return [
      ...SECTIONS.map((s) => ({
        id: `go-${s.id}`,
        label: tNav(s.id),
        hint: s.index,
        group: t("groups.jump"),
        icon: Search,
        run: go(s.id),
      })),
      {
        id: "copy-email",
        label: t("actions.copyEmail"),
        hint: DATA.contact.email,
        group: t("groups.contact"),
        icon: copied ? Check : Mail,
        keywords: "email mail contact reach",
        run: () => {
          void copy(DATA.contact.email);
        },
      },
      {
        id: "github",
        label: t("actions.github"),
        group: t("groups.contact"),
        icon: Github,
        keywords: "code repos source",
        run: openExternal(DATA.contact.social.GitHub.url),
      },
      {
        id: "linkedin",
        label: t("actions.linkedin"),
        group: t("groups.contact"),
        icon: Linkedin,
        keywords: "hire work cv resume",
        run: openExternal(DATA.contact.social.LinkedIn.url),
      },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? t("actions.light") : t("actions.dark"),
        group: t("groups.settings"),
        icon: resolvedTheme === "dark" ? SunMedium : MoonStar,
        keywords: "theme dark light mode appearance",
        run: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          close();
        },
      },
      ...languages
        .filter((l) => l.locale !== locale)
        .map((l) => ({
          id: `locale-${l.locale}`,
          label: `${l.flag}  ${l.name}`,
          hint: l.locale.toUpperCase(),
          group: t("groups.language"),
          icon: Globe,
          keywords: `language locale translate ${l.locale} ${l.name}`,
          run: switchLocale(l.locale),
        })),
    ];
  }, [
    t,
    tNav,
    close,
    copy,
    copied,
    resolvedTheme,
    setTheme,
    locale,
    pathname,
    router,
  ]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) =>
      `${a.label} ${a.hint ?? ""} ${a.group} ${a.keywords ?? ""}`
        .toLowerCase()
        .includes(q)
    );
  }, [actions, query]);

  /* ---------------- Global shortcut ---------------- */

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isToggle = e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey);
      // "/" is a nice second opener, but never while the user is typing.
      const target = e.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (isToggle) {
        e.preventDefault();
        setIsOpen((v) => {
          if (v) return false;
          restoreRef.current = document.activeElement as HTMLElement | null;
          setQuery("");
          setActive(0);
          return true;
        });
      } else if (e.key === "/" && !typing && !isOpen) {
        e.preventDefault();
        open();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, open]);

  /* ---------------- Open/close side effects ---------------- */

  useEffect(() => {
    if (!isOpen) {
      restoreRef.current?.focus?.();
      return;
    }

    // Lock scroll without the layout jumping as the scrollbar disappears.
    const { body } = document;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingInlineEnd;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingInlineEnd = `${gap}px`;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 20);

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingInlineEnd = prevPad;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  /* Keep the highlighted row in view as you arrow through. */
  useEffect(() => {
    if (!isOpen) return;
    listRef.current
      ?.querySelector<HTMLElement>('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [active, isOpen]);

  useEffect(() => setActive(0), [query]);

  /* ---------------- Keyboard within the dialog ---------------- */

  const onDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        results.length ? (i - 1 + results.length) % results.length : 0
      );
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      setActive(Math.max(results.length - 1, 0));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      results[active]?.run();
      return;
    }
    if (e.key === "Tab") {
      // Only one focusable element in here — keep focus inside.
      e.preventDefault();
    }
  };

  /* ---------------- Render ---------------- */

  let lastGroup = "";

  return (
    <PaletteContext.Provider value={{ open, isOpen }}>
      {children}

      {isOpen ? (
        <div
          className="fixed inset-0 z-100 flex items-start justify-center p-4 pt-[12vh] sm:pt-[16vh]"
          onKeyDown={onDialogKeyDown}
        >
          {/* Scrim */}
          <button
            type="button"
            aria-label={t("close")}
            onClick={close}
            className="absolute inset-0 cursor-default bg-background/70 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("label")}
            className={cn(
              "animate-panel-open relative flex w-full max-w-xl flex-col overflow-hidden",
              "rounded-2xl border border-rule bg-card shadow-2xl shadow-black/20"
            )}
          >
            {/* Search row */}
            <div className="flex items-center gap-3 border-b border-rule px-4">
              <Search
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground"
              />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-autocomplete="list"
                aria-activedescendant={
                  results[active] ? `palette-opt-${results[active].id}` : undefined
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("placeholder")}
                data-focus-custom
                className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="mono-label hidden shrink-0 rounded border border-rule bg-surface px-1.5 py-1 text-muted-foreground sm:block">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <ul
              id="palette-list"
              ref={listRef}
              role="listbox"
              aria-label={t("label")}
              className="max-h-[52vh] list-none overflow-y-auto p-2"
            >
              {results.length === 0 ? (
                <li className="px-3 py-8 text-center text-sm text-muted-foreground">
                  {t("empty", { query: query.trim() })}
                </li>
              ) : (
                results.map((item, i) => {
                  const showGroup = item.group !== lastGroup;
                  lastGroup = item.group;
                  const Icon = item.icon;
                  const isActive = i === active;

                  return (
                    <li key={item.id}>
                      {showGroup ? (
                        <p className="mono-label px-3 pb-1.5 pt-3 text-muted-foreground">
                          {item.group}
                        </p>
                      ) : null}

                      <div
                        id={`palette-opt-${item.id}`}
                        role="option"
                        aria-selected={isActive}
                        data-active={isActive}
                        onClick={() => item.run()}
                        onMouseMove={() => setActive(i)}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm",
                          "transition-colors duration-150",
                          isActive
                            ? "bg-signal-soft text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-4 shrink-0",
                            isActive ? "text-signal" : "text-muted-foreground"
                          )}
                        />
                        <span className="min-w-0 flex-1 truncate">
                          {item.id === "copy-email" && copied
                            ? t("actions.copied")
                            : item.label}
                        </span>
                        {item.hint ? (
                          <span className="hidden shrink-0 font-mono text-[11px] text-muted-foreground sm:block">
                            {item.hint}
                          </span>
                        ) : null}
                        {isActive ? (
                          <CornerDownLeft
                            aria-hidden
                            className="size-3.5 shrink-0 text-signal"
                          />
                        ) : null}
                      </div>
                    </li>
                  );
                })
              )}
            </ul>

            {/* Footer legend */}
            <div className="flex items-center gap-4 border-t border-rule px-4 py-2.5">
              <span className="mono-label flex items-center gap-1.5 text-muted-foreground">
                <kbd className="rounded border border-rule bg-surface px-1 py-0.5">
                  ↑↓
                </kbd>
                {t("legend.move")}
              </span>
              <span className="mono-label flex items-center gap-1.5 text-muted-foreground">
                <kbd className="rounded border border-rule bg-surface px-1 py-0.5">
                  ↵
                </kbd>
                {t("legend.select")}
              </span>
              <a
                href={DATA.url}
                className="mono-label ms-auto hidden items-center gap-1 text-muted-foreground hover:text-foreground sm:flex"
              >
                {DATA.initials}
                <ArrowUpRight aria-hidden className="size-3" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </PaletteContext.Provider>
  );
}
