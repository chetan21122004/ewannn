import type { AeoFaqItem } from "@/data/aeoContent";

type Props = {
  items: AeoFaqItem[];
  className?: string;
};

/**
 * Visible FAQ section — heading must remain "Frequently Asked Questions" (AEO).
 */
const AeoFrequentlyAskedQuestions = ({ items, className }: Props) => {
  return (
    <section className={className} aria-labelledby="aeo-faq-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="aeo-faq-heading" className="font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">
          Frequently Asked Questions
        </h2>
        <dl className="mt-10 space-y-8">
          {items.map((item) => (
            <div key={item.question} className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_8px_24px_rgba(26,22,51,0.04)]">
              <dt className="font-semibold text-[hsl(var(--brand-navy-950))]">{item.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AeoFrequentlyAskedQuestions;
