import type { FC } from "react";
import type { EngineeringProject } from "@/types/project";

export interface FeaturedProjectsProps {
  projects: readonly EngineeringProject[];
}

// Structure only; rendering and interaction are deferred.
export const FeaturedProjects: FC<FeaturedProjectsProps> = () => null;
