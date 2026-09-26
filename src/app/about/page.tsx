import type { Metadata } from "next";
import Image from "next/image";
import { centreProfile } from "@/content/centre";

const aboutDescription =
  "Meet the sample Wellness Centre and read about its general approach to movement and wellbeing.";

export const metadata: Metadata = {
  title: "About the centre",
  description: aboutDescription,
  alternates: { canonical: "/about/" },
  openGraph: {
    title: `About the centre | ${centreProfile.name}`,
    description: aboutDescription,
    siteName: centreProfile.name,
    url: "/about/",
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

export default function AboutPage() {
  return (
    <main className="page-shell info-page" id="main-content">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="eyebrow">About {centreProfile.name}</p>
          <h1 id="about-title">Wellbeing, without a one-size-fits-all script.</h1>
          <p className="about-lead">{centreProfile.purpose}</p>
          <p>{centreProfile.approach}</p>
          <p className="sample-label">Sample profile. Confirm details before publication.</p>
        </div>
        <figure className="about-visual">
          <Image
            src="/images/offerings/wellbeing.webp"
            alt="A person taking a quiet moment in a sunlit space"
            width={800}
            height={600}
            style={{ height: "auto" }}
            sizes="(max-width: 48rem) 100vw, 45vw"
          />
          <figcaption>Space to pause, move, and reconnect.</figcaption>
        </figure>
      </section>

      <section className="about-principles" aria-label="Our approach">
        <article>
          <span>01</span>
          <h2>Make movement your own.</h2>
          <p>Explore different ways to move. Class details and suitability are sample information.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Care with room for questions.</h2>
          <p>Health services are listed for general information, not diagnosis or personal medical advice.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Start with what matters to you.</h2>
          <p>Use the sample FAQs and contact details to understand how this concept is organized.</p>
        </article>
      </section>
    </main>
  );
}
