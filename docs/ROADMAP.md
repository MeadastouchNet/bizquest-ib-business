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

- **Tick off against the guide itself.** On 2026-10-26 every correction from an external review of the official
  guide was applied (see [`docs/CURRICULUM-CHECKLIST.md`](CURRICULUM-CHECKLIST.md)): new topics 6.10–6.13, free
  float, HL flags, pricing methods, PED, R&D, MIS and the 2.1 → 2.4 move. Each item is labelled SL/HL, HL or
  Extra. Nobody has yet checked those labels line by line against the guide PDF.
- **Course-wide elements.** The four key concepts (creativity, change, ethics, sustainability), HL Paper 3
  preparation (social enterprises, 2/6/17-mark questions) and IA preparation (1,800 words, one key concept as the
  lens) aren't taught yet. They'd suit a short "Exam and IA" unit.
- **Possibly missing from 2.4.** Check whether the guide lists Daniel Pink's motivation theory (autonomy,
  mastery, purpose) among the SL theories; 2.4 only mentions "purpose" as a reward.
- **Improve from use.** After a week or two, check Usage stats and fix low-rated or most-missed lessons first.

## Content conventions added in the 2026-10-26 update

- Content that isn't prescribed in the 2024 guide goes in `<div class="extra">…</div>` (shown as "➕ Beyond the
  IB syllabus"). Don't write quiz questions or lab challenges whose answer is Extra content.
- HL-only content inside a mixed topic gets `<span class="tag">HL</span>` on the card and quiz question, and the
  topic gets `hl: 'part'`.
- Quiz ids that were retired when content moved: 2.1-2, 2.1-3, 2.1-4, 2.1-7, 2.1-8, 2.1-9 (now 2.4-11 to 2.4-16).
  Don't reuse them.
