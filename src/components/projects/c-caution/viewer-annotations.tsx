import type { FC } from "react";
import type { ViewerAnnotation } from "@/types/project";

export interface ViewerAnnotationsProps {
  annotations: readonly ViewerAnnotation[];
}

// Structure only; rendering and interaction are deferred.
export const ViewerAnnotations: FC<ViewerAnnotationsProps> = () => null;
