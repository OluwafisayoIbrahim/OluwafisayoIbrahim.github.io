import type { FC } from "react";
import type { ResearchInterest } from "@/types/research";

export interface ResearchInterestsProps {
  interests: readonly ResearchInterest[];
}

// Structure only; rendering and interaction are deferred.
export const ResearchInterests: FC<ResearchInterestsProps> = () => null;
