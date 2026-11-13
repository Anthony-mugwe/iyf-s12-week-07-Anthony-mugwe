const STORAGE_KEY = 'taskflowTasks';
const FILTER_KEY = 'taskflowFilter';

function isValidTask(task) {
  return (
    task !== null &&
    typeof task === 'object' &&
    (typeof task.id === 'string' || typeof task.id === 'number') &&
    typeof task.text === 'string' &&
    typeof task.completed === 'boolean'
  );
}

export function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidTask);
  } catch (error) {
    console.warn('Saved tasks could not be read. Starting with an empty list.', error);
    return [];
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error('Tasks could not be saved:', error);
    return false;
  }
}

export function loadFilter() {
  try {
    const saved = localStorage.getItem(FILTER_KEY);
    return ['all', 'active', 'completed'].includes(saved) ? saved : 'all';
  } catch (error) {
    console.warn('Saved filter could not be read:', error);
    return 'all';
  }
}

export function saveFilter(filter) {
  try {
    localStorage.setItem(FILTER_KEY, filter);
  } catch (error) {
    console.error('Filter could not be saved:', error);
  }
}
