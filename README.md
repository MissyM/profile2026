# Milena Cabrera Patiño — Portfolio

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**, with a light/dark theme. Statically exported and deployed to **GitHub Pages**.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build (static export)

```bash
pnpm build        # outputs static site to ./out
```

## Edit the content

All text — summary, experience, skills, projects, contact — lives in one typed file:

```
src/data/resume.ts
```

Edit that file and the UI updates. No component changes needed for content tweaks.

## Add your photo

Drop a square image at:

```
public/profile.jpg
```

Until then, a styled "MC" initials avatar is shown. To use a different filename,
update `profile.photo` in `src/data/resume.ts`.

## Update the résumé download

Replace `public/Milena-Cabrera-Resume.pdf` (referenced by `profile.resumeFile`).

## Deploy to GitHub Pages

1. Push this repo to GitHub (recommended name: `MissyM.github.io` for the root URL
   `https://missym.github.io`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `./out`.

> Deploying to a **project** repo instead (e.g. `github.com/MissyM/portfolio`)?
> Set `basePath`/`assetPrefix` in `next.config.ts` (see the comment there).

## Project structure

```
src/
  app/            # layout, page, globals.css, generated favicon (icon.tsx)
  components/     # hero, about, experience, skills, work, contact, header, footer, theme
  data/resume.ts  # all content
public/           # résumé PDF, .nojekyll, (your profile.jpg)
```
