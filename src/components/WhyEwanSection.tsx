import { Shield, Clock, Zap, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";
import { CheckmarkAnimation } from "./LottieAnimations";

const reasons = [
  { icon: Shield, title: "Accuracy Guaranteed", desc: "Our native linguists ensure every word captures the intended meaning with cultural precision." },
  { icon: Clock, title: "Fast Turnaround", desc: "Efficient processes and a global team ensure your projects are delivered on time, every time." },
  { icon: Zap, title: "Tech-Powered", desc: "We combine human expertise with cutting-edge language technology for superior results." },
  { icon: Heart, title: "Dedicated Support", desc: "A dedicated project manager for every engagement, ensuring seamless communication." },
];

const WhyEwanSection = () => {
  return (
    <section id="why-ewan" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <StitchScrollSection direction="left">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Your Trusted Partner in <span className="gradient-text">Global Communication</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Ewan, we don't just translate words — we bridge cultures. Our team of expert linguists brings deep understanding of language nuances to every project.
              </p>

              <ul className="space-y-4">
                {["Oriental, Indian, African & European languages", "ISO-certified quality processes", "Confidential & secure handling", "Competitive pricing"].map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StitchScrollSection>

          <div className="grid sm:grid-cols-2 gap-5 relative">
            {/* Lottie accent */}
            <div className="absolute -right-10 -top-10 pointer-events-none opacity-20 hidden lg:block">
              <CheckmarkAnimation className="w-32 h-32" />
            </div>

            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(208,170,55,0.15)",
                  borderColor: "rgba(208,170,55,0.3)",
                }}
                className="group p-6 rounded-2xl bg-card border border-border transition-all duration-500"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <reason.icon className="w-6 h-6 text-navy" />
                </motion.div>
                <h3 className="font-serif font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEwanSection;
