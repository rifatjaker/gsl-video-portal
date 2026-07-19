# Global Study Video News Portal

Public frontend for **Global Study Ltd.** — educational video news with search, categories, featured slider, and WhatsApp contact.

## Live site

After GitHub Pages deploys: **https://rifatjaker.github.io/gsl-video-portal/**

## Local development

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5174 (or the port Vite prints).

## Build

```bash
cd frontend
npm run build
npm run preview
```

Production builds use base path `/gsl-video-portal/` for GitHub Pages. Local `npm run dev` still serves from `/`.

## Stack

- React (Vite) + Tailwind CSS
- React Router
- Lucide icons
- Mock video data (PHP API later)

## Deploy

Pushing to `master` runs `.github/workflows/deploy-pages.yml` and publishes `frontend/dist` to GitHub Pages.
