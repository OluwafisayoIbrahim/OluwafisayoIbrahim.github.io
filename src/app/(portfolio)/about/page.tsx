import type { Metadata } from "next";
import { AboutPage } from "@/features/about/about-page";
export const metadata: Metadata = {
  title: "About",
  description:
    "A little about Oluwafisayo (Ayomide) Ibrahim: chess, football, basketball, Liverpool FC, and the Golden State Warriors.",
};
export default function Page() {
  return <AboutPage />;
}
