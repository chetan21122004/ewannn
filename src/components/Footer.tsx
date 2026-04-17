import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navColumns = [
  {
    title: "Services",
    links: ["Market Entry", "Language & Localization", "Industries", "Case Studies"],
  },
  {
    title: "Company",
    links: ["About Us", "Founders", "Media", "Join Us"],
  },
  {
    title: "Contact",
    links: ["Ask Soham — 15 Min Free", "hello@ewan.com", "+91 · India HQ"],
  },
  {
    title: "Explore",
    links: ["Arogya Yatri", "Case Studies", "Join Us", "Privacy Policy"],
  },
];

const certifications = [
  { name: "ISO 9001:2015 Certified", src: "/allLogos/ISO-9001.png", alt: "ISO 9001:2015 certification logo" },
  { name: "CITLoB Member", src: "/allLogos/CITLoB-logo-2023.jpg", alt: "CITLoB logo" },
  { name: "Bhashini Initiative Partner", src: "/allLogos/Bhashini-Logo.png", alt: "Bhashini initiative logo" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL" },
  { label: "X", href: "https://x.com/ewanbusiness" },
  { label: "Instagram", href: "https://www.instagram.com/ewanbizsolution/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ewan-business-solutions/" },
  { label: "YouTube", href: "https://www.youtube.com/@EWAN-SSK" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/15 section-navy-deep">
      <div className="pointer-events-none absolute inset-0 dots-pattern opacity-10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl border border-primary/25 bg-gradient-to-r from-primary/25 via-primary/10 to-accent/20 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm lg:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
                Ready for Cross-Border Execution
              </p>
              <h3 className="text-2xl font-serif font-bold text-foreground sm:text-3xl">
                Enter new markets with a team that has already operated inside the room.
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Book Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mb-12 grid gap-10 border-y border-primary/10 py-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.img
              src="/logo.png"
              alt="EWAN Business Solutions logo"
              className="mb-3 h-16 w-auto object-contain"
              whileHover={{ scale: 1.03 }}
            />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cross-Border Market Partner for India & the Emerging World
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>

        <div className="mb-8">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-muted-foreground/60">Certifications & Ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ opacity: 1, y: -2 }}
                className="flex items-center justify-center  duration-300 "
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                  className="h-8 w-auto max-w-[130px] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "inline";
                  }}
                />
                <span style={{ display: "none" }} className="text-xs font-medium text-muted-foreground/70">
                  {cert.name}
                </span>
              </motion.div>
            ))}
            <span className="h-4 w-px bg-white/10 hidden md:block" aria-hidden />
            <a
              href="https://bhashikskill.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground/50 transition-colors duration-300 hover:text-primary"
            >
              Part of the Ewan Group — Bhashik Skill Development
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 text-xs text-muted-foreground/55 sm:flex-row">
          <span>© 2024 COSIO. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-primary">Privacy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms</a>
            <a href="#" className="transition-colors hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
