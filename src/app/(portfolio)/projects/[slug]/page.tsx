import { notFound } from "next/navigation";
import { engineeringProjects } from "@/content/projects";
import { ProjectDetailsPage } from "@/features/projects/project-details-page";
import { createStaticParams, EMPTY_CONTENT_SLUG } from "@/lib/static-params";

export const dynamicParams = false;

export function generateStaticParams() {
  return createStaticParams(engineeringProjects);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = engineeringProjects.find((item) => item.slug === slug);
  if (slug === EMPTY_CONTENT_SLUG || !project) notFound();

  return <ProjectDetailsPage project={project} />;
}
