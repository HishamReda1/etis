import createMiddleware from 'next-intl/middleware';
import { Locales } from 'intlayer';

export default createMiddleware({
  // A list of all locales that are supported
  locales: [Locales.ENGLISH, Locales.ARABIC, Locales.FRENCH, Locales.SPANISH],
  
  // Used when no locale matches
  defaultLocale: Locales.ENGLISH,
  
  // Always show the locale in the URL
  localePrefix: 'always',
  
  // Domains can be used to configure different locales for different domains
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'example.ar',
  //     defaultLocale: 'ar'
  //   }
  // ]
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|fr|es)/:path*']
};
