export type TlgPdfIssue = {
  slug: string;
  label: string;
  year: number;
  /** 1-12 for chronological sorting within a year */
  month: number;
  pdfUrl: string;
  published: string;
};

/** Encode a public/TLG relative path for use in href/src. */
const tlgPdf = (relativePath: string) =>
  relativePath
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");

/** All TLG PDF editions in public/TLG (newest first). */
export const tlgPdfIssues: TlgPdfIssue[] = [
  {
    slug: "dec-25",
    label: "December 2025",
    year: 2025,
    month: 12,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-December-2025-min.pdf"),
    published: "2025-12-01",
  },
  {
    slug: "nov-25",
    label: "November 2025",
    year: 2025,
    month: 11,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-November-Issue-min.pdf"),
    published: "2025-11-01",
  },
  {
    slug: "oct-25",
    label: "October 2025",
    year: 2025,
    month: 10,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-October-25-issue-2-min.pdf"),
    published: "2025-10-01",
  },
  {
    slug: "sep-25",
    label: "September 2025",
    year: 2025,
    month: 9,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-September-V2-min.pdf"),
    published: "2025-09-01",
  },
  {
    slug: "aug-25",
    label: "August 2025",
    year: 2025,
    month: 8,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-August-min.pdf"),
    published: "2025-08-01",
  },
  {
    slug: "jul-25",
    label: "July 2025",
    year: 2025,
    month: 7,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-JULY-FINAL-2-min.pdf"),
    published: "2025-07-01",
  },
  {
    slug: "jun-25",
    label: "June 2025",
    year: 2025,
    month: 6,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-June-min.pdf"),
    published: "2025-06-01",
  },
  {
    slug: "may-25",
    label: "May 2025",
    year: 2025,
    month: 5,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-May-2025-min.pdf"),
    published: "2025-05-01",
  },
  {
    slug: "apr-25-pdf",
    label: "April 2025",
    year: 2025,
    month: 4,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-April-2025-min.pdf"),
    published: "2025-04-01",
  },
  {
    slug: "mar-25",
    label: "March 2025",
    year: 2025,
    month: 3,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-March-2025-V2-min.pdf"),
    published: "2025-03-01",
  },
  {
    slug: "feb-25",
    label: "February 2025",
    year: 2025,
    month: 2,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-February-2025-2-min.pdf"),
    published: "2025-02-01",
  },
  {
    slug: "jan-25",
    label: "January 2025",
    year: 2025,
    month: 1,
    pdfUrl: tlgPdf("/TLG/TLG_2025/TLG-January-2025-min.pdf"),
    published: "2025-01-01",
  },
  {
    slug: "dec-24",
    label: "December 2024",
    year: 2024,
    month: 12,
    pdfUrl: tlgPdf("/TLG/TLG_2024/TLG-December 2024.pdf"),
    published: "2024-12-01",
  },
  {
    slug: "oct-24",
    label: "October 2024",
    year: 2024,
    month: 10,
    pdfUrl: tlgPdf("/TLG/TLG_2024/october 2024.pdf"),
    published: "2024-10-01",
  },
  {
    slug: "sep-24",
    label: "September 2024",
    year: 2024,
    month: 9,
    pdfUrl: tlgPdf("/TLG/TLG_2024/September-2024-min.pdf"),
    published: "2024-09-01",
  },
  {
    slug: "aug-24",
    label: "August 2024",
    year: 2024,
    month: 8,
    pdfUrl: tlgPdf("/TLG/TLG_2024/TLG-August-2024.pdf"),
    published: "2024-08-01",
  },
  {
    slug: "jul-24",
    label: "July 2024",
    year: 2024,
    month: 7,
    pdfUrl: tlgPdf("/TLG/TLG_2024/July 2024.pdf"),
    published: "2024-07-01",
  },
];

export const getTlgPdfIssue = (slug: string) => tlgPdfIssues.find((issue) => issue.slug === slug);

export const tlgPdfIssuesByYear = () => {
  const grouped = new Map<number, TlgPdfIssue[]>();
  for (const issue of tlgPdfIssues) {
    const list = grouped.get(issue.year) ?? [];
    list.push(issue);
    grouped.set(issue.year, list);
  }
  return [...grouped.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, issues]) => ({
      year,
      issues: issues.sort((a, b) => b.month - a.month),
    }));
};

export const tlgPdfReaderPath = (slug: string) => `/language-gazette/read/${slug}` as const;

export const latestTlgPdfIssue = tlgPdfIssues[0];
