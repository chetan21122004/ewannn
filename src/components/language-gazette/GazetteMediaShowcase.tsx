import { ArrowRight, BookOpen, Newspaper } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { april2026Issue, gazetteArticlePath } from "@/data/languageGazetteIssues";

export type GazetteMediaCard = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  to: string;
  featured?: boolean;
};

export const gazetteMediaCards: GazetteMediaCard[] = [
  {
    tag: "April 2026 · Essay",
    title: "From Strangers to Stories: A Journey Through Language",
    excerpt:
      "A 2012 field survey in North Bengal's Gorumara National Park - where the forest was peaceful, but communicating with the village was the real challenge.",
    author: "Twisha Ray",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    to: gazetteArticlePath("from-strangers-to-stories-language-journey"),
    featured: true,
  },
  {
    tag: "Essay · April 2026",
    title: "Be Brave, You Women",
    excerpt: "A reflection on courage, identity, and the voices that shape how women show up in language and life.",
    author: "Meera Kathija",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    to: gazetteArticlePath("be-brave-you-women"),
  },
  {
    tag: "Essay · April 2026",
    title: "The Language of the Heart: Why Our Mother Tongue is Our Greatest Comfort",
    excerpt:
      "Why the language we grow up with remains the deepest anchor when we navigate foreign corridors and cultures.",
    author: "Disha Shah",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    to: gazetteArticlePath("mother-tongue-greatest-comfort"),
  },
];

const FeaturedGazetteCard = ({ card }: { card: GazetteMediaCard }) => (
  <Link to={card.to} className="group block">
    <article className="theme-card-light card-shine overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.07)] transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_24px_64px_hsl(var(--brand-navy-950)/0.11)]">
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.28)] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-[hsl(var(--brand-gold-500))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-navy-950))] sm:left-5 sm:top-5">
          {card.tag}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] backdrop-blur-sm sm:right-5 sm:top-5">
          Featured
        </span>
      </div>

      <div className="relative border-t border-[hsl(var(--border-light))] p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,hsl(var(--brand-gold-500))_0%,hsl(var(--brand-purple-700))_100%)]" aria-hidden />

        <h3 className="font-serif text-2xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
          {card.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-on-light-secondary sm:text-base">
          {card.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[hsl(var(--border-light))] pt-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-on-light-muted sm:text-sm">
            <span className="font-semibold text-on-light-secondary">{card.author}</span>
            <span aria-hidden>·</span>
            <span>{card.readTime}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
            Read article
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  </Link>
);

const SecondaryGazetteCard = ({ card }: { card: GazetteMediaCard }) => (
  <Link to={card.to} className="group block h-full">
    <article className="theme-card-light card-shine flex h-full overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(26,22,51,0.1)] sm:flex-row lg:flex-col">
      <div className="relative shrink-0 overflow-hidden sm:w-40 lg:w-full">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:aspect-auto sm:min-h-full lg:aspect-[16/10]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.55)] via-transparent to-transparent lg:opacity-0 lg:transition group-hover:lg:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-[hsl(var(--brand-navy-950)/0.82)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))] backdrop-blur-sm">
          {card.tag.split(" · ")[0]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-5 lg:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))] lg:hidden">
          {card.tag}
        </p>
        <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] lg:mt-0 lg:text-xl">
          {card.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-on-light-secondary">{card.excerpt}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
          <p className="text-xs text-on-light-muted">
            <span className="font-semibold text-on-light-secondary">{card.author}</span> · {card.readTime}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
            Read
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  </Link>
);

type GazetteMediaShowcaseProps = {
  sectionId?: string;
  showSectionShell?: boolean;
  compactHeader?: boolean;
};

const GazetteMediaShowcase = ({
  sectionId = "language-gazette",
  showSectionShell = true,
  compactHeader = false,
}: GazetteMediaShowcaseProps) => {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  const featured = gazetteMediaCards.find((card) => card.featured) ?? gazetteMediaCards[0];
  const secondary = gazetteMediaCards.filter((card) => !card.featured);
  const issuePath = april2026Issue.path.replace(/\/$/, "");

  const content = (
    <>
      <motion.div
        initial={hidden}
        whileInView={show}
        viewport={{ once: true }}
        transition={transition(0)}
        className={
          compactHeader
            ? "mb-8 max-w-2xl"
            : "mb-6 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between"
        }
      >
        <div className={compactHeader ? undefined : "max-w-2xl"}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))] shadow-sm">
            <Newspaper className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
            The Language Gazette
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
            Language, culture &amp;{" "}
            <span className="italic text-[hsl(var(--brand-purple-700))]">cross-border stories.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-light-secondary sm:text-lg">
            UVAN&apos;s quarterly publication - {april2026Issue.label} features essays, poetry, and bilingual pieces
            from practitioners in the field.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <Link
            to="/language-gazette/#latest-issue"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.06em] text-[hsl(var(--brand-navy-950))] shadow-[0_12px_28px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Browse all articles
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to={issuePath}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-[0.06em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
          >
            {april2026Issue.shortLabel} issue
            <BookOpen className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        <motion.div
          initial={hidden}
          whileInView={show}
          viewport={{ once: true }}
          transition={transition(0.08)}
          className="lg:col-span-7"
        >
          <FeaturedGazetteCard card={featured} />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {secondary.map((card, index) => (
            <motion.div
              key={card.to}
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.12 + index * 0.08)}
            >
              <SecondaryGazetteCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );

  if (!showSectionShell) {
    return content;
  }

  return (
    <section id={sectionId} className="relative scroll-mt-36 overflow-hidden px-6 py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 44% at 92% 8%, hsl(var(--brand-gold-500) / 0.1) 0%, transparent 50%), radial-gradient(ellipse 58% 48% at 8% 88%, hsl(var(--brand-purple-500) / 0.06) 0%, transparent 52%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.14]" />
      <div className="container relative z-10 mx-auto max-w-6xl">{content}</div>
    </section>
  );
};

export default GazetteMediaShowcase;
