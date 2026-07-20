import {
  Car,
  Factory,
  Gavel,
  GraduationCap,
  Microscope,
  Plane,
  PlayCircle,
  Tent,
  Terminal,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export type SectorCatalogEntry = {
  id: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  /** Default English description for overlay cards */
  description: string;
};

export const sectorCatalog: SectorCatalogEntry[] = [
  {
    id: "automotive",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Automotive engineering and vehicle manufacturing",
    icon: Car,
    description:
      "From simultaneous interpretation for boardroom negotiations between Indian OEMs and Japanese or Korean suppliers, to technical manual translation and subsidiary setup support.",
  },
  {
    id: "pharmaceuticals",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pharmaceutical research and medicine production",
    icon: Microscope,
    description:
      "Regulatory document translation, clinical trial materials, product literature localization and multilingual communication for India's pharma sector and international partners.",
  },
  {
    id: "aerospace",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aircraft wing above the clouds",
    icon: Plane,
    description:
      "Specialist technical documentation translation, standards interpretation and high-stakes negotiation support for aerospace sector clients.",
  },
  {
    id: "manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern manufacturing facility and industrial equipment",
    icon: Factory,
    description:
      "End-to-end support for manufacturers entering India or expanding abroad — from initial market assessment and language support through to full operational setup.",
  },
  {
    id: "technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Technology hardware and digital innovation",
    icon: Terminal,
    description:
      "Software localization, UI/UX translation, technical documentation, multilingual customer support and market entry advisory for technology firms entering or expanding across Asia.",
  },
  {
    id: "exhibitions",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    imageAlt: "International exhibition hall and trade fair event",
    icon: Tent,
    description:
      "On-site interpretation, booth materials localization, buyer-seller communication and real-time language support at international exhibitions and trade events across India.",
  },
  {
    id: "agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Agricultural fields and food production",
    icon: Wheat,
    description:
      "Export documentation, cross-border buyer communication and product localization for Indian agricultural exporters targeting China, Japan, Southeast Asia and beyond.",
  },
  {
    id: "legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Legal documents and compliance review",
    icon: Gavel,
    description:
      "Certified translation of contracts, agreements, court documents and regulatory filings — accurate, validated and legally precise.",
  },
  {
    id: "education",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    imageAlt: "University campus and international education",
    icon: GraduationCap,
    description:
      "Curriculum translation, IB and international board materials, institutional communication and multilingual e-learning content for educational institutions and publishers.",
  },
  {
    id: "media",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cinema seating and media production",
    icon: PlayCircle,
    description:
      "Subtitling, dubbing, voiceover and content localization for film, television and streaming platforms expanding across language markets.",
  },
];

/** Homepage sector order (matches default translation keys) */
export const homepageSectorIds = [
  "automotive",
  "pharmaceuticals",
  "aerospace",
  "manufacturing",
  "technology",
  "exhibitions",
  "agriculture",
  "legal",
  "education",
  "media",
] as const;

export const getSectorById = (id: string) => sectorCatalog.find((sector) => sector.id === id);

export const getSectorCatalogEntry = (index: number) => {
  const id = homepageSectorIds[index] ?? homepageSectorIds[0];
  return getSectorById(id) ?? sectorCatalog[0];
};
