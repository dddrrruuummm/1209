import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Privacy Policy", "How this company website handles email inquiries and technical information.", "/privacy-policy");

export default function PrivacyPage() {
  return (
    <article className="wrap inner-page axis">
      <div className="reading-column prose">
        <h1>Privacy policy.</h1>
        <p>This policy describes how this website for {company.name} handles information.</p>
        <h2>Email inquiries</h2>
        <p>The inquiry form prepares an email in your mail app. The website does not submit the form to a server. If you send the email, the company receives your email address and the information you include and can use it to respond.</p>
        <h2>Site operation</h2>
        <p>This website does not use advertising trackers or analytics scripts. The hosting provider may process standard request data, such as an IP address and browser details, to deliver and protect the site.</p>
        <h2>External sites</h2>
        <p>External links open services with their own privacy policies.</p>
        <h2>Privacy questions</h2>
        <p>Email <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </div>
    </article>
  );
}
