import { notFound } from "next/navigation";
import { researchProjects } from "@/content/research";
import { publications } from "@/content/publications";
import { ResearchDetailsPage } from "@/features/research/research-details-page";
import { createStaticParams, EMPTY_CONTENT_SLUG } from "@/lib/static-params";

export const dynamicParams = false;

export function generateStaticParams() {
  return createStaticParams(researchProjects);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const research = researchProjects.find((item) => item.slug === slug);
  if (slug === EMPTY_CONTENT_SLUG || !research) notFound();

  const relatedPublications = publications.filter((publication) =>
    research.publicationIds.includes(publication.id),
  );
  return (
    <ResearchDetailsPage
      research={research}
      publications={relatedPublications}
    />
  );
}
