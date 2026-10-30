import type { FC } from "react";
import type { EngineeringProject } from "@/types/project";

export interface ProjectOverviewProps {
  project: EngineeringProject;
}

// Structure only; rendering and interaction are deferred.
export const ProjectOverview: FC<ProjectOverviewProps> = () => null;
