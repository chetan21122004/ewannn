"""
Generate src/data/gazette2026Catalog.ts from public/TLG/TLG_2026/**/*.md files.
Run from the repo root: python scripts/generate-gazette2026-ts.py
"""

from __future__ import annotations

import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ─── static pages already hand-crafted ────────────────────────────────────────
STATIC_SLUGS = {
    "when-sadness-gave-me-joy",
    "mother-tongue-greatest-comfort",
    "be-brave-you-women",
}

# ─── manual slug overrides (md path suffix → slug) ────────────────────────────
SLUG_OVERRIDES: dict[str, str] = {
    "April 2026/Armaan - Poem - English": "when-sadness-gave-me-joy",
    "April 2026/Disha Shah - Article - English": "mother-tongue-greatest-comfort",
    "April 2026/Meera Kathija- Article - English & Tamil": "be-brave-you-women",
    "April 2026/Twisha Ray - Article - English & Bangla": "from-strangers-to-stories-language-journey",
    "February 2026/Prabir Rath - English & Bengali Poem": "pip-prabir-rath",
    "February 2026/Ewan Insights": "ewan-insights-february-2026",
    "January 2026/Soundarya Mohan - Article": "january-happy-new-year-soundarya",
    "January 2026/EWAN Insights - Shreeyash Phaltankar": "ewan-insights-january-2026",
    "January 2026/Prabir Rath - Story  - English & Bengali": "the-ant-prabir-rath",
    "March 2026/Ewan Insights (1)": "ewan-insights-march-2026",
    "March 2026/Disha Shah - Article - English (1)": "living-in-more-than-one-language-disha",
    "February 2026/Disha Shah - English & Gujarati Article": "how-culture-shapes-what-we-say",
    "January 2026/Twisha Ray - Article - English & French": "january-why-were-all-hooked-on-the-fresh-start-myth",
    "March 2026/Prabir Rath - Poem - English & Bengali": "when-in-rome-prabir-rath",
    "March 2026/Soundarya Mohan - Article - English & Hindi": "many-languages-one-heart-soundarya",
    "March 2026/Twisha Ray - Article - English & Spanish": "words-of-home-words-of-the-world",
    "Aug 2026/Prabir Rath - Article - English & Bengali": "family-planning-prabir-rath",
    "Aug 2026/Disha Shah - Article - English & Gujarati": "the-word-i-couldnt-translate-disha-shah",
    "Aug 2026/Twisha Ray - Article - English & French": "the-words-no-other-language-can-hold-twisha-ray",
}

# ─── manual title overrides (md path suffix → title) ─────────────────────────
TITLE_OVERRIDES: dict[str, str] = {
    "February 2026/Ewan Insights": "Japan, Kerala, and Cross-Border Learning at Ewan",
    "March 2026/Prabir Rath - Poem - English & Bengali": "When in Rome",
    "Aug 2026/Prabir Rath - Article - English & Bengali": "Family Planning",
}

# ─── manual author overrides ──────────────────────────────────────────────────
AUTHOR_OVERRIDES: dict[str, str] = {
    "February 2026/Ewan Insights": "Pushkaraj Thakurdas",
    "March 2026/Ewan Insights (1)": "Apoorva Vaidya-Kakade",
    "January 2026/EWAN Insights - Shreeyash Phaltankar": "Shreeyash Phaltankar",
    "April 2026/Meera Kathija- Article - English & Tamil": "Meera Kathija",
    "Aug 2026/Prabir Rath - Article - English & Bengali": "Prabir Kumar Rath",
}

# ─── images cycling pool ──────────────────────────────────────────────────────
IMAGES = [
    "/stitch/language-gazette/article-cultural-iq.jpg",
    "/stitch/language-gazette/article-market-entry.jpg",
    "/stitch/language-gazette/article-operations.jpg",
    "/stitch/insights/article-strategy.jpg",
    "/stitch/insights/article-interpretation.jpg",
    "/stitch/insights/gazette-market-insight.jpg",
    "/stitch/insights/article-asian-market.jpg",
]

MONTH_DATES = {
    "January 2026": "2026-01-15",
    "February 2026": "2026-02-15",
    "March 2026": "2026-03-15",
    "April 2026": "2026-04-15",
    "Aug 2026": "2026-08-15",
}

NON_LATIN_RE = re.compile(
    r"[^\u0000-\u024F\u1E00-\u1EFF"       # basic latin + extended
    r"\s\d.,;:!?''\"\"\-()\u2014\u2013"    # punctuation inc. curly quotes/apostrophes
    r"\u2018\u2019\u201C\u201D"            # left/right single and double quotes
    r"]"
)

def is_non_latin(text: str) -> bool:
    return bool(NON_LATIN_RE.search(text))

def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")[:60]

def clean_md(text: str) -> str:
    """Strip markdown marks, HTML tags, leading/trailing whitespace."""
    text = re.sub(r"<[^>]+>", "", text)          # HTML tags
    text = re.sub(r"\*{1,3}([^*]+)\*{1,3}", r"\1", text)   # bold/italic
    text = re.sub(r"_{1,3}([^_]+)_{1,3}", r"\1", text)     # _italic_
    text = re.sub(r"`([^`]+)`", r"\1", text)      # code
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)   # links
    text = re.sub(r"^\s*[-*+]\s+", "", text, flags=re.M)   # list bullets
    text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.M)   # numbered lists
    text = re.sub(r"^\s*[_\-]{3,}\s*$", "", text, flags=re.M)  # hr
    return text.strip()

def parse_md(path: str) -> dict:
    rel_key = path.replace("\\", "/")
    # key relative to TLG_2026/
    key_match = re.search(r"TLG_2026/(.+?)\.md$", rel_key, re.IGNORECASE)
    rel = key_match.group(1) if key_match else os.path.splitext(os.path.basename(path))[0]

    month_match = re.match(r"([^/]+)/", rel)
    month = month_match.group(1) if month_match else "2026"

    with open(path, encoding="utf-8", errors="replace") as f:
        raw = f.read()

    content_mode = "text"
    english_images: list[str] = []
    translation_images: list[str] = []
    month_folder = rel.split("/")[0] if "/" in rel else month
    translation_started = False

    for line in raw.splitlines():
        stripped = line.strip()
        if "<!-- content-mode: images -->" in stripped:
            content_mode = "images"
        english_match = re.search(r"<!-- english-images:\s*(.+?) -->", stripped)
        if english_match:
            for name in english_match.group(1).split("|"):
                name = name.strip()
                if name:
                    english_images.append(f"/TLG/TLG_2026/{month_folder}/{name}")
        bengali_match = re.search(r"<!-- bengali-images:\s*(.+?) -->", stripped)
        if bengali_match:
            for name in bengali_match.group(1).split("|"):
                name = name.strip()
                if name:
                    translation_images.append(f"/TLG/TLG_2026/{month_folder}/{name}")

    lines = raw.splitlines()

    fname_base = os.path.splitext(os.path.basename(path))[0]
    lower = fname_base.lower()

    META_LINE_RE = re.compile(
        r"^(name|instagram|contact|place)\s*[--:]",
        re.IGNORECASE,
    )

    # ── category (needed for title fallbacks) ──
    if "poem" in lower:
        category = "Poetry"
    elif "story" in lower or content_mode == "images":
        category = "Story"
    elif "ewan insights" in lower:
        category = "Ewan Insights"
    else:
        category = "Essay"

    # ── title: only from markdown # headings ──
    title = ""
    for line in lines:
        if not re.match(r"^\s*#+\s+", line):
            continue
        stripped = re.sub(r"^\s*#+\s*", "", line).strip()
        cleaned = clean_md(stripped)
        if cleaned and not is_non_latin(cleaned) and len(cleaned) <= 120:
            title = cleaned
            break

    if rel in TITLE_OVERRIDES:
        title = TITLE_OVERRIDES[rel]
    elif not title:
        if category == "Poetry":
            for line in lines:
                cleaned = clean_md(line.strip())
                if (
                    cleaned
                    and not is_non_latin(cleaned)
                    and len(cleaned) < 80
                    and cleaned.lower() not in ("prabir kumar rath", "translation", "t r a n s l a t i o n")
                    and not META_LINE_RE.match(cleaned)
                    and not re.match(r"^[_\-]{3,}$", cleaned)
                ):
                    title = cleaned
                    break
            if not title:
                title = fname_base.split(" - ")[0].strip() or "Poem"
        elif category == "Ewan Insights":
            title = "Ewan Insights"
        elif category == "Poetry":
            title = fname_base.split(" - ")[0].strip() or "Poem"
        else:
            title = fname_base.split(" - ")[0].strip()

    # ── author from filename ──
    author_raw = fname_base.split(" - ")[0].strip()
    author = AUTHOR_OVERRIDES.get(rel, author_raw)

    # ── slug ──
    slug = SLUG_OVERRIDES.get(rel, slugify(title))

    # ── paragraphs: clean each non-empty paragraph ──
    paragraphs: list[str] = []
    translation_paragraphs: list[str] = []
    current: list[str] = []
    current_bucket = paragraphs

    def flush():
        text = clean_md(" ".join(current)).strip()
        if text and len(text) > 3:
            current_bucket.append(text)
        current.clear()

    for line in lines:
        stripped = line.strip()
        if "<!-- translation-start -->" in stripped:
            if current:
                flush()
            translation_started = True
            current_bucket = translation_paragraphs
            continue
        if re.match(r"^\s*$", line):
            if current:
                flush()
        elif re.match(r"^\s*#{1,6}\s+", line):
            if current:
                flush()
            heading_text = clean_md(re.sub(r"^\s*#{1,6}\s*", "", line)).strip()
            if heading_text and len(heading_text) > 2:
                current_bucket.append(heading_text)
        elif stripped.startswith("<!--"):
            continue
        else:
            line_clean = re.sub(r"^\s*[-*+]\s+", "", line)
            line_clean = re.sub(r"^\s*\d+\.\s+", "", line_clean)
            if line_clean.strip() and not META_LINE_RE.match(clean_md(line_clean.strip())):
                current.append(line_clean.strip())
    if current:
        flush()

    # ── excerpt: first English body paragraph (not the title) ──
    excerpt_paras = [
        p for p in paragraphs
        if not is_non_latin(p)
        and p.lower() != title.lower()
        and len(p) > 40
        and p.lower() not in ("pip", "prabir kumar rath", "armaan", "translation", "t r a n s l a t i o n")
        and not re.match(r"^(name|instagram|contact|place)\s*[--]", p, re.IGNORECASE)
    ]
    excerpt = re.sub(r"\s+", " ", excerpt_paras[0])[:220] if excerpt_paras else title[:100]
    if content_mode == "images":
        excerpt = f"A visual story by {author} - English panels with Bengali translation on the same page."

    # ── read time ──
    word_count = len(" ".join(p for p in paragraphs if not is_non_latin(p)).split())
    read_time = f"{max(3, word_count // 180)} min read"

    return {
        "slug": slug,
        "title": title,
        "author": author,
        "category": category,
        "month": month,
        "excerpt": excerpt,
        "readTime": read_time,
        "datePublished": MONTH_DATES.get(month, "2026-01-01"),
        "image": "",  # filled after
        "paragraphs": paragraphs,
        "hasStaticPage": slug in STATIC_SLUGS,
        "contentMode": content_mode,
        "englishImages": english_images,
        "translationImages": translation_images,
        "translationParagraphs": translation_paragraphs,
    }


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


MONTH_ORDER = {"January 2026": 0, "February 2026": 1, "March 2026": 2, "April 2026": 3, "Aug 2026": 4}


def main() -> None:
    pattern = os.path.join(ROOT, "public/TLG/TLG_2026/**/*.md")
    paths = sorted(glob.glob(pattern, recursive=True))

    rows: list[dict] = []
    seen: dict[str, int] = {}
    for i, path in enumerate(paths):
        item = parse_md(path)
        base = item["slug"]
        n = seen.get(base, 0)
        seen[base] = n + 1
        if n:
            item["slug"] = f"{base}-{n + 1}"
            item["hasStaticPage"] = False
        item["image"] = IMAGES[i % len(IMAGES)]
        if item.get("contentMode") == "images" and item.get("englishImages"):
            item["image"] = item["englishImages"][0]
        rows.append(item)

    # Sort: month order, then alpha within month
    rows.sort(key=lambda r: (MONTH_ORDER.get(r["month"], 99), r["title"]))

    out_lines = [
        "// Auto-generated from public/TLG/TLG_2026 md files.",
        "// Run: python scripts/generate-gazette2026-ts.py",
        "",
        "export type Gazette2026Article = {",
        "  slug: string;",
        "  title: string;",
        "  author: string;",
        "  category: string;",
        "  month: string;",
        "  excerpt: string;",
        "  readTime: string;",
        "  datePublished: string;",
        "  image: string;",
        "  paragraphs: string[];",
        "  hasStaticPage: boolean;",
        "  contentMode?: \"text\" | \"images\";",
        "  englishImages?: string[];",
        "  translationImages?: string[];",
        "  translationParagraphs?: string[];",
        "};",
        "",
        "export const gazette2026Catalog: Gazette2026Article[] = [",
    ]

    for row in rows:
        out_lines.append("  {")
        for key in ("slug", "title", "author", "category", "month", "excerpt", "readTime", "datePublished", "image"):
            out_lines.append(f"    {key}: {ts_string(row[key])},")
        out_lines.append(f"    hasStaticPage: {'true' if row['hasStaticPage'] else 'false'},")
        if row.get("contentMode") == "images":
            out_lines.append('    contentMode: "images",')
            out_lines.append("    englishImages: [")
            for img in row.get("englishImages", []):
                out_lines.append(f"      {ts_string(img)},")
            out_lines.append("    ],")
            out_lines.append("    translationImages: [")
            for img in row.get("translationImages", []):
                out_lines.append(f"      {ts_string(img)},")
            out_lines.append("    ],")
        if row.get("translationParagraphs"):
            out_lines.append("    translationParagraphs: [")
            for para in row.get("translationParagraphs", []):
                out_lines.append(f"      {ts_string(para)},")
            out_lines.append("    ],")
        out_lines.append("    paragraphs: [")
        for para in row["paragraphs"]:
            out_lines.append(f"      {ts_string(para)},")
        out_lines.append("    ],")
        out_lines.append("  },")

    out_lines += [
        "];",
        "",
        "export const gazette2026BySlug = Object.fromEntries(",
        "  gazette2026Catalog.map((a) => [a.slug, a]),",
        ") as Record<string, Gazette2026Article>;",
        "",
        "export const gazette2026AprilArticles = gazette2026Catalog.filter(",
        "  (a) => a.month === \"April 2026\",",
        ");",
        "",
        "export const gazette2026FeaturedByMonth = [",
        "  \"January 2026\",",
        "  \"February 2026\",",
        "  \"March 2026\",",
        "  \"April 2026\",",
        "  \"Aug 2026\",",
        "].map((m) => gazette2026Catalog.find((a) => a.month === m)).filter(Boolean) as Gazette2026Article[];",
        "",
    ]

    out_path = os.path.join(ROOT, "src/data/gazette2026Catalog.ts")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(out_lines))

    print(f"OK Wrote {len(rows)} articles")
    for r in rows:
        print(f"  [{r['month'][:3]}] {r['slug'][:48]}  {r['author']}")


if __name__ == "__main__":
    main()
