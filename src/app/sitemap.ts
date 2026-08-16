import type { MetadataRoute } from "next";

import { DATA } from "@/data/resume";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${DATA.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
  }));
}
