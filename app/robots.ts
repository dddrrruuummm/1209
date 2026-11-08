import type { MetadataRoute } from "next";
import { allowIndex, company } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return allowIndex
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${company.domain}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
