"use client";

import { useLocale, useTranslations } from 'next-intl';
import { languages } from "@/lib/constants";
import { saveLocale } from "@/lib/locale-preference";
import { cn } from "@/lib/utils";
import { Check, GlobeIcon, XIcon } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();

  const changeLocale = (newLocale: string) => {
    saveLocale(newLocale);
    const segments = pathname.split('/');
    if (segments[1] && languages.some(lang => lang.locale === segments[1])) {
      segments[1] = newLocale;
      router.push(segments.join('/'));
    } else {
      router.push(`/${newLocale}${pathname}`);
    }
    router.refresh();
  };

  const handleMobileLanguageSelect = (locale: string) => {
    changeLocale(locale);
    setIsMobileMenuOpen(false);
  };

  const triggerClassName = cn(
    "rounded-full border border-rule bg-card/80 p-0 text-muted-foreground shadow-[0_1px_0_0_var(--rule)] backdrop-blur-md",
    "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "hover:border-signal/50 hover:bg-card/80 hover:text-foreground",
    "focus-visible:ring-2 focus-visible:ring-signal"
  );

  return (
    <div className="fixed top-4 end-4 z-50">
      {/* Mobile: full-screen panel */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          className={triggerClassName}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <GlobeIcon className="size-4" />
          <span className="sr-only">{t("common.selectLanguage")}</span>
        </Button>

        <div
          className={cn(
            "blueprint fixed inset-0 z-100 bg-background transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="mx-auto flex h-full max-w-sm flex-col items-center px-6 py-6">
            <div className="flex w-full justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                data-focus-custom
                className="rounded-full border border-rule bg-card/80 text-muted-foreground hover:border-signal/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-signal"
              >
                <XIcon className="size-5" />
                <span className="sr-only">{t("palette.close")}</span>
              </Button>
            </div>
            <p className="mono-label mt-10 mb-6 text-signal">{t("common.selectLanguage")}</p>
            <div className="grid w-full gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.locale}
                  onClick={() => handleMobileLanguageSelect(lang.locale)}
                  data-focus-custom
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-start text-base transition-colors duration-150",
                    locale === lang.locale
                      ? "border-signal/35 bg-signal-soft font-medium text-foreground"
                      : "border-rule bg-surface text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                  )}
                >
                  <span className="text-xl">{lang.flag}</span>
                  {lang.name}
                  {locale === lang.locale && <Check className="ms-auto size-4 text-signal" aria-hidden />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: dropdown */}
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className={triggerClassName}>
              <GlobeIcon className="size-4" />
              <span className="sr-only">{t("common.selectLanguage")}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="min-w-44 rounded-2xl border border-rule bg-card p-2 shadow-2xl shadow-black/20"
          >
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.locale}
                onClick={() => changeLocale(lang.locale)}
                className={cn(
                  "gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150",
                  locale === lang.locale
                    ? "bg-signal-soft font-medium text-foreground focus:bg-signal-soft"
                    : "text-muted-foreground focus:bg-surface focus:text-foreground"
                )}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {locale === lang.locale && <Check className="size-4 text-signal" aria-hidden />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
