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
      "TypeScript",
      "Jitsi Meet",
    ],
    RYDe: [
      "Next.js",
      "TypeScript",
      "MapLibre GL JS",
      "Flutter",
      "Dart",
    ],
    MetroPay: [
      "Next.js",
      "TypeScript",
      "Flutter",
      "Dart",
    ],
  };
