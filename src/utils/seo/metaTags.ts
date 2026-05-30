import { siteConfig, targetKeyword, type SeoRouteKey } from "../../config/seoConfig";

type MetaAttribute = "name" | "property";

const pageAliases: Record<string, SeoRouteKey> = {
  "/": "home",
  home: "home",
  projects: "projects",
  "/projects": "projects",
  about: "about",
  "/about": "about",
  contact: "contact",
  "/contact": "contact",
  blog: "blog",
  "/blog": "blog",
};

/**
 * Collapses repeated whitespace so titles and descriptions are safe to inject
 * into document metadata without preserving accidental line breaks.
 */
const normalizeText = (value: string): string => value.replace(/\s+/g, " ").trim();

/**
 * Converts user-provided keywords into a de-duplicated keyword list that always
 * keeps the primary SEO target available across every page.
 */
const normalizeKeywords = (keywords: readonly string[]): string[] => {
  const mergedKeywords = [targetKeyword, ...siteConfig.defaultKeywords, ...keywords];
  const seenKeywords = new Set<string>();

  return mergedKeywords
    .map((keyword) => normalizeText(keyword).toLowerCase())
    .filter((keyword) => {
      if (!keyword || seenKeywords.has(keyword)) {
        return false;
      }

      seenKeywords.add(keyword);
      return true;
    });
};

/**
 * Converts a page key, pathname, hash-route, or absolute URL into a normalized
 * pathname that can be used as the canonical URL path.
 */
export const getCanonicalPath = (page: string): string => {
  const rawPage = normalizeText(page || "home");
  const normalizedInput = rawPage.toLowerCase();
  const alias = pageAliases[normalizedInput];

  if (alias) {
    return siteConfig.routes[alias].path;
  }

  try {
    if (/^https?:\/\//i.test(rawPage)) {
      const parsedUrl = new URL(rawPage);
      return parsedUrl.pathname === "" ? "/" : parsedUrl.pathname;
    }
  } catch {
    return "/";
  }

  const withoutHashPrefix = rawPage.replace(/^#\/?/, "/");
  const withoutQuery = withoutHashPrefix.split("?")[0]?.split("#")[0] ?? "/";
  const withLeadingSlash = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, "");

  return withoutTrailingSlash === "" || withoutTrailingSlash === "/home" ? "/" : withoutTrailingSlash;
};

/**
 * Returns a complete URL against the configured production domain. Absolute
 * values are preserved so project-specific images or links can be passed in.
 */
export const toAbsoluteUrl = (pathOrUrl: string): string => {
  try {
    return new URL(pathOrUrl, siteConfig.baseURL).href;
  } catch {
    return siteConfig.baseURL;
  }
};

/**
 * Resolves route-specific defaults for title, description, keywords, image, and
 * canonical URL. Unknown pages still receive safe production defaults.
 */
export const resolvePageMeta = (page: string) => {
  const canonicalPath = getCanonicalPath(page);
  const routeEntry = Object.values(siteConfig.routes).find((route) => route.path === canonicalPath);
  const routeConfig = routeEntry ?? siteConfig.routes.home;

  return {
    canonicalPath,
    canonicalUrl: toAbsoluteUrl(canonicalPath),
    imageUrl: toAbsoluteUrl(routeConfig.image || siteConfig.defaultImage),
    routeConfig,
  };
};

/**
 * Creates or updates a standard meta tag. The helper is intentionally tiny and
 * dependency-free so it can run in any Vite browser build.
 */
const setMetaTag = (attribute: MetaAttribute, key: string, content: string): void => {
  const normalizedContent = normalizeText(content);
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", normalizedContent);
};

/**
 * Creates or updates the canonical URL for the current page. A stable canonical
 * URL helps consolidate ranking signals for hash routes and direct path routes.
 */
const setCanonicalLink = (canonicalUrl: string): void => {
  let canonicalTag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.setAttribute("href", canonicalUrl);
};

/**
 * Dynamically sets SEO meta tags for any portfolio page.
 *
 * The function updates:
 * - document title
 * - description, keywords, author, and robots tags
 * - Open Graph tags for social previews
 * - Twitter card tags
 * - canonical URL
 *
 * It is safe to call multiple times during client-side navigation because
 * existing tags are updated instead of duplicated.
 */
export const setMetaTags = (
  page: string,
  title: string,
  description: string,
  keywords: string[],
): void => {
  if (typeof document === "undefined") {
    return;
  }

  try {
    const normalizedTitle = normalizeText(title || siteConfig.siteName);
    const normalizedDescription = normalizeText(description || siteConfig.defaultDescription);
    const keywordContent = normalizeKeywords(keywords).join(", ");
    const { canonicalUrl, imageUrl } = resolvePageMeta(page);

    document.title = normalizedTitle;
    document.documentElement.lang = "en";

    setMetaTag("name", "description", normalizedDescription);
    setMetaTag("name", "keywords", keywordContent);
    setMetaTag("name", "author", siteConfig.author);
    setMetaTag("name", "robots", "index, follow, max-image-preview:large");
    setMetaTag("name", "theme-color", "#0f172a");

    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", siteConfig.siteName);
    setMetaTag("property", "og:title", normalizedTitle);
    setMetaTag("property", "og:description", normalizedDescription);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", imageUrl);
    setMetaTag("property", "og:image:alt", `${siteConfig.author} - WordPress Developer Freelance`);
    setMetaTag("property", "og:locale", siteConfig.locale);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", normalizedTitle);
    setMetaTag("name", "twitter:description", normalizedDescription);
    setMetaTag("name", "twitter:image", imageUrl);

    setCanonicalLink(canonicalUrl);
  } catch (error) {
    console.warn("Unable to update SEO meta tags.", error);
  }
};

