import type { FC } from "react";
import type { ResearchProject } from "@/types/research";

export interface FeaturedResearchProps {
  projects: readonly ResearchProject[];
}

// Structure only; rendering and interaction are deferred.
export const FeaturedResearch: FC<FeaturedResearchProps> = () => null;
