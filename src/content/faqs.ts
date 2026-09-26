import type { Offering } from "@/content/offerings";

export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  category?: Offering["slug"] | "general";
};

export const faqs: readonly FaqEntry[] = [
  {
    id: "offerings-overview",
    question: "What can I find at Wellness Centre?",
    answer:
      "This sample site lists movement classes, health checkups, and physician and psychologist consultations. Confirm actual services with the centre.",
    category: "general",
  },
  {
    id: "first-class",
    question: "Can I join a class without experience?",
    answer:
      "The sample listings do not specify experience requirements. Check with the centre before attending a class.",
    category: "yoga",
  },
  {
    id: "checkup-scope",
    question: "What is included in a health checkup?",
    answer:
      "This sample site does not define a real checkup package. Confirm its scope and suitability with a qualified healthcare professional.",
    category: "health-checkup",
  },
  {
    id: "appointments",
    question: "Can I book an appointment here?",
    answer:
      "No. This website presents mock information and does not offer booking or collect personal details.",
    category: "physician-consultation",
  },
  {
    id: "psychologist-support",
    question: "Does the psychologist consultation provide medical advice?",
    answer:
      "No. This sample website is informational and does not provide personal medical advice. Contact a qualified professional for individual care. If you are in immediate danger, contact local emergency services.",
    category: "psychologist-consultation",
  },
  {
    id: "sample-details",
    question: "Are the contact details and opening hours real?",
    answer:
      "No. All centre details on this sample website are illustrative and must be confirmed before visiting.",
    category: "general",
  },
];
