import type { FC } from "react";
import type { ResearchTrack } from "@/types/research";

export interface TrackComparisonProps {
  tracks: readonly ResearchTrack[];
}

// Structure only; rendering and interaction are deferred.
export const TrackComparison: FC<TrackComparisonProps> = () => null;
