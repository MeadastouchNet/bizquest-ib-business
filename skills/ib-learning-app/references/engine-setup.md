# Engine setup: a new subject repo from BizQuest

The BizQuest repo is the template: `https://github.com/MeadastouchNet/bizquest-ib-business` (public).
Everything subject-specific lives in `js/config.js` and `js/content/`; the rest is the engine.

## 1. Copy the engine

```bash
git clone --depth 1 https://github.com/MeadastouchNet/bizquest-ib-business <scratch>/engine
mkdir <new-repo>  # e.g. econquest-ib-economics, inside the folder the user wants
cp -r <scratch>/engine/{index.html,css,js,docs,.gitignore} <new-repo>/
```

What you get:

| Path | Keep / change |
|---|---|
| `index.html`, `css/`, `js/main.js`, `store.js`, `audio.js`, `ui.js`, `quiz.js`, `calc.js`, `tex.js`, `terms.js` | Engine: keep as is. |
| `js/config.js` | **Change**: name, icon, course, `storageKey`, level titles, voice-test sentence. |
| `index.html` | **Change** the `<title>`, the favicon emoji and the brand text so they match `config.js` (they show before the JS loads). |
| `js/labs.js` | Keep the helpers and the generic `sort` and `scenarios` labs. Delete the Business-specific labs (`profit`, `pnl`, `depreciation`, `ratios`, `cashflow`, `investment`, `variance`) unless the new subject uses them; add the new subject's labs. |
| `js/content/helpers.js` | Keep. |
| `js/content/unit3.js` | Delete (it's Business content). Use it only as a model of good content. |
| `js/content/units.js` | **Rewrite**: list every unit of the new syllabus with `planned(...)`, then swap in built units as you write them. |
| `js/content/glossary.js` | **Empty** the `GLOSSARY` object (keep the lookup code below it). |
| `docs/LEARNING-DESIGN.md` | Keep (subject-independent research notes). |
| `docs/ROADMAP.md` | **Rewrite** for the new course: the checklist (copy it) and a fresh "terms waiting" table. |
| `docs/SYLLABUS.md` | **Rewrite**: one section per unit with its content points, each marked *verified* or *from memory*. |
| `README.md` | **Write new**: what the app is, the live link, how to run it, the file structure. |

**The storage key must be new.** All apps on one GitHub Pages account share the same web address origin
(`<account>.github.io`), so two apps with the same key would overwrite each other's progress.

After the copy, check nothing Business-specific is left:

```bash
grep -rn "BizQuest\|bizquest\|SoleFlip\|Business" --include=*.js --include=*.html <new-repo>
```

## 2. First commit, GitHub and Pages

```bash
cd <new-repo>
git init -b main && git add -A && git commit -m "Start <AppName> from the BizQuest engine"
gh repo create <account>/<repo> --public --description "<one line>" --source . --push
gh api -X POST repos/<account>/<repo>/pages -f "source[branch]=main" -f "source[path]=/"
```

The site appears at `https://<account>.github.io/<repo>/` about a minute after each push. To check a deploy:

```bash
gh api repos/<account>/<repo>/pages/builds/latest --jq '.status + " " + .commit'
```

**Several GitHub accounts logged in?** `gh auth status` lists them. Don't switch the user's active account
(that changes their global setup); use the wanted account's token for each command instead:

```bash
export GH_TOKEN=$(gh auth token --user <account>)
gh repo create …        # gh uses GH_TOKEN
git -c credential.helper= -c "credential.helper=!f() { echo username=<account>; echo password=\$GH_TOKEN; }; f" push -u origin main
```

Never write the token into the remote URL or any file.

## 3. Local preview

```bash
python -m http.server 8765      # in the repo; then open http://localhost:8765
```

ES modules are cached hard by browsers. After editing, force a fresh load (in an automated browser:
`await fetch(file, { cache: 'reload' })` for each changed file, then reload).

## 4. Updating the engine later

Improvements made in one app (a better quiz feature, a fix) can be copied to the others: the engine files
are identical across subjects. Copy the changed engine files, run the validator, and test.
