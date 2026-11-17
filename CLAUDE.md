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

- `index.html` → `src/main.jsx` (imports `src/style.css`, renders `<App/>` in StrictMode) → `src/App.jsx`, which stacks the page sections: `Header`, then `Intro`/`About`/`Skills`/`TestSetup` inside `<main><section className="site-content">`, then `Footer`.
- Each section component returns `<section className="page" id="...">`. The header nav uses in-page `#anchor` links to those ids. Ids are lowercase (`intro`, `about`, `skills`), and fragment matching is case-sensitive, so a new section's id must exactly match its nav link. Several nav links (`#Skills`, `#Education`, `#Projects`, `#Experience`, `#Contact`) don't match any section yet.
- **Theming:** colors are CSS custom properties on `:root` (light), overridden under `[data-theme="dark"]` in `style.css`. `Header.jsx` sets `document.documentElement.dataset.theme` and saves it to `localStorage("theme")`. `TestSetup.jsx` (a temporary "Color Test" section) has its own copy of the same logic. Keep a single source of theme state when changing this.
- Responsive breakpoints are `max-width` media queries at the bottom of `style.css` (1450 / 1225 / 1060px). The mobile nav is toggled by the `active` class on `.nav-menu`.
- **Assets:** images that components import live in `src/assets/`. Favicons, `site.webmanifest`, and the resume PDF live in `public/` and are served from the site root. The resume is currently imported as `../../public/Ethan_Borror_Resume.pdf` in `DownloadResume.jsx` and `Footer.jsx`; the usual Vite approach is to link files in `public/` by root path (`/Ethan_Borror_Resume.pdf`).
- `OldFiles/` contains old drafts. It is gitignored and not part of the build.

## Conventions

- Function components, one per file, each ending in `export default`.
- Use `className`, not `class`. `Header.jsx` still has some `class=` attributes, which React warns about.
- External links use `target="_blank" rel="noopener noreferrer"`.
