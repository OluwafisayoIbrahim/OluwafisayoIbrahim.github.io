import Link from "next/link";
import type { ResearchProject } from "@/types/research";

export function ResearchCard({ research }: { research: ResearchProject }) {
  return (
    <article className="research-row">
      <div>
        <h3 className="editorial-heading research-title">
          <Link href={`/research/${research.slug}/`}>{research.title}</Link>
        </h3>
        <p className="research-summary">{research.summary}</p>
        <Link
          className="editorial-link research-read"
          href={`/research/${research.slug}/`}
        >
          Explore research <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <aside className="research-note">
        <p className="editorial-label">{research.sections[0]?.title}</p>
        <p>{research.sections[0]?.paragraphs[0]}</p>
      </aside>
    </article>
  );
}
