import type { ResearchProject } from "@/types/research";
import { ResearchCard } from "@/components/research/research-card";
export function FeaturedResearch({
  projects,
}: {
  projects: readonly ResearchProject[];
}) {
  if (!projects.length) return null;
  return (
    <section
      id="selected-research"
      className="research-editorial"
      aria-labelledby="selected-research-title"
    >
      <div className="page-container">
        <p className="editorial-label section-kicker">02 / Selected research</p>
        <h2
          id="selected-research-title"
          className="editorial-heading section-title"
        >
          Questions I&apos;ve explored.
        </h2>
        <div className="research-list">
          {projects.map((project) => (
            <ResearchCard key={project.slug} research={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
