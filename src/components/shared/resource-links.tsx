import type { FC } from "react";
import type { ContentLink } from "@/types/content";

export interface ResourceLinksProps {
  links: readonly ContentLink[];
}

// Structure only; rendering and interaction are deferred.
export const ResourceLinks: FC<ResourceLinksProps> = () => null;
