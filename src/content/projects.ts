import type { EngineeringProject } from "@/types/project";

export const engineeringProjects: readonly EngineeringProject[] = [];
export const homeEngineeringProjects: readonly EngineeringProject[] = [
  {
    kind: "engineering",
    slug: "c-caution",
    title: "C-Caution Safety Sign",
    summary:
      "C-Caution is an Arduino-based safety-sign project with a sequenced LED display. The project combines circuit design, microcontroller programming, prototyping, and iterative testing. Its repository documents the circuit, firmware, and verification tools.",
    technologies: ["Embedded systems"],
    featured: true,
    images: [],
    sections: [],
    links: [
      {
        label: "Explore project",
        href: "https://github.com/OluwafisayoIbrahim/C-Caution-Project",
      },
    ],
  },
  {
    kind: "engineering",
    slug: "software-applications",
    title: "Software Applications",
    summary:
      "My software work spans web and mobile applications for education, mobility, energy, and commerce. Alongside this work, I build projects such as a Kanban board for organising tasks and an EV-versus-fuel comparison application. These projects connect interface development with practical workflows and product decisions.",
    technologies: ["Web", "Mobile development"],
    featured: true,
    images: [],
    sections: [],
    links: [
      {
        label: "Explore projects",
        href: "https://github.com/OluwafisayoIbrahim",
      },
    ],
  },
];
