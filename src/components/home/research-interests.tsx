import type { FC } from "react";
import type { ResearchInterest } from "@/types/research";

export interface ResearchInterestsProps {
  interests: readonly ResearchInterest[];
}

export const ResearchInterests: FC<ResearchInterestsProps> = ({
  interests,
}) => (
  <section
    className="research-interests section-spacing"
    aria-labelledby="interests-title"
  >
    <div className="page-container">
      <div className="research-interests-heading">
        <p className="editorial-label section-kicker">01 / Areas of interest</p>
        <div>
          <h2 className="editorial-heading section-title" id="interests-title">
            Research interests
          </h2>
         
         {interests.length > 0 ? (
        <ul className="interest-grid">
          {interests.map((interest, index) => (
            <li className="interest-item" key={interest.id}>
              <span className="editorial-label interest-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="editorial-heading interest-title">
                {interest.title}
              </h3>
              {interest.description ? (
                <p className="interest-description">{interest.description}</p>
              ) : null}
              <span className="interest-rule" aria-hidden="true" />
            </li>
          ))}
        </ul>
      ) : null}
        </div>
      </div>
    </div>
  </section>
);
