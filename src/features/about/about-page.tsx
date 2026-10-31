import { NamePronunciation } from "@/components/about/name-pronunciation";

const interests = [
  {
    id: "chess",
    title: "Chess",
    text: "I enjoy playing chess. A game offers a different kind of challenge: looking closely at a position, considering the possibilities, and deciding on the next move.",
  },
  {
    id: "football",
    title: "Football",
    text: "I enjoy playing football and following the game. Liverpool FC is the club I support.",
  },
  {
    id: "basketball",
    title: "Basketball",
    text: "Basketball is another sport I enjoy playing and watching. In the NBA, I support the Golden State Warriors.",
  },
];
export function AboutPage() {
  return (
    <div className="page-container personal-about">
      <header className="personal-about-header">
        <p className="editorial-label home-kicker">About / Outside work</p>
        <h1 className="editorial-heading home-section-title">
          A little about me.
        </h1>
        <div className="personal-name-row">
          <h2 className="editorial-heading personal-name">
            Oluwafisayo <span>(Ayomide)</span> Ibrahim
          </h2>
          <NamePronunciation />
        </div>
        <p className="personal-name-guide" id="name-pronunciation-guide">
          oh-loo-wah-fee-sah-yoh
        </p>
      </header>
      <section
        className="personal-interests"
        aria-labelledby="outside-work-title"
      >
        <h2
          className="editorial-label personal-interests-label"
          id="outside-work-title"
        >
          Away from the desk
        </h2>
        {interests.map((interest) => (
          <article
            className="personal-interest"
            key={interest.id}
            aria-labelledby={`personal-${interest.id}`}
          >
            <h3 className="editorial-heading" id={`personal-${interest.id}`}>
              {interest.title}
            </h3>
            <div>
              <p>{interest.text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
