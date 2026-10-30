import type { FC } from "react";
import type { ResearchProject } from "@/types/research";

export interface ResearchCardProps {
  research: ResearchProject;
}

// Structure only; rendering and interaction are deferred.
export const ResearchCard: FC<ResearchCardProps> = () => null;
