import Link from "next/link";
import { Arrow } from "@/components/site-shell";

export default function NotFound() {
  return (
    <div className="wrap inner-page axis">
      <div className="reading-column">
        <h1>Page not found.</h1>
        <Link className="text-action" href="/">Return home <Arrow /></Link>
      </div>
    </div>
  );
}
