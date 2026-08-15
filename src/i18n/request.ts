// Use this special file to configure how `getRequestConfig` resolves messages.
// Learn more: https://next-intl-docs.vercel.app/docs/request-config

import { getRequestConfig } from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) ?? routing.defaultLocale;

  return {
    locale,
    timeZone: 'Asia/Karachi',
    messages: (await import(`../../locales/${locale}.ts`)).default,
  };
});