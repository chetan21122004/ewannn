import { useState } from "react";
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";
import MagneticButton from "./MagneticButton";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@ewan.co.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <StitchScrollSection direction="up">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">Contact Us</span>
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
                className="flex gap-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0"
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

            <div className="flex gap-4 pt-4">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                <MagneticButton key={i} as="a" href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </MagneticButton>
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
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border shadow-xl">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground" placeholder="your@email.com" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground" placeholder="How can we help?" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground resize-none" placeholder="Tell us about your project..." />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(208,170,55,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient text-navy font-semibold transition-all duration-300"
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
