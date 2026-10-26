# Visual design

The parent chose a calm black / white / grey look with **one yellow accent**: modern and easy to read, with
no gimmicks. Green and red appear only for right and wrong answers. The whole look lives in `css/styles.css`
(tokens at the top) and `js/icons.js`. Content files never set colours or fonts. Keep to these rules when
you add a lab, a view or a new subject, so every page looks like part of the same app.

## Colour tokens

Use the CSS variables, never raw hex values, so light and dark mode both work. Each token is defined three
times in `styles.css`: light by default, dark under `@media (prefers-color-scheme: dark)` (guarded by
`:root:not([data-theme="light"])`), and dark again under `:root[data-theme="dark"]` for the Settings
switch. A new token goes in all three places.

| Token | Light | Dark | Use for |
|---|---|---|---|
| `--bg`, `--bg-2` | warm off-white, light grey | near-black, charcoal | page, wells (bar tracks, formula boxes, segmented controls) |
| `--card`, `--card-2` | white, off-white | dark greys | cards, inner panels |
| `--line`, `--line-strong` | light greys | dark greys | borders; strong for inputs and outline buttons |
| `--text`, `--muted` | ink #121212, grey | off-white, grey | body text, secondary text |
| `--yellow`, `--on-yellow` | #ffd60a, ink | same | **fills only**: primary buttons, progress bars, tags, the brand square, tip/challenge edges, term underline |
| `--yellow-soft` | pale yellow | dark olive | tip and total-row backgrounds |
| `--accent` | dark gold #a67c00 | #ffd60a | yellow-family **text, icons, chart markers** on a card (pure yellow text is unreadable on white) |
| `--good`, `--bad` | green, red | lighter green, red | right/wrong answers and marked cells, positive/negative figures only |
| `--chart-1…4` | ink, gold, grey, orange | off-white, yellow, grey, orange | chart series, in that order of importance |

Rules of thumb:
- Yellow is the only colour that says "do this" or "this matters". Use it sparingly: one primary button per
  view, and progress. Everything else is black, white and grey.
- Never put white text on yellow, and never put yellow text on a light background (use `--accent`).
- Don't introduce new hues. A lab that needs more series than four uses dashes (`dash: '6 4'`) or `--muted`.
- The `.hero` card is ink-black in **both** themes (it is the one dark block on a light page). Only the home
  hero gets the yellow disc (`.hero.disc`), because the disc would sit under longer text.

## Fonts

Loaded from Google Fonts in `index.html`, with system fallbacks in the `--font-*` tokens:

| Token | Font | Use |
|---|---|---|
| `--font-head` | **Bricolage Grotesque** 700/800 | `h1`–`h3`, the brand, popover titles |
| `--font-body` | **Figtree** 400–700 | everything else; very readable at phone sizes |
| `--font-num` | **JetBrains Mono** 500–700 | numbers that should line up or stand out: XP, question counters, KPI values, slider values, calculator, answer inputs |

Use `font-variant-numeric: tabular-nums` on financial tables. Small uppercase labels ("Exam tip", "Challenge",
eyebrows) are Figtree 700 at .72rem with .1em letter spacing.

## Components

The components follow the shadcn/ui style, written as plain CSS classes (no framework, so the app keeps
loading with no build step):

| Class | What it is |
|---|---|
| `.btn` | yellow primary with a small 3D bottom edge. `.ghost` = outline secondary, `.dark` = solid ink (Next buttons, secondary actions in quizzes), `.small`, `.big` |
| `.icon-btn` | square icon-only button (read aloud, close) |
| `.tile` | unit/topic card; on hover it gets a black border and a yellow offset shadow. `.badge` holds the emoji |
| `.stepper` | segmented control: the active step is a raised white chip, done steps show a green check |
| `.opt` with `.opt-key` and `.opt-mark` | multiple-choice option with a letter key; marked correct/wrong in green/red with a check/cross |
| `.tip`, `.example`, `.extra`, `.challenge` | callouts with a coloured left edge and a small uppercase label (added by CSS, so content just uses the class) |
| `.eyebrow` | small uppercase label with an icon above a heading |
| `.crumb` | back link with a chevron (`back(href, label)` in `main.js`) |
| `.pill`, `.tag`, `.kpi`, `.bar` | stats pills, yellow tags, KPI tiles, progress bars |

## Icons

UI chrome uses **Lucide** icons (lucide.dev, ISC licence), inlined in `js/icons.js` so there is no icon
script or font to load. Call `icon('name')` from `js/icons.js`; it returns an SVG that takes the text colour
and font size, so put it inside a button or label with the text: `h('a', { class: 'btn' }, icon('play'), 'Start')`.
To add an icon, copy its `<path>` lines from `https://cdn.jsdelivr.net/npm/lucide-static/icons/<name>.svg`
into `PATHS`. Icon names already there include `play`, `arrow-right`, `check`, `x`, `rotate-ccw`, `swords`,
`sigma`, `calculator`, `lightbulb`, `trophy`, `flame`, `zap`, `target`, `volume-2`.

**Emoji stay in content**, not in chrome: each unit and topic has an `emoji` (shown in the tile's badge),
labs and hooks may use them, and the fun/difficulty rating chips use them. Don't put emoji in buttons,
headings, step labels or status text; use an icon or nothing.

## Checking a design change

Look at every changed page in both themes (Settings → Theme, or set `data-theme` on `<html>`) and at 375 px
wide. Check: text on yellow is dark, no yellow text on white, the hero text doesn't overlap the disc,
charts are readable in both themes, and right/wrong marking is still clearly green/red.
