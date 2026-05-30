import { siteConfig } from "../../config/seoConfig";
import { toAbsoluteUrl } from "./metaTags";

export type JsonLdPrimitive = string | number | boolean | null;
export type JsonLdValue = JsonLdPrimitive | JsonLdObject | JsonLdValue[];
export interface JsonLdObject {
  [key: string]: JsonLdValue;
}

const schemaScriptSelector = 'script[type="application/ld+json"][data-managed-by="zelalem-seo"]';

/**
 * Builds a short excerpt for JSON-LD descriptions without exposing huge bodies
 * of article text in the document head.
 */
const excerpt = (content: string, maxLength = 220): string => {
  const normalizedContent = content.replace(/\s+/g, " ").trim();

  if (normalizedContent.length <= maxLength) {
    return normalizedContent;
  }

  return `${normalizedContent.slice(0, maxLength - 1).trim()}...`;
};

/**
 * Creates a URL-safe slug for blog and project schema identifiers.
 */
const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * JSON-LD Person schema for Zelalem. This gives search engines a clear entity
 * for the portfolio owner and reinforces the WordPress developer freelance
 * positioning across every page where it is injected.
 */
export const personSchema = (): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.baseURL}/#person`,
  name: "Zelalem",
  jobTitle: "WordPress Developer",
  description: siteConfig.defaultDescription,
  url: siteConfig.baseURL,
  image: toAbsoluteUrl(siteConfig.defaultImage),
  knowsAbout: [
    "WordPress developer freelance",
    "Elementor",
    "WooCommerce",
    "Custom PHP development",
    "Responsive web design",
    "WordPress maintenance",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.country,
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.baseURL,
  },
});

/**
 * JSON-LD Service schema for freelance WordPress development. Use this on the
 * homepage, service sections, project pages, and contact pages.
 */
export const serviceSchema = (): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.baseURL}/#wordpress-development-service`,
  name: "WordPress Development Freelance Services",
  serviceType: "WordPress development freelance",
  description:
    "Freelance WordPress development services for Elementor websites, WooCommerce stores, custom PHP work, responsive design, optimization, and maintenance.",
  provider: {
    "@type": "Person",
    "@id": `${siteConfig.baseURL}/#person`,
    name: "Zelalem",
    jobTitle: "WordPress Developer",
    url: siteConfig.baseURL,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Ethiopia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Worldwide remote freelance clients",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "business owners, startups, agencies, and WordPress site owners",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.baseURL}/contact`,
    itemOffered: {
      "@type": "Service",
      name: "Hire WordPress Developer Freelance",
    },
  },
});

/**
 * JSON-LD project schema for a portfolio item. Pass the exact project title,
 * short description, preview image, and live or GitHub link for best results.
 */
export const projectSchema = (
  title: string,
  description: string,
  image: string,
  link: string,
): JsonLdObject => {
  const projectUrl = toAbsoluteUrl(link || `/projects#${slugify(title)}`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#portfolio-project`,
    name: title,
    headline: title,
    description: excerpt(description),
    image: toAbsoluteUrl(image || siteConfig.defaultImage),
    url: projectUrl,
    keywords: "wordpress developer freelance, wordpress portfolio, woocommerce, elementor",
    creator: {
      "@type": "Person",
      "@id": `${siteConfig.baseURL}/#person`,
      name: "Zelalem",
      jobTitle: "WordPress Developer",
    },
  };
};

/**
 * JSON-LD BlogPosting schema for a blog article. The content is summarized for
 * the description while the full article body remains available to crawlers.
 */
export const blogPostSchema = (
  title: string,
  content: string,
  publishDate: string,
  image: string,
): JsonLdObject => {
  const slug = slugify(title || "wordpress-development-post");
  const blogUrl = `${siteConfig.baseURL}/blog/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${blogUrl}#blog-post`,
    headline: title,
    description: excerpt(content),
    articleBody: content,
    image: toAbsoluteUrl(image || siteConfig.defaultImage),
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    author: {
      "@type": "Person",
      "@id": `${siteConfig.baseURL}/#person`,
      name: "Zelalem",
      jobTitle: "WordPress Developer",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl(siteConfig.defaultImage),
      },
    },
    keywords: "wordpress developer freelance, wordpress development, woocommerce, elementor",
  };
};

/**
 * Removes JSON-LD scripts managed by these utilities. The hook calls this before
 * injecting route-specific schema so stale client-side route data does not stay
 * in the document head.
 */
export const clearInjectedSchemas = (): void => {
  if (typeof document === "undefined") {
    return;
  }

  document.head.querySelectorAll<HTMLScriptElement>(schemaScriptSelector).forEach((script) => {
    script.remove();
  });
};

/**
 * Injects a JSON-LD object into the document head. Existing generated schemas
 * with the same stable key are replaced, which prevents duplicates during
 * client-side rendering and navigation.
 */
export const injectSchema = (schemaObject: object): void => {
  if (typeof document === "undefined") {
    return;
  }

  try {
    const schema = schemaObject as JsonLdObject;
    const schemaType = String(schema["@type"] ?? "schema").toLowerCase();
    const schemaName = String(schema.name ?? schema.headline ?? schema["@id"] ?? "default");
    const schemaKey = slugify(`${schemaType}-${schemaName}`) || "schema";
    const scriptId = `seo-schema-${schemaKey}`;
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.dataset.managedBy = "zelalem-seo";
    script.text = JSON.stringify(schemaObject, null, 2);
    document.head.appendChild(script);
  } catch (error) {
    console.warn("Unable to inject JSON-LD schema.", error);
  }
};

