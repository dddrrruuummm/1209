import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { allowIndex, company } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: { default: company.name, template: `%s | ${company.name}` },
  description: company.description,
  robots: { index: allowIndex, follow: allowIndex },
  formatDetection: { telephone: false },
  twitter: { card: "summary_large_image" },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.name,
  description: company.description,
  url: company.domain,
  logo: `${company.domain}/mark.svg`,
  email: company.email,
  foundingDate: company.filedISO,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen">
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
