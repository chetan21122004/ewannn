import { pdfjs } from "react-pdf";

/** Configure PDF.js worker once for react-pdf (must match react-pdf's bundled pdfjs-dist). */
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export { pdfjs };
