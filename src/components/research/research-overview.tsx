import type { FC } from "react";
import type { ResearchProject } from "@/types/research";

export interface ResearchOverviewProps {
  research: ResearchProject;
}

// Structure only; rendering and interaction are deferred.
export const ResearchOverview: FC<ResearchOverviewProps> = () => null;
