import PdfFlipbookViewer from "@/components/language-gazette/PdfFlipbookViewer";

import {

  Dialog,

  DialogContent,

  DialogDescription,

  DialogHeader,

  DialogTitle,

} from "@/components/ui/dialog";

import { CASE_STUDY_PDF_ASPECT, getCaseStudyFullHeadline, type CaseStudyEntry } from "@/data/caseStudyCatalog";

import { Download, ExternalLink } from "lucide-react";



type CaseStudyPdfDialogProps = {

  study: CaseStudyEntry | null;

  open: boolean;

  onOpenChange: (open: boolean) => void;

};



const CaseStudyPdfDialog = ({ study, open, onOpenChange }: CaseStudyPdfDialogProps) => {

  if (!study) return null;



  return (

    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="flex max-h-[min(94vh,920px)] max-w-[min(98vw,980px)] flex-col gap-0 overflow-hidden rounded-2xl border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-0 sm:rounded-3xl">

        <DialogHeader className="shrink-0 border-b border-[hsl(var(--border-light))] bg-white px-5 py-4 pr-12 sm:px-6 sm:py-5">

          <DialogTitle className="font-serif text-left text-base font-bold leading-snug text-on-light sm:text-lg">

            {getCaseStudyFullHeadline(study)}

          </DialogTitle>

          <DialogDescription className="text-left text-xs text-on-light-secondary sm:text-sm">

            {study.subjectLine}

          </DialogDescription>

          <div className="mt-3 flex flex-wrap gap-2">

            <a

              href={study.pdfUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-3.5 py-1.5 text-xs font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"

            >

              <ExternalLink className="h-3.5 w-3.5" aria-hidden />

              Open in new tab

            </a>

            <a

              href={study.pdfUrl}

              download={study.pdfFileName}

              className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[hsl(var(--brand-gold-500))] px-3.5 py-1.5 text-xs font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"

            >

              <Download className="h-3.5 w-3.5" aria-hidden />

              Download PDF

            </a>

          </div>

        </DialogHeader>



        <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3 sm:p-5">

          {open ? (

            <PdfFlipbookViewer
              key={study.id}
              pdfUrl={study.pdfUrl}

              title={getCaseStudyFullHeadline(study)}

              pageAspectRatio={CASE_STUDY_PDF_ASPECT}

              className="min-h-0 flex-1"

            />

          ) : null}

        </div>

      </DialogContent>

    </Dialog>

  );

};



export default CaseStudyPdfDialog;

