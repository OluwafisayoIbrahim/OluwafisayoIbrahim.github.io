import type { FC } from "react";
import type { AboutContent } from "@/types/site";

export interface AboutPreviewProps {
  content: AboutContent;
}

// Structure only; rendering and interaction are deferred.
export const AboutPreview: FC<AboutPreviewProps> = () => null;
