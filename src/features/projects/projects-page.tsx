import { ProjectCard } from "@/components/projects/project-card";
import { PageHeading } from "@/components/shared/page-heading";
import { engineeringProjects } from "@/content/projects";

export function ProjectsPage() {
  return (
    <>
      <PageHeading title="Engineering projects" />
      {engineeringProjects.map((item) => (
        <ProjectCard key={item.slug} project={item} />
      ))}
    </>
  );
}
