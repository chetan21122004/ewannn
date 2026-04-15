import { useState } from "react";
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";
import MagneticButton from "./MagneticButton";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusField, setFocusField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@ewan.co.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-gold/10 focus:border-gold/40 focus:ring-2 focus:ring-gold/15 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground/50";

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden stitch-line" style={{ background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(38 28% 95%) 100%)" }}>
      {/* Background */}
      <div className="absolute inset-0 dots-pattern pointer-events-none opacity-25" />
      <div className="glow-orb w-96 h-96 bg-gold/8 -top-20 left-0 -translate-x-1/3" />
      <div className="glow-orb w-64 h-64 bg-purple-400/4 bottom-20 right-10" />

      <div className="container mx-auto px-6 relative z-10">
        <StitchScrollSection direction="up">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4 border border-gold/15">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Ready to break language barriers? Get your free quote today.
            </p>
          </motion.div>
        </StitchScrollSection>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: MapPin, title: "Visit Us", text: "4/11, Matrukrupa, behind SBI Karve Nagar branch, off Law College Road, Pune" },
              { icon: Phone, title: "Call Us", text: "(+91) 82757 44740" },
              { icon: Mail, title: "Email Us", text: "info@ewan.co.in" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-4 group"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 text-navy" />
                </motion.div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Social icons with stagger */}
            <div className="flex gap-4 pt-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                >
                  <MagneticButton
                    as="a"
                    href="#"
                    className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/35 hover:bg-gold/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </MagneticButton>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40, rotateX: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold/8 shadow-premium-lg"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <motion.label
                    className="block text-sm font-medium text-foreground mb-2"
                    animate={{ color: focusField === "name" ? "hsl(40 85% 58%)" : "" }}
                  >
                    Name
                  </motion.label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusField("name")}
                    onBlur={() => setFocusField(null)}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <motion.label
                    className="block text-sm font-medium text-foreground mb-2"
                    animate={{ color: focusField === "email" ? "hsl(40 85% 58%)" : "" }}
                  >
                    Email
                  </motion.label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusField("email")}
                    onBlur={() => setFocusField(null)}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-5">
                <motion.label
                  className="block text-sm font-medium text-foreground mb-2"
                  animate={{ color: focusField === "subject" ? "hsl(40 85% 58%)" : "" }}
                >
                  Subject
                </motion.label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusField("subject")}
                  onBlur={() => setFocusField(null)}
                  className={inputClasses}
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <motion.label
                  className="block text-sm font-medium text-foreground mb-2"
                  animate={{ color: focusField === "message" ? "hsl(40 85% 58%)" : "" }}
                >
                  Message
                </motion.label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusField("message")}
                  onBlur={() => setFocusField(null)}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(208,170,55,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient text-navy font-semibold transition-all duration-300 card-shine shadow-gold-md"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
