export interface ContentLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  figures?: readonly ImageAsset[];
}
