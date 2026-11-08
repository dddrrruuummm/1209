import { InquiryForm } from "@/components/inquiry-form";
import { Arrow, Mark } from "@/components/site-shell";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Ask SALDY1209 L.L.C. about drone sales and rental, pilot training, logistics, or agricultural applications.", "/contact");

export default function ContactPage() {
  return (
    <article className="wrap inner-page">
      <div className="axis page-intro">
        <Mark className="page-mark" />
        <div>
          <h1>Contact us</h1>
          <p className="lede">Tell us what you’re looking for, whether it’s equipment, flight training, or help scoping a logistics or agricultural project.</p>
        </div>
      </div>
      <section className="axis inner-section" aria-labelledby="contact-details">
        <h2 id="contact-details">Contact details</h2>
        <dl className="facts">
          <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
          <div><dt>Phone</dt><dd>{company.phone.number
            ? <a href={`tel:${company.phone.number}`}>{company.phone.display}</a>
            : company.phone.display}</dd></div>
          <div><dt>City on original filing</dt><dd><a href={company.maps} className="inline-arrow">{company.location} <Arrow direction="up-right" /></a></dd></div>
        </dl>
      </section>
      <section className="axis inner-section" id="inquiry" aria-labelledby="prepare-message">
        <h2 id="prepare-message">Prepare a message</h2>
        <InquiryForm email={company.email} />
      </section>
    </article>
  );
}
