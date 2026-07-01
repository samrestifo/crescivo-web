# CLAUDE.md

## Project
Crescivo marketing site — crescivo.partners. Growth consulting for founder-led
B2B technology companies (Sam Restifo, Guy Pozniak, Jason Serda).

## Repo
- Active repo: C:\dev\crescivo-web (source of truth: github.com/samrestifo/crescivo-web)
- Do NOT use old Downloads/OneDrive/Desktop copies for development.

## Stack
Vite + React 18, CSS Modules, static SSG via vite-react-ssg. Deployed on Vercel
(push to `main` auto-deploys).

## Commands
- Dev:    npm run dev
- Build:  npm run build   (vite-react-ssg → dist/)
- Preview: npm run preview
- Lint:   npm run lint

## Conventions
- src/components/<Section>/ — one folder per section: Component.jsx + Component.module.css
- src/styles/tokens.css — design system; global.css — base styles
- Inspect before editing; build + lint before committing.
- Do NOT commit build artifacts (dist/ is gitignored).
- Do NOT run `npm audit fix --force` without approval.
- Decks/proposals/brand assets generally belong in OneDrive/SharePoint unless already intentionally tracked in this repo as templates/reference exports. Do not move, delete, or reorganise exports/ or docs/ without approval.
