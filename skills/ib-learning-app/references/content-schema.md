# Content schema (BizQuest engine)

Everything a student sees comes from plain JS data in `js/content/`. This file is the exact format the engine
expects. `scripts/validate_content.mjs` checks most of it.

Contents: 1. Files · 2. Unit file · 3. Topic (section) · 4. Quiz questions · 5. Tables with fillable cells ·
6. Formulas · 7. Labs · 8. Glossary and term helpers · 9. Registering a unit · 10. Writing style

## 1. Files

| File | What it holds |
|---|---|
| `js/content/units.js` | `UNITS`: every unit of the course, built or `planned(...)`. The home page, navigation and term links come from here. |
| `js/content/unitN.js` | One built unit (`export const unitN = {...}`). |
| `js/content/helpers.js` | `M`, `F` (formulas), `A`, `tbl` (tables). Import them in every unit file. |
| `js/content/glossary.js` | `GLOSSARY`: term definitions and where each term is taught. |
| `js/labs.js` | Interactive labs (`LABS` object: one function per lab type). |
| `js/calc.js` | Calculator key sets (`BASIC_KEYS`, `POWER_KEYS`) and the expression parser. |

## 2. Unit file

```js
// Unit 4: Marketing (IB Business Management guide, first assessment 2024).
// Running case: <one sentence about the case and how its numbers connect the topics>.
import { M, F, A, tbl } from './helpers.js';
// import { POWER_KEYS } from '../calc.js';   // only if the unit needs powers

const dz = '<b>DropZone</b>';   // short handle for the running case's name

export const unit4 = {
  id: '4',                       // unit number as a string
  title: 'Marketing',
  emoji: '📣',
  blurb: 'Meet DropZone: …. You run their marketing for the whole unit.',
  // calcKeys: POWER_KEYS,       // optional; default is BASIC_KEYS (+ − × ÷ and brackets)
  sections: [ /* topics, see 3 */ ],
  formulas: [ /* see 6; [] if none */ ]
};
```

## 3. Topic (section)

```js
{
  id: '4.5', title: 'The seven Ps of the marketing mix', emoji: '🧩', minutes: 12,
  hl: false,                     // true = HL only; 'part' = some HL-only content; false = SL and HL
  goal: 'explain each of the seven Ps and apply them to a product.',   // finishes "What you'll be able to do: …"
  hook: `2–5 sentences of HTML: a relatable situation that raises a question the topic answers.`,
  cards: [                       // 3–6 Learn cards, each readable in under a minute
    { title: 'Product', html: `<p>…</p><div class="example">${dz} …</div><div class="tip">Exam tip…</div>` },
  ],
  labs: [ { type: 'sort', … } ], // at least one, see 7
  worked: {
    title: 'Apply the 7 Ps (exam style)',
    intro: '<p>The question or data…</p>',
    steps: [ { prompt: 'Question the student should think about', answer: 'Revealed answer, with <b>working</b>' } ], // 3–6 steps
    takeaway: 'One exam-technique sentence shown after the last step.'
  },
  quiz: [ /* 6–10 questions, see 4 */ ],
  explain: 'Prompt for "explain it like you\'re texting a mate", ideally tied to the student\'s own life.'
}
```

HTML classes you can use inside `hook`, `cards[].html`, `worked`, `why`:
`<div class="example">` (labelled "Example"), `<div class="tip">` ("🎯 Exam tip"), `<p class="muted small">`,
`<div class="table-wrap"><table class="fin">…</table></div>` for accounts-style tables (rows: `class="total"` for
totals, `class="head"` for section headings, `td class="neg"` for red negatives), and `${F`…`}` for formulas.

## 4. Quiz questions

Every question has `id` (unique across the whole app; use `'<topic>-<n>'`, e.g. `'4.5-3'`, and never reuse or
renumber ids after publishing, because progress is stored by id), `type`, `q` (HTML), `why` (feedback HTML,
shown after answering), and optionally `cmd` (IB command term: Define, Identify, Calculate, Explain, Analyse,
Evaluate, Recommend, Distinguish…).

```js
{ id: '4.5-1', type: 'mcq', cmd: 'Identify', q: 'Which is an example of <b>place</b>?',
  options: ['Selling through Zalando', 'A 20% discount', 'A TikTok campaign', 'Recycled packaging'], answer: 0,
  why: 'Place = how the product reaches customers (distribution channels).' },          // options are shuffled
{ id: '4.5-2', type: 'tf', q: 'Price is the only P that brings in revenue.', answer: true, why: '…' },
{ id: '4.5-3', type: 'num', cmd: 'Calculate', q: '… What is the price after a 15% markup?', answer: 69,
  unit: '$', display: '$69', tol: 0.5, hint: 'Price = cost × 1.15', why: '60 × 1.15 = $69.' },
  // tol = allowed absolute error (default 0.5% of the answer); display = how the answer is shown if wrong
{ id: '4.5-4', type: 'sort', q: 'Which P is each?', buckets: ['Product', 'Price', 'Promotion'],
  items: [ { t: 'Limited-edition colourway', b: 0 }, { t: 'Student discount', b: 1 }, { t: 'Influencer post', b: 2 } ],
  why: '…' }
```

Aim for a mix: a couple of definitions, application to the running case, at least one misconception
question, and calculations wherever the topic has any. A `num` question, or an `mcq` with `cmd: 'Calculate'`,
shows the calculator automatically.

## 5. Tables with fillable cells

Whenever a question gives several figures, put them in a table laid out like the exam does. Every unknown is
a fillable `A(...)` cell (never a plain `'?'` string), so the student works through the method step by step:

```js
{ id: '3.8-4', type: 'num', cmd: 'Calculate', answer: 5881.5, tol: 2, unit: '$', display: '$5,881.50',
  q: '<span class="tag">HL</span> Complete the table to find the <b>NPV</b>.' + tbl(
    ['Year', 'Net cash flow ($)', 'Discount factor (6%)', 'Present value ($)'],
    [['0', '(20,000)', '1.0000', '(20,000)'],
     ['1', '6,000', '0.9434', A(5660.4)],          // working cell: marked, not counted for the score
     ['2', '8,000', '0.8900', A(7120)],
     ['<b>NPV</b>', '', '', A(5881.5, true)]]),    // the answer cell: must equal `answer`; replaces the answer box
  why: '…' }
```

- `A(value)`: a working cell. On Check it turns green or red, and the correct figure appears under wrong ones.
- `A(value, true)`: the answer cell (at most one, `num` questions only). If the answer isn't in the table
  (e.g. payback in months), leave it out and the normal answer box is used.
- Students may type accounting negatives as `(14,000)`.
- Use `''` for empty cells; plain strings for given values. Keep tables to 4 columns or fewer (phones).

## 6. Formulas

In cards: `${F`\text{Current ratio} = \frac{\text{current assets}}{\text{current liabilities}}`}` (TeX, typeset
with KaTeX; `String.raw` is built in, so write single backslashes). On the formula sheet:

```js
formulas: [
  { group: '4.3 Sales forecasting', items: [
    { name: 'Moving average', f: M`…`, hl: true, note: 'Plain HTML, or another M`…`' }
  ] }
]
```

Use `\text{…}` for words, `\frac{}{}`, `\times`, `\div`, `\sum`, `^`. Keep a formula short enough for a phone;
split long ones into two lines (two `F` blocks). Read-aloud turns the TeX into words automatically.

## 7. Labs (the "Play" step)

Every topic needs at least one lab with a **challenge** the student can beat (+25 XP).

Generic lab types you can configure without code:

```js
{ type: 'sort', title: 'Sort the receipts', challenge: 'Sort all 8 correctly in one go.',
  buckets: ['A', 'B'], items: [ { t: '🧽 Item text', b: 0 } ] }

{ type: 'scenarios', title: 'Finance matchmaker', challenge: 'Pick the best option for all 4 situations.',
  items: [ { s: 'Situation HTML', options: [ { t: 'Option', ok: true, fb: 'Why it is right' },
                                             { t: 'Option', ok: false, fb: 'Why not' } ] } ] }
```

Topic-specific labs (BizQuest has `profit`, `pnl`, `depreciation`, `ratios`, `cashflow`, `investment`,
`variance`) are functions in `LABS` in `js/labs.js`:

```js
  elasticity(el, lab, onWin) {
    const s = { price: 10 };                         // the model's state
    const challenges = challengeList(['Find the price where revenue is highest.'], onWin);
    const update = () => { /* recompute, redraw KPIs/charts, then */ challenges.check([/* booleans */]); };
    el.append(h('h2', {}, '🎮 Title'), h('p', { class: 'muted' }, 'One line on what to do.'), challenges,
      h('div', { class: 'lab-grid' }, h('div', {}, slider({ label: 'Price', min: 1, max: 20, value: s.price,
        fmt: money, oninput: v => { s.price = v; update(); } })), h('div', {}, /* kpis, chart */)));
    update();
  },
```

Available helpers: `h` (DOM), `slider`, `lineChart`, `barChart`, `money`, `pct`, `round`, `speakButton` from
`js/ui.js`; `challengeBox`, `challengeList`, `kpi` inside `labs.js`. Good labs let the student manipulate the
topic's central model (a curve, a statement, a timeline) and see the consequence at once, and have a
challenge that needs understanding rather than luck. Make them work at 375 px wide.

## 8. Glossary and term helpers

`js/content/glossary.js`:

```js
'price elasticity of demand': { sec: '2.3', card: 1, aliases: ['ped', 'elasticity'],
  def: 'How strongly the quantity demanded reacts to a change in price.' },
```

- `sec`: the topic that teaches the term (built or planned). `card`: index of the Learn card that defines it
  (once built). `def`: 1–2 plain sentences, may contain `<b>`/`<i>`.
- In content, write `[[term]]` or `[[term|shown text]]` (the name must match the key or an alias, any case).
- Tag a term where it is **mentioned** outside its own topic, at the first mention per card or explanation.
  Don't tag it inside the topic that teaches it, and never inside quiz `options` or sort item labels.

## 9. Registering a unit

In `js/content/units.js`: `import { unit4 } from './unit4.js';` and replace the
`planned('4', …)` entry with `unit4`. Keep the units in syllabus order. A planned unit is
`planned(id, title, emoji, [[topicId, topicTitle, hlOnly?], …])`.

## 10. Writing style

- Talk to the student ("you"), short sentences, British/IB spelling.
- One idea per card. Bold the term being defined. Every abstract idea gets a concrete example from the
  running case or the student's world.
- Exam tips use IB command terms and say what earns marks.
- Numbers in examples must be internally consistent; re-calculate every one.
