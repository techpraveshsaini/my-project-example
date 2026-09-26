import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { centreProfile } from "@/content/centre";
import { offerings } from "@/content/offerings";

export const metadata: Metadata = {
  title: "Movement and care",
  description:
    "Explore sample movement classes and general wellbeing services at Wellness Centre.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Movement and care | ${centreProfile.name}`,
    description:
      "Explore sample movement classes and general wellbeing services at Wellness Centre.",
    siteName: centreProfile.name,
    url: "/",
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

const categories = ["Movement", "Health & care"] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero page-shell" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="eyebrow">A place to find your own rhythm</p>
          <h1 id="home-title">
            Move well.
            <br />
            <em>Feel more you.</em>
          </h1>
          <p className="hero-description">
            From movement classes to general health support, find a starting
            point that feels right for you.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#offerings">
              Explore offerings
            </Link>
            <Link className="button button-secondary" href="/contact/">
              Contact the centre
            </Link>
          </div>
          <p className="hero-sample-note">Sample centre information</p>
        </div>
        <figure className="home-hero-visual">
          <Image
            src="/images/wellness-hero.webp"
            alt="A person practising yoga in a light-filled studio"
            width={1800}
            height={1200}
            loading="eager"
            fetchPriority="high"
            style={{ height: "auto" }}
            sizes="(max-width: 48rem) 100vw, 52vw"
          />
          <figcaption>
            <span>01 / 02</span>
            Space for movement and care
          </figcaption>
        </figure>
      </section>

      <section
        className="offerings-section page-shell"
        id="offerings"
        aria-labelledby="offerings-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your starting point</p>
            <h2 id="offerings-title">Wellness has many shapes.</h2>
          </div>
          <p>
            Sample descriptions introduce each offering. Confirm schedules,
            service details, and availability with the centre.
          </p>
        </div>

        {categories.map((category) => {
          const categoryOfferings = offerings.filter(
            (offering) => offering.category === category,
          );

          return (
            <section
              className="offering-category"
              key={category}
              aria-labelledby={`category-${category.replaceAll(" ", "-").replace("&", "and").toLowerCase()}`}
            >
              <div className="category-heading">
                <h3 id={`category-${category.replaceAll(" ", "-").replace("&", "and").toLowerCase()}`}>
                  {category}
                </h3>
                <span>{String(categoryOfferings.length).padStart(2, "0")}</span>
              </div>
              <div className="offering-grid">
                {categoryOfferings.map((offering) => (
                  <article className="offering-card" key={offering.slug}>
                    <div className="offering-image">
                      <Image
                        src={offering.image}
                        alt={offering.imageAlt}
                        width={800}
                        height={600}
                        style={{ height: "auto" }}
                        sizes="(max-width: 44rem) 100vw, (max-width: 68rem) 50vw, 33vw"
                      />
                    </div>
                    <div className="offering-copy">
                      <p className="offering-category-label">{offering.category}</p>
                      <h4>{offering.name}</h4>
                      <p>{offering.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <section className="home-contact-band" aria-labelledby="contact-band-title">
        <div className="page-shell contact-band-inner">
          <div>
            <p className="eyebrow">A thoughtful next step</p>
            <h2 id="contact-band-title">Curious about something?</h2>
            <p>Read common questions or find the centre&apos;s sample contact details.</p>
          </div>
          <div className="contact-band-actions">
            <Link className="button button-light" href="/faq/">
              Browse the FAQ
            </Link>
            <Link className="band-text-link" href="/contact/">
              Visit Contact <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
