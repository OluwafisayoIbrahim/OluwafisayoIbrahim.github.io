import { ResearchOverview } from "@/components/research/research-overview";
import { ResultsChart } from "@/components/research/results-chart";
import { TrackComparison } from "@/components/research/track-comparison";
import { PublicationItem } from "@/components/research/publication-item";
import { EditorialSection } from "@/components/shared/editorial-section";
import { PageHeading } from "@/components/shared/page-heading";
import { ResourceLinks } from "@/components/shared/resource-links";
import type { Publication } from "@/types/publication";
import type { ResearchProject } from "@/types/research";

export interface ResearchDetailsPageProps {
  research: ResearchProject;
  publications: readonly Publication[];
}

export function ResearchDetailsPage({
  research,
  publications,
}: ResearchDetailsPageProps) {
  return (
    <>
      <PageHeading title={research.title} />
      <ResearchOverview research={research} />
      {research.sections.map((section) => (
        <EditorialSection key={section.id} section={section} />
      ))}
      <ResultsChart results={research.results} />
      <TrackComparison tracks={research.tracks} />
      {publications.map((publication) => (
        <PublicationItem key={publication.id} publication={publication} />
      ))}
      <ResourceLinks links={research.links} />
    </>
  );
}
