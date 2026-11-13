# Week 7 — TaskFlow To-Do List

**Author:** Anthony Mugwe  
**GitHub username:** `Anthony-mugwe`  
**Repository:** `iyf-s12-week-07-Anthony-mugwe`

## Live Demo

After enabling GitHub Pages, add your working URL here:

`https://Anthony-mugwe.github.io/iyf-s12-week-07-Anthony-mugwe/`

## Week 5 starting point

The root `index.html` and `styles.css` carry forward the Week 5 TaskFlow design and core To-Do List features. The original Week 5 JavaScript behavior has been refactored into ES modules under `js/`.

## Features

- Add tasks with the button or Enter; blank tasks are rejected.
- Mark tasks completed or active, delete tasks, and clear completed tasks.
- All, Active and Completed filters.
- Active task count and total task count.
- Double-click a task to edit it.
- Tasks and selected filter persist across refreshes with `localStorage`.
- Invalid, missing or malformed saved data safely falls back to defaults.
- Pure task logic is separated from browser storage and DOM rendering.

## Project structure

```text
.
├── index.html
├── styles.css
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── todo-logic.js
│   └── ui.js
├── tests/
│   └── todo-logic.test.js
├── cart/
│   ├── index.html
│   ├── cart.css
│   └── cart.js
├── daily-challenges/
├── eslint.config.js
├── .prettierrc
├── package.json
├── package-lock.json
└── .gitignore
```

## Requirements

- Node.js 22 or 24
- npm
- VS Code (or another editor)
- Git and a GitHub account

Check Node before starting:

```bash
node --version
npm --version
```

## Install and run checks

Run these commands in the project root:

```bash
npm install
npm test
npm run lint
```

To run the website, open the project folder in VS Code and use Live Server on `index.html`. Do not open the HTML file directly; ES modules need a local web server.

To open the Lesson 13 shopping cart, use Live Server on `cart/index.html`.

## Tests

The Node built-in test runner checks:
- task creation and trimming;
- blank input edge case;
- toggling completion;
- immutable array addition (proves original array is unchanged);
- filtering;
- deleting, editing, clearing completed tasks and active counts.

## Git workflow — do this in stages

### 1. Create the repository and commit Week 5 files first

Create `iyf-s12-week-07-Anthony-mugwe` on GitHub. Copy the Week 5 `index.html`, `styles.css`, and `app.js` into the new repository root first. Commit only those three files as the Week 5 starting point. Do not overwrite your Week 5 repository.

Suggested first commit:

```bash
git add index.html styles.css app.js
git status
git commit -m "chore: copy Week 5 To-Do List starting files"
```

### 2. Protect npm files before installing

Add `.gitignore` with `node_modules/` before running `npm install`. Then:

```bash
git status
npm install
npm test
npm run lint
```

Commit the package files and configuration separately.

### 3. Refactor on the required branch

```bash
git switch -c refactor/modules
```

Move the application logic into `js/` modules and add tests. Commit in small pieces. Before every commit:

```bash
git status
```

Push the branch:

```bash
git push -u origin refactor/modules
```

Open a Pull Request from `refactor/modules` into `main`, and request your assigned Classroom partner as reviewer.

### 4. Peer review

- Add your assigned partner as a repository collaborator.
- Review your partner's PR with at least three inline comments on actual code: one fix suggestion, one question, and one positive observation.
- Reply to each comment on your PR, push requested fixes, and merge only after approval.
- Add both real PR links below. Do not invent or use placeholder PR links.

## Collaboration

- **My refactor PR:** Add your actual pull request URL here.
- **Partner review PR:** Add the actual pull request you reviewed here.

## Suggested commit plan

1. `chore: copy Week 5 To-Do List starting files`
2. `chore: ignore node_modules and configure npm`
3. `refactor: extract pure todo logic module`
4. `feat: add localStorage persistence and state module`
5. `refactor: separate DOM rendering into UI module`
6. `test: add todo logic unit tests`
7. `feat: add Lesson 13 shopping cart and daily challenges`
8. `ci: document checks and GitHub Pages deployment`

Before every commit, inspect `git status`. Never commit `node_modules/`.

## GitHub Pages

Enable Pages in repository Settings → Pages. Choose the deployment option supported by your repository setup. Because the main page uses native JavaScript modules, test the deployed page over HTTPS and not by opening a local file.

## Submission

Submit exactly one link in the course link field:

`https://github.com/Anthony-mugwe/iyf-s12-week-07-Anthony-mugwe`

Submit the repository link, not the live site or ZIP. Before turning in, open the repository link in a private/incognito window and confirm the README contains the live demo and both real PR links.
