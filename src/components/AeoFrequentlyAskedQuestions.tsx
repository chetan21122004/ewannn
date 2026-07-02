import type { AeoFaqItem } from "@/data/aeoContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

type Props = {
  items: AeoFaqItem[];
  className?: string;
};

/**
 * Visible FAQ section - heading must remain "Frequently Asked Questions" (AEO).
 */
const AeoFrequentlyAskedQuestions = ({ items, className }: Props) => {
  return (
    <section className={className} aria-labelledby="aeo-faq-heading">
      <div className="container mx-auto max-w-3xl">
        <h2 id="aeo-faq-heading" className="font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-[hsl(var(--border-light))]">
              <AccordionTrigger className="gap-3 py-4 text-left font-semibold text-[hsl(var(--brand-navy-950))] hover:no-underline [&>svg:last-child]:hidden [&[data-state=open]_.faq-icon-plus]:hidden [&[data-state=open]_.faq-icon-minus]:block">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] text-[hsl(var(--brand-purple-700))]">
                  <Plus className="faq-icon-plus h-3.5 w-3.5" aria-hidden />
                  <Minus className="faq-icon-minus hidden h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="flex-1">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-10 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AeoFrequentlyAskedQuestions;
