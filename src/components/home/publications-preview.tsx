import type { FC } from "react";
import type { Publication } from "@/types/publication";

export interface PublicationsPreviewProps {
  publications: readonly Publication[];
}

// Structure only; rendering and interaction are deferred.
export const PublicationsPreview: FC<PublicationsPreviewProps> = () => null;
