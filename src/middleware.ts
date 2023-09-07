/**
 *
 * Middleware for Next.js Internationalization
 *
 */

import createMiddleware from "next-intl/middleware";
import locales from "@src/lib/i18n/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // If this locale is matched, path names work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localePrefix: "never",
  localeDetection: false,
  alternateLinks: false,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
