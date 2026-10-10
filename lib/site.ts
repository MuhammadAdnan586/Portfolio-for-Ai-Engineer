// Base URL used for metadata, sitemap and robots.
// Order: NEXT_PUBLIC_SITE_URL (set this if you add a custom domain)
//        -> Vercel production URL (automatic) -> localhost.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || vercel || "http://localhost:3000").replace(
  /\/$/,
  "",
);