export interface PageHeadingProps {
  title: string;
}

export function PageHeading({ title }: PageHeadingProps) {
  return <h1>{title}</h1>;
}
