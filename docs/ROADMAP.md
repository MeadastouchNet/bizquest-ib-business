# Roadmap: adding the other units

BizQuest already knows about all five units. Units 1, 2 and 3 are built; Units 4 and 5 show on the home page as
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
5. **Docs:** add the unit's content points to [`docs/SYLLABUS.md`](SYLLABUS.md) (marked verified or from memory)
   and update `README.md` (which units are built).

## Terms waiting for a future unit

These are already tagged in built units and show "coming soon" today. When the unit is built, set `card` and check
the definition in `glossary.js`.

| Term | Taught in | Mentioned in |
|---|---|---|
| market share | 4.1 Introduction to marketing | 1.3, 1.5 |
| just-in-time (JIT) | 5.3 Lean management and quality management (HL) | 3.6 |
| break-even | 5.5 Break-even analysis | 3.3 |

Also worth tagging once their units exist: *marketing mix*, *pricing strategies* (Unit 4);
*capacity utilization*, *quality control* (Unit 5); in Unit 5, tag Unit 2's *outsourcing*, *offshoring*, *reshoring*,
*labour turnover*, *training* terms and *resistance to change* where they come up. When Unit 4 is built, tag
*multinational company*, *globalization* and *economies of scale* in 4.6 International marketing.
