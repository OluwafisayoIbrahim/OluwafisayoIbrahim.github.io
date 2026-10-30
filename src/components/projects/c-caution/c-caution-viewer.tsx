import type { FC } from "react";
import type { CCautionViewerContent } from "@/types/project";

export interface CCautionViewerProps {
  content: CCautionViewerContent;
}

// Structure only; rendering and interaction are deferred.
export const CCautionViewer: FC<CCautionViewerProps> = () => null;
