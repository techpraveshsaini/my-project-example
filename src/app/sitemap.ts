import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";
const publicRoutes = ["/", "/about/", "/faq/", "/contact/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
