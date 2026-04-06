# bibekghimire.com

Personal website and blog for Bibek Ghimire, built with Astro and Tailwind CSS.

## What this repo is

This repo powers Bibek's personal site, including:
- homepage and professional profile
- experience, projects, and skills sections
- blog content under `src/content/blog`
- staging and production site updates for design/content changes

## Stack

- Astro 5
- Tailwind CSS 4
- Markdown content collections for blog posts

## Project structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── package.json
└── README.md
```

## Local development

From the repo root:

```sh
npm install
npm run dev
```

Local dev server:
- `http://localhost:4321`

## Build and preview

```sh
npm run build
npm run preview
```

## Key files

- `src/pages/index.astro` — homepage assembly
- `src/components/Nav.astro` — top navigation and theme toggle
- `src/components/Hero.astro` — hero section and primary CTAs
- `src/layouts/Layout.astro` — global page shell and theme boot logic
- `src/content/blog/` — blog posts

## Current expectations

When updating this site:
- do not leave default Astro starter content in docs or UI
- keep CTAs functional, especially contact and resume-request flows
- keep theme controls visually clean and production-ready
- verify staging reflects the intended branch before calling work done

## Notes

If staging behavior does not match source, verify:
- current checked-out branch
- latest deployed commit
- whether staging is serving stale build output or the wrong branch
