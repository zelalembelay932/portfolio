import type { ReactNode } from "react";
import { siteConfig } from "../config/seoConfig";
import { useSEO, type SchemaType } from "../hooks/useSEO";

export interface SEOHeadProps {
  page: string;
  title: string;
  description: string;
  keywords?: string[];
  schemaType?: SchemaType;
  children?: ReactNode;
}

/**
 * Invisible SEO wrapper for pages and sections.
 *
 * It renders no DOM wrapper of its own. When children are supplied, they are
 * returned as a fragment so page markup stays unchanged while metadata updates
 * happen through the useSEO hook.
 */
export const SEOHead = ({
  page,
  title,
  description,
  keywords = siteConfig.defaultKeywords.slice(),
  schemaType = "auto",
  children,
}: SEOHeadProps) => {
  useSEO(page, title, description, keywords, schemaType);

  return children ? <>{children}</> : null;
};

export default SEOHead;

