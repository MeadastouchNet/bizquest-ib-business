# BizQuest: IB Business Management HL

An interactive study app for IB Business Management (HL), built for a smart-but-busy 17-year-old.
All five units are built: **Unit 1: Introduction to business management** (1.1–1.6), **Unit 2: Human resource
management** (2.1–2.7), **Unit 3: Finance and accounts** (3.1–3.9), **Unit 4: Marketing** (4.1–4.6) and
**Unit 5: Operations management** (5.1–5.9), plus **the business management toolkit** as "Unit 6" (6.1–6.8: SWOT,
STEEPLE, decision trees, force field analysis, Gantt charts, critical path analysis, linear regression, circular
business models).

Each topic is a ~10-minute "mission":

1. **Hook**: a relatable situation (gaming PCs, festivals, MrBeast, Taylor Swift's masters…)
2. **Learn**: short cards with read-aloud 🔊
3. **Play**: an interactive lab with a challenge (profit simulator, ratio "control room", cash flow forecast, investment showdown, perception map, product life cycle, break-even, stock control, decision tree, critical path…)
4. **Worked example**: revealed one step at a time
5. **Quiz**: instant feedback; missed questions come back at the end
6. **Explain**: put it in your own words, plus a 1-tap rating

Plus **Review** (spaced repetition, mixed topics), a **Boss Battle**, a **formula sheet** and **Usage stats**.

A running case, **SoleFlip** (two 17-year-olds reselling and customising sneakers), connects all the topics.
Unit 1 tells how it started (sole trader → partnership → Ltd); Unit 2 follows its first ~20 staff (hiring, structure,
leadership, pay, culture, a union dispute); the same SoleFlip Ltd accounts are used from 3.4 to 3.6. Unit 4 launches
its own sneaker, SoleFlip Originals (research, positioning, pricing, a German launch), and Unit 5 runs the workshop and
the Porto factory partnership (production methods, quality, location, break-even with the 3.3 numbers, stock control).

Why it is designed this way: see [docs/LEARNING-DESIGN.md](docs/LEARNING-DESIGN.md).
What's left and how to change content: see [docs/ROADMAP.md](docs/ROADMAP.md). What each unit covers: [docs/SYLLABUS.md](docs/SYLLABUS.md).

## Run it

It is a static site (plain HTML/CSS/JS, no build step). It is hosted on GitHub Pages, or you can run it locally:

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Structure

| Path | What |
|---|---|
| `js/content/unit1.js` … `unit6.js` | All content per unit: cards, worked examples, quizzes, formulas |
| `js/labs.js` | The interactive labs |
| `js/quiz.js` | Quiz engine (multiple choice, true/false, numeric, sort) |
| `js/store.js` | Progress, XP, streaks, spaced repetition (localStorage) |
| `js/main.js` | Pages: home, lesson, review, boss, formulas, parent, settings |

To add a unit, follow the checklist in [docs/ROADMAP.md](docs/ROADMAP.md) (content file, `js/content/units.js`, glossary terms).

Progress is stored only in the browser of the device being used.

## Building more subjects or units

The repeatable workflow is a skill in [skills/ib-learning-app](skills/ib-learning-app/SKILL.md). In Claude it's
installed as a personal skill, so you can just ask, for example, "Create the remaining units 1, 2, 4 and 5 of
IB Business Management HL" or "Create all chapters of IB Economics HL as a learning environment". To use it
from Codex, Gemini CLI or other agents, see [porting.md](skills/ib-learning-app/references/porting.md).
Check content with `node skills/ib-learning-app/scripts/validate_content.mjs .`
