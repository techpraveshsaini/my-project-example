import type { Metadata } from "next";
import { centreProfile } from "@/content/centre";
import { faqs } from "@/content/faqs";

const faqDescription =
  "Read sample answers about movement classes, health checkups, and consultations at Wellness Centre.";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: faqDescription,
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: `Frequently asked questions | ${centreProfile.name}`,
    description: faqDescription,
    siteName: centreProfile.name,
    url: "/faq/",
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

const categoryOrder = [
  "general",
  "yoga",
  "health-checkup",
  "physician-consultation",
  "psychologist-consultation",
] as const;

const categoryLabels: Record<(typeof categoryOrder)[number], string> = {
  general: "General",
  yoga: "Yoga",
  "health-checkup": "Health checkups",
  "physician-consultation": "Physician consultations",
  "psychologist-consultation": "Psychologist consultations",
};

export default function FaqPage() {
  return (
    <main className="page-shell faq-page" id="main-content">
      <header className="faq-intro">
        <p className="eyebrow">Helpful answers</p>
        <h1>Questions, clearly answered.</h1>
        <p>
          These sample answers explain the site concept. Confirm services and
          details with the centre before making plans.
        </p>
      </header>

      <div className="faq-groups">
        {categoryOrder.map((category) => {
          const entries = faqs.filter(
            (entry) => (entry.category ?? "general") === category,
          );

          if (entries.length === 0) return null;

          return (
            <section
              className="faq-group"
              key={category}
              aria-labelledby={`faq-group-${category}`}
            >
              <h2 id={`faq-group-${category}`}>{categoryLabels[category]}</h2>
              <div className="faq-list">
                {entries.map((entry) => (
                  <details className="faq-item" key={entry.id}>
                    <summary>{entry.question}</summary>
                    <p>{entry.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
