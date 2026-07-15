import { motion } from "framer-motion";
import ImageRevealOverlayCard from "@/components/ImageRevealOverlayCard";
import type { LucideIcon } from "lucide-react";

export type LanguageSectorItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

type LanguageSectorCardProps = {
  sector: LanguageSectorItem;
  index: number;
  hidden: { opacity: number; y?: number };
  show: { opacity: number; y?: number };
  transition: (delay?: number) => { duration: number; delay: number; ease: readonly [number, number, number, number] };
};

const LanguageSectorCard = ({
  sector,
  index,
  hidden,
  show,
  transition,
}: LanguageSectorCardProps) => (
  <motion.div
    initial={hidden}
    whileInView={show}
    viewport={{ once: true, margin: "-32px" }}
    transition={transition((index % 5) * 0.05)}
    className="h-full"
  >
    <ImageRevealOverlayCard
      id={sector.id}
      index={index}
      title={sector.title}
      description={sector.description}
      image={sector.image}
      imageAlt={sector.imageAlt}
      icon={sector.icon}
      compact
      className="h-full min-h-[212px] sm:min-h-[224px] lg:min-h-[236px]"
    />
  </motion.div>
);

export default LanguageSectorCard;
