import type { ContentLink, ContentSection, ImageAsset } from "@/types/content";

export interface ResearchInterest {
  id: string;
  title: string;
  description?: string;
}

export interface ResearchResult {
  id: string;
  label: string;
  value: number;
  unit?: string;
  source: ContentLink;
}

export interface ResearchTrack {
  id: string;
  title: string;
  description?: string;
  results: readonly ResearchResult[];
}

export interface ResearchProject {
  slug: string;
  title: string;
  summary: string;
  topics: readonly string[];
  featured?: boolean;
  figure?: ImageAsset;
  sections: readonly ContentSection[];
  results: readonly ResearchResult[];
  tracks: readonly ResearchTrack[];
  publicationIds: readonly string[];
  links: readonly ContentLink[];
}
