import Link from "next/link";
import Image from "next/image";
import { siteInformation } from "@/content/site";
import GoogleScholarIcon from "../shared/icons/GoogleScholar";
import { ReactNode } from "react";
import GitHubIcon from "../shared/icons/Github";
import ORCiDIcon from "../shared/icons/ORCiD";
import LinkedInIcon from "../shared/icons/LinkedIn";
import EmailIcon from "../shared/icons/Email";

type HeroLink = {
  icon: ReactNode;
  href: string;
};

export function Hero() {
  const heroLinks: HeroLink[] = [
    {
      href: "https://scholar.google.com/citations?user=-x9WG8sAAAAJ&hl=en",
      icon: <GoogleScholarIcon className="w-9 h-9" />,
    },
    {
      href: "https://github.com/OluwafisayoIbrahim",
      icon: <GitHubIcon className="w-9 h-9" />,
    },
    { href: "https://orcid.org/0009-0006-2625-0675", icon: <ORCiDIcon className="w-9 h-9" /> },
    { href: "https://www.linkedin.com/in/oluwafisayo-ibrahim/", icon: <LinkedInIcon className="w-9 h-9" /> },
    { href: "mailto:oluwafisayoibrahim2@gmail.com", icon: <EmailIcon className="w-9 h-9" /> },
    ...(siteInformation.cvHref
      ? [{ href: siteInformation.cvHref, icon: "↗" }]
      : []),
  ];

  return (
    <section className="home-hero page-container" aria-labelledby="home-title">
      <div className="home-hero-copy">
        <h1
          className="editorial-heading text-[76px] leading-[1.05] tracking-[-2px] font-normal"
          id="home-title"
        >
          Hello, I’m
          <br />
          Oluwafisayo.
        </h1>
        <p className="text-[20px] leading-[170%] tracking-[0%] font-normal text-[#52677F] mt-8">
          I’m a software engineer with a Bachelor&apos;s degree in Electrical and
          Electronics Engineering, interested in research at the intersection of
          software engineering and machine learning.
        </p>
        <div className="home-hero-actions">
          {heroLinks.map((link, index) => {
            const label =
              link.href === "/research/"
                ? "Explore my research"
                : "View academic CV";

            return link.href.startsWith("/") ? (
              <Link
                aria-label={label}
                className="editorial-link"
                href={link.href}
                key={`${link.href}-${index}`}
              >
                <span aria-hidden="true">{link.icon}</span>
              </Link>
            ) : (
              <Link
                aria-label={label}
                className="editorial-link"
                href={link.href}
                key={`${link.href}-${index}`}
              >
                <span aria-hidden="true">{link.icon}</span>
              </Link>
            );
          })}
        </div>
        {siteInformation.profiles.length > 0 ? (
          <ul className="home-profile-links" aria-label="Professional profiles">
            {siteInformation.profiles.map((profile) => (
              <li key={profile.href}>
                <a href={profile.href} rel="noreferrer" target="_blank">
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="home-hero-portrait-column">
        {siteInformation.profileImage ? (
          <div className="home-hero-portrait home-hero-portrait-image">
            <Image
              alt={siteInformation.profileImage.alt}
              src={siteInformation.profileImage.src}
              fill
              sizes="(max-width: 301px) calc(100vw - 40px), 261px"
              className="home-hero-image"
            />
          </div>
        ) : (
          <div
            className="home-hero-portrait"
            role="img"
            aria-label="Portrait image placeholder"
          >
            <span className="editorial-label">Portrait / 4:5</span>
          </div>
        )}
      </div>
    </section>
  );
}

