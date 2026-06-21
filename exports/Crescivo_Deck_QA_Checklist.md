# Crescivo Pitch Deck — Visual QA Checklist

**File:** `exports/Crescivo_Pitch_Deck_Template.pptx` · 12 slides · 16:9 · Cambria / Calibri
Open in PowerPoint (the delivery machine) and work through the checks below.

---

## Global pass (check once across the deck)

- [ ] **Fonts render** as Cambria (headlines) + Calibri (body). On a machine without MS Office fonts they may substitute — confirm on the delivery machine.
- [ ] **Champagne accents** (`#C8A96E`) appear: thin rule under eyebrows, card accent bars, footer divider.
- [ ] **Backgrounds** are solid ink `#0A0F18` (slides 2–12); the cover shows the mountain image, dimmed but visible.
- [ ] **Body legibility** — muted grey `#7A8FA0` at ~9–10pt reads on dark (check projector / PDF export, not only screen).
- [ ] **Special glyphs** render: `™ → · —` (fine in Office).
- [ ] **Footer** shows `CRESCIVO · REVENUE ARCHITECTURE™` + `NN / 12` on slides 2–11 (cover & close intentionally have none).
- [ ] **No text clipping** — click each text box; nothing cut at the bottom edge (pptxgenjs boxes are fixed-height and do **not** auto-shrink).
- [ ] **Editability** — double-click any headline/body; confirm it is editable text, not an image.
- [ ] **Team line correct:** "Sam Restifo · Guy Pozniak · Jason Serda" (cover + close).
- [ ] **Placeholders to replace before sending:** `[CLIENT]`, `[DATE]` (cover).

---

## Slide-by-slide review

For each slide: **Hierarchy · Copy density · Editability · Commercial clarity · Placeholders · pptxgenjs risk**

**1 · Cover** — Wordmark → big serif "Scale Beyond *the Founder.*" → subtitle → prepared-for line.
- [ ] Title dominant; left dim panel keeps text legible over the photo (no harsh seam ~6.4").
- [ ] Replace `[CLIENT]`, `[DATE]`.

**2 · The Founder Ceiling** — eyebrow → 2-line headline (2nd line italic champagne) → one paragraph.
- [ ] Headline line-break looks intentional; copy stays light.

**3 · Why Growth Stalls** — headline → 2×2 cards (01–04) with title + one-liner.
- [ ] Card bodies don't crowd the title/border.

**4 · Revenue Architecture™** — big "Revenue is the output. *Architecture is the input.*" → body → champagne arrow-chain.
- [ ] The shorthand chain fits on **one line** without awkward wrap.

**5 · Four Growth Levers** *(spacing pass applied)* — 2×2 cards: Architecture, **Leadership (2nd)**, Operations, Ecosystem.
- [ ] Taller cards (1.62"); **Leadership** card no longer cramped — title + 3-line body sit comfortably.
- [ ] Order correct: Architecture → Leadership → Operations → Ecosystem.

**6 · Growth Diagnostic™** *(spacing pass applied)* — headline + fee badge (left); deliverables panel (right) now in **two columns**.
- [ ] All 13 deliverables visible; **"90-Day Revenue Blueprint"** fully inside the panel (bottom of column 2).
- [ ] Reads premium, not like a checklist dump.

**7 · Embedded Execution** — headline + 5 champagne-ticked lines.
- [ ] Even spacing; tick marks align with text baselines.

**8 · Outcomes / Proof** — 3 stat cards ($0→$4M, +38%, 3×) + "illustrative" disclaimer.
- [ ] Stats fit their cards; disclaimer present.
- [ ] **Replace with client-specific proof where available.**

**9 · Proposed Engagement** — 4-step flow cards (Diagnose → Blueprint → Embed → Autonomy).
- [ ] Steps read left-to-right as a journey.

**10 · Commercial Model Options** *(spacing pass applied)* — 6 models as **2×3 wider cards**, each with name · best-fit use · one-line structure.
- [ ] All six readable (no tiny text); names, "BEST FOR" line and structure line all visible.
- [ ] Full detail intentionally lives in `Crescivo_Commercial_Models.md`.

**11 · 30/60/90 Day Timeline** — 3 phase cards (Diagnose / Install / Operate).
- [ ] Bodies fit; middle phase (teal accent) reads as the build phase.

**12 · Next Step** — "Book a *Growth Diagnostic™.*" + contact rows + CONNECT/INFLUENCE/SCALE.
- [ ] Real contact details correct; bottom attribution + tagline don't collide.

---

## Most likely remaining tweaks (fixed-box behaviour)

1. **Any slide where you replace a `[PLACEHOLDER]`** with longer client text — boxes won't auto-shrink, so longer copy can overflow. Keep replacements concise or nudge the box.
2. **Slide 8** — swap illustrative composites for client-specific proof; keep numbers short so they fit the stat cards.
3. **Cover** — if the client name is long, check it fits the prepared-for line.

> Slides 5, 6 and 10 received a dedicated premium spacing pass. If anything still looks tight after
> your review, each is a one-number change in `exports/build-pitch-deck.cjs` (card height, font size,
> or box `h`) followed by `node exports/build-pitch-deck.cjs` — no manual PowerPoint surgery needed.

---
*Crescivo · Revenue Architecture™ — template QA. Last updated 2026-06-21.*
