import type { ContentSection } from "@/types/content";
export function EditorialSection({ section }: { section: ContentSection }) {
  return (
    <section className="publication-row" aria-labelledby={section.id}>
      <h2 id={section.id} className="editorial-heading research-title">
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph) => (
        <p className="research-summary" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
