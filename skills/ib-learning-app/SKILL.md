---
name: ib-learning-app
description: >-
  Build or extend an interactive, research-based learning web app for an IB course (or any exam syllabus) for a
  teenage student, in the style of BizQuest: short lessons with relatable hooks, interactive labs, worked
  examples, quizzes with spaced review, fillable calculation tables, typeset formulas, a calculator, glossary
  term helpers and usage stats, hosted free on GitHub Pages. Use this whenever the user asks to "create the
  chapters/units of IB [subject]", "make a learning environment / study app / revision site for [course]", "add
  the remaining units/chapters", "turn the syllabus into lessons", or to extend BizQuest or a similar app, even
  if they don't say "app" or "skill". It covers both a brand-new subject (new GitHub repo) and adding units to
  an existing app repo.
---

# IB learning app builder

You turn a course syllabus into a self-paced learning web app for a student (by default a 17-year-old who is
"smart but lazy"), or add units to an app that already exists. The reference implementation is **BizQuest**
(IB Business Management HL): repo `MeadastouchNet/bizquest-ib-business`, live at
`https://meadastouchnet.github.io/bizquest-ib-business/`. Its engine is the template for every new subject.

The app is a static site (plain HTML/CSS/JS ES modules, no build step), so it runs anywhere and is hosted
free on GitHub Pages. Progress is stored in the student's browser.

## 1. Work out which mode you're in

| The user says… | Mode | Where you work |
|---|---|---|
| "Create all chapters of IB Economics HL as a learning environment" | **New subject** | A new repo, created from the BizQuest engine |
| "Create the remaining units 1, 2, 4 and 5 of IB Business Management HL" | **Extend** | The existing app repo (find it in the current folder, or ask) |
| "Add 4.3 to the marketing unit" / "redo unit 3 quizzes" | **Extend** (partial) | The existing app repo |

Before building, settle these. Use what the conversation, the repo and your memory already say; ask only
about what is genuinely unknown, all in one message:

- **Subject and level** (SL/HL; HL-only topics are tagged in the app).
- **Syllabus.** Prefer the official subject guide if the user can provide it (PDF or notes). Otherwise use your
  knowledge of the current guide, and say clearly which topic lists you couldn't verify.
- **Learner.** Age, interests, language. The default is a 17-year-old in Denmark who likes gaming, sneakers,
  festivals and social media. Relatable examples are a big part of why the app works.
- **GitHub account and repo name** (new subject only). If several accounts are logged in, ask which one.
  Default: a public repo plus GitHub Pages (free hosting needs a public repo on a free plan).

## 2. Set up the repo

- **New subject:** follow `references/engine-setup.md`. Copy the engine from the BizQuest repo, rename the
  brand (e.g. EconQuest), empty the content, register every unit of the new syllabus as "planned", publish, and
  enable Pages.
- **Extend:** read the repo's `docs/ROADMAP.md` first. It has the checklist and the list of glossary terms
  waiting for future units. Then read `js/content/units.js`, `js/content/glossary.js` and one built unit file
  so the new content matches what is already there.

## 3. Build the content, one unit at a time

Read `references/content-schema.md` before writing your first unit file. The engine is strict about the
shape of the data, and the schema has ready-to-copy examples. Read `references/learning-design.md` once:
it explains *why* each lesson has the parts it has, which is what lets you write good ones rather than
filling a template.

For each unit:

1. **Plan the unit.** List its topics from the syllabus. Choose one **running case** for the unit (BizQuest
   uses SoleFlip, two 17-year-olds reselling sneakers) and reuse its numbers across topics, so the topics
   connect (e.g. the same accounts feed 3.4, 3.5 and 3.6).
2. **Write `js/content/unitN.js`.** Each topic needs:
   - a hook: a relatable 3–5 sentence situation that creates a question;
   - 3–6 short Learn cards: definitions, a worked mini-example, and an exam tip using IB command terms;
   - at least one interactive lab with a challenge (reuse `sort` / `scenarios`, or write a new lab in
     `js/labs.js` for the topic's key model or calculation);
   - a worked example of 3–6 steps that the student reveals one at a time;
   - a quiz of 6–10 questions (mixed types, each with a `why`);
   - an "explain it like you're texting a mate" prompt.

   Also add the unit's formulas (if any) and set `calcKeys` if it needs more than + − × ÷ and brackets.
3. **Apply the presentation rules.** The parent asked for these, and they're what make the app easy to use:
   - Any question with several figures shows them in a **table** (`tbl()`), laid out the way the exam does.
     Every **?** cell is fillable and gets marked: write `A(value)`, or `A(value, true)` when the cell is
     the answer itself (it then replaces the answer box).
   - **Formulas are typeset** with KaTeX: `F`…`` in cards and `M`…`` on the formula sheet. Never write them as
     plain text with ÷.
   - **Calculation questions** get the on-screen calculator automatically (`num` questions, and `mcq` questions
     with `cmd: 'Calculate'`). The keys must cover what the unit needs and no more.
   - **Term helpers.** Every key term taught in this unit gets a glossary entry (`sec`, `card`, `def`). Wherever
     a term is *mentioned* in a topic other than the one that teaches it, write `[[term]]`. Never put a term
     inside an answer option. If a term belongs to a unit that isn't built yet, still add the entry pointing
     at the planned topic; the link switches on when that unit is built.
4. **Register the unit** in `js/content/units.js`, replacing its `planned(...)` entry.
5. **Revisit earlier units.** Tag `[[terms]]` in them that this unit now teaches, and update the
   "waiting" table in `docs/ROADMAP.md`.
6. **Validate** (see section 4), fix everything it reports, then commit and push. Push after every unit, so
   the student gets new units as they're ready and a long job never loses work.

Accuracy matters more than volume: the student will learn whatever you write. Double-check every
calculation, keep definitions faithful to the IB guide's wording, and put HL-only content behind `hl: true`
(or `hl: 'part'` for mixed topics) and an "HL" tag in the text.

**Many units at once.** When asked for a whole course, go unit by unit and keep going until all are done,
reporting progress after each push. If your environment lets you run parallel agents, different units can be
written in parallel, because each lives in its own file. Merge `glossary.js` and `units.js` yourself afterwards,
since those are shared.

## 4. Verify before every push

1. **Validate the content:**
   ```bash
   node <this-skill>/scripts/validate_content.mjs <repo-root>
   ```
   It checks unique ids, quiz shapes, that answer cells match answers, that lab types exist, and that every
   `[[term]]` has a glossary entry pointing at a real card. Fix all errors; read the warnings.
2. **Run the app** (`python -m http.server 8765` in the repo) and open it in a browser if you have one: home,
   each new unit page, a few lessons end to end (Learn, Play, the quiz with a table question, Explain), the
   formula sheet, a term popover, and a phone-width check (375 px wide). Look at the browser console for
   errors. Browsers cache ES modules aggressively; force a fresh load after edits.
3. Commit with a clear message and push. GitHub Pages redeploys in about a minute.

## 5. Report back

Tell the user, in plain language: the live link; what was built (units and topics, number of questions and
labs); what you verified and how; anything you couldn't verify (syllabus details, a topic list from memory);
and the follow-ups (e.g. terms still waiting for unbuilt units). Suggest checking **Usage stats** after a week
or two to see what's working, because the app is meant to be improved from how the student actually uses it.

## Reference files

- `references/content-schema.md`: the unit file format, all quiz and lab types, tables, formulas, glossary. Read before writing content.
- `references/learning-design.md`: the research behind the lesson structure, and the tone. Read once per job.
- `references/engine-setup.md`: creating a new subject repo from the BizQuest engine, renaming, GitHub and Pages.
- `references/porting.md`: using this skill from Codex, Gemini CLI or other coding agents.
- `scripts/validate_content.mjs`: the content checker (Node 18+, no dependencies).
