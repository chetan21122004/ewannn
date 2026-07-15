import glob
import json
import os
import re
import zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def docx_paragraphs(path: str) -> list[str]:
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    paras: list[str] = []
    for p in root.iter(W + "p"):
        texts: list[str] = []
        for t in p.iter(W + "t"):
            if t.text:
                texts.append(t.text)
            if t.tail:
                texts.append(t.tail)
        line = "".join(texts).strip()
        if line:
            paras.append(line)
    return paras


def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")[:60]


def parse_file(path: str) -> dict:
    rel = path.replace("public/TLG/TLG_2026/", "").replace("\\", "/")
    month_folder = rel.split("/")[0]
    fname = os.path.basename(path)
    author = fname.split(" - ")[0].strip()
    paras = docx_paragraphs(path)
    title = paras[0] if paras else fname
    if title.startswith("By ") and len(paras) > 1:
        title = paras[1]

    lower = fname.lower()
    if "poem" in lower:
        category = "Poetry"
    elif "story" in lower:
        category = "Story"
    elif "ewan insights" in lower:
        category = "Ewan Insights"
    else:
        category = "Essay"

    word_count = len(" ".join(paras).split())
    excerpt_source = paras[1:3] if len(paras) > 1 else paras[:1]
    excerpt = re.sub(r"\s+", " ", " ".join(excerpt_source))[:220]

    return {
        "month": month_folder,
        "file": fname,
        "author": author,
        "title": title,
        "slug": slugify(title),
        "category": category,
        "excerpt": excerpt,
        "paragraphs": paras,
        "readTime": f"{max(3, word_count // 200)} min read",
    }


def main() -> None:
    rows: list[dict] = []
    seen: dict[str, int] = {}
    for path in sorted(glob.glob("public/TLG/TLG_2026/**/*.docx", recursive=True)):
        item = parse_file(path)
        base = item["slug"]
        n = seen.get(base, 0)
        seen[base] = n + 1
        if n:
            item["slug"] = f"{base}-{n + 1}"
        rows.append(item)

    with open("_tlg2026_full.json", "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=2)

    print(f"wrote {len(rows)} articles")


if __name__ == "__main__":
    main()
