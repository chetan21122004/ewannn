import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MailPlus } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { absoluteUrl, breadcrumbSchema, collectionPageSchema } from "@/lib/schemaHelpers";

const NEWSLETTER_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7211685542705467393";

const Newsletter = () => {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const jsonLd = [
    collectionPageSchema(
      "UVAN Newsletter",
      "Subscribe to UVAN's LinkedIn newsletter for cross-border market entry and language services insights.",
      absoluteUrl("/newsletter/"),
    ),
    breadcrumbSchema(absoluteUrl("/newsletter/"), [
      { name: "Home", path: "/" },
      { name: "Media", path: "/media/" },
      { name: "Newsletter", path: "/newsletter/" },
    ]),
  ];

  return (
    <PageLayout
      title="Newsletter | UVAN"
      description="Subscribe to UVAN's LinkedIn newsletter for market entry, language services, and cross-border business insights."
      canonicalPath="/newsletter/"
      keywords="UVAN newsletter, market entry newsletter, language services newsletter"
      jsonLd={jsonLd}
    >
      <section className="relative overflow-hidden theme-section-soft px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <motion.div
          className="container relative z-10 mx-auto max-w-4xl text-center"
          initial={hidden}
          animate={show}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">
            <MailPlus className="h-3.5 w-3.5" aria-hidden />
            Newsletter
          </span>
          <h1 className="mt-6 font-serif text-4xl font-extrabold leading-tight text-on-light sm:text-5xl lg:text-6xl">
            Market entry and language intelligence, straight from UVAN.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-light-secondary sm:text-lg">
            Follow the UVAN newsletter on LinkedIn for practical notes on India entry, executive liaisoning,
            translation, interpretation, and cross-border corridors.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Subscribe on LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <span className="rounded-full border border-[hsl(var(--border-light))] bg-white px-5 py-3 text-sm font-semibold text-on-light-secondary">
              2000+ subscribers
            </span>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default Newsletter;
