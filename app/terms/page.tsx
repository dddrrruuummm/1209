import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Terms", "Terms for using the SALDY1209 L.L.C. company website.", "/terms");

export default function TermsPage() {
  return (
    <article className="wrap inner-page axis">
      <div className="reading-column prose">
        <h1>Website terms.</h1>
        <p>This site provides general information about {company.name} and a way to prepare email inquiries.</p>
        <h2>Company information</h2>
        <p>The company may update the site as information changes. Contact the company for current details before relying on information for a business decision.</p>
        <h2>Business inquiries</h2>
        <p>Using the website or sending an inquiry does not create a business agreement. Any business arrangement is subject to separately agreed terms.</p>
        <h2>Questions</h2>
        <p>Email <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </div>
    </article>
  );
}
