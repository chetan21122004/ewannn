import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import ewanLogo from "@/assets/ewan-logo.png";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary-foreground/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={ewanLogo} alt="Ewan Business Solutions" className="h-12 w-auto object-contain mb-4" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Empowering businesses to communicate in global languages. Your bridge to the world.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Translation", "Interpretation", "Voiceover", "Localization", "Transcription"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-primary-foreground/50 text-sm hover:text-gold transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "FAQs", "Privacy Policy"].map((s) => (
                <li key={s}>
                  <a href="#about" className="text-primary-foreground/50 text-sm hover:text-gold transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>info@ewan.co.in</li>
              <li>(+91) 82757 44740</li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-primary-foreground/5">
          <p className="text-primary-foreground/30 text-sm">© {new Date().getFullYear()} Ewan Business Solutions. All rights reserved.</p>
          <MagneticButton
            as="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 sm:mt-0 w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/30 hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
