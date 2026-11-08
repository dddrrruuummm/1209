import { company } from "@/lib/site";

export function CompanyFacts() {
  return (
    <dl className="facts">
      <div><dt>Legal name</dt><dd>{company.name}</dd></div>
      <div><dt>Entity type</dt><dd>{company.entityType}</dd></div>
      <div><dt>Articles filed</dt><dd><time dateTime={company.filedISO}>{company.filed}</time></dd></div>
      <div><dt>City on original filing</dt><dd>{company.location}</dd></div>
    </dl>
  );
}
