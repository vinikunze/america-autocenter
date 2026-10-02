import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { servicePages } from "@/content/servicePages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: agora,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/servicos/${page.slug}/`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
