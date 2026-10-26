# BizQuest: IB Business Management HL

An interactive study app for IB Business Management (HL), built for a smart-but-busy 17-year-old.
It starts with **Unit 3: Finance and accounts** (3.1–3.9).

Each topic is a ~10-minute "mission":

1. **Hook**: a relatable situation (gaming PCs, festivals, MrBeast, Taylor Swift's masters…)
2. **Learn**: short cards with read-aloud 🔊
3. **Play**: an interactive lab with a challenge (profit simulator, ratio "control room", cash flow forecast, investment showdown…)
4. **Worked example**: revealed one step at a time
5. **Quiz**: instant feedback; missed questions come back at the end
6. **Explain**: put it in your own words, plus a 1-tap rating

Plus **Review** (spaced repetition, mixed topics), a **Boss Battle**, a **formula sheet** and **Usage stats**.

A running case, **SoleFlip** (two 17-year-olds reselling and customising sneakers), connects all the topics.
The same SoleFlip accounts are used from 3.4 to 3.6.

Why it is designed this way: see [docs/LEARNING-DESIGN.md](docs/LEARNING-DESIGN.md).
How to add the other units: see [docs/ROADMAP.md](docs/ROADMAP.md).

## Run it

It is a static site (plain HTML/CSS/JS, no build step). It is hosted on GitHub Pages, or you can run it locally:

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Structure

| Path | What |
|---|---|
| `js/content/unit3.js` | All Unit 3 content: cards, worked examples, quizzes, formulas |
| `js/labs.js` | The interactive labs |
| `js/quiz.js` | Quiz engine (multiple choice, true/false, numeric, sort) |
| `js/store.js` | Progress, XP, streaks, spaced repetition (localStorage) |
| `js/main.js` | Pages: home, lesson, review, boss, formulas, parent, settings |

To add a unit, follow the checklist in [docs/ROADMAP.md](docs/ROADMAP.md) (content file, `js/content/units.js`, glossary terms).

Progress is stored only in the browser of the device being used.
