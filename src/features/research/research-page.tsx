import { ResearchCard } from "@/components/research/research-card";
import { PageHeading } from "@/components/shared/page-heading";
import { researchProjects } from "@/content/research";

export function ResearchPage() {
  return (
    <>
      <PageHeading title="Research" />
      {researchProjects.map((item) => (
        <ResearchCard key={item.slug} research={item} />
      ))}
    </>
  );
}
