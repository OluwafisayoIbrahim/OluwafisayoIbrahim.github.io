import type { FC } from "react";
import type { ResearchResult } from "@/types/research";

export interface ResultsChartProps {
  results: readonly ResearchResult[];
}

// Structure only; rendering and interaction are deferred.
export const ResultsChart: FC<ResultsChartProps> = () => null;
