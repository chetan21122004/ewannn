import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary-foreground/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern-dark pointer-events-none opacity-30" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Stitch line at top */}
      <motion.div
        className="absolute top-0 left-[5%] right-[5%] h-[2px]"
        style={{
          background: "repeating-linear-gradient(90deg, hsl(40 85% 58% / 0.15) 0px, hsl(40 85% 58% / 0.15) 6px, transparent 6px, transparent 14px)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <motion.img
              src="/logo.png"
              alt="Ewan Business Solutions"
              className="h-12 w-auto object-contain mb-4"
              whileHover={{ filter: "drop-shadow(0 0 10px rgba(208,170,55,0.3))" }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-primary-foreground/45 text-sm leading-relaxed">
              Empowering businesses to communicate in global languages. Your bridge to the world.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Translation", "Interpretation", "Voiceover", "Localization", "Transcription"].map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                >
                  <a href="#services" className="text-primary-foreground/45 text-sm hover:text-gold hover:pl-1 transition-all duration-300">
                    {s}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "FAQs", "Privacy Policy"].map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                >
                  <a href="#about" className="text-primary-foreground/45 text-sm hover:text-gold hover:pl-1 transition-all duration-300">
                    {s}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/45">
              <li className="hover:text-gold transition-colors">info@ewan.co.in</li>
              <li className="hover:text-gold transition-colors">(+91) 82757 44740</li>
              <li className="hover:text-gold transition-colors">Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-primary-foreground/5">
          <p className="text-primary-foreground/25 text-sm">© {new Date().getFullYear()} Ewan Business Solutions. All rights reserved.</p>
          <MagneticButton
            as="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 sm:mt-0 w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/25 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
