# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Ethan Borror's personal portfolio: a single-page React 19 site built with Vite, plain JSX (no TypeScript), and one global stylesheet. It is served from https://ethanbor77.github.io/.

## Commands

- `npm run dev`: Vite dev server with HMR
- `npm run build`: production build to `dist/`
- `npm run preview`: serve the built `dist/` locally
- `npm run lint`: Oxlint (config in `.oxlintrc.json`: react + oxc plugins, `rules-of-hooks` is an error)

There is no test framework.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main` (or a manual dispatch). It runs `npm ci && npm run build` on Node 22 and publishes `dist/` to GitHub Pages. The local `dist/` is gitignored and never deployed, so pushing to `main` is a production deploy.

## Architecture

- `index.html` → `src/main.jsx` (imports `src/style.css`, renders `<App/>` in StrictMode) → `src/App.jsx`, which stacks the page sections: `Header`, then `Intro`/`About`/`Skills`/`Education`/`Projects`/`Contact` inside `<main><section className="site-content">`, then `Footer`. `Experience.jsx` exists but is intentionally not rendered yet (commented out in `App.jsx` and in the `Header.jsx` nav).
- **Folders:** `src/sections/` holds one file per page section (Intro, About, Skills, Education, Projects, Experience, Contact). `src/components/` holds reusable pieces used across sections (Header, Footer, Logo, SocialLinks, DownloadResume). `src/assets/` holds imported images. A new section goes in `sections/` and is added to `App.jsx` and the `Header.jsx` nav.
- Each section returns `<section className="page" id="...">`. The header nav uses in-page `#anchor` links to those ids. Ids are lowercase, and fragment matching is case-sensitive, so a new section's id must exactly match its nav link.
- Section content (projects, skills, facts, contact links) is kept in data arrays at the top of each component file and mapped into markup; add entries there rather than duplicating JSX. `SocialLinks.jsx` is shared by `Intro` and `Footer`.
- **Theming:** colors are CSS custom properties on `:root` (light), overridden under `[data-theme="dark"]` in `style.css`. `Header.jsx` owns the theme state: it defaults to the system theme (`prefers-color-scheme`), follows system changes, and only saves to `localStorage("theme")` when the visitor clicks the toggle. An inline script in `index.html` applies the same rule before first paint to avoid a light-mode flash; keep the two in sync.
- Responsive breakpoints are `max-width` media queries at the bottom of `style.css` (1450 / 1225 / 1060px). The mobile nav is toggled by the `active` class on `.nav-menu`.
- **Assets:** images that components import live in `src/assets/`. Favicons, `site.webmanifest`, and the resume PDF live in `public/` and are served from the site root. Link `public/` files by root path (e.g. `href="/Ethan_Borror_Resume.pdf"`); Vite errors if you `import` from `public/`.
- `OldFiles/` contains old drafts. It is gitignored and not part of the build.

## Conventions

- Function components, one per file, each ending in `export default`.
- Use JSX attribute names: `className` (not `class`) and camelCase SVG attributes (`strokeWidth`, not `stroke-width`).
- External links use `target="_blank" rel="noopener noreferrer"`.
