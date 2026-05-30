import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig, type SeoChangeFrequency } from "../src/config/seoConfig.ts";

interface SitemapRoute {
  path: string;
  priority: number;
  changeFrequency: SeoChangeFrequency;
  lastmod: string;
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "..");
const pagesDirectory = join(projectRoot, "src", "pages");
const publicDirectory = join(projectRoot, "public");
const sitemapPath = join(publicDirectory, "sitemap.xml");

/**
 * Converts top-level src/pages folders into route paths. The generator skips
 * utility/error pages and maps "home" to the production root URL.
 */
const routePathFromPageDirectory = (directoryName: string): string | null => {
  if (directoryName === "not-found" || directoryName.startsWith("_")) {
    return null;
  }

  if (directoryName === "home" || directoryName === "index") {
    return "/";
  }

  return `/${directoryName}`;
};

/**
 * Reads src/pages and extracts route directories that contain an Index.tsx file.
 * This keeps the sitemap aligned with future page additions without requiring
 * route edits inside this script.
 */
const scanPageRoutes = (): string[] => {
  if (!existsSync(pagesDirectory)) {
    return [];
  }

  return readdirSync(pagesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((directoryName) => existsSync(join(pagesDirectory, directoryName, "Index.tsx")))
    .map(routePathFromPageDirectory)
    .filter((routePath): routePath is string => Boolean(routePath));
};

/**
 * Finds the newest modification time for a page route. Defined routes that do
 * not yet have a matching page directory fall back to the current build date.
 */
const routeLastModified = (routePath: string): string => {
  const pageDirectoryName = routePath === "/" ? "home" : routePath.replace(/^\//, "");
  const pageIndexPath = join(pagesDirectory, pageDirectoryName, "Index.tsx");

  if (!existsSync(pageIndexPath)) {
    return new Date().toISOString().split("T")[0] ?? "";
  }

  return statSync(pageIndexPath).mtime.toISOString().split("T")[0] ?? "";
};

/**
 * Escapes XML entities before writing dynamic route values into sitemap XML.
 */
const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Creates the final route list by merging configured SEO routes with detected
 * src/pages routes. Configured priorities win, which keeps homepage/projects/
 * blog weighting stable for search crawlers.
 */
const collectRoutes = (): SitemapRoute[] => {
  const scannedPaths = scanPageRoutes();
  const configuredRoutes = Object.values(siteConfig.routes);
  const configuredPaths = new Set(configuredRoutes.map((route) => route.path));
  const extraScannedRoutes = scannedPaths
    .filter((path) => !configuredPaths.has(path))
    .map((path) => ({
      path,
      priority: 0.6,
      changeFrequency: "monthly" as const,
      lastmod: routeLastModified(path),
    }));

  return [
    ...configuredRoutes.map((route) => ({
      path: route.path,
      priority: route.priority,
      changeFrequency: route.changeFrequency,
      lastmod: routeLastModified(route.path),
    })),
    ...extraScannedRoutes,
  ].sort((firstRoute, secondRoute) => {
    if (firstRoute.path === "/") {
      return -1;
    }

    if (secondRoute.path === "/") {
      return 1;
    }

    return firstRoute.path.localeCompare(secondRoute.path);
  });
};

/**
 * Generates sitemap XML with lastmod, changefreq, and priority fields.
 */
const generateSitemapXml = (routes: readonly SitemapRoute[]): string => {
  const routeXml = routes.map((route) => {
    const loc = escapeXml(new URL(route.path, siteConfig.baseURL).href);
    const lastmod = escapeXml(route.lastmod);
    const changeFrequency = escapeXml(route.changeFrequency);
    const priority = Math.min(Math.max(route.priority, 0), 1).toFixed(1);

    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changeFrequency}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routeXml,
    "</urlset>",
    "",
  ].join("\n");
};

const routes = collectRoutes();
const sitemapXml = generateSitemapXml(routes);

mkdirSync(publicDirectory, { recursive: true });
writeFileSync(sitemapPath, sitemapXml, "utf8");

console.info(`Generated ${sitemapPath} with ${routes.length} routes.`);

