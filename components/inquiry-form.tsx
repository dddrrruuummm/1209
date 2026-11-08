"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useSyncExternalStore, type FormEvent } from "react";
import { offerings } from "@/lib/offerings";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

function DraftForm({ email }: { email: string }) {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");
  const initialService = offerings.find(({ slug }) => slug === requestedService)?.slug ?? "";
  const [prepared, setPrepared] = useState(false);
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const topic = String(fields.get("topic") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim().replace(/\r?\n/g, "\r\n");
    const service = offerings.find(({ slug }) => slug === fields.get("service"))?.title;
    const subject = [service, topic].filter(Boolean).join(" / ") || "Business inquiry";
    const context = service ? `I'd like to ask about ${service.toLowerCase()}.\r\n\r\n` : "";
    const body = `Hello SALDY1209,\r\n\r\n${context}${message}\r\n\r\nBest,\r\n${name}`;

    setPrepared(true);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="inquiry-form" onSubmit={prepare}>
      <fieldset disabled={!ready}>
        <div className="form-row">
          <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
          <label>
            Inquiry topic
            <select key={initialService} name="service" defaultValue={initialService}>
              <option value="">General inquiry</option>
              {offerings.map(({ slug, title }) => <option key={slug} value={slug}>{title}</option>)}
            </select>
          </label>
        </div>
        <label>Subject (optional)<input name="topic" placeholder="Field mapping equipment" maxLength={120} /></label>
        <label>Message<textarea name="message" rows={5} required maxLength={1400} /></label>
        <p className="form-note" id="draft-note">Review and send the draft in your email app.</p>
        <button className="button" type="submit" aria-describedby="draft-note">Open email draft</button>
      </fieldset>
      <noscript><p className="form-note">Email <a href={`mailto:${email}`}>{email}</a> to start an inquiry.</p></noscript>
      {prepared && <p className="form-note" role="status">If your email app did not open, email <a href={`mailto:${email}`}>{email}</a> directly.</p>}
    </form>
  );
}

export function InquiryForm({ email }: { email: string }) {
  return (
    <Suspense fallback={<p className="form-note">Email <a href={`mailto:${email}`}>{email}</a> to start an inquiry.</p>}>
      <DraftForm email={email} />
    </Suspense>
  );
}
