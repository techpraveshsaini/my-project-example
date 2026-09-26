import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { centreProfile } from "@/content/centre";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

if (process.env.NODE_ENV === "production" && !process.env.SITE_URL) {
  throw new Error("Set SITE_URL to the production origin before building the site.");
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: centreProfile.name,
    template: `%s | ${centreProfile.name}`,
  },
  description: centreProfile.purpose,
  openGraph: {
    title: centreProfile.name,
    description: centreProfile.purpose,
    siteName: centreProfile.name,
    type: "website",
    images: [
      {
        url: "/images/wellness-social.webp",
        width: 1200,
        height: 630,
        alt: "Wellness Centre sample social image",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
