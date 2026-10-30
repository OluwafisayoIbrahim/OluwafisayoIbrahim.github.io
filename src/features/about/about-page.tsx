import { Biography } from "@/components/about/biography";
import { EditorialSection } from "@/components/shared/editorial-section";
import { PageHeading } from "@/components/shared/page-heading";
import { aboutContent } from "@/content/site";

export function AboutPage() {
  return (
    <>
      <PageHeading title="About" />
      <Biography content={aboutContent} />
      {aboutContent.sections.map((section) => (
        <EditorialSection key={section.id} section={section} />
      ))}
    </>
  );
}
