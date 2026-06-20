# Crescivo Web

Marketing site for [crescivo.partners](https://crescivo.partners)

Built with Vite + React. Deployed on Vercel.

## Stack
- **Vite** — build tool, code splitting, compression
- **React 18** — lazy loading, suspense boundaries
- **CSS Modules** — scoped styles per component
- **Vercel** — hosting, CDN, cache headers

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
Push to `main` → Vercel auto-deploys.

Preview URLs generated on every branch push.

## Structure
```
src/
  components/     One folder per section, component + CSS module
  styles/         tokens.css (design system) + global.css
  hooks/          useReveal (scroll animations)
  App.jsx         Lazy loads below-fold components
  main.jsx        Entry point
public/
  images/         hero-mountain.webp (preloaded), crescivo-logo.png
```

## Roadmap
- [ ] Wire contact form to Resend API
- [ ] apex.crescivo.partners — Apex Growth Agent (internal → client-facing)
- [ ] Case studies CMS
