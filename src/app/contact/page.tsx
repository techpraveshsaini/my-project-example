import type { Metadata } from "next";
import { centreProfile } from "@/content/centre";

const contactDescription =
  "Find clearly identified sample contact channels and hours for Wellness Centre.";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: `Contact | ${centreProfile.name}`,
    description: contactDescription,
    siteName: centreProfile.name,
    url: "/contact/",
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

export default function ContactPage() {
  return (
    <main className="page-shell contact-page" id="main-content">
      <section className="contact-intro" aria-labelledby="contact-title">
        <p className="eyebrow">A first hello</p>
        <h1 id="contact-title">We would love to hear from you.</h1>
        <p>
          Find sample ways to reach {centreProfile.name}. These details are
          illustrative and must be confirmed before publication.
        </p>
        <p className="sample-label">Mock contact information</p>
      </section>

      <section className="contact-details" aria-labelledby="contact-details-title">
        <div className="contact-details-heading">
          <p className="eyebrow">The practical details</p>
          <h2 id="contact-details-title">Get in touch</h2>
        </div>
        <dl>
          {centreProfile.contactChannels.map((channel) => (
            <div key={channel.label}>
              <dt>{channel.label}</dt>
              <dd>{channel.value}</dd>
            </div>
          ))}
          <div>
            <dt>Sample hours</dt>
            <dd>{centreProfile.hours}</dd>
          </div>
        </dl>
        <p className="contact-disclaimer">
          The centre name, channels, and hours shown here are mock content. No
          appointment booking or personal information collection is available
          on this website.
        </p>
      </section>
    </main>
  );
}
