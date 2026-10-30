import type { FC } from "react";
import type { AboutContent } from "@/types/site";

export interface BiographyProps {
  content: AboutContent;
}

// Structure only; rendering and interaction are deferred.
export const Biography: FC<BiographyProps> = () => null;
