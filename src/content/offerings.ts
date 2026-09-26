export type OfferingCategory = "Movement" | "Health & care";

export type Offering = {
  slug: string;
  name: string;
  category: OfferingCategory;
  summary: string;
  image: string;
  imageAlt: string;
};

export const offerings: readonly Offering[] = [
  {
    slug: "yoga",
    name: "Yoga",
    category: "Movement",
    summary: "Sample guided sessions exploring strength, mobility, and mindful movement.",
    image: "/images/offerings/yoga.webp",
    imageAlt: "Person practising a yoga pose in a bright studio",
  },
  {
    slug: "gym",
    name: "Gym",
    category: "Movement",
    summary: "Sample access to strength and conditioning equipment and coached sessions.",
    image: "/images/offerings/gym.webp",
    imageAlt: "Modern gym floor with strength-training equipment",
  },
  {
    slug: "zumba",
    name: "Zumba",
    category: "Movement",
    summary: "Sample instructor-led dance fitness classes with music and group movement.",
    image: "/images/offerings/group-movement.webp",
    imageAlt: "Group taking part in an energetic fitness class",
  },
  {
    slug: "dance",
    name: "Dance",
    category: "Movement",
    summary: "Sample dance sessions spanning rhythm, technique, and expressive movement.",
    image: "/images/offerings/group-movement.webp",
    imageAlt: "Group taking part in an energetic fitness class",
  },
  {
    slug: "health-checkup",
    name: "Health Checkup",
    category: "Health & care",
    summary: "Sample general health checkup information; availability and scope require confirmation.",
    image: "/images/offerings/healthcare.webp",
    imageAlt: "Healthcare professional reviewing a patient's information",
  },
  {
    slug: "physician-consultation",
    name: "Physician Consultation",
    category: "Health & care",
    summary: "Sample physician consultations for general health questions; not a diagnosis or medical advice.",
    image: "/images/offerings/healthcare.webp",
    imageAlt: "Healthcare professional reviewing a patient's information",
  },
  {
    slug: "psychologist-consultation",
    name: "Psychologist Consultation",
    category: "Health & care",
    summary: "Sample psychologist consultations for wellbeing; not a substitute for urgent mental health support.",
    image: "/images/offerings/wellbeing.webp",
    imageAlt: "Quiet person reflecting in a calm, sunlit space",
  },
];
