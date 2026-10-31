import { EducationalProjects } from "@/components/home/educational-projects";

export function Education() {
  return (
    <section
      id="education"
      className="home-editorial education-section"
      aria-labelledby="education-title"
    >
      <div className="page-container">
        <p className="editorial-label home-kicker">04 / Education</p>
        <h2
          id="education-title"
          className="editorial-heading home-section-title"
        >
          Education
        </h2>
        <div className="education-details">
          <div>
            <p className="editorial-label research-meta">Sept 2017-June 2023</p>
            <h3 className="editorial-heading engineering-title">
              Olabisi Onabanjo University
            </h3>
            <p className="education-location">Nigeria</p>
          </div>
          <div>
            <h3 className="editorial-heading engineering-title">
              B.Eng. Electrical and Electronics Engineering
            </h3>
            <p className="research-summary">CGPA: 4.19 / 5.00</p>
          </div>
        </div>
        <EducationalProjects />
      </div>
    </section>
  );
}
