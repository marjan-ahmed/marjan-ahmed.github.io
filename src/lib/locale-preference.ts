import { languages } from "./constants";

const STORAGE_KEY = "preferred-locale";
const SUPPORTED = languages.map((l) => l.locale);

/** The visitor's previously saved (or manually picked) locale, if any. */
export function getSavedLocale(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && SUPPORTED.includes(saved) ? saved : null;
  } catch {
    // localStorage unavailable (private mode, disabled) — treat as no preference
    return null;
  }
}

/** Remember a locale so we never re-guess for this visitor again. */
export function saveLocale(locale: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Nothing we can do if storage is blocked — detection just runs again next visit.
  }
}

/**
 * Best-guess supported locale from the browser/OS language preference —
 * not the visitor's location. `navigator.languages` is ordered by preference,
 * so the first supported match wins.
 */
export function detectBrowserLocale(): string {
  if (typeof navigator === "undefined") return "en";
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of candidates) {
    const short = lang.split("-")[0].toLowerCase();
    if (SUPPORTED.includes(short)) return short;
  }
  return "en";
}
