import { ENTITY_PARAGRAPH_A } from "@/data/aeoContent";

/** Verbatim AEO entity paragraph (§02) - footer-adjacent placement on the homepage. */
const EntityParagraphHomeBand = () => (
  <section
    aria-label="About Ewan Business Solutions"
    className="theme-section-soft border-t border-[hsl(var(--border-light)/0.85)] px-6 py-12 md:py-14"
  >
    <div className="container relative z-10 mx-auto max-w-4xl">
      <p className="text-sm leading-[1.75] text-on-light-secondary md:text-base">{ENTITY_PARAGRAPH_A}</p>
    </div>
  </section>
);

export default EntityParagraphHomeBand;
