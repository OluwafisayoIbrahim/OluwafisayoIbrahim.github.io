import { PublicationItem } from "@/components/research/publication-item";
import { PageHeading } from "@/components/shared/page-heading";
import { publications } from "@/content/publications";

export function PublicationsPage() {
  return (
    <div className="page-container research-editorial">
      <PageHeading title="Publications" />
      {publications.map((item) => (
        <PublicationItem key={item.id} publication={item} />
      ))}
    </div>
  );
}

