export interface ProfessionalRole {
  id: string;
  employer: string;
  title: string;
  period: string;
  location?: string;
  responsibilities: readonly string[];
  projects?: readonly {
    name: string;
    description: string;
    contribution: string;
  }[];
}

// Role details follow the owner's CV; website copy adds product and engineering context.
export const professionalRoles: readonly ProfessionalRole[] = [
  {
    id: "xanadu",
    employer: "Xanadu Digital Solutions",
    title: "Software Engineer",
    period: "2024 – Present",
    responsibilities: [
      "At Xanadu, I work on the parts of web and mobile products that people interact with: the screens they navigate, the information they rely on, and the steps they take to complete a task. The products span workplace learning, electric mobility, and charging payments, so the workflows range from following a course to managing a trip or monitoring a charging session.",
      "My contribution is frontend and application development, working with designers and backend engineers to connect product requirements to functioning interfaces. Beyond implementing a screen, that involves handling what happens while data loads, when a request fails, when permissions differ between users, or when live information changes. I also work on debugging, reusable components, code reviews, and delivery workflows as the products evolve.",
    ],
    projects: [
      {
        name: "LUQA",
        description:
          "LUQA is a learning management platform that organisations can adapt to their own training programmes. Administrators organise courses and oversee progress, instructors deliver learning and assess work, and learners move through course materials, live sessions, and assessments. Its multi-tenant structure supports separate organisations and their different roles and workflows.",
        contribution:
          "I contribute to the interfaces behind those learning and administrative workflows, including assessments, grading, and analytics. My work connects backend services to reusable frontend components and handles the application state, validation, and error conditions needed across different user roles.",
      },
      {
        name: "RYDe",
        description:
          "RYDe is an electric-mobility product for arranging journeys and managing the activity around them. It brings together ride bookings, advance reservations, recurring trips, and live journey information. Rider-facing applications and operational dashboards serve different parts of the same journey, from choosing a trip to following its progress.",
        contribution:
          "I work on the dashboards and application interfaces for booking, recurring-trip, mapping, and tracking workflows. This includes integrating services, managing changing trip information, and investigating issues in user and tracking flows.",
      },
      {
        name: "MetroPay",
        description:
          "MetroPay brings the EV charging journey into one application: finding a station, checking availability, paying for energy, and following a charging session. Drivers can use a wallet or linked RFID card and review their charging and transaction history, while charging-management interfaces support the activity behind those sessions.",
        contribution:
          "I contribute to the payment and charging interfaces, connecting station, wallet, session, and transaction data to the frontend. A key part of that work is keeping the interface consistent as live session information changes and resolving issues across the connected services.",
      },
    ],
  },
  {
    id: "metropolitan-electric",
    employer: "Metropolitan Electric Limited",
    title: "Electrical Engineer",
    period: "2024 – Present",
    location: "Nigeria",
    responsibilities: [
      "This role puts me closer to the physical systems behind electric mobility. An electric vehicle depends on its motor, controller, battery, and charging equipment working together; maintenance and testing involve understanding those connections as well as the individual components.",
      "My work covers electric-vehicle architecture and maintenance, motor and controller systems, battery management, and AC/DC charging infrastructure. It complements my software work by keeping performance, equipment behaviour, and safety in view alongside the information presented in an application.",
    ],
  },
  {
    id: "pz-cussons",
    employer: "PZ Cussons Plc",
    title: "Junior Engineer — Internship (SIWES)",
    period: "2021 – 2022",
    location: "Nigeria",
    responsibilities: [
      "My industrial placement at PZ Cussons introduced me to the electrical infrastructure that supports a working factory. Power generation, distribution, utilities, and production equipment were connected parts of the same environment, rather than separate subjects in a classroom.",
      "Working alongside electrical and mechanical engineers, I assisted with troubleshooting and maintenance and gained practical exposure to generators, motors, transformers, and control equipment. The placement also included PLCs, variable frequency drives, and pneumatic systems used in production-line operations.",
    ],
  },
];
