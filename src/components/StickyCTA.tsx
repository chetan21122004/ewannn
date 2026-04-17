import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const StickyCTA = () => {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="sticky-cta hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-black font-semibold text-sm tracking-wide"
    >
      <Calendar className="w-4 h-4" />
      Ask Soham — 15 Min Free
    </motion.a>
  );
};

export default StickyCTA;
