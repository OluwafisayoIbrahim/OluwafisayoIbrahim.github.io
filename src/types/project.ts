import type { ContentLink, ContentSection, ImageAsset } from "@/types/content";

export interface ViewerAnnotation {
  id: string;
  title: string;
  description: string;
  position: readonly [number, number, number];
}

export interface CCautionViewerContent {
  modelSrc?: string;
  poster?: ImageAsset;
  annotations: readonly ViewerAnnotation[];
}

interface ProjectContent {
  slug: string;
  title: string;
  summary: string;
  technologies: readonly string[];
  featured?: boolean;
  images: readonly ImageAsset[];
  sections: readonly ContentSection[];
  links: readonly ContentLink[];
}

export type EngineeringProject = ProjectContent &
  (
    | { kind: "engineering" }
    | { kind: "c-caution"; viewer: CCautionViewerContent }
  );
