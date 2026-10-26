# Roadmap: keeping BizQuest growing

All five units of IB Business Management are built (1.1–5.9), plus the business management toolkit as "Unit 6"
(6.1–6.9). This file is the checklist for changing or adding content, and the list of what is still to do.

## Checklist for new or changed content

1. **Content file.** Each unit lives in `js/content/unitN.js` (id, title, emoji, blurb, sections, formulas) and is
   registered in `js/content/units.js`. Check topic titles and content points against the official IB guide.
   Never change or reuse a published quiz id: progress and spaced review are stored by id (rewording is fine).
2. **Presentation rules** (agreed with the parent):
   - Questions with several figures use tables (`tbl()`), and every `?` cell is fillable: write `A(value)`,
     or `A(value, true)` when the cell is the answer itself.
   - Formulas use typeset math (`F` in cards, `M` on the formula sheet).
   - The calculator keys must cover what the unit needs (`js/calc.js`: set `calcKeys` in the unit file, e.g. `POWER_KEYS`; all five units use the default `BASIC_KEYS`).
3. **Glossary terms** (`js/content/glossary.js`):
   - Add an entry for each key term taught: `sec` = topic id, `card` = index of the Learn card that defines it.
   - Write `[[term]]` (or `[[term|shown text]]`) wherever a term is mentioned in a topic **other** than the one
     that teaches it. Skip answer options, because a click there would also pick the option.
4. **Docs:** update [`docs/SYLLABUS.md`](SYLLABUS.md) (content points, verified or from memory) and `README.md`.
5. **Check:** `node skills/ib-learning-app/scripts/validate_content.mjs .`, then the smoke test in the browser.

## Still to do

- **Verify against the official guide.** Every content point in [`docs/SYLLABUS.md`](SYLLABUS.md) is marked
  *from memory*. When the guide is available, check each row, especially those with a note (2.1 recruitment and
  training placement, 4.1 social marketing, 4.3 moving-average types, 5.9 technology list).
- **Check the curriculum** with [`docs/CURRICULUM-CHECKLIST.md`](CURRICULUM-CHECKLIST.md). Also check 6.6 (free float?) and
  6.7 (must r or R² be calculated?).
- **Improve from use.** After a week or two, check Usage stats and fix low-rated or most-missed lessons first.
