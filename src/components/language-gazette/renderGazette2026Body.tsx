import type { Gazette2026Article } from "@/data/gazette2026Catalog";
import {
  ArticleLead,
  ArticleSection,
  ArticleTranslation,
} from "@/components/language-gazette/GazetteArticleBlocks";

const isNonLatin = (text: string) =>
  /[^\u0000-\u024F\u1E00-\u1EFF\s\d.,;:!?''\u2018\u2019""\u201C\u201D()\-—-]/.test(text);

const isHeading = (text: string) => {
  if (text.length > 100) return false;
  if (/[.!?]$/.test(text.trim())) return false;
  if (text.startsWith("- ")) return false;
  if (isNonLatin(text)) return text.length < 60;
  return text.split(" ").length <= 12;
};

type ContentBlock = { type: "heading" | "paragraph"; text: string };

const toEnglishBlocks = (paragraphs: string[]): ContentBlock[] => {
  const body = paragraphs.slice(1);
  const blocks: ContentBlock[] = [];

  for (const line of body) {
    if (line.startsWith("- ") || isNonLatin(line)) continue;
    if (isHeading(line)) {
      blocks.push({ type: "heading", text: line });
      continue;
    }
    blocks.push({ type: "paragraph", text: line });
  }

  return blocks;
};

const groupSections = (blocks: ContentBlock[]) => {
  const sections: Array<{ title?: string; paragraphs: string[] }> = [];
  let current: { title?: string; paragraphs: string[] } = { paragraphs: [] };

  for (const block of blocks) {
    if (block.type === "heading") {
      if (current.title || current.paragraphs.length) {
        sections.push(current);
      }
      current = { title: block.text, paragraphs: [] };
      continue;
    }
    current.paragraphs.push(block.text);
  }

  if (current.title || current.paragraphs.length) {
    sections.push(current);
  }

  return sections;
};

export const renderGazette2026Body = (article: Gazette2026Article) => {
  if (article.category === "Poetry") {
    const allLines = article.paragraphs.slice(1);
    // Strip the author line (typically second paragraph before poem starts), separator lines, and "TRANSLATION" markers
    const SKIP_RE = /^(_{3,}|-{3,}|T\s*R\s*A\s*N\s*S\s*L\s*A\s*T\s*I\s*O\s*N|Prabir\s+Kumar|Armaan)$/i;
    const englishLines = allLines.filter(
      (l) => !isNonLatin(l) && !l.startsWith("- ") && !SKIP_RE.test(l.trim()),
    );
    const translationLines = allLines.filter((l) => isNonLatin(l) && !SKIP_RE.test(l.trim()));

    return (
      <>
        <div className="rounded-2xl border border-black/8 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-600))]">
            Poem
          </p>
          <div className="mx-auto max-w-xl space-y-4 text-center font-serif text-lg italic leading-[2] text-[hsl(var(--brand-navy-950))] md:text-xl">
            {englishLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        {translationLines.length > 0 ? (
          <ArticleTranslation title={article.title} author={article.author} lang="und">
            {translationLines.map((block) => (
              <p key={block} className="font-serif italic">
                {block}
              </p>
            ))}
          </ArticleTranslation>
        ) : null}
      </>
    );
  }

  const englishBlocks = toEnglishBlocks(article.paragraphs);
  const translationBlocks = article.paragraphs.slice(1).filter((line) => isNonLatin(line) && !line.startsWith("- "));
  const sections = groupSections(englishBlocks);
  const [leadSection, ...restSections] = sections;
  const lead = leadSection?.paragraphs[0];

  return (
    <>
      {lead ? <ArticleLead>{lead}</ArticleLead> : null}

      {leadSection && leadSection.paragraphs.length > 1 ? (
        <div className="mt-6 space-y-4">
          {leadSection.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="text-base leading-[1.85] text-on-light-secondary sm:text-[1.0625rem]">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {restSections.map((section) =>
        section.title ? (
          <ArticleSection key={section.title} title={section.title}>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ArticleSection>
        ) : (
          <div key={section.paragraphs[0]} className="mt-6 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-[1.85] text-on-light-secondary sm:text-[1.0625rem]">
                {paragraph}
              </p>
            ))}
          </div>
        ),
      )}

      {translationBlocks.length > 0 ? (
        <ArticleTranslation title={article.title} author={article.author} lang="und">
          {translationBlocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </ArticleTranslation>
      ) : null}
    </>
  );
};
