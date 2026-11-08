import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { offerings } from "@/lib/offerings";
import { pageMetadata } from "@/lib/site";

const description = "Explore drone sales and rental, pilot training, low-altitude logistics, and agricultural drones with SALDY1209 L.L.C.";

export const metadata = pageMetadata("Drone services", description, "/services");

export default function ServicesPage() {
  return (
    <section className="wrap inner-page services-page" aria-labelledby="services-title">
      <header className="page-intro">
        <h1 id="services-title">Drone services</h1>
        <p className="lede">Find equipment, develop flight skills, or discuss an aerial project with SALDY1209.</p>
        <p className="image-caption">Illustrative equipment and flight scenes.</p>
      </header>
      <div className="service-grid">
        {offerings.map((offering) => (
          <article className="service-card" key={offering.slug}>
            <div className="service-photo">
              <Image src={offering.image} alt={offering.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
            </div>
            <div className="service-copy">
              <h2>{offering.title}</h2>
              <p>{offering.description}</p>
              <Link className="text-action" href={`/services/${offering.slug}`} aria-label={`View service details for ${offering.title}`}>
                View service <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
