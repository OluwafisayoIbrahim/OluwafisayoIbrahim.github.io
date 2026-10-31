import { SelectedProjects } from "@/components/projects/selected-projects";
import type { Metadata } from "next";
import { professionalRoles } from "@/content/experience";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Professional experience in software engineering, electric vehicles, and industrial electrical systems.",
};

export default function ExperiencePage() {
  return (
    <div className="page-container experience-page">
      <header className="experience-header">
        <p className="editorial-label home-kicker">Professional experience</p>
        <h1 className="editorial-heading home-section-title">
          Engineering in practice
        </h1>
        <p className="home-section-intro">
          I work across software products, electric vehicles, and industrial
          electrical systems. These roles connect the interfaces people use to
          the services and equipment behind them, and inform my interest in
          software reliability, maintainability, and practical engineering
          problems.
        </p>
      </header>
      <div className="experience-list">
        {professionalRoles.map((role) => (
          <article
            className="experience-role"
            key={role.id}
            aria-labelledby={role.id}
          >
            <div>
              <p className="editorial-label research-meta">{role.period}</p>
              <p className="experience-employer">{role.employer}</p>
              {role.location && (
                <p className="experience-location">{role.location}</p>
              )}
            </div>
            <div>
              <h2 className="editorial-heading engineering-title" id={role.id}>
                {role.title}
              </h2>
              <div className="experience-narrative">
                {role.responsibilities.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <SelectedProjects />
    </div>
  );
}
