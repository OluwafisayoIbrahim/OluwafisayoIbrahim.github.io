import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page could not be found. Explore Oluwafisayo Ibrahim’s research and projects, or return home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="not-found-shell">
      <Navbar />
      <main className="page-container not-found-page" aria-labelledby="not-found-title">
        <p className="editorial-label not-found-kicker">404 / Page not found</p>
        <p className="not-found-number" aria-hidden="true">404<span>.</span></p>
        <h1 id="not-found-title">A little off the beaten path.</h1>
        <p className="not-found-description">The page you’re looking for may have moved, or the link may be incorrect. There’s still plenty to explore.</p>
        <Link className="not-found-home" href="/">Back to home <span aria-hidden="true">↗</span></Link>
        <nav className="not-found-explore" aria-label="Explore the portfolio">
          <span className="editorial-label">Or take a look at</span>
          <Link className="editorial-link" href="/#selected-research">Research <span aria-hidden="true">↗</span></Link>
          <Link className="editorial-link" href="/projects/">Projects <span aria-hidden="true">↗</span></Link>
          <Link className="editorial-link" href="/about/">About me <span aria-hidden="true">↗</span></Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
