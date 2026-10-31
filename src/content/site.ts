import type { AboutContent, SiteInformation } from "@/types/site";
import type { VisitorWidgetContent } from "@/types/visitor";

// These identity fields already exist in the preserved root layout metadata.
export const siteInformation: SiteInformation = {
  name: "Oluwafisayo Ibrahim",
  description:
    "A collection of my research, engineering projects, publications, and things I'm curious about.",
  url: "https://oluwafisayoibrahim.github.io",
  profileImage: {
    src: "/images/oluwafisayo-ibrahim-retouched.png",
    alt: "Oluwafisayo Ibrahim",
  },
  profiles: [],
};

export const aboutContent: AboutContent = {
  biography: [
    "I am an Electrical and Electronics Engineering graduate of Olabisi Onabanjo University and a software engineer working across research and product development. My interests sit at the intersection of dependable intelligent systems, empirical software engineering, and human-centred digital products. This combination allows me to approach technical problems from both the physical-systems perspective of an engineer and the iterative, user-focused perspective of a software developer.",
    "My undergraduate research examined artificial-neural-network approaches to estimating solar power generation, giving me practical experience with MATLAB, data preparation, model evaluation, and technical writing. I am extending that work through a Python-based re-evaluation and ongoing research on duplicate bug-report retrieval. Alongside research, I build web and mobile products.",
  ],
  sections: [],
};

export const visitorContent: VisitorWidgetContent = {
  locations: [],
};


