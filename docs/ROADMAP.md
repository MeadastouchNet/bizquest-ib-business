# Roadmap: adding the other units

BizQuest already knows about all five units. Unit 3 is built; Units 1, 2, 4 and 5 show on the home page as
"coming soon", with their planned topics listed in [`js/content/units.js`](../js/content/units.js).

## Checklist for each new unit

1. **Content file.** Create `js/content/unitN.js` in the same shape as `unit3.js` (id, title, emoji, blurb,
   sections, formulas), then replace the unit's `planned(...)` entry in `js/content/units.js` with it.
   Check the topic titles against the official IB guide.
2. **Presentation rules** (agreed with the parent):
   - Questions with several figures use tables (`tbl()`), and every `?` cell is fillable: write `A(value)`,
     or `A(value, true)` when the cell is the answer itself.
   - Formulas use typeset math (`F` in cards, `M` on the formula sheet).
   - The calculator keys must cover what the unit needs (`js/calc.js`: set `calcKeys` in the unit file, e.g. `POWER_KEYS`; Unit 3 uses the default `BASIC_KEYS`).
3. **Glossary terms** (`js/content/glossary.js`):
   - Add an entry for each key term the unit teaches: `sec` = topic id, `card` = index of the Learn card.
   - Write `[[term]]` (or `[[term|shown text]]`) wherever a term is mentioned in a topic **other** than the one
     that teaches it. Skip answer options, because a click there would also pick the option.
   - When the new unit teaches a term that already has a "coming soon" entry, update its `card` and check the
     definition. The link switches on automatically once the topic is built.
4. **Go back over earlier units:** tag terms in them that the new unit now teaches (see the list below).

## Terms waiting for a future unit

These are already tagged in Unit 3 and show "coming soon" today. When the unit is built, set `card` and check
the definition in `glossary.js`.

| Term | Taught in | Mentioned in |
|---|---|---|
| sole trader | 1.2 Types of business entities | 3.2 |
| company / Ltd company | 1.2 Types of business entities | 3.2, 3.6 |
| stakeholders | 1.4 Stakeholders | 3.4 |
| shareholders | 1.4 Stakeholders | 3.4 |
| motivation | 2.4 Motivation and demotivation | 3.9 |
| just-in-time (JIT) | 5.3 Lean management and quality management (HL) | 3.6 |
| break-even | 5.5 Break-even analysis | 3.3 |

Also worth tagging once their units exist: *limited liability*, *market share*, *economies of scale*
(Unit 1); *span of control*, *delegation* (Unit 2); *marketing mix*, *pricing strategies* (Unit 4);
*capacity utilization*, *quality control* (Unit 5).
