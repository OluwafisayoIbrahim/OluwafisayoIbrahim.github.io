// Next.js 16.4 static export requires at least one param even for an empty catalog.
// This reserved validation path resolves to notFound(), never to sample content.
export const EMPTY_CONTENT_SLUG = "__scaffold__";

export function createStaticParams(items: readonly { slug: string }[]) {
  if (items.length === 0) {
    return [{ slug: EMPTY_CONTENT_SLUG }];
  }

  if (items.some(({ slug }) => slug === EMPTY_CONTENT_SLUG)) {
    throw new Error(
      `${EMPTY_CONTENT_SLUG} is reserved for empty route validation.`,
    );
  }

  return items.map(({ slug }) => ({ slug }));
}
