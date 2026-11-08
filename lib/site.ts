import type { Metadata } from "next";
import { offerings } from "@/lib/offerings";

export const company = {
  name: "SALDY1209 L.L.C.",
  brand: "SALDY1209",
  description: "SALDY1209 L.L.C. offers drone sales and rentals, pilot training, and inquiries for low-altitude logistics and agricultural drone applications.",
  location: "Lancaster, California",
  entityType: "California limited liability company",
  filed: "February 4, 2021",
  filedISO: "2021-02-04",
  domain: "https://saldy1209.com",
  email: "contact@saldy1209.com",
  phone: { display: "(661) 555-0146", number: "" },
  maps: "https://www.google.com/maps/search/?api=1&query=Lancaster%2C%20California",
};

export const publicRoutes = [
  "/", "/about", "/services", "/showcase", "/contact", "/privacy-policy", "/terms",
  ...offerings.map(({ slug }) => `/services/${slug}`),
];
export const allowIndex = process.env.NEXT_PUBLIC_SITE_LIVE === "true" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: path === "/" ? { absolute: `${title} | ${company.name}` } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: company.name,
      title: `${title} | ${company.name}`,
      description,
      url: path,
      locale: "en_US",
      images: [{
        url: "/images/drone-social.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial quadcopter over a high-desert landscape",
      }],
    },
  };
}
