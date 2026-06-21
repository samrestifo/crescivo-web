/*
 * Crescivo — Pitch Deck Template generator (12 slides, 16:9).
 * Premium dark theme, champagne accents, PowerPoint-safe fonts (Cambria/Calibri).
 * All headline/body/client text is real editable PowerPoint text. Visuals are the
 * mountain photo (3 slides, cropped via sharp) + native premium graphics
 * (node networks, architecture diagram, diagnostic dashboard, governance loop,
 * trajectory chart, roadmap). No external/stock imagery.
 *
 * Run:  node exports/build-pitch-deck.cjs
 */
const path = require('path');
const fs = require('fs');
const PptxGenJS = require('pptxgenjs');
let sharp = null;
try { sharp = require('sharp'); } catch { /* optional — photo slides fall back to graphics */ }

const REPO = path.resolve(__dirname, '..');
const OUT  = path.join(__dirname, 'Crescivo_Pitch_Deck_Template.pptx');
const HERO = path.join(REPO, 'public', 'images', 'hero-mountain-desktop.webp');
const IMG = { cover: path.join(__dirname, '_hero-cover.jpg'),
              vstrip: path.join(__dirname, '_hero-vstrip.jpg'),
              band:  path.join(__dirname, '_hero-band.jpg') };

// ── Brand palette (hex, no #) ──
const C = {
  ink: '0A0F18', slate: '141C26', slate2: '1C2A38', border: '2A3A4C', grid: '17202B',
  champ: 'C8A96E', champL: 'DFC28A', ivory: 'F8FAFB', muted: '7A8FA0', teal: '3DB89F',
};
const SERIF = 'Cambria';
const SANS  = 'Calibri';
const M = 0.62, CW = 10 - M * 2;

const pptx = new PptxGenJS();
pptx.defineLayout({ name: 'C16x9', width: 10, height: 5.625 });
pptx.layout = 'C16x9';
pptx.author = 'Crescivo'; pptx.company = 'Crescivo';
pptx.title = 'Crescivo — Scale Beyond the Founder';
const ST = pptx.ShapeType;

// ── primitives ───────────────────────────────────────────────────────────────
const T = (s, t, o) => s.addText(t, Object.assign({ align: 'left', valign: 'top', margin: 0, fontFace: SANS, color: C.ivory }, o));
const rect = (s, o) => s.addShape(ST.rect, o);
const rrect = (s, o) => s.addShape(ST.roundRect, o);
const lineSeg = (s, x1, y1, x2, y2, o = {}) => s.addShape(ST.line, {
  x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1),
  flipV: (x2 - x1) * (y2 - y1) < 0,
  line: { color: o.color || C.border, width: o.width || 1, dashType: o.dash || 'solid' },
});
const dot = (s, cx, cy, r, color = C.champ) => s.addShape(ST.ellipse, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { color } });
const ring = (s, cx, cy, r, o = {}) => s.addShape(ST.ellipse, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r,
  fill: { color: o.fill || C.ink }, line: { color: o.color || C.champ, width: o.width || 1.25 } });

function base() { const s = pptx.addSlide(); s.background = { color: C.ink }; return s; }
function eyebrow(s, text, x = M, y = 0.5) { T(s, text.toUpperCase(), { x, y, w: CW, h: 0.25, fontFace: SANS, fontSize: 9.5, color: C.champ, charSpacing: 3 }); }
function headline(s, runs, opts = {}) { T(s, runs, Object.assign({ x: M, y: 0.86, w: opts.w || CW, h: opts.h || 1.4, fontFace: SERIF, fontSize: opts.size || 34, color: C.ivory, lineSpacingMultiple: 1.02 }, opts)); }
function rule(s, x = M, y = 0.78, w = 0.55) { lineSeg(s, x, y, x + w, y, { color: C.champ, width: 1.5 }); }
function footer(s, n) {
  lineSeg(s, M, 5.18, M + CW, 5.18, { color: C.border, width: 0.75 });
  T(s, 'CRESCIVO  ·  REVENUE ARCHITECTURE™', { x: M, y: 5.26, w: 6, h: 0.25, fontFace: SANS, fontSize: 8, color: C.muted, charSpacing: 2 });
  T(s, String(n).padStart(2, '0') + ' / 12', { x: 10 - M - 2, y: 5.26, w: 2, h: 0.25, fontFace: SANS, fontSize: 8, color: C.muted, align: 'right', charSpacing: 2 });
}
// faint architectural grid behind framework slides
function gridBG(s, y1 = 1.35, y2 = 5.05, step = 0.62) {
  for (let gx = M; gx <= 10 - M + 0.01; gx += step) lineSeg(s, gx, y1, gx, y2, { color: C.grid, width: 0.5 });
  for (let gy = y1; gy <= y2 + 0.01; gy += step) lineSeg(s, M, gy, 10 - M, gy, { color: C.grid, width: 0.5 });
}
// label centred on a point (editable text)
function label(s, t, cx, cy, w, o = {}) { T(s, t, { x: cx - w / 2, y: cy - (o.h || 0.26) / 2, w, h: o.h || 0.26, align: o.align || 'center', valign: 'middle', fontFace: o.font || SANS, fontSize: o.size || 9, color: o.color || C.ivory, charSpacing: o.cs || 0, bold: o.bold || false, lineSpacingMultiple: 1.0 }); }
// dashboard meter
function meter(s, x, y, w, pct, color) { rect(s, { x, y, w, h: 0.1, fill: { color: C.slate2 } }); rect(s, { x, y, w: w * Math.max(0.02, pct), h: 0.1, fill: { color } }); }
// photo panel with dim + edge blend toward the dark text side
function photoPanel(s, jpg, x, y, w, h, o = {}) {
  s.addImage({ path: jpg, x, y, w, h, sizing: { type: 'cover', w, h } });
  rect(s, { x, y, w, h, fill: { color: C.ink, transparency: o.dim != null ? o.dim : 42 } });
  if (o.blend === 'left') { rect(s, { x, y, w: 1.0, h, fill: { color: C.ink, transparency: 6 } }); rect(s, { x: x + 1.0, y, w: 0.7, h, fill: { color: C.ink, transparency: 48 } }); }
  if (o.blend === 'right') { rect(s, { x: x + w - 1.0, y, w: 1.0, h, fill: { color: C.ink, transparency: 6 } }); }
  if (o.blend === 'bottom') { rect(s, { x, y: y + h - 1.4, w, h: 1.4, fill: { color: C.ink, transparency: 14 } }); }
}

// premium content card (defaults reproduce original compact card)
function card(s, x, y, w, h, o) {
  const accent = o.accent || C.champ;
  const kSize = o.kSize != null ? o.kSize : 8.5, tSize = o.tSize != null ? o.tSize : 15, bSize = o.bSize != null ? o.bSize : 9.5;
  const kGap = o.kGap != null ? o.kGap : 0.26, tH = o.titleH != null ? o.titleH : 0.6, tGap = o.tGap != null ? o.tGap : 0.02, bLine = o.bLine != null ? o.bLine : 1.05;
  const ix = x + 0.24, iw = w - 0.48;
  rect(s, { x, y, w, h, fill: { color: o.fill || C.slate }, line: { color: C.border, width: 0.75 } });
  rect(s, { x, y, w, h: 0.035, fill: { color: accent } });
  let cy = y + 0.22;
  if (o.kicker) { T(s, o.kicker.toUpperCase(), { x: ix, y: cy, w: iw, h: 0.22, fontFace: SANS, fontSize: kSize, color: accent, charSpacing: 2.5 }); cy += kGap; }
  if (o.title) { T(s, o.title, { x: ix, y: cy, w: iw, h: tH, fontFace: SERIF, fontSize: tSize, color: C.ivory, lineSpacingMultiple: 1.0 }); cy += tH + tGap; }
  if (o.body) { T(s, o.body, { x: ix, y: cy, w: iw, h: Math.max(0.18, y + h - cy - 0.18), fontFace: SANS, fontSize: bSize, color: C.muted, lineSpacingMultiple: bLine }); }
}

(async () => {
  // ── derive PowerPoint-friendly photo crops from the single hero asset ──
  let heroOK = false;
  if (sharp && fs.existsSync(HERO)) {
    try {
      await sharp(HERO).resize(1600, 900, { fit: 'cover', position: 'centre' }).jpeg({ quality: 84 }).toFile(IMG.cover);
      await sharp(HERO).resize(900, 1240, { fit: 'cover', position: 'centre' }).jpeg({ quality: 84 }).toFile(IMG.vstrip);
      await sharp(HERO).resize(1760, 560, { fit: 'cover', position: 'centre' }).jpeg({ quality: 84 }).toFile(IMG.band);
      heroOK = true;
    } catch { heroOK = false; }
  }

  // ── 1 · Cover (strong photographic hero) ──
  {
    const s = base();
    if (heroOK) {
      s.addImage({ path: IMG.cover, x: 0, y: 0, w: 10, h: 5.625, sizing: { type: 'cover', w: 10, h: 5.625 } });
      rect(s, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: C.ink, transparency: 30 } });
      rect(s, { x: 0, y: 0, w: 6.3, h: 5.625, fill: { color: C.ink, transparency: 16 } });
    } else { gridBG(s, 0, 5.625); }
    lineSeg(s, 0, 0, 0, 5.625, { color: C.champ, width: 2 }); // left edge accent
    T(s, 'CRESCIVO', { x: M, y: 0.46, w: 5, h: 0.4, fontFace: SERIF, fontSize: 20, color: C.ivory, charSpacing: 2 });
    T(s, 'REVENUE ARCHITECTURE™', { x: M, y: 0.84, w: 5, h: 0.25, fontFace: SANS, fontSize: 8.5, color: C.champ, charSpacing: 3 });
    lineSeg(s, M, 2.18, M + 0.7, 2.18, { color: C.champ, width: 1.5 });
    T(s, [{ text: 'Scale Beyond\n', options: { color: C.ivory } }, { text: 'the Founder.', options: { color: C.champL, italic: true } }],
      { x: M, y: 2.34, w: 6.4, h: 1.7, fontFace: SERIF, fontSize: 50, lineSpacingMultiple: 0.98 });
    T(s, 'Revenue Architecture™ for B2B scale-ups with proven product-market fit.', { x: M, y: 3.98, w: 5.7, h: 0.7, fontFace: SANS, fontSize: 13.5, color: C.muted, lineSpacingMultiple: 1.1 });
    T(s, 'Prepared for [CLIENT]  ·  [DATE]', { x: M, y: 5.0, w: 5.5, h: 0.25, fontFace: SANS, fontSize: 9, color: C.ivory });
    T(s, 'Sam Restifo  ·  Guy Pozniak  ·  Jason Serda', { x: M, y: 5.26, w: 6, h: 0.25, fontFace: SANS, fontSize: 8.5, color: C.muted, charSpacing: 1.5 });
  }

  // ── 2 · The Founder Ceiling (dramatic cropped photo panel, right) ──
  {
    const s = base();
    const px = 6.15, pw = 10 - 6.15;
    if (heroOK) photoPanel(s, IMG.vstrip, px, 0, pw, 5.625, { dim: 30, blend: 'left' });
    else { rect(s, { x: px, y: 0, w: pw, h: 5.625, fill: { color: C.slate } }); gridBG(s, 0, 5.625); }
    rule(s); eyebrow(s, 'The Founder Ceiling');
    headline(s, [{ text: 'Founder-led growth is\nthe advantage —\n', options: { color: C.ivory } }, { text: 'until it becomes\nthe constraint.', options: { color: C.champL, italic: true } }],
      { size: 32, w: 5.4, h: 2.6, lineSpacingMultiple: 1.0 });
    T(s, 'The founder knows the customer, opens the doors and closes the deals — then the business starts depending on the founder for every major deal, decision and relationship.',
      { x: M, y: 3.95, w: 5.2, h: 1.1, fontFace: SANS, fontSize: 13.5, color: C.muted, lineSpacingMultiple: 1.25 });
    footer(s, 2);
  }

  // ── 3 · Why Growth Stalls (bottleneck / constraint diagram) ──
  {
    const s = base(); rule(s); eyebrow(s, 'Why Growth Stalls');
    headline(s, [{ text: "Not a lead problem.  ", options: { color: C.ivory } }, { text: 'A founder-dependency problem.', options: { color: C.champL, italic: true } }], { size: 24, w: CW, h: 0.6 });
    // bottleneck: demand inputs -> founder node -> constrained output
    const bx = 3.05, by = 3.4;
    for (let k = 0; k < 5; k++) { const iy = 2.35 + k * 0.5; dot(s, 1.15, iy, 0.05, C.teal); lineSeg(s, 1.2, iy, bx - 0.32, by, { color: C.border, width: 1 }); }
    ring(s, bx, by, 0.34, { color: C.champ, width: 1.5 });
    lineSeg(s, bx + 0.34, by, 4.55, by, { color: C.champ, width: 1.25 }); dot(s, 4.6, by, 0.05, C.champ);
    label(s, 'FOUNDER', bx, by + 0.6, 1.6, { size: 8.5, color: C.champ, cs: 2 });
    label(s, 'DEMAND', 1.15, 1.95, 1.6, { size: 8, color: C.muted, cs: 2 });
    label(s, 'CONSTRAINED\nOUTPUT', 4.6, by + 0.46, 1.8, { size: 8, color: C.muted, cs: 1.5, h: 0.4 });
    // right: 4 reasons, compact
    const reasons = [
      ["Can't be in every deal", 'Growth is capped by founder capacity, not demand.'],
      ['People without a system', 'Hiring adds motion without architecture.'],
      ['ICP drift', 'Expanding too broadly dilutes where you win.'],
      ['Untapped ecosystem', 'Partners multiply reach — with the right motion.'],
    ];
    let ry = 2.0;
    reasons.forEach((r, i) => {
      lineSeg(s, 5.55, ry + 0.12, 5.72, ry + 0.12, { color: i % 2 ? C.teal : C.champ, width: 1.5 });
      T(s, r[0], { x: 5.86, y: ry, w: 3.5, h: 0.3, fontFace: SERIF, fontSize: 15, color: C.ivory });
      T(s, r[1], { x: 5.86, y: ry + 0.3, w: 3.5, h: 0.34, fontFace: SANS, fontSize: 10, color: C.muted });
      ry += 0.78;
    });
    footer(s, 3);
  }

  // ── 4 · Revenue Architecture™ (operating-system diagram) ──
  {
    const s = base(); gridBG(s, 1.55, 4.7); rule(s); eyebrow(s, 'Revenue Architecture™');
    headline(s, [{ text: 'Revenue is the output.  ', options: { color: C.ivory } }, { text: 'Architecture is the input.', options: { color: C.champL, italic: true } }], { size: 22, w: CW, h: 0.5 });
    const cx = 5.0, cy = 3.15;
    const levers = [['Architecture', 2.55, 2.15, C.champ], ['Leadership', 7.45, 2.15, C.teal], ['Operations', 2.55, 4.15, C.teal], ['Ecosystem', 7.45, 4.15, C.champ]];
    levers.forEach(([t, x, y, ac]) => lineSeg(s, x, y, cx, cy, { color: C.border, width: 1 }));
    levers.forEach(([t, x, y, ac]) => { rrect(s, { x: x - 1.0, y: y - 0.32, w: 2.0, h: 0.64, rectRadius: 0.05, fill: { color: C.slate }, line: { color: ac, width: 1 } }); label(s, t, x, y, 1.9, { font: SERIF, size: 14, color: C.ivory }); });
    rrect(s, { x: cx - 1.15, y: cy - 0.42, w: 2.3, h: 0.84, rectRadius: 0.06, fill: { color: C.slate2 }, line: { color: C.champ, width: 1.5 } });
    label(s, 'Revenue\nArchitecture™', cx, cy, 2.1, { font: SERIF, size: 14, color: C.champL, h: 0.6 });
    // input -> system -> output
    label(s, 'FOUNDER\nDEPENDENCY', 1.25, cy, 1.5, { size: 8, color: C.muted, cs: 1, h: 0.4 });
    s.addShape(ST.rightArrow, { x: 8.55, y: cy - 0.12, w: 0.7, h: 0.24, fill: { color: C.champ } });
    label(s, 'REPEATABLE\nGROWTH', 9.0, cy - 0.5, 1.5, { size: 8, color: C.champ, cs: 1, h: 0.4 });
    footer(s, 4);
  }

  // ── 5 · Four Growth Levers (cards on subtle node/architecture bg) ──
  {
    const s = base(); gridBG(s, 1.5, 5.05);
    // faint node accents behind
    [[1.4, 1.7], [8.6, 1.9], [2.0, 4.7], [9.0, 4.4], [5.0, 1.4]].forEach(([x, y]) => dot(s, x, y, 0.04, C.border));
    rule(s); eyebrow(s, 'One operating system. Four growth levers.');
    headline(s, 'Four growth levers.', { size: 28, w: CW, h: 0.6 });
    const levers = [
      ['Architecture', 'ICP, Positioning & Commercial Design', 'Clarify who you serve, why you win, how you position and where the next stage of growth should come from.', C.champ],
      ['Leadership', 'Sales, GTM Leadership & Founder Autonomy', 'Install the sales and GTM leadership rhythm, role clarity and commercial discipline so the team can operate without the founder in every deal.', C.teal],
      ['Operations', 'Revenue Rhythm & Forecast Discipline', 'Install the operating cadence, pipeline governance, dashboards and executive visibility required for predictable growth.', C.champ],
      ['Ecosystem', 'Partners, Alliances & Strategic Influence', 'Build leverage through relationships, channels and co-sell motions that multiply reach without multiplying headcount.', C.teal],
    ];
    const cw = (CW - 0.3) / 2, ch = 1.62;
    levers.forEach((l, i) => {
      const x = M + (i % 2) * (cw + 0.3), y = 1.62 + Math.floor(i / 2) * (ch + 0.2);
      card(s, x, y, cw, ch, { kicker: l[0], title: l[1], body: l[2], accent: l[3], tSize: 14, bSize: 9, titleH: 0.46, kGap: 0.24, bLine: 1.12 });
    });
    footer(s, 5);
  }

  // ── 6 · Growth Diagnostic™ (executive diagnostic dashboard) ──
  {
    const s = base(); rule(s); eyebrow(s, 'The Entry Point');
    headline(s, [{ text: 'The Growth ', options: { color: C.ivory } }, { text: 'Diagnostic™', options: { color: C.champL, italic: true } }], { size: 36, w: 8, h: 0.8 });
    rect(s, { x: M, y: 1.8, w: 4.35, h: 0.42, fill: { color: C.slate2 }, line: { color: C.champ, width: 0.75 } });
    T(s, 'FIXED FEE  ·  3 WEEKS  ·  BOARD-READY BLUEPRINT', { x: M, y: 1.88, w: 4.35, h: 0.26, align: 'center', fontFace: SANS, fontSize: 9, color: C.champL, charSpacing: 1.2 });
    T(s, 'We don’t prescribe before we understand the system. The diagnostic maps the constraints, dependencies and opportunities inside your commercial motion — then translates them into a board-ready Revenue Architecture™ blueprint.',
      { x: M, y: 2.46, w: 4.35, h: 2.0, fontFace: SANS, fontSize: 12.5, color: C.muted, lineSpacingMultiple: 1.28 });
    // dashboard panel
    const PX = 5.2, PW = 4.18;
    rect(s, { x: PX, y: 1.5, w: PW, h: 3.4, fill: { color: C.slate }, line: { color: C.border, width: 0.75 } });
    rect(s, { x: PX, y: 1.5, w: PW, h: 0.035, fill: { color: C.champ } });
    T(s, 'DIAGNOSTIC DASHBOARD', { x: PX + 0.24, y: 1.68, w: PW - 0.48, h: 0.25, fontFace: SANS, fontSize: 8.5, color: C.champ, charSpacing: 2.5 });
    const scores = [['Founder Dependency', 0.82, C.champ], ['Pipeline Health', 0.46, C.teal], ['Forecast Confidence', 0.6, C.champ]];
    let my = 2.05;
    scores.forEach(([lab, pct, col]) => {
      T(s, lab, { x: PX + 0.24, y: my, w: 2.6, h: 0.22, fontFace: SANS, fontSize: 9.5, color: C.ivory });
      T(s, Math.round(pct * 100) + '', { x: PX + PW - 0.7, y: my, w: 0.46, h: 0.22, align: 'right', fontFace: SERIF, fontSize: 12, color: col });
      meter(s, PX + 0.24, my + 0.26, PW - 0.48, pct, col);
      my += 0.56;
    });
    lineSeg(s, PX + 0.24, 3.76, PX + PW - 0.24, 3.76, { color: C.border, width: 0.75 });
    T(s, '13 DELIVERABLES', { x: PX + 0.24, y: 3.84, w: PW - 0.48, h: 0.22, fontFace: SANS, fontSize: 8, color: C.champ, charSpacing: 2.5 });
    const colA = ['Founder Dependency Score', 'Revenue Architecture Review', 'ICP Clarity Assessment', 'Positioning & Messaging Audit', 'GTM Motion Review', 'Sales Process Review', 'Pipeline Health Score'];
    const colB = ['Forecast Confidence Review', 'Partner Ecosystem Map', 'Leadership Cadence Review', 'Team Capability Assessment', 'KPI Framework Design', '90-Day Revenue Blueprint'];
    const mk = arr => arr.map(d => ({ text: d, options: { bullet: { code: '2022', indent: 11 }, color: C.ivory } }));
    T(s, mk(colA), { x: PX + 0.24, y: 4.12, w: 1.92, h: 0.75, fontFace: SANS, fontSize: 7.5, color: C.ivory, lineSpacingMultiple: 1.18 });
    T(s, mk(colB), { x: PX + 2.16, y: 4.12, w: 1.84, h: 0.75, fontFace: SANS, fontSize: 7.5, color: C.ivory, lineSpacingMultiple: 1.18 });
    footer(s, 6);
  }

  // ── 7 · Embedded Execution (governance / weekly cadence loop) ──
  {
    const s = base(); rule(s); eyebrow(s, 'Embedded Execution');
    headline(s, [{ text: "We don't deliver strategy decks.\n", options: { color: C.ivory } }, { text: 'We install operating cadence.', options: { color: C.champL, italic: true } }], { size: 27, w: 5.4, h: 1.4 });
    const items = ['Embedded execution, not advisory deliverables', 'Weekly operating cadence with your leadership team', 'Board-ready revenue visibility', 'Pipeline, partner and leadership governance', 'Designed to create founder autonomy'];
    let y = 2.5;
    items.forEach((it) => { lineSeg(s, M, y + 0.12, M + 0.18, y + 0.12, { color: C.champ, width: 1.5 }); T(s, it, { x: M + 0.32, y, w: 4.9, h: 0.3, fontFace: SANS, fontSize: 13, color: C.ivory }); y += 0.44; });
    // governance loop (right)
    const lx = 7.55, ly = 3.05, R = 1.15;
    const loop = ['Pipeline', 'Priorities', 'Decisions', 'Reporting', 'Accountability'];
    const pts = loop.map((_, i) => { const a = -Math.PI / 2 + i * (2 * Math.PI / loop.length); return [lx + R * Math.cos(a), ly + R * Math.sin(a)]; });
    pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length]; lineSeg(s, p[0], p[1], q[0], q[1], { color: C.border, width: 1 }); });
    ring(s, lx, ly, 0.5, { color: C.champ, width: 1.25, fill: C.slate2 });
    label(s, 'WEEKLY\nCADENCE', lx, ly, 1.0, { size: 8, color: C.champL, cs: 1.5, h: 0.4 });
    pts.forEach((p, i) => { dot(s, p[0], p[1], 0.06, i % 2 ? C.teal : C.champ); label(s, loop[i], p[0], p[1] + (p[1] < ly ? -0.22 : 0.22), 1.5, { size: 8, color: C.muted }); });
    footer(s, 7);
  }

  // ── 8 · Outcomes (big numbers + ascending trajectory) ──
  {
    const s = base(); rule(s); eyebrow(s, 'Outcomes');
    headline(s, [{ text: 'Proof, ', options: { color: C.ivory } }, { text: 'not promises.', options: { color: C.champL, italic: true } }], { size: 32, w: 8, h: 0.7 });
    // trajectory chart
    const ax = M, ay = 4.2, aw = 5.8;
    [3.7, 3.2, 2.7, 2.2, 1.75].forEach(gy => lineSeg(s, ax, gy, ax + aw, gy, { color: C.grid, width: 0.5 }));
    lineSeg(s, ax, ay, ax + aw, ay, { color: C.border, width: 0.75 });
    const traj = [[0.4, 4.05], [1.6, 3.7], [2.7, 3.15], [3.9, 2.5], [5.3, 1.7]].map(([dx, yy]) => [ax + dx, yy]);
    traj.forEach((p, i) => { if (i) lineSeg(s, traj[i - 1][0], traj[i - 1][1], p[0], p[1], { color: C.champ, width: 2.25 }); });
    traj.forEach((p, i) => dot(s, p[0], p[1], i === traj.length - 1 ? 0.07 : 0.05, i === traj.length - 1 ? C.champL : C.teal));
    label(s, '$0', traj[0][0] + 0.15, traj[0][1] + 0.2, 0.8, { size: 10, color: C.muted, align: 'left' });
    T(s, '$4M · 24 MONTHS', { x: traj[4][0] - 1.7, y: traj[4][1] - 0.4, w: 1.9, h: 0.25, align: 'right', fontFace: SANS, fontSize: 9, color: C.champL, charSpacing: 1 });
    // stat tiles
    const stats = [['$4M', 'ARR · 24 months', C.champL], ['+38%', 'Pipeline velocity', C.teal], ['3×', 'Ecosystem leverage', C.champL]];
    const tw = (CW - 0.4) / 3;
    stats.forEach((st, i) => { const x = M + i * (tw + 0.2); rect(s, { x, y: 4.45, w: tw, h: 0.62, fill: { color: C.slate }, line: { color: C.border, width: 0.5 } }); T(s, st[0], { x: x + 0.16, y: 4.5, w: tw - 0.32, h: 0.4, fontFace: SERIF, fontSize: 20, color: st[2] }); T(s, st[1].toUpperCase(), { x: x + 1.05, y: 4.62, w: tw - 1.1, h: 0.3, fontFace: SANS, fontSize: 7.5, color: C.muted, charSpacing: 1, valign: 'middle' }); });
    T(s, 'Illustrative · modelled composites · client name withheld · reference on request. Replace with client-specific proof.', { x: 6.6, y: 1.95, w: 2.78, h: 2.2, fontFace: SANS, fontSize: 10, color: C.muted, italic: true, lineSpacingMultiple: 1.3 });
    footer(s, 8);
  }

  // ── 9 · Proposed Engagement (visual path) ──
  {
    const s = base(); rule(s); eyebrow(s, 'Proposed Engagement');
    headline(s, 'A clear path to autonomy.', { size: 30, w: CW, h: 0.7 });
    const steps = [['01', 'Diagnose', 'Map the system'], ['02', 'Blueprint', 'Revenue Architecture™'], ['03', 'Embed', 'Install the cadence'], ['04', 'Autonomy', 'Repeatable growth']];
    const py = 2.85, x0 = 1.35, dx = (10 - 2 * 1.35) / 3;
    lineSeg(s, x0, py, x0 + dx * 3, py, { color: C.border, width: 1 });
    steps.forEach((st, i) => {
      const x = x0 + i * dx;
      if (i < 3) s.addShape(ST.rightArrow, { x: x + dx / 2 - 0.12, y: py - 0.07, w: 0.24, h: 0.14, fill: { color: C.champ } });
      ring(s, x, py, 0.3, { color: i % 2 ? C.teal : C.champ, width: 1.5, fill: C.slate2 });
      label(s, st[0], x, py, 0.55, { font: SERIF, size: 14, color: i % 2 ? C.teal : C.champL });
      label(s, st[1], x, py + 0.62, 1.8, { font: SERIF, size: 16, color: C.ivory });
      label(s, st[2], x, py + 0.92, 1.9, { size: 9.5, color: C.muted });
    });
    T(s, 'Founder dependency → Founder Ceiling → Revenue Architecture™ → Embedded Execution → Founder Autonomy → Repeatable Enterprise Growth',
      { x: M, y: 4.5, w: CW, h: 0.4, align: 'center', fontFace: SANS, fontSize: 9.5, color: C.champ, charSpacing: 0.5 });
    footer(s, 9);
  }

  // ── 10 · Commercial Model Options (clean + comparison tags) ──
  {
    const s = base(); rule(s); eyebrow(s, 'Commercial Model');
    headline(s, 'Engagement models.', { size: 28, w: CW, h: 0.6 });
    const models = [
      ['01', 'Growth Diagnostic™', C.champ, 'Clarity before commitment', 'Fixed fee · 3 weeks · board-ready blueprint', 'FIXED'],
      ['02', 'Embedded Operator Retainer', C.teal, 'Execution & operating cadence', 'Monthly retainer · weekly cadence · board reporting', 'RETAINER'],
      ['03', 'Diagnostic + Embedded', C.champ, 'The default path', 'Fixed diagnostic, then monthly engagement', 'DEFAULT'],
      ['04', 'Success Fee', C.teal, 'Fees aligned to outcomes', 'Lower retainer + revenue / ARR / pipeline upside', 'UPSIDE'],
      ['05', 'Equity / Strategic Advisory', C.champ, 'Long-horizon partnerships · selective', 'Lower cash + equity + board involvement', 'EQUITY'],
      ['06', 'Hybrid', C.teal, 'A tailored blend', 'Diagnostic + retainer + success fee + optional equity', 'HYBRID'],
    ];
    const cw = (CW - 0.34) / 2, ch = 0.9, gx = 0.34, gy = 0.14, y0 = 1.78;
    models.forEach((m, i) => {
      const x = M + (i % 2) * (cw + gx), y = y0 + Math.floor(i / 2) * (ch + gy);
      rect(s, { x, y, w: cw, h: ch, fill: { color: C.slate }, line: { color: C.border, width: 0.75 } });
      rect(s, { x, y, w: 0.045, h: ch, fill: { color: m[2] } });
      T(s, m[0], { x: x + 0.24, y: y + 0.17, w: 0.5, h: 0.3, fontFace: SANS, fontSize: 10, color: m[2], charSpacing: 1.5 });
      T(s, m[1], { x: x + 0.64, y: y + 0.14, w: cw - 1.7, h: 0.34, fontFace: SERIF, fontSize: 14.5, color: C.ivory });
      // comparison tag (top-right)
      rect(s, { x: x + cw - 1.0, y: y + 0.16, w: 0.82, h: 0.24, fill: { color: C.slate2 }, line: { color: m[2], width: 0.5 } });
      T(s, m[5], { x: x + cw - 1.0, y: y + 0.18, w: 0.82, h: 0.2, align: 'center', fontFace: SANS, fontSize: 7, color: m[2], charSpacing: 1 });
      T(s, 'BEST FOR  ·  ' + m[3], { x: x + 0.24, y: y + 0.5, w: cw - 0.44, h: 0.22, fontFace: SANS, fontSize: 8.5, color: C.champ, charSpacing: 1 });
      T(s, m[4], { x: x + 0.24, y: y + 0.67, w: cw - 0.44, h: 0.22, fontFace: SANS, fontSize: 9.5, color: C.muted });
    });
    T(s, 'Pricing is set against the diagnostic findings and revenue stage. Full detail in Crescivo_Commercial_Models.md.', { x: M, y: 4.86, w: CW, h: 0.25, fontFace: SANS, fontSize: 9, color: C.muted, italic: true });
    footer(s, 10);
  }

  // ── 11 · Timeline (premium roadmap) ──
  {
    const s = base(); rule(s); eyebrow(s, 'Timeline');
    headline(s, '30 / 60 / 90 day operating cadence.', { size: 28, w: CW, h: 0.7 });
    const phases = [['30', 'Diagnose', 'Map constraints, dependencies and opportunities. Deliver the board-ready blueprint.', C.champ], ['60', 'Install', 'Stand up the operating cadence, pipeline governance and leadership rhythm.', C.teal], ['90', 'Operate', 'Board-ready revenue visibility. First measurable shifts. Path to founder autonomy.', C.champ]];
    const ry = 2.1, x0 = M + 1.0, span = CW - 2.0;
    lineSeg(s, x0, ry, x0 + span, ry, { color: C.border, width: 1 });
    const cw = (CW - 0.6) / 3, ch = 1.95;
    phases.forEach((p, i) => {
      const nx = x0 + (span / 2) * i;
      ring(s, nx, ry, 0.26, { color: p[3], width: 1.5, fill: C.slate2 });
      label(s, p[0], nx, ry, 0.5, { font: SERIF, size: 13, color: p[3] });
      label(s, 'DAY', nx, ry - 0.42, 1.0, { size: 7, color: C.muted, cs: 2 });
      const cx = M + i * (cw + 0.3);
      lineSeg(s, cx + cw / 2, ry + 0.26, cx + cw / 2, 2.7, { color: C.grid, width: 0.75, dash: 'dash' });
      card(s, cx, 2.7, cw, ch, { kicker: 'Days ' + (i === 0 ? '1–30' : i === 1 ? '31–60' : '61–90'), title: p[1], body: p[2], accent: p[3], tSize: 18, titleH: 0.4 });
    });
    footer(s, 11);
  }

  // ── 12 · Next Step (atmospheric closing visual) ──
  {
    const s = base();
    if (heroOK) { s.addImage({ path: IMG.band, x: 0, y: 0, w: 10, h: 5.625, sizing: { type: 'cover', w: 10, h: 5.625 } }); rect(s, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: C.ink, transparency: 22 } }); rect(s, { x: 0, y: 0, w: 6.6, h: 5.625, fill: { color: C.ink, transparency: 10 } }); }
    else { gridBG(s, 0, 5.625); }
    lineSeg(s, M, 1.5, M + 0.7, 1.5, { color: C.champ, width: 1.5 });
    T(s, [{ text: 'Book a ', options: { color: C.ivory } }, { text: 'Growth Diagnostic™.', options: { color: C.champL, italic: true } }], { x: M, y: 1.66, w: 8.6, h: 1.1, fontFace: SERIF, fontSize: 44, lineSpacingMultiple: 1.0 });
    T(s, 'Start with a 30-minute executive discussion. No obligation.', { x: M, y: 2.95, w: 7, h: 0.4, fontFace: SANS, fontSize: 15, color: C.muted });
    const contacts = [['EMAIL', 'hello@crescivo.partners'], ['WEB', 'crescivo.partners'], ['BASED', 'Sydney, AU · operating across APAC']];
    let y = 3.7;
    contacts.forEach(([k, v]) => { T(s, k, { x: M, y, w: 1.1, h: 0.3, fontFace: SANS, fontSize: 9, color: C.muted, charSpacing: 2 }); T(s, v, { x: M + 1.15, y: y - 0.04, w: 6, h: 0.3, fontFace: SANS, fontSize: 14, color: C.ivory }); y += 0.42; });
    T(s, 'CONNECT.   INFLUENCE.   SCALE.', { x: M, y: 5.26, w: CW, h: 0.25, fontFace: SANS, fontSize: 9, color: C.champ, charSpacing: 3 });
    T(s, 'Sam Restifo, Guy Pozniak & Jason Serda · Crescivo', { x: 10 - M - 5.2, y: 5.26, w: 5.2, h: 0.25, fontFace: SANS, fontSize: 8.5, color: C.muted, align: 'right' });
  }

  await pptx.writeFile({ fileName: OUT });
  for (const f of Object.values(IMG)) { try { if (fs.existsSync(f)) fs.unlinkSync(f); } catch {} }
  const kb = (fs.statSync(OUT).size / 1024).toFixed(1);
  console.log('Created ' + OUT + ' (' + kb + ' KB)  hero=' + heroOK);
})().catch(e => { console.error(e); process.exit(1); });
