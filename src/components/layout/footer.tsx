import Link from "next/link";
import { siteInformation } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer-inner">
        <Link
          className="site-mark"
          href="/"
          aria-label="Oluwafisayo Ibrahim home"
        >
          OI<span>.</span>
        </Link>
        <p className="site-footer-note">
          © {new Date().getFullYear()} {siteInformation.name}
        </p>
        <a className="site-footer-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
