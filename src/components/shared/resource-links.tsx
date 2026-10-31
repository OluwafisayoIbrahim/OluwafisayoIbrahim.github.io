import type { ContentLink } from "@/types/content";
export function ResourceLinks({ links }: { links: readonly ContentLink[] }) {
  if (!links.length) return null;
  return (
    <ul className="research-resources">
      {links.map((link) => (
        <li key={link.href}>
          <a className="editorial-link" href={link.href}>
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
