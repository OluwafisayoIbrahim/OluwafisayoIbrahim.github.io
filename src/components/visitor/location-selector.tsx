import type { FC } from "react";
import type { VisitorLocation } from "@/types/visitor";

export interface LocationSelectorProps {
  locations: readonly VisitorLocation[];
}

// Structure only; rendering and interaction are deferred.
export const LocationSelector: FC<LocationSelectorProps> = () => null;
