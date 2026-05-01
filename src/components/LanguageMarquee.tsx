import { motion } from "framer-motion";

const languages = [
  "English", "日本語", "中文", "हिन्दी", "العربية", "Français",
  "Deutsch", "Español", "Português", "Русский", "한국어", "Italiano",
  "Türkçe", "ภาษาไทย", "Bahasa", "Tiếng Việt",
];

const LanguageMarquee = () => {
  return (
    <section className="py-10 section-dark overflow-hidden relative stitch-line stitch-line-bottom">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[hsl(230,38%,16%)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[hsl(230,38%,16%)] to-transparent z-10" />

        {/* First row - scrolling left */}
        <motion.div
          className="flex whitespace-nowrap mb-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...languages, ...languages].map((lang, i) => (
            <motion.span
              key={`row1-${i}`}
              className="mx-8 text-2xl sm:text-3xl font-serif font-bold text-primary-foreground/8 hover:text-gold/40 transition-colors duration-500 cursor-default"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>

        {/* Second row - scrolling right (reverse) */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...languages.slice().reverse(), ...languages.slice().reverse()].map((lang, i) => (
            <motion.span
              key={`row2-${i}`}
              className="mx-8 text-lg sm:text-2xl font-serif font-bold text-primary-foreground/5 hover:text-gold/30 transition-colors duration-500 cursor-default"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageMarquee;
