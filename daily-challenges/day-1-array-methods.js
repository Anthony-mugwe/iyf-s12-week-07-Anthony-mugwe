// Day 1: Use map, filter and reduce with a task list.
const tasks = [
  { title: 'Read modules', done: true },
  { title: 'Write tests', done: false },
  { title: 'Review PR', done: false },
];
const titles = tasks.map(task => task.title);
const unfinished = tasks.filter(task => !task.done);
const completedCount = tasks.reduce((count, task) => count + Number(task.done), 0);
console.log({ titles, unfinished, completedCount });
