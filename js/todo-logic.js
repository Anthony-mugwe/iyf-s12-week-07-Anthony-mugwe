// Pure task operations: no DOM access and no localStorage.
export function createTask(text, id = Date.now()) {
  const cleanText = String(text).trim();
  if (!cleanText) return null;
  return { id, text: cleanText, completed: false };
}

export function addTask(tasks, task) {
  if (!task) return [...tasks];
  return [...tasks, task];
}

export function toggleTask(tasks, id) {
  return tasks.map(task => task.id === id
    ? { ...task, completed: !task.completed }
    : task);
}

export function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

export function clearCompleted(tasks) {
  return tasks.filter(task => !task.completed);
}

export function editTask(tasks, id, text) {
  const cleanText = String(text).trim();
  if (!cleanText) return [...tasks];
  return tasks.map(task => task.id === id ? { ...task, text: cleanText } : task);
}

export function filterTasks(tasks, filter = 'all') {
  if (filter === 'active') return tasks.filter(task => !task.completed);
  if (filter === 'completed') return tasks.filter(task => task.completed);
  return [...tasks];
}

export function countActive(tasks) {
  return tasks.filter(task => !task.completed).length;
}
