# Using this skill with other coding agents

The skill is plain Markdown plus a Node script and a browser-console script, with no Claude-specific tools in its instructions, so any
coding agent that can read files, run shell commands and use git can follow it.

## Claude Code / Claude desktop app (Code tab)

Installed as a personal skill at `~/.claude/skills/ib-learning-app/`. Claude loads it automatically when a
request matches its description. A copy also lives in the app repo under `skills/ib-learning-app/`.

## OpenAI Codex (CLI or IDE)

- **If your Codex version supports skills** (a `skills` folder with `SKILL.md` files, e.g. `~/.codex/skills/`),
  copy the whole `ib-learning-app` folder there. The `SKILL.md` format with `name` and `description`
  frontmatter is the same.
- **Otherwise**, point Codex at it from `AGENTS.md` in the repo (or `~/.codex/AGENTS.md` for all projects):

  ```markdown
  ## Building IB learning apps
  When asked to create or extend a learning app for a course (e.g. "create all chapters of IB Economics HL",
  "add the remaining units"), read skills/ib-learning-app/SKILL.md and follow it, including its
  references/ files and scripts (validate_content.mjs, smoke_test.js).
  ```

## Google Gemini CLI

Gemini CLI reads `GEMINI.md` context files (in the project, or `~/.gemini/GEMINI.md` globally). Add the same
paragraph as above, with the path to the skill folder. Gemini then reads `SKILL.md` when the task comes up.
If your Gemini CLI version supports extensions with bundled context, you can package the folder as one.

## Other agents (Cursor, Windsurf, Aider, …)

Add the same pointer paragraph to the agent's rules or instructions file (`.cursor/rules`, `.windsurfrules`,
`CONVENTIONS.md`, …).

## Things that differ between agents

- **Browser checks.** Claude's desktop app has a built-in browser for the visual checks. Other agents may not:
  then run the validator, start `python -m http.server`, and do a headless check (e.g. Playwright) if it's
  available, or ask the user to open the local link.
- **Parallel work.** Agents that can run sub-agents can write several units at once (one file each). Others
  should go unit by unit.
- **GitHub auth.** All agents can use the `gh` CLI steps in `engine-setup.md`; the user must have `gh` logged in.
