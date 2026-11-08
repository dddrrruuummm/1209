import Link from "next/link";
import { company } from "@/lib/site";

export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 40" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M3 16 15 4h9L12 16l8 8-5 5L3 17v-1Zm42 8L33 36h-9l12-12-8-8 5-5 12 12v1ZM24 13l7 7-7 7-7-7 7-7Z" />
    </svg>
  );
}

export function Arrow({ direction = "right" }: { direction?: "right" | "up-right" }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={direction === "right" ? "M3 12h16m-6-6 6 6-6 6" : "M6 18 18 6M7 6h11v11"} stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${company.name} home`}>
      <Mark /><span>{company.brand}<small>L.L.C.</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav aria-label="Main">
          <Link href="/services">Services</Link>
          <Link href="/showcase">Applications</Link>
          <Link href="/about" className="company-link">Company</Link>
          <Link href="/contact" className="nav-contact">Contact <Arrow direction="up-right" /></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Brand />
            <p>{company.location}</p>
          </div>
          <nav aria-label="Footer">
            <Link href="/services">Services</Link>
            <Link href="/showcase">Applications</Link>
            <Link href="/about">Company</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="footer-email" href={`mailto:${company.email}`}>{company.email}</a>
        </div>
        <div className="footer-bottom">
          <p>© {company.name}</p>
          <nav aria-label="Legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
