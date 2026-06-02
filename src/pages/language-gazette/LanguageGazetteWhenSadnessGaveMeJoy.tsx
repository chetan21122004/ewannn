import LanguageGazetteArticleShell from "@/components/language-gazette/LanguageGazetteArticleShell";
import { ArticleLead } from "@/components/language-gazette/GazetteArticleBlocks";

const CANONICAL = "/language-gazette/when-sadness-gave-me-joy/";
const TITLE = "When sadness gave me joy";
const DESCRIPTION =
  "A poem by Armaan on Shiv Kumar Batalvi's melody, distant homes, and how sadness can bloom into bittersweet joy.";

const LanguageGazetteWhenSadnessGaveMeJoy = () => (
  <LanguageGazetteArticleShell
    slug="when-sadness-gave-me-joy"
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Poetry"
    author="Armaan"
    datePublished="2025-08-01"
    readTime="3 min read"
    image="/stitch/language-gazette/article-cultural-iq.jpg"
  >
    <div className="rounded-2xl border border-black/8 bg-white px-8 py-10 shadow-sm md:px-12 md:py-14">
      <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-600))]">Poem</p>
      <div className="mx-auto max-w-xl space-y-5 text-center font-serif text-lg italic leading-[2] text-[hsl(var(--brand-navy-950))] md:text-xl md:leading-[2.1]">
        <p>My numb body lies comatose on a cold, crumpled bed</p>
        <p>And it&apos;s Shiv Kumar Batalvi&apos;s soft, sad, melodic voice</p>
        <p>Drifting in from the unplugged speakers in the attic</p>
        <p>Of a snowed in duplex, six thousand five hundred fourteen kilometers from home,</p>
        <p>That frees the tears from my glassy eyes,</p>
        <p>Turns the pinched straight line into a bittersweet smile</p>
        <p>And starts melting the black ice that has frozen my heart</p>
        <p>Into what seemed to be an interminable emotional hibernation.</p>
        <p className="pt-4 not-italic text-[hsl(var(--brand-purple-700))]">Ki puchde ho haal fakiran da</p>
        <p>Is accompanied by the trickle of a tear down my pale cheeks</p>
        <p>And as the warm droplets seep into my barren heart,</p>
        <p>Sadness blooms inside,</p>
        <p>And my face lights up with a thousand smiles.</p>
      </div>
    </div>
    <ArticleLead>
      In a snowed-in attic six thousand kilometres from home, it is not happiness that breaks the hibernation - it is a sad Punjabi
      ghazal, and the permission to feel again.
    </ArticleLead>
  </LanguageGazetteArticleShell>
);

export default LanguageGazetteWhenSadnessGaveMeJoy;
