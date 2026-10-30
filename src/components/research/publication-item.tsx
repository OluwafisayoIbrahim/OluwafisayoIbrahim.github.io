import type { FC } from "react";
import type { Publication } from "@/types/publication";

export interface PublicationItemProps {
  publication: Publication;
}

// Structure only; rendering and interaction are deferred.
export const PublicationItem: FC<PublicationItemProps> = () => null;
