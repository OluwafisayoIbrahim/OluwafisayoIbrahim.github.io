import type { FC } from "react";
import type { EngineeringProject } from "@/types/project";

export interface ProjectCardProps {
  project: EngineeringProject;
}

// Structure only; rendering and interaction are deferred.
export const ProjectCard: FC<ProjectCardProps> = () => null;
