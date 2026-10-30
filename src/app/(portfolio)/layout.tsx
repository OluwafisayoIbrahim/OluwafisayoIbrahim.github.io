import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { VisitorFeature } from "@/features/visitor/visitor-feature";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <VisitorFeature />
      <Footer />
    </>
  );
}
