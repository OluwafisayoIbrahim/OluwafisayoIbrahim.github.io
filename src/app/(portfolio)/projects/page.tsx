import type { Metadata } from "next";
import { ProjectsPage } from "@/features/projects/projects-page";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected embedded-systems, web, and mobile projects by Oluwafisayo Ibrahim.",
};
export default function Page() {
  return <ProjectsPage />;
}
