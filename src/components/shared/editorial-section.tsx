import type { FC } from "react";
import type { ContentSection } from "@/types/content";

export interface EditorialSectionProps {
  section: ContentSection;
}

// Structure only; rendering and interaction are deferred.
export const EditorialSection: FC<EditorialSectionProps> = () => null;
