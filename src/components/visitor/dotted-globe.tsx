import type { FC } from "react";
import type { VisitorLocation } from "@/types/visitor";

export interface DottedGlobeProps {
  locations: readonly VisitorLocation[];
}

// Structure only; rendering and interaction are deferred.
export const DottedGlobe: FC<DottedGlobeProps> = () => null;
