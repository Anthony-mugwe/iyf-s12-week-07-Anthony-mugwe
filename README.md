# TaskFlow – To-Do List Application

**IYF Wecan Academy | Season 12 | Week 7**

TaskFlow is a simple To-Do List application I built as part of my Week 7 JavaScript project.

The application helps users organise their daily activities by adding, editing, completing and deleting tasks.

I used HTML, CSS and JavaScript to build it. I also practised JavaScript modules, Local Storage, testing and code quality tools.

## Live Demo

https://anthony-mugwe.github.io/iyf-s12-week-07-Anthony-mugwe/

## GitHub Repository

https://github.com/Anthony-mugwe/iyf-s12-week-07-Anthony-mugwe

## Features

### To-Do List

- Add new tasks.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks by All, Active and Completed.
- Clear completed tasks.
- Display remaining tasks.
- Save tasks using Local Storage.
- Keep tasks saved after refreshing the page.
- Prevent empty task entries.

### Shopping Cart

- Display available products.
- Add products to the cart.
- Remove products.
- Calculate the total price.
- Display the number of items.
- Demo checkout without real payments.

## Technologies Used

- HTML5
- CSS3
- JavaScript ES6
- JavaScript Modules
- Local Storage
- Node.js
- npm
- ESLint
- Prettier
- Node.js Test Runner

## Project Structure

```text
iyf-s12-week-07-Anthony-mugwe/
│
├── index.html
├── styles.css
├── README.md
├── package.json
├── package-lock.json
├── eslint.config.js
├── .prettierrc
├── .gitignore
│
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── todo-logic.js
│   └── ui.js
│
├── cart/
│   ├── index.html
│   ├── cart.css
│   └── cart.js
│
├── tests/
│   └── todo-logic.test.js
│
├── daily-challenges/
│   ├── day-1-array-methods.js
│   ├── day-2-immutability.js
│   ├── day-3-destructuring.js
│   ├── day-4-error-handling.js
│   └── day-5-modules.js
│
└── week-5-original/
    ├── index.html
    ├── styles.css
    └── app.js
```

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/Anthony-mugwe/iyf-s12-week-07-Anthony-mugwe.git
```

2. Open the project folder:

```bash
cd iyf-s12-week-07-Anthony-mugwe
```

3. Install dependencies:

```bash
npm install
```

4. Open the folder in VS Code.

5. Use Live Server to open `index.html`.

To open the shopping cart, use:

```text
cart/index.html
```

## Running Tests

Run the tests:

```bash
npm test
```

Check code quality:

```bash
npm run lint
```

Check formatting:

```bash
npm run format:check
```

## Test Results

- 6 tests passed.
- 0 tests failed.
- ESLint passed.
- Prettier formatting check passed.

## What I Learned

During this project, I learned how to:

- Organise JavaScript using modules.
- Import and export functions.
- Work with arrays and objects.
- Use Local Storage.
- Manipulate the DOM.
- Write reusable functions.
- Avoid directly modifying original arrays.
- Handle errors and invalid input.
- Write unit tests.
- Use ESLint and Prettier.
- Work with Git branches and Pull Requests.
- Collaborate using GitHub.

## Collaboration

This project was developed as part of IYF Wecan Academy Season 12.

**My Pull Request:**

https://github.com/Anthony-mugwe/iyf-s12-week-07-Anthony-mugwe/pull/1

**Partner's Pull Request:**

Add the link to the Pull Request I reviewed here.

## Author

**Anthony-mugwe**

GitHub: https://github.com/Anthony-mugwe

This project helped me improve my JavaScript skills and understand how to write cleaner, organised and maintainable code.

---

**IYF Wecan Academy – Season 12, Week 7 JavaScript Best Practices Project**
