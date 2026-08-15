"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view. Fires once and disconnects —
 * nothing on this page should re-animate when you scroll back up.
 */
export function useInView<T extends HTMLElement>(rootMargin = "-12% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or a very old browser): show everything.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

/** Respects the OS "reduce motion" setting, and reacts if the user changes it. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Counts from 0 to `target` once `active` flips true.
 * Eased out so it decelerates into the final number instead of stopping dead.
 * If motion is reduced, it just *is* the number.
 */
export function useCountUp(target: number, active: boolean, duration = 1100) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, long graceful settle.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, reduced]);

  return value;
}

/**
 * A ticking wall clock for an IANA timezone.
 * Returns null until mounted so server and client HTML always agree.
 */
export function useZonedClock(timeZone: string, locale: string) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () => {
      try {
        return new Intl.DateTimeFormat(locale, {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
      } catch {
        // Unknown locale or zone — never let a clock break the page.
        return new Date().toLocaleTimeString();
      }
    };

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [timeZone, locale]);

  return time;
}

/** Copy-to-clipboard with a self-clearing "copied" flag. */
export function useCopy(resetAfter = 1800) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API blocked (insecure context, permissions) — fall back.
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        return false;
      } finally {
        document.body.removeChild(el);
      }
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), resetAfter);
    return true;
  };

  return { copied, copy };
}
