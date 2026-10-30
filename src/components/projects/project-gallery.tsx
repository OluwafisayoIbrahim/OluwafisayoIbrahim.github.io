import type { FC } from "react";
import type { ImageAsset } from "@/types/content";

export interface ProjectGalleryProps {
  images: readonly ImageAsset[];
}

// Structure only; rendering and interaction are deferred.
export const ProjectGallery: FC<ProjectGalleryProps> = () => null;
