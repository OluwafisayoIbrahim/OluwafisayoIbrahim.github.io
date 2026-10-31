import { WorldHello } from "@/components/home/world-hello";
import { Hero } from "@/components/home/hero";
import { ResearchInterests } from "@/components/home/research-interests";
import { FeaturedResearch } from "@/components/home/featured-research";
import { PublicationsPreview } from "@/components/home/publications-preview";

import { Education } from "@/components/home/education";
import { researchInterests, researchProjects } from "@/content/research";
import { publications } from "@/content/publications";

export function HomePage() {
  return (
    <>
      <Hero />
      <ResearchInterests interests={researchInterests} />
      <FeaturedResearch
        projects={researchProjects.filter((item) => item.featured)}
      />
      <PublicationsPreview
        publications={publications.filter((item) => item.featured)}
      />
      <Education />

      <WorldHello />
    </>
  );
}
