import type { Publication } from "@/types/publication";
import Link from "next/link";

export function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <article className="publication-row">
      <p className="editorial-label research-meta">
        {publication.venue} / {publication.year}
      </p>
      <h3 className="editorial-heading research-title">
        <a href={`https://doi.org/${publication.doi}`}>{publication.title}</a>
      </h3>
      <p className="research-summary flex items-center gap-2">
        {publication.authors.map((author) => author.name).join(", ")} · <span className="text-[16px] leading-[145%] tracking-[0%] text-[#52677F] font-normal">DOI: {publication.doi}</span>
      </p>
      <p className="research-summary">{publication.abstract}</p>
      <Link
        className="editorial-link research-read"
        href={`https://doi.org/${publication.doi}`}
      >
        Read preprint <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
