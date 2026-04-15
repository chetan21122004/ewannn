import { motion } from "framer-motion";

const languages = [
  "English", "日本語", "中文", "हिन्दी", "العربية", "Français",
  "Deutsch", "Español", "Português", "Русский", "한국어", "Italiano",
  "Türkçe", "ภาษาไทย", "Bahasa", "Tiếng Việt",
];

const LanguageMarquee = () => {
  return (
    <section className="py-8 section-dark overflow-hidden border-y border-primary-foreground/5">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...languages, ...languages].map((lang, i) => (
            <span
              key={i}
              className="mx-8 text-2xl sm:text-3xl font-serif font-bold text-primary-foreground/10 hover:text-gold/40 transition-colors duration-300 cursor-default"
            >
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageMarquee;
