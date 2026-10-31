export const cautionTools = ["Arduino Uno", "C / C++", "Proteus"] as const;
export const softwareTools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Dart",
] as const;
export const softwareProjectTools: Readonly<Record<string, readonly string[]>> =
  {
    LUQA: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
    ],
    RYDe: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MapLibre GL JS",
      "Flutter",
      "Dart",
    ],
    MetroPay: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Dart",
    ],
  };
