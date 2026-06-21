# Crescivo Site Reference

> Permanent source of truth for future Claude Code sessions working on the Crescivo
> website, components, responsive fixes, copy, pitch decks, proposals, PowerPoint
> templates, capability statements, the SVG→PPTX workflow, and brand/messaging
> consistency. **Read this file first** before any Crescivo work.

---

## 1. Project Overview

- **Site name:** Crescivo
- **Live site:** https://www.crescivo.partners
- **Repo:** `samrestifo/crescivo-web` (default branch: `main`)
- **Stack:** React 18 + Vite 5, CSS Modules (scoped per component), plain CSS design tokens
- **Deployment:** Vercel — auto-deploy on push to `main`
- **Purpose:** Premium website and client-facing brand platform for Crescivo's **Revenue Architecture™** offering
- **Founding / operator team:** Sam Restifo, Guy Pozniak and Jason Serda
- **Notable deps:** `react`, `react-dom`, `react-router-dom` (present, but the current site is a single-page section stack with anchor navigation — router is not the primary structure), `vite`, `@vitejs/plugin-react`, `vite-plugin-compression` (gzip + brotli)

---

## 2. Core Brand Positioning

- **Brand promise:** Scale Beyond the Founder.
- **Methodology / mechanism:** Revenue Architecture™
- **Audience:** founder-led B2B scale-ups with proven product-market fit
- **Preferred positioning line:** *Revenue Architecture™ for B2B scale-ups with proven product-market fit.*
- **Core belief:** The founder is not the problem. The founder built the business. Crescivo builds the commercial architecture, sales and GTM leadership rhythm, operating cadence and ecosystem leverage that allows the company to scale beyond the founder.
- **Category:** Premium embedded growth operators / Revenue Architecture™ partners — **not** generic consultants, not a fractional-CRO marketplace, not a pitch-deck agency.

---

## 3. Founding / Operator Team

Crescivo is led by **three** co-founder/operators:

- **Sam Restifo**
- **Guy Pozniak**
- **Jason Serda**

**Rules:**

- Always reference **all three** where founder/operator attribution is required.
- Never describe Crescivo as founded or led only by Sam and Guy.
- **Preferred attribution line:** `Sam Restifo, Guy Pozniak & Jason Serda · Crescivo`
- **Preferred About copy:** "Crescivo is led by Sam Restifo, Guy Pozniak and Jason Serda — three co-founder/operators who bring deep enterprise sales, GTM leadership, ecosystem and scale-up operating experience."
- The live About body additionally notes the operators have **built and sold significant businesses** and bring **extensive executive network access** — preserve these credentials.

---

## 4. Messaging Rules

**Use:**
Scale Beyond the Founder · Revenue Architecture™ · Founder dependency · Founder autonomy ·
Founder Ceiling · Commercial architecture · Sales and GTM leadership · Operating cadence ·
Embedded execution · Repeatable enterprise growth · Board-ready revenue visibility ·
Ecosystem leverage · Growth Diagnostic™ · Commercial Blueprint™ · Partner ecosystem ·
Leadership rhythm · Revenue operating system

**Avoid:**
"Ecosystem Growth Advisory" · "Growth Beyond the Founder" (old headline) ·
generic "we help companies grow" · generic consulting/advisory phrasing ·
overused GTM jargon · long paragraphs · cheap SaaS-template language ·
claims that make Crescivo sound like a pitch-deck agency or fractional-CRO marketplace.

**Tone:** Premium, confident, concise, operator-led, executive, architectural, board-ready.

> Note: "advisory" only appears in deliberately *contrasting* lines (e.g. "embedded execution,
> **not** advisory deliverables"). Do not describe Crescivo itself as advisory.

---

## 5. Narrative Architecture

Founder-led growth is an advantage early. The founder knows the customer, shapes the story,
opens the doors and closes the deals. But once product-market fit is proven, founder-led growth
can become the ceiling. The business starts depending on the founder for every major deal,
decision and relationship. More leads, more hires and more activity will not fix a missing
commercial operating system. Crescivo builds **Revenue Architecture™** — connecting architecture,
leadership, operations and ecosystem — then **embeds** to turn the architecture into operating
cadence. The outcome is **founder autonomy and repeatable enterprise growth**.

**Shorthand:**
`Founder dependency → Founder Ceiling → Revenue Architecture™ → Embedded Execution → Founder Autonomy → Repeatable Enterprise Growth`

---

## 6. Design System

**Direction:** dark premium aesthetic · mountain/person hero imagery · champagne/gold accent ·
architectural spacing · subtle borders · translucent dark panels · dark gradients · minimal copy ·
strong typography · premium executive feel · no generic bright SaaS styling unless explicitly requested.

**Design tokens** — single source of truth at `src/styles/tokens.css` (CSS custom properties):

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0A0F18` | base dark background |
| `--slate` / `--slate2` / `--slate3` | `#151D27` / `#1C2A38` / `#243548` | dark panel fills |
| `--teal` / `--teal-l` / `--cyan` | `#2A8C7A` / `#3DB89F` / `#5FD4C0` | secondary accent |
| `--champ` / `--champ-l` / `--champ-d` | `#C8A96E` / `#DFC28A` / `#9A7A3C` | primary champagne/gold accent |
| `--ivory` / `--bone` | `#F8FAFB` / `#F2F5F7` | primary light text |
| `--muted` / `--mid` | `#7A8FA0` / `#546270` | secondary/body text |
| `--bs` / `--bt` / `--bc` | `rgba(255,255,255,.07)` / `rgba(42,140,122,.3)` / `rgba(200,169,110,.3)` | subtle / teal / champagne borders |

- **Fonts (web):** `--font-serif: 'Playfair Display'` (headlines, italics), `--font-sans: 'Jost'` (body/labels).
- **PowerPoint-safe equivalents:** Cambria (serif/headlines), Calibri (body/labels).
- **Global helpers** in `src/styles/global.css`: `.eyebrow`, `.sec-h2`, `.sec-desc`, `.btn-primary`, `.btn-ghost`, `.img-split` / `.img-panel` / `.txt-panel` (split sections), `.reveal` + `.reveal-d1..d4` (scroll-reveal stagger), `.grain` overlay.

**Rules:** Preserve existing layout architecture where possible. Prefer targeted changes over
redesigns. Keep interactions subtle. Avoid generic FAQ-like components. Favour cards, grids,
frameworks, panels and executive-dashboard-like visuals. Sharp/architectural corners (no rounded
SaaS styling), no box-shadows unless explicitly requested.

---

## 7. Repo and Component Map

**Entry / structure**

- `index.html` — title "Crescivo — Scale Beyond the Founder"; meta + OG describe Revenue Architecture™; preloads hero WebP (desktop ≥961px / mobile ≤960px); loads Playfair Display + Jost.
- `src/main.jsx` — React entry; imports `styles/global.css`.
- `src/App.jsx` — renders `Nav` + `Hero` eagerly, then **lazy-loads** below-fold sections inside `<Suspense>`, then `Footer`. Render order: Nav → Hero → Problem → ImageSplit → Services → FullImage → Diagnostic → Cadenza → Results → MetricsBand → About → Contact → Footer.
- `src/hooks/useReveal.js` — IntersectionObserver **+ MutationObserver** so lazy-mounted `.reveal` elements still animate in (do not regress this — it's what stops below-fold sections rendering blank).
- `src/styles/tokens.css`, `src/styles/global.css`.

**Responsive breakpoint:** the whole site uses **`@media (max-width: 960px)`** as the single mobile breakpoint (consolidated — do not reintroduce 767/768px breakpoints).

**Section anchor IDs** (used by Nav + Footer links):
`#problem` (Problem), `#services` (Services), `#diagnostic` (Diagnostic), `#cadenza` (Cadenza/Embedded Execution), `#results` (Results), `#about-team` (About), `#contact` (Contact).

| Component | File / CSS module | Purpose | Copy & design notes | Mobile behaviour | Pitch/proposal source |
|---|---|---|---|---|---|
| **Nav** | `Nav/Nav.jsx` · `Nav.module.css` | Fixed top nav + mobile drawer | Wordmark "CRESCIVO" (champagne C) + subtitle "Revenue Architecture™". Links → labels/targets: **Revenue Architecture**→`#services`, **Diagnostic**→`#diagnostic`, **Outcomes**→`#results`, **Operators**→`#about-team`. Transparent → `rgba(10,15,24,.96)`+blur on scroll. | Hamburger button → full-screen `translateX` drawer with `×` close, Playfair links; body scroll lock; logo 42px. | No |
| **Hero** | `Hero/Hero.jsx` · `Hero.module.css` | Cover / value prop | H1 "Scale Beyond / *the Founder.*"; sub = positioning line + supporting paragraph; 4 capability tiles (Revenue Architecture, Operating Cadence, Ecosystem Leverage, Founder Autonomy) with inline SVG icons; desktop footer bar tagline "Revenue Architecture · Founder Autonomy · Repeatable Growth" + CTAs "Book a Growth Diagnostic" / "Explore the Method". | Image as full dimmed background (see §8). Desktop parallax only (`matchMedia min-width:768px`); disabled on mobile. | Yes (Cover, value prop) |
| **Problem** (Founder Ceiling) | `Problem/Problem.jsx` · `Problem.module.css` | The problem framing | Eyebrow "The Founder Ceiling"; H2 "Product-market fit is proven. / *Founder-led growth is the ceiling.*"; 4 numbered cells. Ghost numerals in teal-l `rgba(61,184,159,.25)`. `id="problem"`. | Grid → 1 column. | Yes (Founder Ceiling / Why growth stalls) |
| **ImageSplit** | `Services/ImageSplit.jsx` · `ImageSplit.module.css` | Image+text bridge before Services | Eyebrow "What We Build"; "The commercial architecture your scale-up is missing."; CTA "Explore Revenue Architecture". Uses global `.img-split`. | Image panel hidden, text panel full-width (scoped via `.root :global(.img-panel)`). | Maybe |
| **Services** (Revenue Architecture) | `Services/Services.jsx` · `Services.module.css` | The four growth levers | Eyebrow "Revenue Architecture™"; H2 "One operating system. / *Four growth levers.*". **Four tiles, desktop 2×2 grid** (see §9). `id="services"`. | Grid → 1 column; tags hidden. | Yes (Four Growth Levers) |
| **FullImage** | `Services/FullImage.jsx` · `FullImage.module.css` | Full-bleed quote band | Quote "Revenue is the output. / *Architecture is the input.*"; caption "Crescivo — Scale Beyond the Founder." | Reduced height; tighter padding. | Yes (Revenue Architecture motif) |
| **Diagnostic** (Growth Diagnostic™) | `Diagnostic/Diagnostic.jsx` · `Diagnostic.module.css` | Entry-point offer | Eyebrow "The Entry Point"; H2 "The Growth / *Diagnostic™*"; fee label "Fixed fee · 3 weeks"; 13 deliverables grid (see §10); CTA "Book a Growth Diagnostic". `id="diagnostic"`. | Single column; deliverables grid hidden. | Yes (Growth Diagnostic™) |
| **Cadenza** (Embedded Execution) | `Cadenza/Cadenza.jsx` · `Cadenza.module.css` | Embedded retainer | Eyebrow "Embedded Execution"; quote "The founder built the business. / *Now the business needs to scale beyond the founder.*"; **interactive accordion** (see §11); CTA "Discuss Embedded Execution". `id="cadenza"`. Component **named Cadenza internally**, public concept = Embedded Execution. | Panel gutter tightened to 24px; accordion rows full-width tap targets; +/− indicator inset from right. | Yes (Embedded Execution) |
| **Results** (Outcomes) | `Results/Results.jsx` · `Results.module.css` | Case study | Badge "◈ B2B Scale-up · Enterprise Growth Motion"; "$0 to $4M ARR / in 24 months."; 3 stat columns; "Reference available on request". `id="results"`. | Band → 1 column; only first stat shown; `statN` 36px. | Yes (Outcomes) |
| **MetricsBand** | `Results/MetricsBand.jsx` · `MetricsBand.module.css` | Illustrative metrics strip | $4M ARR · +38% pipeline velocity · 3× ecosystem leverage; "Illustrative · modelled composites". | Hidden entirely on mobile. | Yes (Outcomes support) |
| **About** (Operators) | `About/About.jsx` · `About.module.css` | Who we are | Eyebrow "Who We Are"; manifesto "Operators who've built it, / broken it and *scaled it.*"; **3-founder** body (Sam, Guy, Jason — see §3); credentials list; pull-quote "We don't replace founders. We multiply them." `id="about-team"`. | Image panel hidden; text full-width; credentials list hidden. | Yes (Who We Are) |
| **Contact** | `Contact/Contact.jsx` · `Contact.module.css` | Conversion enquiry | 2-column: left copy + 3 trust points, right premium dark form panel (see §12). `id="contact"`. | Stacks: copy → trust points → full-width form panel; full-width submit. | Yes (Next Step) |
| **Footer** | `Footer/Footer.jsx` · `Footer.module.css` | Footer | Logo lockup + subtitle "Revenue Architecture™"; links (Revenue Architecture/Diagnostic/Outcomes/Contact); legal "© 2026 Crescivo · crescivo.partners · Scale Beyond the Founder." | Column, centered; links hidden; logo kept as one lockup (see §13). | No |

---

## 8. Mobile Hero Rules

**Approved behaviour:**

- Mountain/person image visible behind logo and heading.
- Image dimmed/transparent enough for readability.
- Heading + intro sit over the lower part of the image.
- Capability cards sit on a controlled dark gradient/panel (not floating over the bright photo).
- CTA and "30-minute executive discussion. No obligation." note appear within the first mobile landing view.
- Avoid placing the entire page over the bright image — readability > showing the full bright image.
- Preserve title/copy unless explicitly changed. Keep desktop unchanged unless requested.

**Current implementation (in `Hero.module.css`, inside `@media (max-width: 960px)`):**

- `.bg` — full-bleed (`position:absolute; inset:0`) WebP background, `background-size: cover`, `background-position: center 58%`, `opacity: ~0.62`, `transform: translateY(-30%) !important` (frames the figure up + disables parallax).
- `.overlayLeft` — vertical gradient (`#050b12` based): readable at top (logo), clearer mid (figure), strong dark at bottom (text/cards).
- `.main` — transparent, pushed down with **`margin-top: clamp(200px, 31vh, 300px)`** so the heading sits over the lower image (this value has been iteratively tuned; earlier intent was ~`220px / 33vh / 320px` — current is `200 / 31vh / 300`). Heading 28px, tagline restored.
- `.bottom` — its own dark gradient panel (`rgba(5,11,18,.10) → .92 → 1`) so cards/CTA are on controlled dark, not the bright image.
- `.capRich` — translucent dark cards (`rgba(5,11,18,.74)` + `backdrop-filter: blur`), 28px icons.
- `.mobileCta` — solid `#050b12`; full-width champagne button; mobile +/- and tagline use `flex-wrap`.

> If retuning vertical position: the single lever is `.main` `margin-top` clamp. For image framing
> use `.bg` `background-position` Y% and/or `translateY`. Mobile QA widths: 390×844, 393×852, 430×932.

---

## 9. Revenue Architecture Section (Services)

**Headline:** One operating system. Four growth levers.
**Must show four tiles in this exact order (Leadership second). Desktop = 2×2 grid; mobile = single column.**

1. **Architecture** — *ICP, Positioning & Commercial Design*
   Clarify who you serve, why you win, how you position and where the next stage of growth should come from.
   Tags: ICP Clarity · Positioning · GTM Design · Commercial Model
2. **Leadership** — *Sales, GTM Leadership & Founder Autonomy*
   Install the sales and GTM leadership rhythm, role clarity and commercial discipline required for the team to operate without the founder in every deal or decision.
   Tags: Sales Leadership · GTM Leadership · Role Clarity · Founder Autonomy
3. **Operations** — *Revenue Rhythm & Forecast Discipline*
   Install the operating cadence, pipeline governance, dashboards and executive visibility required for predictable growth.
   Tags: Operating Cadence · Pipeline Governance · Forecasting · Board Reporting
4. **Ecosystem** — *Partners, Alliances & Strategic Influence*
   Build leverage through the relationships, channels and co-sell motions that multiply reach without multiplying headcount.
   Tags: Partner Motion · Co-sell · Alliance Strategy · Ecosystem Map

> Implementation: `Services/Services.jsx` `SERVICES` array (4 entries `n/eye/title/body/tags`);
> `.grid` is `1fr 1fr` desktop, `1fr` mobile. Reveal stagger uses `reveal-d1..d4` (d4 added to global.css).

---

## 10. Growth Diagnostic Section

**Growth Diagnostic™ is the entry point.** Frame as: fixed fee · 3 weeks · board-ready
Revenue Architecture™ blueprint · diagnostic before prescription · maps constraints,
dependencies and opportunities inside the current commercial motion.

**Deliverables (13):**
Founder Dependency Score · Revenue Architecture Review · ICP Clarity Assessment ·
Positioning & Messaging Audit · GTM Motion Review · Sales Process Review · Pipeline Health Score ·
Forecast Confidence Review · Partner Ecosystem Map · Leadership Cadence Review ·
Team Capability Assessment · KPI Framework Design · 90-Day Revenue Blueprint

> Implementation: `Diagnostic/Diagnostic.jsx` `DELIVERABLES` array; fee shown via `.feeLabel`
> ("Fixed fee · 3 weeks"); no dollar price in the live site.

---

## 11. Embedded Execution Section

- Component may still be named **Cadenza** internally (`Cadenza/Cadenza.jsx`); public-facing concept is **Embedded Execution**.
- Interactive **accordion** (`useState`, no external libraries).
- **First item opens by default; exactly one item always remains open** (`setOpenIndex(i)`).
- Accessible: each header is a `<button>` with `aria-expanded` + `aria-controls`; each panel `role="region"` + `aria-labelledby`.
- Premium/architectural, **not** a generic FAQ: thin `--bs` borders, champagne plus→minus indicator, translucent teal hover/open.
- Subtle animation: `grid-template-rows: 0fr → 1fr` + opacity (no aggressive motion).
- Mobile: rows are full-width tap targets (`min-height: 56px`); **+/- indicator inset from the right edge** (`.rowHeader` mobile padding `16px 18px 16px 0`) so it never looks clipped when expanded.

**Accordion items (title → expanded copy):**

1. *Embedded execution, not advisory deliverables* — We work inside the operating rhythm of the business — turning commercial priorities into weekly action, not static recommendations.
2. *Weekly cadence with your leadership team* — We create the leadership rhythm for pipeline, priorities, decisions and accountability so growth becomes managed, not improvised.
3. *Board-ready revenue visibility* — We translate commercial activity into clear executive reporting across pipeline, forecast confidence, partner leverage and growth constraints.
4. *Pipeline, partner and leadership governance* — We install the governance required to scale sales, GTM leadership and ecosystem execution without everything reverting to the founder.
5. *Designed to create founder autonomy* — The goal is not long-term dependency on Crescivo. The goal is a commercial system that lets the company scale beyond the founder.

---

## 12. Contact Section Direction

- Premium conversion section, not a generic form.
- **Desktop:** clean 2-column layout — left = copy + trust points + executive framing (~44%); right = premium dark form panel (~56%, `var(--slate2)` fill, `--bs` border + champagne top accent, sharp corners, no shadow).
- **Mobile:** stack intentionally — copy first, trust pills/cards, then full-width form panel; full-width button. Avoid excessive padding; keep dark premium style; no awkward side padding inside the panel.

**Copy:**
- Eyebrow: **Let's Talk**
- Headline: **Ready to scale beyond the founder?**
- Body: *Tell us where growth still depends too heavily on the founder. If there is a fit, we'll map the commercial constraints and define the path toward repeatable enterprise growth.*
- Trust points: 30-minute executive discussion · No obligation · Built for B2B scale-ups with proven product-market fit
- Form fields: Your Name · Company (Acme Scale-up) · Revenue Stage ($2M–$20M ARR) · Primary Constraint (Founder still in every enterprise deal). Submit "Submit Enquiry →".

> Implementation: `Contact/Contact.jsx` — `FIELDS` + `TRUST` arrays; `.inner` grid `44fr 56fr`,
> stacks to `display:block` on mobile. Form submit currently simulates success (TODO: wire to Resend
> via `VITE_RESEND_API_KEY`).

---

## 13. Footer Rules

- On mobile, the icon and CRESCIVO wordmark must remain a **single horizontal lockup**.
- Do not center the wordmark independently of the icon.
- When footer content is centered on mobile, center the **entire** logo lockup together (`.logo { justify-content:center; gap:10px; text-align:left }`, `.wm/.sub { text-align:left }`).
- Keep footer minimal, premium and dark. Links are hidden on mobile (logo + legal remain).

---

## 14. Development Rules

- Always inspect the existing component **and** its CSS module before editing.
- Prefer targeted changes over redesigns.
- Preserve desktop unless the request includes desktop; preserve mobile unless the request includes mobile.
- Single mobile breakpoint is **960px** — match it.
- Do not introduce external libraries unless approved.
- Use React `useState` for small interactions; keep accessibility (`aria-*`, real `<button>`s) for interactive UI.
- Cadenza/About use CSS modules now; Cadenza was migrated off inline styles — keep new styles in the module.
- Run `npm run build` after code changes and confirm it passes.
- Summarise changed files.
- **Do not commit/push unless explicitly asked.** When asked, use concise conventional-commit messages (`fix:`, `feat:`, `refactor:`).
- Note: Windows checkout shows LF→CRLF git warnings — harmless.

---

## 15. Deployment Workflow

- `npm run build` (Vite) must pass before commit. Scripts: `dev` (vite), `build` (vite build), `preview` (vite preview), `lint` (eslint).
- Pushing `main` triggers Vercel auto-deploy (`vercel.json` present). Below-fold sections are code-split chunks; build emits gzip + brotli via `vite-plugin-compression`.
- After deploy, check the live site on desktop and mobile.
- Mobile QA viewports: **390×844, 393×852, 430×932**.

---

## 16. Pitch Deck Source of Truth

Future Crescivo pitch material should use the **website + this file** as the source of truth.

**Recommended 12-slide structure:**

1. **Cover** — Title: *Scale Beyond the Founder.* / Subtitle: *Revenue Architecture™ for B2B scale-ups with proven product-market fit.*
2. **The Founder Ceiling** — Founder-led growth is the advantage — until it becomes the constraint.
3. **Why Growth Stalls** — Most scale-ups do not have a lead problem. They have a founder dependency problem.
4. **Revenue Architecture™** — Revenue is the output. Architecture is the input.
5. **Four Growth Levers** — Architecture, Leadership, Operations, Ecosystem.
6. **Growth Diagnostic™** — Three weeks. Fixed fee. Board-ready Revenue Architecture™ blueprint.
7. **Embedded Execution** — We do not deliver strategy decks. We install operating cadence.
8. **Outcomes** — Proof metrics / case studies. Minimal and executive.
9. **Proposed Engagement** — Diagnostic → Blueprint → Embedded execution → Autonomy.
10. **Commercial Model** — Fixed-fee diagnostic, monthly embedded engagement, optional success fee/equity.
11. **Timeline** — 30 / 60 / 90 day operating cadence.
12. **Next Step** — Book a Growth Diagnostic.

**Design rules:** fewer words · large typography · dark premium backgrounds · mountain image used
sparingly as hero/emotional motif · diagrams and cards · keep all client-specific text **editable in
PowerPoint** · do not flatten important text inside images/SVGs.

---

## 17. Proposal Source of Truth

**Recommended structure:**
1. Cover · 2. Executive Summary · 3. Current Situation / Founder Dependency · 4. Founder Ceiling ·
5. Revenue Architecture™ Approach · 6. Four Growth Levers · 7. Growth Diagnostic™ Scope ·
8. Embedded Execution Scope · 9. Deliverables · 10. Timeline and Governance · 11. Commercials · 12. Next Steps

**Tone:** direct · premium · commercial · board-ready · specific to client context · avoid generic consultancy language.

**A proposal should answer:** Where is growth still founder-dependent? What commercial architecture is
missing? What will Crescivo diagnose? What will Crescivo build? How will leadership cadence change?
What outcomes will the client see? What is the next step?

---

## 18. PowerPoint / SVG Template Guidance

Use SVGs as **visual assets / backgrounds**, but keep client-specific text as **editable PowerPoint text boxes**.

**Preferred workflow:** SVG design assets → PowerPoint template → editable text boxes → client-specific deck → export PDF.

**Avoid:** flattening whole slides into images · embedding editable proposal text only inside SVG ·
overusing Figma if it slows delivery · decks that look beautiful but are painful to edit.

**If generating PPTX programmatically:**
- Prefer **pptxgenjs**.
- Use 16:9 widescreen (`pptx.layout = 'LAYOUT_16x9'` → 10" × 5.625").
- Use SVG/background assets full-slide where needed (`addImage`, `x:0,y:0,w:10,h:5.625`).
- Add editable PowerPoint text boxes (`addText`) for headlines, body, client names, pricing, timelines and proposal-specific content. Set `margin:0`, `valign:'top'` to position precisely.
- Use **Cambria** (serif/headlines) and **Calibri** (body/labels) when custom fonts aren't available.
- Output a `.pptx` that opens and is editable by the client/team.

**Reference implementation:** a working SVG→PPTX generator script (`crescivo-pptx-from-svg.js`) and the
1920×1080 slide SVGs currently live **outside this repo** (the operator's `Downloads` folder), not in
`crescivo-web`. If pitch/deck tooling should live in the repo, add it under a top-level `tools/` or
`deck/` folder (and `npm i pptxgenjs` there) rather than polluting the website's `package.json`.
Note: the existing deck still references only Sam & Guy on its "Who We Are" slide — update to all three
when regenerating.

---

## 19. Recent Design Decisions

- Mobile hero refined so the image appears behind the heading while cards/CTA sit on a controlled dark panel.
- Mobile hero tightened so the CTA and 30-minute note land within the first screen (`.main` margin-top clamp iterated to `200px / 31vh / 300px`; image framed via `translateY(-30%)` + `background-position: center 58%`).
- Revenue Architecture section now shows **four** growth levers, with **Leadership second** (desktop 2×2).
- Embedded Execution converted from a static bullet list to an accessible accordion.
- Mobile accordion plus/minus indicator spacing corrected (inset from right edge).
- Founder/operator references corrected to **three** co-founders (Sam Restifo, Guy Pozniak, Jason Serda).
- Contact section refactored to a 2-column premium conversion layout (next candidate for further polish).
- Figma/PPTX workflow explored but **put on hold** (Figma felt too complex for urgent client packs).
- **PowerPoint/SVG workflow is preferred** for urgent client proposals.

---

## 20. How Future Claude Sessions Should Behave

When asked to update Crescivo:

1. **Read this file first.**
2. Inspect the relevant component(s) and CSS module(s) before editing.
3. Preserve brand positioning (§2) and messaging rules (§4).
4. Keep the founder/operator team correct: **Sam Restifo, Guy Pozniak and Jason Serda**.
5. Preserve the premium dark design language (§6).
6. Make precise, targeted changes.
7. Run `npm run build` when code changes; confirm it passes.
8. Do not commit unless explicitly asked.
9. For pitch/proposal work, produce material that feels executive, premium and operator-led.

---

*Last reviewed: 2026-06-21. Keep this file updated when positioning, components, or workflows change.*
