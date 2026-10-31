import { xanaduProjectLinks } from "@/content/project-links";
import { ProjectTools } from "@/components/projects/project-tools";
import { softwareProjectTools } from "@/content/project-tools";
import { professionalRoles } from "@/content/experience";
export function SelectedProjects() {
  const projects = professionalRoles.flatMap((role) =>
    (role.projects ?? []).map((project) => ({
      ...project,
      employer: role.employer,
    })),
  );
  return (
    <section
      id="selected-projects"
      className="selected-experience-projects"
      aria-labelledby="selected-projects-title"
    >
      <p className="editorial-label home-kicker">Selected projects</p>
      <h2
        id="selected-projects-title"
        className="editorial-heading home-section-title"
      >
        Selected Projects
      </h2>
      <p className="home-section-intro">
        These products support different everyday tasks: learning at work,
        arranging a journey, and charging an electric vehicle.
      </p>
      <div className="selected-project-grid">
        {projects.map((project) => (
          <article className="selected-project-card" key={project.name}>
            <h3 className="editorial-heading engineering-title">
              {project.name}
            </h3>
            <p className="research-summary">{project.description}</p>
            <ProjectTools tools={softwareProjectTools[project.name] ?? []} />
            {xanaduProjectLinks[project.name] && (
              <a
                className="editorial-link"
                href={xanaduProjectLinks[project.name].href}
              >
                {xanaduProjectLinks[project.name].label}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
