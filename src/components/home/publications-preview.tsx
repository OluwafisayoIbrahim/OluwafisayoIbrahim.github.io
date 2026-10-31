import type { Publication } from "@/types/publication";
import { PublicationItem } from "@/components/research/publication-item";
export function PublicationsPreview({
  publications,
}: {
  publications: readonly Publication[];
}) {
  if (!publications.length) return null;
  return (
    <section
      id="publications"
      className="research-editorial"
      aria-labelledby="publications-title"
    >
      <div className="page-container">
        <p className="editorial-label section-kicker">03 / Publications</p>
        <h2 id="publications-title" className="editorial-heading section-title">
          Publications &amp; writing
        </h2>
        <div className="research-list">
          {publications.map((publication) => (
            <PublicationItem key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
}
