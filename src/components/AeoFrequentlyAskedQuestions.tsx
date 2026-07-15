import type { AeoFaqItem } from "@/data/aeoContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

type Props = {
  items: AeoFaqItem[];
  className?: string;
};

const FaqAccordion = ({ items, idPrefix }: { items: AeoFaqItem[]; idPrefix: string }) => (
  <Accordion type="single" collapsible>
    {items.map((item, index) => (
      <AccordionItem key={item.question} value={`${idPrefix}-faq-${index}`} className="border-[hsl(var(--border-light))]">
        <AccordionTrigger className="gap-3 py-3.5 text-left font-semibold text-[hsl(var(--brand-navy-950))] hover:no-underline lg:py-3 [&>svg:last-child]:hidden [&[data-state=open]_.faq-icon-plus]:hidden [&[data-state=open]_.faq-icon-minus]:block">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-purple-700))]">
            <Plus className="faq-icon-plus h-3.5 w-3.5" aria-hidden />
            <Minus className="faq-icon-minus hidden h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="flex-1">{item.question}</span>
        </AccordionTrigger>
        <AccordionContent className="pb-3.5 pl-10 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem] lg:pb-3">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

/**
 * Visible FAQ section - heading must remain "Frequently Asked Questions" (AEO).
 */
const AeoFrequentlyAskedQuestions = ({ items, className }: Props) => {
  const splitIndex = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, splitIndex);
  const rightItems = items.slice(splitIndex);

  return (
    <section className={className} aria-labelledby="aeo-faq-heading">
      <div className="container mx-auto max-w-3xl lg:max-w-6xl">
        <h2 id="aeo-faq-heading" className="font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 xl:gap-x-10">
          <FaqAccordion items={leftItems} idPrefix="left" />
          {rightItems.length > 0 ? <FaqAccordion items={rightItems} idPrefix="right" /> : null}
        </div>
      </div>
    </section>
  );
};

export default AeoFrequentlyAskedQuestions;
