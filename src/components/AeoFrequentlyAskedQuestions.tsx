import type { AeoFaqItem } from "@/data/aeoContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        <Accordion type="single" collapsible className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-[hsl(var(--border-light))]">
              <AccordionTrigger className="text-left font-semibold text-[hsl(var(--brand-navy-950))] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">
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
