import Image from "next/image";
import Link from "next/link";
import { equipmentScenes, offerings } from "@/lib/offerings";
import { pageMetadata } from "@/lib/site";

const description = "Explore illustrative applications for drone equipment, pilot training, low-altitude logistics, and agricultural operations.";

export const metadata = pageMetadata("Drone applications", description, "/showcase");

const applications = offerings.flatMap((offering) => [
  { ...offering.examples[0], image: offering.image, alt: offering.alt, service: offering.slug },
  { ...offering.examples[1], image: offering.detailImage, alt: offering.detailAlt, service: offering.slug },
]);

function ShowcaseGrid({ scenes }: { scenes: readonly { title: string; description: string; image: string; alt: string; service: string }[] }) {
  return (
    <div className="showcase-grid">
      {scenes.map((scene) => (
        <figure className="showcase-item" key={scene.image}>
          <div className="showcase-photo">
            <Image src={scene.image} alt={scene.alt} fill sizes="(max-width: 540px) 100vw, 50vw" />
          </div>
          <figcaption>
            <h3>{scene.title}</h3>
            <p>{scene.description}</p>
            <Link className="text-action" href={`/services/${scene.service}`} aria-label={`Explore service for ${scene.title.toLowerCase()}`}>
              Explore service
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <section className="wrap inner-page showcase-page" aria-labelledby="showcase-title">
      <header className="page-intro">
        <h1 id="showcase-title">Drone applications</h1>
        <p className="lede">Illustrative examples of equipment setup, flight practice, aerial logistics, and field operations.</p>
      </header>
      <section className="showcase-group" id="equipment-gallery" aria-labelledby="equipment-gallery-title">
        <h2 id="equipment-gallery-title">Equipment gallery</h2>
        <ShowcaseGrid scenes={equipmentScenes.map((scene) => ({ ...scene, service: "equipment" }))} />
      </section>
      <section className="showcase-group" aria-labelledby="application-gallery-title">
        <h2 id="application-gallery-title">Flight applications</h2>
        <ShowcaseGrid scenes={applications} />
      </section>
    </section>
  );
}
