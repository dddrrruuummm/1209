import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { equipmentScenes, offerings } from "@/lib/offerings";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Drone Equipment & Flight Services", company.description, "/");

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 id="home-title">Drones at <br />work<span>.</span></h1>
            <p>Buy or rent a drone, train as a pilot, or plan a flight for logistics or agriculture.</p>
            <Link className="button" href="#flight-services">Explore services <Arrow /></Link>
          </div>
          <figure className="hero-figure">
            <div className="hero-visual">
              <Image src="/images/drone-hero.webp" alt="Industrial quadcopter flying over open high-desert farmland" fill sizes="(max-width: 760px) 100vw, 58vw" preload />
            </div>
            <figcaption><span>Commercial drone applications</span><span>Illustrative image</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap mission-section" id="flight-services" aria-labelledby="mission-title">
        <div className="mission-intro">
          <h2 id="mission-title">Find the right <br />flight service.</h2>
          <p>Choose a service to see what it covers and what to include when you get in touch.</p>
        </div>
        <ul className="mission-list">
          {offerings.map((service) => (
            <li key={service.slug}>
              <Link className="mission-link" href={`/services/${service.slug}`}>
                <span className="waypoint" aria-hidden="true" />
                <span className="mission-name">{service.title}</span>
                <span className="mission-summary">{service.description}</span>
                <span className="mission-arrow"><Arrow direction="up-right" /></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mission-actions">
          <Link className="text-action" href="/services/equipment#pricing">View purchase &amp; rental prices <Arrow /></Link>
          <Link className="text-action" href="/showcase">See drone applications <Arrow /></Link>
        </div>
      </section>

      <section className="equipment-preview" aria-labelledby="equipment-title">
        <div className="wrap">
          <div className="mission-intro">
            <h2 id="equipment-title">Ready on <br />the ground.</h2>
            <div>
              <p>Illustrative layouts for storing aircraft, organizing transport cases, and staging equipment before a flight.</p>
              <Link className="text-action" href="/showcase#equipment-gallery">View equipment gallery <Arrow /></Link>
            </div>
          </div>
          <div className="equipment-spread">
            {equipmentScenes.slice(0, 2).map((scene) => (
              <figure key={scene.image}>
                <div className="showcase-photo">
                  <Image src={scene.image} alt={scene.alt} fill sizes="(max-width: 760px) 100vw, 54vw" />
                </div>
                <figcaption>{scene.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="inquiry-band" aria-labelledby="inquiries-title">
        <div className="wrap inquiry-band-inner">
          <div>
            <h2 id="inquiries-title">Tell us what <br />you need to fly.</h2>
            <p>Include the job, location, and timing so we can discuss the right next step.</p>
            <Link className="button" href="/contact#inquiry">Start an inquiry <Arrow direction="up-right" /></Link>
          </div>
          <svg viewBox="0 0 540 260" className="flight-trace" aria-hidden="true" fill="none">
            <path d="M21 205h138l100-105h113l122-74" stroke="currentColor" strokeWidth="2" />
            <path d="M22 196 31 205 22 214 13 205 22 196Zm238-105 9 9-9 9-9-9 9-9ZM495 12l14 14-14 14-14-14 14-14Z" fill="currentColor" />
            <path d="M160 193l12 12-12 12-12-12 12-12ZM372 88l12 12-12 12-12-12 12-12Z" fill="var(--night)" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </section>
    </>
  );
}
