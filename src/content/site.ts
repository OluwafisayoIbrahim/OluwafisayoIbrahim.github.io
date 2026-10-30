import type { AboutContent, SiteInformation } from "@/types/site";
import type { VisitorWidgetContent } from "@/types/visitor";

// These identity fields already exist in the preserved root layout metadata.
export const siteInformation: SiteInformation = {
  name: "Oluwafisayo Ibrahim",
  description:
    "A collection of my research, engineering projects, publications, and things I'm curious about.",
  url: "https://oluwafisayoibrahim.github.io",
  profiles: [],
};

export const aboutContent: AboutContent = {
  biography: [],
  sections: [],
};

export const visitorContent: VisitorWidgetContent = {
  locations: [],
};
