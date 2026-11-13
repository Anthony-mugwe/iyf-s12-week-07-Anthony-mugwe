// Day 5: Export a helper and import it from another module.
// In a browser, use <script type="module"> and serve the folder with Live Server.
export function greet(name) {
  return `Keep going, ${name}!`;
}

console.log(greet('Anthony'));
