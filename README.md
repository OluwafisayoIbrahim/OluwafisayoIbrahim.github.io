This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Portfolio scaffold

Application code lives in `src/`, and `@/` resolves to that directory. The root
layout, global CSS, shadcn Button, and utility helper were moved with their
contents preserved. The shadcn CSS path now points to `src/app/globals.css`.

- `src/app/(portfolio)/`: route entries and the shared portfolio layout. The
  route group does not appear in URLs.
- `src/features/`: page composition and future feature behavior. Routes import
  these named page components; reusable components do not import features.
- `src/components/`: layout, home, research, projects, About, visitor, shared
  editorial boundaries, and the existing shadcn UI components.
- `src/content/`: verified research, publication, project, and site content.
  Research and project collections are intentionally empty.
- `src/types/`: content, research results/tracks, publications, engineering
  projects, C-Caution viewer annotations, site information, and visitor contracts.
- `src/config/`: navigation and public asset directory paths.
- `src/hooks/`: reserved for future hooks; no browser behavior is implemented.
- `src/lib/`: the existing utility helper and static parameter generation.
- `public/images/{profile,research,projects}/`, `public/documents/`, and
  `public/models/`: reserved asset directories. Existing starter assets remain.

### Design inventory

The [Figma file](https://www.figma.com/design/uQrBhFZmBMq42SQGftYU6U/Untitled)
was inspected through the desktop application's page/layer hierarchy after the
connector reported its Starter-plan call limit. Its frames cover the homepage
shell, visual foundations and reusable controls/editorial specimens, research
case studies, detailed research, engineering projects, About/background/CV,
C-Caution's scene and viewer controls, and research track comparison.

The homepage groups navigation, introduction, research interests, selected
research, publications, engineering projects, About, a visitor/local-time/globe
section, and footer. Research details include question, dataset, experimental
design, tracks, results, and limitations. About includes education, experience,
research journey, outside-work interests, and CV/profile links. These are
structural observations, not populated personal claims or research findings.

Components are deliberately minimal placeholders. No Figma styling, charts,
animations, globe, 3D scene, location detection, or visitor tracking is implemented.

### Content and static export

Add verified records with unique URL-safe slugs to `src/content/research.ts` and
`src/content/projects.ts`. Detail pages generate their paths from those records;
unknown slugs return 404. Publications can be associated with research by ID.
Add assets under `public/` and reference their root-relative URLs in content.

This installed Next.js version rejects empty `generateStaticParams()` arrays
with `output: "export"`. While a collection is empty, `createStaticParams()`
returns the reserved `__scaffold__` parameter, which resolves to `notFound()`.
It creates no sample detail content and disappears once real records are added.

GitHub Pages requires static export. Cache Components and Partial Prefetching
are disabled because Next.js rejects PPR in export mode. The existing export,
trailing-slash, image, and Turbopack settings are retained. A production build
creates `out/`; no deployment or server routes are configured by this scaffold.

The root layout's existing identity metadata is preserved; keep it aligned with
`src/content/site.ts` when updating the site's identity in a later implementation.
