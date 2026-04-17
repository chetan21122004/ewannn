import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Market Entry", href: "#services" },
  { label: "Language & Localization", href: "#language" },
  { label: "Industries", href: "#sectors" },
  { label: "About Us", href: "#about" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "中文", label: "中文" },
  { code: "日本語", label: "日本語" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "nav-glass py-2 shadow-2xl" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <motion.img
            src="/logo.png"
            alt="Ewan Business Solutions"
            className="h-10 sm:h-12 w-auto object-contain"
            whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 12px rgba(208,170,55,0.5))" }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.3, duration: 0.5 }}
              className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary via-accent to-primary" />
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-primary/20 text-xs text-foreground/70 hover:text-primary hover:border-primary/40 transition-all"
            >
              {lang}
              <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-2 nav-glass rounded-xl py-2 min-w-[120px] shadow-xl"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-xs text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sticky CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(208,170,55,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient text-background font-semibold text-sm transition-all duration-300 card-shine animate-pulse-glow"
          >
            <MessageCircle className="w-4 h-4" />
            Ask Soham — 15 Min Free
          </motion.a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden nav-glass"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-foreground/70 hover:text-primary transition-colors py-2 border-b border-primary/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      lang === l.code ? "border-primary text-primary bg-primary/10" : "border-primary/20 text-foreground/60"
                    }`}
                  >
                    {l.code}
                  </button>
                ))}
              </div>
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="px-5 py-3 rounded-full gold-gradient text-background font-semibold text-sm text-center mt-2 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Soham — 15 Min Free
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
