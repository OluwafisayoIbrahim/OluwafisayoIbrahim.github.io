import type { FC } from "react";
import type { ImageAsset } from "@/types/content";

export interface FigureProps {
  image: ImageAsset;
}

// Structure only; rendering and interaction are deferred.
export const Figure: FC<FigureProps> = () => null;
