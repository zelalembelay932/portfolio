import { siteConfig } from "../../config/seoConfig";

export interface RobotsTxtOptions {
  disallow?: readonly string[];
  sitemapUrl?: string;
}

/**
 * Sanitizes robots.txt path directives. robots.txt expects path values, not full
 * URLs, so invalid or empty values are ignored.
 */
const normalizePathDirective = (path: string): string | null => {
  const normalizedPath = path.trim();

  if (!normalizedPath) {
    return null;
  }

  return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
};

/**
 * Generates robots.txt content for the portfolio.
 *
 * The content allows the public site, disallows private/admin areas, and points
 * crawlers to the production sitemap. Write this string to /public/robots.txt
 * from a Node script when you want to refresh the static file.
 */
export const generateRobotsTxt = (options: RobotsTxtOptions = {}): string => {
  const disallowRules = options.disallow ?? ["/admin", "/private"];
  const sitemapUrl = options.sitemapUrl ?? `${siteConfig.baseURL}/sitemap.xml`;
  const normalizedDisallowRules = disallowRules
    .map(normalizePathDirective)
    .filter((path): path is string => Boolean(path));

  return [
    "User-agent: *",
    "Allow: /",
    ...normalizedDisallowRules.map((path) => `Disallow: ${path}`),
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");
};

