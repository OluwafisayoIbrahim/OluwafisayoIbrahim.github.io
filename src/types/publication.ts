import type { ContentLink } from "@/types/content";

export interface PublicationAuthor {
  name: string;
  url?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: readonly PublicationAuthor[];
  year: number;
  venue?: string;
  abstract?: string;
  doi?: string;
  citation?: string;
  featured?: boolean;
  researchSlugs: readonly string[];
  links: readonly ContentLink[];
}
