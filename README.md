# Ethan Borror — Portfolio

My personal portfolio site, live at **[ethanbor77.github.io](https://ethanbor77.github.io/)**.

I'm a Computer Science student at Oakland University (graduating May 2027). This site covers who I am, the skills and tools I work with, my education and certifications, the projects I've built, and how to get in touch.

## Built with

- [React 19](https://react.dev/): components and UI
- [Vite](https://vite.dev/): dev server and production build
- Plain CSS with custom properties for the light and dark themes
- [Oxlint](https://oxc.rs/docs/guide/usage/linter): linting
- GitHub Actions + GitHub Pages: automatic deployment

## Features

- Single-page layout with sticky navigation and a mobile dropdown menu
- Light / dark mode toggle that remembers your choice
- Skills shown as a honeycomb of hexagons with logos, filterable by category
- Responsive layout that adapts down to phone screens
- Downloadable résumé

## Running locally

Requires [Node.js](https://nodejs.org/) 22 or newer.

```bash
git clone https://github.com/EthanBor77/EthanBor77.github.io.git
cd EthanBor77.github.io
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload |
| `npm run build`   | Build the production site to `dist/` |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run Oxlint                           |

## Project structure

```
src/
├── main.jsx          # Entry point
├── App.jsx           # Page layout: the order of sections
├── style.css         # All styles and theme colors
├── assets/           # Photos, logos and other images
├── components/       # Reusable pieces: Header, Footer, Logo, SocialLinks, DownloadResume
└── sections/         # One file per page section: Intro, About, Skills, Projects, ...
public/               # Favicons and résumé, served as-is
```

Most section content (projects, skills, contact links, quick facts) lives in a list at the top of its component file, so adding an item means adding one entry to that list.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.

## Contact

- GitHub: [@EthanBor77](https://github.com/EthanBor77)
- LinkedIn: [ethan-borror](https://www.linkedin.com/in/ethan-borror/)
- Or use the contact section on the [site](https://ethanbor77.github.io/#contact)
