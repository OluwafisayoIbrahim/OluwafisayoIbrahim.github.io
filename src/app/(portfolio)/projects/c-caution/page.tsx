import { ProjectTools } from "@/components/projects/project-tools";
import { cautionTools } from "@/content/project-tools";
import type { Metadata } from "next";
import Link from "next/link";
import { CCautionPreview } from "@/components/home/c-caution-preview";
export const metadata: Metadata = {
  title: "C-Caution Safety System",
  description:
    "An undergraduate embedded-systems project and interactive LED sequence preview.",
};
export default function CCautionPage() {
  return (
    <div className="page-container caution-project-page">
      <Link className="editorial-link" href="/#education">
        ← Back to Education
      </Link>
      <header>
        <p className="editorial-label home-kicker">
          Educational project / Embedded systems
        </p>
        <h1 className="editorial-heading home-section-title">
          C-Caution Safety System
        </h1>
        <p className="home-section-intro">
          An undergraduate project combining circuit design, Arduino
          programming, and a sequenced LED safety display. Explore the light
          sequence and its timing in this interactive reconstruction.
        </p>
      </header>
      <ProjectTools tools={cautionTools} />
      <CCautionPreview />
      <a
        className="editorial-link"
        href="https://github.com/OluwafisayoIbrahim/C-Caution-Project"
      >
        View project documentation <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
