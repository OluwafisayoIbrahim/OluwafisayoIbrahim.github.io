export function ProjectTools({ tools }: { tools: readonly string[] }) {
  if (!tools.length) return null;
  return (
    <div className="project-tools">
      <p className="editorial-label project-tools-label">Tools used</p>
      <ul aria-label="Tools used">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}
