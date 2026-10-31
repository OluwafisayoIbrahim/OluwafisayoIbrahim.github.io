import type { ResearchProject } from "@/types/research";
export function ResearchOverview({ research }: { research: ResearchProject }) {
  return (
    <div className="research-summary">
      <p>{research.summary}</p>
      <p>{research.topics.join(" / ")}</p>
    </div>
  );
}
