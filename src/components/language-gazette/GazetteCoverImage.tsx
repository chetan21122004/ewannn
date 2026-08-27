import { useState } from "react";
import { gazetteCoverFallback } from "@/data/languageGazetteIssues";

/** Encode public asset paths so spaces/special chars work on all hosts. */
export const encodePublicAssetPath = (relativePath: string) =>
  relativePath
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");

type GazetteCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const GazetteCoverImage = ({ src, alt, className = "" }: GazetteCoverImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(() => encodePublicAssetPath(src));

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        const fallback = encodePublicAssetPath(gazetteCoverFallback);
        if (currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
};

export default GazetteCoverImage;
