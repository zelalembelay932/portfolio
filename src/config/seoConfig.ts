export type SeoRouteKey = "home" | "projects" | "about" | "contact" | "blog";

export type SeoChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SeoRouteConfig {
  path: string;
  title: string;
  description: string;
  keywords: readonly string[];
  priority: number;
  changeFrequency: SeoChangeFrequency;
  image: string;
}

export interface SiteConfig {
  baseURL: string;
  siteName: string;
  defaultDescription: string;
  defaultKeywords: readonly string[];
  author: string;
  location: {
    city: string;
    country: string;
  };
  defaultImage: string;
  locale: string;
  routes: Record<SeoRouteKey, SeoRouteConfig>;
}

export const targetKeyword = "wordpress developer freelance";

export const siteConfig: SiteConfig = {
  baseURL: "https://zelalem.tech",
  siteName: "Zelalem - WordPress Developer Freelance",
  defaultDescription:
    "Freelance WordPress developer specializing in Elementor, WooCommerce, custom PHP development. Hire me on Upwork for your WordPress project.",
  defaultKeywords: [
    "wordpress developer freelance",
    "wordpress freelance",
    "elementor developer",
    "woocommerce developer freelance",
  ],
  author: "Zelalem",
  location: {
    city: "Addis Ababa",
    country: "Ethiopia",
  },
  defaultImage: "/images/Zelalem_Belay.png",
  locale: "en_US",
  routes: {
    home: {
      path: "/",
      title: "WordPress Developer Freelance | Zelalem",
      description:
        "Hire Zelalem, a freelance WordPress developer for Elementor, WooCommerce, custom PHP, responsive design, and high-performing WordPress websites.",
      keywords: [
        "wordpress developer freelance",
        "hire wordpress developer",
        "freelance wordpress developer",
        "wordpress website developer",
      ],
      priority: 1.0,
      changeFrequency: "weekly",
      image: "/images/Zelalem_Belay.png",
    },
    projects: {
      path: "/projects",
      title: "WordPress Portfolio Projects | Zelalem",
      description:
        "Explore freelance WordPress developer projects by Zelalem, including WooCommerce stores, Elementor websites, business websites, and custom web systems.",
      keywords: [
        "wordpress developer freelance projects",
        "wordpress portfolio",
        "woocommerce portfolio",
        "elementor portfolio",
      ],
      priority: 0.9,
      changeFrequency: "weekly",
      image: "/images/Zelalem_Belay.png",
    },
    about: {
      path: "/about",
      title: "About Zelalem | Freelance WordPress Developer",
      description:
        "Learn about Zelalem, a freelance WordPress developer focused on Elementor, WooCommerce, PHP, responsive websites, and reliable client delivery.",
      keywords: [
        "about wordpress developer freelance",
        "zelalem wordpress developer",
        "wordpress developer ethiopia",
        "freelance web developer",
      ],
      priority: 0.7,
      changeFrequency: "monthly",
      image: "/images/Zelalem_Belay.png",
    },
    contact: {
      path: "/contact",
      title: "Contact Zelalem | Hire WordPress Developer Freelance",
      description:
        "Contact Zelalem to hire a WordPress developer freelance for Elementor websites, WooCommerce stores, PHP customization, and WordPress maintenance.",
      keywords: [
        "hire wordpress developer freelance",
        "contact wordpress developer",
        "wordpress freelancer upwork",
        "wordpress maintenance freelance",
      ],
      priority: 0.7,
      changeFrequency: "monthly",
      image: "/images/Zelalem_Belay.png",
    },
    blog: {
      path: "/blog",
      title: "WordPress Development Blog | Zelalem",
      description:
        "WordPress development articles from Zelalem covering WooCommerce, Elementor, PHP customization, performance, and freelance WordPress project delivery.",
      keywords: [
        "wordpress developer freelance blog",
        "wordpress development tips",
        "woocommerce guide",
        "elementor developer tips",
      ],
      priority: 0.8,
      changeFrequency: "weekly",
      image: "/images/Zelalem_Belay.png",
    },
  },
};

