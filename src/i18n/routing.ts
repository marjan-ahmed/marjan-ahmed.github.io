import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'ja', 'ar', 'ur'],
  defaultLocale: 'en',
  localePrefix: 'always', // Always include the locale in the URL
});