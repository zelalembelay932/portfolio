import { siteConfig, type SeoChangeFrequency } from "../../config/seoConfig";

export interface SitemapRoute {
  path: string;
  priority: number;
  changeFrequency: SeoChangeFrequency;
  lastmod?: string;
}

const defaultRoutes: SitemapRoute[] = Object.values(siteConfig.routes).map((route) => ({
  path: route.path,
  priority: route.priority,
  changeFrequency: route.changeFrequency,
}));

/**
 * Escapes XML-sensitive characters so generated sitemap values remain valid
 * even if future dynamic routes include special characters.
 */
const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Normalizes a route into an absolute production URL for sitemap output.
 */
const sitemapUrl = (path: string): string => {
  try {
    return new URL(path, siteConfig.baseURL).href;
  } catch {
    return siteConfig.baseURL;
  }
};

/**
 * Converts a date-like value to YYYY-MM-DD, which is the cleanest sitemap
 * lastmod format for static portfolio pages.
 */
const formatLastModified = (date: string | Date): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (Number.isNaN(parsedDate.getTime())) {
    return new Date().toISOString().split("T")[0] ?? "";
  }

  return parsedDate.toISOString().split("T")[0] ?? "";
};

/**
 * Generates an XML sitemap for the production portfolio.
 *
 * The utility is browser-safe and returns XML as a string. The companion
 * scripts/generateSitemap.mts Node script writes this XML to /public/sitemap.xml
 * before build or deployment.
 */
export const generateSitemap = (
  routes: readonly SitemapRoute[] = defaultRoutes,
  lastmod: string | Date = new Date(),
): string => {
  const fallbackLastmod = formatLastModified(lastmod);
  const routeEntries = routes.map((route) => {
    const loc = escapeXml(sitemapUrl(route.path));
    const routeLastmod = escapeXml(formatLastModified(route.lastmod ?? fallbackLastmod));
    const changeFrequency = escapeXml(route.changeFrequency);
    const priority = Math.min(Math.max(route.priority, 0), 1).toFixed(1);

    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${routeLastmod}</lastmod>`,
      `    <changefreq>${changeFrequency}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routeEntries,
    "</urlset>",
    "",
  ].join("\n");
};

