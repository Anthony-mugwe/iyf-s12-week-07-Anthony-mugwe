import { loadFilter, loadTasks, saveFilter, saveTasks } from './storage.js';

export const state = {
  tasks: loadTasks(),
  filter: loadFilter()
};

export function updateTasks(nextTasks) {
  state.tasks = nextTasks;
  saveTasks(state.tasks);
}

export function updateFilter(nextFilter) {
  state.filter = nextFilter;
  saveFilter(state.filter);
}
