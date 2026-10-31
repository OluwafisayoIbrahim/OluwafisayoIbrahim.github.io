import type { Publication } from "@/types/publication";
export const publications: readonly Publication[] = [
  {
    id: "solar-ann-preprint",
    title:
      "Forecasting Solar Power Generation using Artificial Neural Networks",
    authors: [{ name: "Oluwafisayo Ibrahim" }],
    year: 2024,
    venue: "SSRN · Preprint",
    abstract:
      "",
    doi: "10.2139/ssrn.4771898",
    featured: true,
    researchSlugs: ["solar-ann-matlab"],
    links: [
      { label: "Read preprint", href: "https://doi.org/10.2139/ssrn.4771898" },
    ],
  },
];
