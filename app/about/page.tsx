import Link from "next/link";
import { CompanyFacts } from "@/components/company-facts";
import { Arrow, Mark } from "@/components/site-shell";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Company", "Learn about SALDY1209 L.L.C., a California company focused on drone sales and rental, pilot training, low-altitude logistics, and agricultural applications.", "/about");

export default function AboutPage() {
  return (
    <article className="wrap inner-page">
      <div className="axis page-intro">
        <Mark className="page-mark" />
        <div>
          <h1>About SALDY1209</h1>
          <p className="lede">{company.name} works across drone sales and rental, pilot training, low-altitude logistics, and agricultural applications.</p>
        </div>
      </div>
      <section className="axis inner-section" aria-labelledby="business">
        <h2 id="business">Working with us</h2>
        <div className="prose">
          <p>Tell us what you want to accomplish, where you plan to operate, and what equipment or experience you already have. That gives us a starting point for discussing your project.</p>
          <Link className="text-action" href="/contact">Discuss your project <Arrow /></Link>
        </div>
      </section>
      <section className="axis inner-section" aria-labelledby="record">
        <h2 id="record">Company record</h2>
        <div>
          <CompanyFacts />
          <a className="text-action" href={company.maps}>View Lancaster on Maps <Arrow direction="up-right" /></a>
        </div>
      </section>
    </article>
  );
}
