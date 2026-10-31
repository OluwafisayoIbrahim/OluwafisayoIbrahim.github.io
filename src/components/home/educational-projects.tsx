

import Link from "next/link";
export function EducationalProjects() {
  return (
    <div id="educational-projects" className="education-project-link">
      <p className="editorial-label">Educational project</p>
      <Link className="editorial-link" href="/projects/c-caution/">
        C-Caution Safety System <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}

