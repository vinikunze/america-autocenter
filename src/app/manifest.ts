import type { MetadataRoute } from "next";
import { business, basePath } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — ${business.city}/${business.state}`,
    short_name: business.name,
    description: business.shortDescription,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#121010",
    theme_color: "#121010",
    lang: "pt-BR",
    icons: [{ src: `${basePath}/icon.png`, sizes: "512x512", type: "image/png" }],
  };
}
