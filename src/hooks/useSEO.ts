import { useEffect } from "react";
import { siteConfig } from "../config/seoConfig";
import { setMetaTags } from "../utils/seo/metaTags";
import {
  blogPostSchema,
  clearInjectedSchemas,
  injectSchema,
  personSchema,
  serviceSchema,
  type JsonLdObject,
} from "../utils/seo/structuredData";

export type SchemaType = "auto" | "person" | "service" | "blogPost" | "none";

/**
 * Chooses sensible JSON-LD schema for a portfolio page. The default "auto" mode
 * keeps usage simple while still making each route semantically clear.
 */
const schemasForPage = (
  page: string,
  schemaType: SchemaType,
  title: string,
  description: string,
): JsonLdObject[] => {
  if (schemaType === "none") {
    return [];
  }

  if (schemaType === "person") {
    return [personSchema()];
  }

  if (schemaType === "service") {
    return [serviceSchema()];
  }

  if (schemaType === "blogPost") {
    return [blogPostSchema(title, description, new Date().toISOString(), siteConfig.defaultImage)];
  }

  const normalizedPage = page.toLowerCase();

  if (normalizedPage.includes("project")) {
    return [serviceSchema()];
  }

  if (normalizedPage.includes("blog")) {
    return [blogPostSchema(title, description, new Date().toISOString(), siteConfig.defaultImage)];
  }

  if (normalizedPage.includes("contact")) {
    return [personSchema(), serviceSchema()];
  }

  if (normalizedPage.includes("about")) {
    return [personSchema()];
  }

  return [personSchema(), serviceSchema()];
};

/**
 * React hook for applying SEO metadata and schema when a page renders.
 *
 * Example:
 * useSEO(
 *   "home",
 *   "WordPress Developer Freelance | Zelalem",
 *   "Hire Zelalem for Elementor, WooCommerce, and custom WordPress development.",
 *   ["wordpress", "freelance"],
 * );
 */
export const useSEO = (
  page: string,
  title: string,
  description: string,
  keywords: string[] = [],
  schemaType: SchemaType = "auto",
): void => {
  useEffect(() => {
    setMetaTags(page, title, description, keywords);
    clearInjectedSchemas();
    schemasForPage(page, schemaType, title, description).forEach(injectSchema);
  }, [page, title, description, keywords, schemaType]);
};

