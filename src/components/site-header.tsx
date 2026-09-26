import Link from "next/link";
import { centreProfile } from "@/content/centre";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <Link className="brand-lockup" href="/">
        <span className="brand-mark" aria-hidden="true">W</span>
        <span className="brand-copy">
          <span className="brand-name">{centreProfile.name}</span>
          <span className="brand-tagline">Movement, care, wellbeing</span>
        </span>
      </Link>
      <nav className="primary-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
