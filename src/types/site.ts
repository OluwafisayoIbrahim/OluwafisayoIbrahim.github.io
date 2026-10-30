import type { ContentLink, ContentSection, ImageAsset } from "@/types/content";

export interface SiteInformation {
  name: string;
  description: string;
  url: string;
  profileImage?: ImageAsset;
  cvHref?: string;
  profiles: readonly ContentLink[];
}

export interface AboutContent {
  biography: readonly string[];
  sections: readonly ContentSection[];
}

export interface NavigationItem {
  label: string;
  href: string;
}
