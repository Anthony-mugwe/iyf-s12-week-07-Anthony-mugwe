// Day 3: Practise object and array destructuring.
const learner = { name: 'Alex', course: 'Web Development', week: 7 };
const { name, course, week } = learner;
const [first, second, ...others] = ['HTML', 'CSS', 'JavaScript', 'Node.js'];
console.log(name, course, week, first, second, others);
