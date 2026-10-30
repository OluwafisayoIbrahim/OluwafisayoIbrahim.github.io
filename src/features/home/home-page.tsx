import { Hero } from "@/components/home/hero";
import { ResearchInterests } from "@/components/home/research-interests";
import { FeaturedResearch } from "@/components/home/featured-research";
import { PublicationsPreview } from "@/components/home/publications-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { AboutPreview } from "@/components/home/about-preview";
import { PageHeading } from "@/components/shared/page-heading";
import { researchInterests, researchProjects } from "@/content/research";
import { publications } from "@/content/publications";
import { engineeringProjects } from "@/content/projects";
import { aboutContent, siteInformation } from "@/content/site";

export function HomePage() {
  return (
    <>
      <PageHeading title={siteInformation.name} />
      <Hero />
      <ResearchInterests interests={researchInterests} />
      <FeaturedResearch
        projects={researchProjects.filter((item) => item.featured)}
      />
      <PublicationsPreview
        publications={publications.filter((item) => item.featured)}
      />
      <FeaturedProjects
        projects={engineeringProjects.filter((item) => item.featured)}
      />
      <AboutPreview content={aboutContent} />
    </>
  );
}
