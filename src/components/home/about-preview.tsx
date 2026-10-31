import type { AboutContent } from "@/types/site";
import { Education } from "@/components/home/education";

export function AboutPreview({ content }: { content: AboutContent }) {
  return (
    <section
      id="background"
      className="home-editorial background-section"
      aria-labelledby="background-title"
    >
      <div className="page-container">
        <p className="editorial-label home-kicker">05 / About / Background</p>
        <h2
          id="background-title"
          className="editorial-heading home-section-title"
        >
          Background and approach
        </h2>
        <div className="background-grid">
          <div>
            {content.biography.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "background-lead" : "background-body"}
              >
                {paragraph}
              </p>
            ))}
            <Education />
            <p className="background-outside">
              <span className="editorial-label">Outside work</span>
              <span aria-hidden="true"> / </span>Chess, embedded electronics,
              and exploring practical engineering problems.
            </p>
            <div className="background-links">
              <a
                className="editorial-link"
                href="https://github.com/OluwafisayoIbrahim"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                className="editorial-link"
                href="mailto:oluwafisayoibrahim2@gmail.com"
              >
                Say hello <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="background-portrait">
            <p className="editorial-label">Portrait / Personal photograph</p>
            <p>Replace with a real photograph</p>
          </div>
        </div>
      </div>
    </section>
  );
}
