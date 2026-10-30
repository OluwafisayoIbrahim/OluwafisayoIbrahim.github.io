import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { CCautionViewer } from "@/components/projects/c-caution/c-caution-viewer";
import { ViewerControls } from "@/components/projects/c-caution/viewer-controls";
import { ViewerAnnotations } from "@/components/projects/c-caution/viewer-annotations";
import { EditorialSection } from "@/components/shared/editorial-section";
import { PageHeading } from "@/components/shared/page-heading";
import { ResourceLinks } from "@/components/shared/resource-links";
import type { EngineeringProject } from "@/types/project";

export interface ProjectDetailsPageProps {
  project: EngineeringProject;
}

export function ProjectDetailsPage({ project }: ProjectDetailsPageProps) {
  return (
    <>
      <PageHeading title={project.title} />
      <ProjectOverview project={project} />
      <ProjectGallery images={project.images} />
      {project.sections.map((section) => (
        <EditorialSection key={section.id} section={section} />
      ))}
      {project.kind === "c-caution" && (
        <>
          <CCautionViewer content={project.viewer} />
          <ViewerControls />
          <ViewerAnnotations annotations={project.viewer.annotations} />
        </>
      )}
      <ResourceLinks links={project.links} />
    </>
  );
}
