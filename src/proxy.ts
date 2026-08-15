import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … generated metadata routes (`/icon`, `/apple-icon`, `/opengraph-image`, `/twitter-image`) — these
  //   have no file extension in their URL, so they aren't caught by the dot-detection rule below and would
  //   otherwise get redirected to a locale-prefixed path that doesn't exist (404).
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|icon(?:/|$)|apple-icon(?:/|$)|opengraph-image(?:/|$)|twitter-image(?:/|$)|.*\\..*).*)'
};
