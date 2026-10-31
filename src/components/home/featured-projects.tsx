import type { EngineeringProject } from "@/types/project";

export function FeaturedProjects({
  projects,
}: {
  projects: readonly EngineeringProject[];
}) {
  if (!projects.length) return null;
  return (
    <section
      id="engineering-projects"
      className="home-editorial engineering-section"
      aria-labelledby="engineering-title"
    >
      <div className="page-container">
        <p className="editorial-label home-kicker">04 / Engineering projects</p>
        <h2
          id="engineering-title"
          className="editorial-heading home-section-title"
        >
          Selected engineering and software projects
        </h2>
        <p className="home-section-intro">
          My project work connects electrical engineering, embedded systems, and
          software development. It includes an Arduino-based safety prototype
          and web applications. Each project brings together a practical
          problem, a technical approach, and the decisions that shaped the
          result.
        </p>
        <div className="engineering-grid">
          {projects.map((project) => (
            <article className="engineering-card" key={project.slug}>
              <div className="engineering-image" aria-hidden="true" />
              <p className="editorial-label engineering-category">
                {project.technologies.join(" & ")}
              </p>
              <h3 className="editorial-heading engineering-title">
                {project.title}
              </h3>
              <p className="engineering-description">{project.summary}</p>
              <div className="engineering-links">
                {project.links.map((link) => (
                  <a
                    className="editorial-link"
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
