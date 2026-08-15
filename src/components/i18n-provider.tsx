'use client';

import {NextIntlClientProvider} from 'next-intl';
import type { ReactNode } from 'react';

export default function I18nProvider({
  locale,
  children,
  messages,
}: {
  locale: string;
  children: ReactNode;
  messages: Record<string, unknown>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
