import Image from "next/image";
import type { ImageAsset } from "@/types/content";

export function ResearchFigure({ image }: { image: ImageAsset }) {
  return (
    <figure className="research-figure">
      <a className="research-figure-link" href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${image.alt}. Open full-size image in a new tab`}>
        <span className="research-figure-frame" style={image.aspectRatio ? { aspectRatio: image.aspectRatio } : undefined}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 480px" />
        </span>
      </a>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
