import Link from "next/link";
import { ProjectTools } from "@/components/projects/project-tools";
import { cautionTools, softwareTools } from "@/content/project-tools";

export function ProjectsPage() {
  return (
    <div className="page-container projects-index">
      <header className="projects-index-header">
        <p className="editorial-label home-kicker">
          Engineering / Selected work
        </p>
        <h1 className="editorial-heading projects-index-title">
          Things I&apos;ve built.
        </h1>
        <p className="projects-index-intro">
          From a physical LED prototype to applications for learning, travel,
          and charging, these projects show how I approach building systems
          people can use.
        </p>
      </header>
      <div className="projects-index-list">
        <article
          className="projects-index-row"
          aria-labelledby="caution-project-title"
        >
          <p className="editorial-label research-meta">
            Embedded systems / Educational project
          </p>
          <h2
            id="caution-project-title"
            className="editorial-heading projects-index-project-title"
          >
            C-Caution Safety Sign
          </h2>
          <p className="research-summary">
            A microcontroller-controlled LED safety sign with a red chasing
            sequence and a green C-shaped display. Explore the project&apos;s
            interactive reconstruction and circuit documentation.
          </p>
          <ProjectTools tools={cautionTools} />
          <Link className="editorial-link" href="/projects/c-caution/">
            View project <span aria-hidden="true">↗</span>
          </Link>
        </article>
        <article
          className="projects-index-row"
          aria-labelledby="software-project-title"
        >
          <p className="editorial-label research-meta">Software engineering</p>
          <h2
            id="software-project-title"
            className="editorial-heading projects-index-project-title"
          >
            Web and Mobile Applications
          </h2>
          <p className="research-summary">
            A workplace learning platform, an electric-mobility service, and an
            EV charging application: LUQA, RYDe, and MetroPay address different
            tasks, each with its own users and connected workflows. Read what
            the products do and how their workflows fit together.
          </p>
          <ProjectTools tools={softwareTools} />
          <Link
            className="editorial-link"
            href="/experience/#selected-projects"
          >
            View projects <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </div>
    </div>
  );
}
