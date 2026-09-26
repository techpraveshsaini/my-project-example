import Link from "next/link";
import { centreProfile } from "@/content/centre";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p className="footer-name">{centreProfile.name}</p>
        <p className="sample-notice">
          Sample centre content for demonstration. Confirm all details before publication.
        </p>
        <nav aria-label="Footer navigation" className="footer-nav">
          <Link href="/about/">About</Link>
          <Link href="/faq/">FAQ</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
