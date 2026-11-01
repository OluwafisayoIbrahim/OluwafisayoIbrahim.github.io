import Link from "next/link";
import { ResearchFigure } from "@/components/research/research-figure";
import { ProjectTools } from "@/components/projects/project-tools";
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
    <article className="page-container research-detail">
      <Link className="editorial-link" href="/#selected-research">
        ← Selected research
      </Link>
      <div className={`research-detail-intro${research.figure ? " has-figure" : ""}`}>
      <header className="research-detail-header">
        <p className="editorial-label">{research.topics.join(" / ")}</p>
        <h1>{research.title}</h1>
        <p className="research-detail-summary">{research.summary}</p>
      </header>
      {research.figure && <ResearchFigure image={research.figure} />}
      </div>
      <div className="research-detail-body">
        {research.sections.map((section, index) => (
          <section
            key={section.id}
            aria-labelledby={section.id}
            className="research-detail-section"
          >
            <span
              className="editorial-label research-section-number"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 id={section.id}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        {publications.length > 0 && (
          <section className="research-detail-publication">
            <h2>Related preprint</h2>
            {publications.map((publication) => (
              <p key={publication.id}>
                <a
                  className="editorial-link"
                  href="https://doi.org/10.2139/ssrn.4771898"
                >
                  Forecasting Solar Power Generation using Artificial Neural
                  Networks ↗
                </a>
                <br />
                <span className="research-detail-note">
                  SSRN preprint · 2024 · DOI: 10.2139/ssrn.4771898
                </span>
              </p>
            ))}
          </section>
        )}
        <footer className="research-detail-resources">
          <ProjectTools tools={research.tools} />
          <nav
            aria-label="Project resources"
            className="research-resource-links"
          >
            {research.links.map((link) => (
              <a className="editorial-link" key={link.href} href={link.href}>
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </article>
  );
}
