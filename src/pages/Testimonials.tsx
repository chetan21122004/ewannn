import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FileText, Globe2, MessageSquareQuote, Star, Users, X, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

/* ─── Data ───────────────────────────────────────────────────────── */
const vendorTestimonials = [
  {
    name: "Hemn Mohammed Ali",
    initials: "HM",
    accent: "gold" as const,
    text: "I am writing to express my sincere gratitude for the invaluable experience I have gained while working with your translation company. It has been an absolute pleasure to be a part of such a dynamic and professional team. The support, guidance, and encouragement I received from my colleagues have been instrumental in my development as a translator.",
  },
  {
    name: "Manjiri Joglekar",
    initials: "MJ",
    accent: "purple" as const,
    text: "Based on my ample experience with Ewan Business Solutions, I would very strongly recommend them to freelance language resources all over the world. They are outstandingly professional and always support their vendors in every way they can. They are unfailingly diligent when it comes to resolving any doubts and making payment. I look forward to working with Ewan on more projects in future.",
  },
  {
    name: "Jason Wang",
    initials: "JW",
    accent: "navy" as const,
    text: "It has been a privilege to work with Ewan for so long and Ewan has provided me with many opportunities during our time together. The team has been very patient with me. It is a wise choice to work with Ewan - to work hard in the present and to look forward to more challenges in the future. I wish your company steady growth!",
  },
  {
    name: "Sheriff Erinfolami",
    initials: "SE",
    accent: "gold" as const,
    text: "I've had the pleasure of working with Ewan Business on several occasions, and I can confidently say that they are a top-notch agency. Their professionalism and expertise are unmatched. One of the things I appreciate most is their dedication to understanding their clients' needs. This level of attention to detail is rare and truly sets them apart. Ewan Business is a true partner in every sense of the word.",
  },
  {
    name: "Haripriya P",
    initials: "HP",
    accent: "purple" as const,
    text: "I have been working with Ewan since last year and I have been getting a good price and a fair deadline for the projects that I work on. It's been a stress-free environment and payment is also on time. So far, the experience has been great. Love to have a long-term collaboration with you.",
  },
  {
    name: "Kamaldeen Bammeke",
    initials: "KB",
    accent: "navy" as const,
    text: "I am writing this testimonial to express my sincere appreciation for our business relationship. Our partnership has been nothing but exceptional and it has been a pleasure working with you. Your company's commitment to excellence, quality and professionalism has been impressive. I look forward to continuing our successful partnership in the future.",
  },
  {
    name: "Raquel Aguiar",
    initials: "RA",
    accent: "gold" as const,
    text: "It's been a few months since I started with Ewan Business Solutions, and as a newcomer, it's been a very enriching experience. Soham is very easy to work with - always polite and calm even under stressful deadlines. He made sure everyone was clear on the contracts and required rates. It has been a great experience, and I look forward to continuing.",
  },
  {
    name: "Hrushikesh Takalkar",
    initials: "HT",
    accent: "purple" as const,
    text: "EWAN Solutions has been the most professional company I have ever worked with. They are very consistent and well organised in terms of clarity in expectations and fulfilments of the same. This company has always given me interesting work which challenged my gained knowledge and expertise. And lastly, I have a lot of fun working with them.",
  },
  {
    name: "Sanika Aslekar",
    initials: "SA",
    accent: "navy" as const,
    text: "I have been working with EWAN for over 2 years, and the experience has been impressive. We started with writing and social media assignments, and the coordination and response from the company's team members have been remarkable. The rapport has been built very well, and I wish to continue working with you - it is always a learning and earning experience.",
  },
  {
    name: "Oliver Zhang",
    initials: "OZ",
    accent: "gold" as const,
    text: "As a new freelancer, it's difficult to get the first order on Upwork. In early 2023, I met Mr. Soham when searching for translation jobs. After a Chinese handwriting task, Mr. Soham was kind and generous and responded promptly to pay after verifying the work. Working with Mr. Soham is easy and comfortable, and I recommend Ewan to other clients and colleagues with pleasure.",
  },
  {
    name: "Apinia Rims",
    initials: "AR",
    accent: "purple" as const,
    text: "I worked with Ewan on a proofreading task, then a Thai to English translation. The turnaround time was reasonable, the translation rate was acceptable, and the project closed in timeframe with no negative feedback from their client. I hope Ewan will grow and succeed, and we can work together for the long term.",
  },
  {
    name: "Jeffrie A Ghani",
    initials: "JG",
    accent: "navy" as const,
    text: "Working with Ewan Business Solutions was a great experience. I had the pleasure of liaising with Soham throughout my entire business dealings with Ewan and he was a pleasant person to work with. He is clear and concise about the needs of the client. Overall, I would definitely recommend working together with Ewan Business Solutions.",
  },
  {
    name: "Tewodros Desalegn",
    initials: "TD",
    accent: "gold" as const,
    text: "I worked with Soham Kakade for an Amharic audio transcription project. It was very nice working with them - they are very good at communication and clear about the instructions they give. They pay once the task is completed with no delay. I am delighted to work with Ewan Business Solutions and look forward to working with them again.",
  },
  {
    name: "Dhruv Uniyal",
    initials: "DU",
    accent: "purple" as const,
    text: "It has been great working with Ewan, I am glad that I had the opportunity to work with you. There are no complaints from my side, my experience has been very good working with Ewan.",
  },
  {
    name: "Monika Dhyani",
    initials: "MD",
    accent: "navy" as const,
    text: "I have a great experience working with Ewan. I love the cooperation the team shows and everyone is kind. I would love to provide more translation services to Ewan in future.",
  },
  {
    name: "Jhelum Vohra",
    initials: "JV",
    accent: "gold" as const,
    text: "I have worked on quite a few words only, but I appreciate Ewan Language's professional environment for even the smallest projects. Keep up the good work.",
  },
];

const clientLetterImages = [
  "/testinomials/by_clients/image.png",
  "/testinomials/by_clients/image copy.png",
  "/testinomials/by_clients/image copy 2.png",
  "/testinomials/by_clients/image copy 3.png",
  "/testinomials/by_clients/image copy 4.png",
  "/testinomials/by_clients/image copy 5.png",
  "/testinomials/by_clients/image copy 6.png",
  "/testinomials/by_clients/image copy 7.png",
  "/testinomials/by_clients/image copy 8.png",
  "/testinomials/by_clients/image copy 9.png",
  "/testinomials/by_clients/image copy 10.png",
  "/testinomials/by_clients/image copy 11.png",
  "/testinomials/by_clients/image copy 12.png",
  "/testinomials/by_clients/image copy 13.png",
  "/testinomials/by_clients/image copy 14.png",
  "/testinomials/by_clients/image copy 15.png",
  "/testinomials/by_clients/image copy 16.png",
  "/testinomials/by_clients/image copy 17.png",
  "/testinomials/by_clients/image copy 18.png",
];

const stats = [
  { icon: Users, value: "16+", label: "Vendor voices" },
  { icon: FileText, value: "19", label: "Client letters" },
  { icon: Globe2, value: "125+", label: "Languages served" },
  { icon: Star, value: "5+", label: "Years of trust" },
];

const accentStyles = {
  gold: {
    border: "border-l-[hsl(var(--brand-gold-500))]",
    avatar: "bg-[hsl(var(--brand-gold-500))] text-[hsl(var(--brand-navy-950))]",
    quote: "text-[hsl(var(--brand-gold-400)/0.22)]",
  },
  purple: {
    border: "border-l-[hsl(var(--brand-purple-600))]",
    avatar: "bg-[hsl(var(--brand-purple-700))] text-white",
    quote: "text-[hsl(var(--brand-purple-500)/0.16)]",
  },
  navy: {
    border: "border-l-[hsl(var(--brand-navy-800))]",
    avatar: "bg-[hsl(var(--brand-navy-900))] text-white",
    quote: "text-[hsl(var(--brand-navy-900)/0.08)]",
  },
};

const jsonLd = [
  breadcrumbSchema(absoluteUrl("/testimonials/"), [
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials/" },
  ]),
];

/* ─── Lightbox ───────────────────────────────────────────────────── */
function Lightbox({
  images, index, onClose, onPrev, onNext,
}: {
  images: string[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  return (
    <motion.div
      key="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative flex max-h-[90vh] max-w-3xl w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Client appreciation letter ${index + 1}`}
          className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[hsl(var(--brand-navy-950))] shadow-lg transition hover:scale-105"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        {index > 0 && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-x-5 -translate-y-1/2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-[hsl(var(--brand-navy-950))]" />
          </button>
        )}
        {index < images.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 translate-x-5 -translate-y-1/2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-[hsl(var(--brand-navy-950))]" />
          </button>
        )}
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {index + 1} / {images.length}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
const Testimonials = () => {
  const reduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hidden = reduceMotion ? false : { opacity: 0, y: 28 };
  const show = { opacity: 1, y: 0 };
  const t = (delay = 0) => ({ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <PageLayout
      title="Testimonials | What People Say About UVAN"
      description="Read what language professionals, freelancers, and business clients say about working with UVAN (formerly Ewan Business Solutions)."
      canonicalPath="/testimonials/"
      jsonLd={jsonLd}
    >

      {/* ── Client letters ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(220_30%_97%)] px-6 py-16 md:py-24">
        {/* warm parchment-like bg texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 100% 0%, hsl(var(--brand-gold-500) / 0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, hsl(var(--brand-purple-500) / 0.07) 0%, transparent 55%)",
          }}
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">

          {/* header */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div initial={hidden} whileInView={show} viewport={{ once: true }} transition={t(0)}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--brand-gold-500)/0.15)]">
                  <FileText className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-gold-700))]">
                  Organisations &amp; Institutions
                </span>
              </div>
              <h2 className="font-serif text-3xl font-extrabold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                Appreciation Letters
                <br />
                <span className="italic text-[hsl(var(--brand-gold-600))]">by Clients</span>
              </h2>
            </motion.div>
            <motion.p
              initial={hidden} whileInView={show} viewport={{ once: true }} transition={t(0.08)}
              className="max-w-sm text-sm leading-relaxed text-on-light-secondary md:text-right"
            >
              Formal recommendation documents from organisations we have served.
              Click any letter to view it in full.
            </motion.p>
          </div>

          {/* featured first two - large */}
          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-5">
            {clientLetterImages.slice(0, 2).map((src, i) => (
              <motion.button
                key={src}
                initial={hidden} whileInView={show} viewport={{ once: true }}
                transition={t(i * 0.06)}
                onClick={() => setLightboxIndex(i)}
                style={{ rotate: i === 0 ? "-0.6deg" : "0.5deg" }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_hsl(var(--brand-navy-950)/0.10)] ring-1 ring-[hsl(var(--border-light))] transition duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_hsl(var(--brand-navy-950)/0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))]"
                aria-label={`View appreciation letter ${i + 1}`}
              >
                <img
                  src={src} alt={`Client appreciation letter ${i + 1}`} loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.65)] via-[hsl(var(--brand-navy-950)/0.1)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="w-full p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--brand-gold-500))] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-navy-950))]">
                      <FileText className="h-3 w-3" aria-hidden />
                      View full letter
                    </span>
                  </div>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[hsl(var(--brand-navy-950))] shadow-sm backdrop-blur-sm">
                  Letter {i + 1}
                </span>
              </motion.button>
            ))}
          </div>

          {/* remaining letters - tighter grid */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6">
            {clientLetterImages.slice(2).map((src, i) => {
              const rotations = ["-0.8deg","0.6deg","-0.4deg","0.9deg","-0.7deg","0.5deg","-0.3deg","0.8deg","-0.6deg","0.4deg","0.7deg","-0.5deg","0.3deg","-0.9deg","0.6deg","-0.4deg","0.8deg"];
              const rot = rotations[i % rotations.length];
              return (
                <motion.button
                  key={src}
                  initial={hidden} whileInView={show} viewport={{ once: true }}
                  transition={t(Math.min(i * 0.03, 0.2))}
                  onClick={() => setLightboxIndex(i + 2)}
                  style={{ rotate: rot }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-[0_2px_14px_hsl(var(--brand-navy-950)/0.08)] ring-1 ring-[hsl(var(--border-light))] transition duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-[0_10px_30px_hsl(var(--brand-navy-950)/0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))]"
                  aria-label={`View appreciation letter ${i + 3}`}
                >
                  <img
                    src={src} alt={`Client appreciation letter ${i + 3}`} loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.7)] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="mx-auto mb-2.5 inline-flex items-center gap-1 rounded-full bg-[hsl(var(--brand-gold-500))] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[hsl(var(--brand-navy-950))]">
                      <FileText className="h-2.5 w-2.5" aria-hidden />
                      View
                    </span>
                  </div>
                  <span className="absolute left-1.5 top-1.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-[hsl(var(--brand-navy-950))] backdrop-blur-sm">
                    {i + 3}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* count strip */}
          <motion.div
            initial={hidden} whileInView={show} viewport={{ once: true }} transition={t(0.1)}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="h-px flex-1 bg-[hsl(var(--border-light))]" />
            <span className="flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-semibold text-on-light-secondary shadow-sm">
              <FileText className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              {clientLetterImages.length} appreciation letters
            </span>
            <div className="h-px flex-1 bg-[hsl(var(--border-light))]" />
          </motion.div>
        </div>
      </section>

      {/* ── Vendor testimonials ───────────────────────────────────── */}
      <section className="relative overflow-hidden theme-section-light px-6 py-16 md:py-20">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={t(0)}
            className="mb-10 flex items-center gap-4 border-b border-[hsl(var(--border-light))] pb-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)]">
              <MessageSquareQuote className="h-5 w-5 text-[hsl(var(--brand-purple-700))]" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                Language professionals
              </p>
              <h2 className="font-serif text-2xl font-extrabold text-[hsl(var(--brand-navy-950))] sm:text-3xl">
                By Vendors
              </h2>
            </div>
          </motion.div>

          {/* masonry columns */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {vendorTestimonials.map((v, i) => {
              const a = accentStyles[v.accent];
              return (
                <motion.blockquote
                  key={v.name}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={t(Math.min(i * 0.04, 0.24))}
                  className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] border-l-4 bg-white p-6 shadow-[0_2px_12px_hsl(var(--brand-navy-950)/0.04)] transition duration-300 hover:shadow-[0_8px_28px_hsl(var(--brand-navy-950)/0.08)] ${a.border}`}
                >
                  {/* giant decorative quote */}
                  <span
                    className={`pointer-events-none absolute -top-3 -right-2 select-none font-serif text-[9rem] leading-none ${a.quote}`}
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  <p className="relative z-10 text-sm leading-[1.75] text-on-light-secondary">
                    {v.text}
                  </p>

                  <footer className="relative z-10 mt-5 flex items-center gap-3 border-t border-[hsl(var(--border-light))] pt-4">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold ${a.avatar}`}>
                      {v.initials}
                    </span>
                    <span className="text-sm font-semibold text-[hsl(var(--brand-navy-950))]">{v.name}</span>
                  </footer>
                </motion.blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={clientLetterImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
            onNext={() =>
              setLightboxIndex((i) =>
                i !== null && i < clientLetterImages.length - 1 ? i + 1 : i,
              )
            }
          />
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Testimonials;
