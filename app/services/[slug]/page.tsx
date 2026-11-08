import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EquipmentPricing } from "@/components/equipment-pricing";
import { Arrow } from "@/components/site-shell";
import { equipmentScenes, offerings } from "@/lib/offerings";
import { pageMetadata } from "@/lib/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return offerings.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const offering = offerings.find((service) => service.slug === slug);
  if (!offering) notFound();

  return pageMetadata(offering.title, offering.description, `/services/${offering.slug}`);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const offering = offerings.find((service) => service.slug === slug);
  if (!offering) notFound();

  return (
    <article className="wrap inner-page service-detail" aria-labelledby="service-title">
      <header className="page-intro">
        <Link className="text-action" href="/services">All drone services</Link>
        <h1 id="service-title">{offering.title}</h1>
        <p className="lede">{offering.description}</p>
      </header>
      {offering.slug === "equipment" && <EquipmentPricing />}
      <div className="detail-grid">
        <figure>
          <div className="detail-media">
            <Image src={offering.detailImage} alt={offering.detailAlt} fill sizes="(max-width: 760px) 100vw, 62vw" preload />
          </div>
          <figcaption className="image-caption">Illustrative image</figcaption>
        </figure>
        <section className="detail-panel" aria-labelledby="inquiry-preparation">
          <h2 id="inquiry-preparation">What to share</h2>
          <ul>
            {offering.planning.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <Link className="button" href={`/contact?service=${offering.slug}#inquiry`}>
            {offering.action} <Arrow direction="up-right" />
          </Link>
        </section>
      </div>
      <section className="detail-notes prose" aria-labelledby="project-planning">
        <h2 id="project-planning">Planning your project</h2>
        {offering.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>
      {offering.slug === "equipment" && (
        <section className="showcase-group" aria-labelledby="aircraft-examples">
          <h2 id="aircraft-examples">Aircraft configurations</h2>
          <p className="lede configuration-intro">Two illustrative aircraft setups for imaging and survey work.</p>
          <div className="showcase-grid">
            {equipmentScenes.slice(2).map((scene) => (
              <figure className="showcase-item" key={scene.image}>
                <div className="showcase-photo"><Image src={scene.image} alt={scene.alt} fill sizes="(max-width: 540px) 100vw, 50vw" /></div>
                <figcaption><h3>{scene.title}</h3><p>{scene.description}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
