import { Link } from "react-router-dom";
import LanguageGazetteArticleShell from "@/components/language-gazette/LanguageGazetteArticleShell";
import { ArticleLead, ArticlePullQuote, ArticleSection } from "@/components/language-gazette/GazetteArticleBlocks";

const CANONICAL = "/language-gazette/mother-tongue-greatest-comfort/";
const TITLE = "The Language of the Heart: Why Our Mother Tongue is Our Greatest Comfort";
const DESCRIPTION =
  "Why Gujarati - and every mother tongue - is more than communication: it is sanctuary, heritage, and the language that goes straight to the heart.";

const LanguageGazetteMotherTongueComfort = () => (
  <LanguageGazetteArticleShell
    slug="mother-tongue-greatest-comfort"
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Culture"
    author="EWAN Contributor"
    datePublished="2025-04-01"
    readTime="6 min read"
    image="/stitch/language-gazette/article-market-entry.jpg"
  >
    <ArticleLead>
      There is an old saying that if you talk to a man in a language he understands, that goes to his head. If you talk to him in
      his language, that goes to his heart. For me, that language is Gujarati. It isn&apos;t just a collection of words or a method
      of communication; it is a sanctuary where I feel most like myself.
    </ArticleLead>

    <ArticleSection title="A Connection Rooted in Childhood">
      <p>
        My relationship with Gujarati began at home, wrapped in the warmth of family. As a child, it was the first bridge I built to
        the world. I remember sitting by the window with my grandmother, the air filled with her stories. Through the rhythmic flow of
        Gujarati, she didn&apos;t just tell tales; she passed down Sanskar - the values and ethics that define who I am today. Her speech
        was clear, melodic, and easy to understand, making the complex lessons of life feel like simple, comforting truths.
      </p>
    </ArticleSection>

    <ArticlePullQuote>
      When you speak your mother tongue, there is no translation; it is a direct conversion from the heart.
    </ArticlePullQuote>

    <ArticleSection title="The Comfort of &ldquo;No Translation&rdquo;">
      <p>
        In my daily life, I speak many languages to navigate the world. However, switching to Gujarati feels like taking off a heavy
        coat after a long day.
      </p>
      <p>
        Whether I am chatting with a colleague in a high-stress environment like a hospital or sharing a laugh with a neighbor,
        Gujarati brings an immediate sense of relaxation. It removes the mental barriers of grammar and syntax, leaving only pure,
        raw emotion and connection.
      </p>
    </ArticleSection>

    <ArticleSection title="A Beacon in Foreign Lands">
      <p>
        The true power of one&apos;s mother tongue is often felt most strongly when we are far from home. There is a unique, electric
        excitement that pulses through you when you are in a foreign country and overhear a familiar Gujarati phrase.
      </p>
    </ArticleSection>

    <ArticleSection title="Why We Must Respect Our Roots">
      <p>
        Respecting our mother language is necessary because it is the foundation of our pride. It connects us to our ancestors, our
        culture, and our deepest sense of self.
      </p>
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">It provides comfort:</strong> In moments of pain or joy, our mother
            tongue expresses our feelings best.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">It builds community:</strong> It instantly connects us to others,
            regardless of where we are in the world.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">It preserves heritage:</strong> It carries the Sanskar of our
            grandparents into the future.
          </span>
        </li>
      </ul>
      <p className="mt-6">
        It is the language that saved me, the language that comforts me, and the language that I will always be proud to speak. At{" "}
        <Link to="/language-localization/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Ewan
        </Link>
        , we see every day how mother-tongue depth unlocks trust in business, healthcare, and cross-border work - because the right
        words, in the right language, reach people where policy and pitch decks cannot.
      </p>
    </ArticleSection>
  </LanguageGazetteArticleShell>
);

export default LanguageGazetteMotherTongueComfort;
