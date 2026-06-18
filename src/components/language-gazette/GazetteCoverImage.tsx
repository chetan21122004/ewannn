import { useState } from "react";
import { gazetteCoverFallback } from "@/data/languageGazetteIssues";

type GazetteCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const GazetteCoverImage = ({ src, alt, className = "" }: GazetteCoverImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== gazetteCoverFallback) {
          setCurrentSrc(gazetteCoverFallback);
        }
      }}
    />
  );
};

export default GazetteCoverImage;
