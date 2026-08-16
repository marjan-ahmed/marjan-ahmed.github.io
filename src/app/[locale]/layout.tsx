import I18nProvider from '@/components/i18n-provider';

import { cn } from '@/lib/utils';
import { Geist, Geist_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { DATA } from '@/data/resume';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import Navbar from '@/components/navbar';
import { languages } from '@/lib/constants';
import {routing} from '@/i18n/routing';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {LanguageSwitcher} from '@/components/language-switcher';
import '../globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400','500','600','700'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300','400','500','600','700'],
});

export function generateStaticParams() {
  return languages.map(l => ({ locale: l.locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(DATA.url),
    title: { default: DATA.name, template: `%s | ${DATA.name}` },
    description: DATA.description,
    alternates: {
      canonical: `/${locale}`,
      // Tells Google these are the same page in different languages, not duplicate
      // content — required for a multilingual site to rank correctly per-language.
      languages: Object.fromEntries([
        ...routing.locales.map((l) => [l, `/${l}`]),
        ["x-default", `/${routing.defaultLocale}`],
      ]),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the current locale using direct import
  const messagesModule = await import(`../../../locales/${locale}.ts`);
  const messages = messagesModule.default;

  const isRTL = locale === 'ar' || locale === 'ur';

  // Tells Google this page is about a specific person — the `sameAs` links let it
  // connect this site to the same identity on GitHub/LinkedIn/X, which is what
  // personal name searches and Knowledge Panels key off of.
  const personJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DATA.name,
    url: DATA.url,
    image: new URL(DATA.avatarUrl, DATA.url).toString(),
    jobTitle: 'Full-Stack Developer & Agentic AI Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
    ],
  }).replace(/</g, '\\u003c');

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          geist.variable,
          geistMono.variable
        )}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: personJsonLd }}
        />
        {/* Pass locale and messages to I18nProvider */}
        <I18nProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              {/* Background grid */}
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                  }}
                />
              </div>

              {/* Page content */}
              <div className="relative z-10">
                {children}
              </div>

              {/* Language Switcher - Top Right */}
              <LanguageSwitcher />

              {/* Navbar */}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
