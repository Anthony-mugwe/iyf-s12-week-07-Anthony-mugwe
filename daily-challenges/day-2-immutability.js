// Day 2: Update arrays without changing the original.
const original = ['HTML', 'CSS', 'JavaScript'];
const updated = [...original, 'Node.js'];
const renamed = updated.map(item => item === 'CSS' ? 'Modern CSS' : item);
console.log({ original, renamed });
