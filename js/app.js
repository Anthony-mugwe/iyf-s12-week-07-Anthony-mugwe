import { state, updateTasks, updateFilter } from './state.js';

import {
  createTask,
  addTask,
  toggleTask,
  deleteTask,
  clearCompleted,
  editTask,
} from './todo-logic.js';

import { render } from './ui.js';

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const message = document.querySelector('#form-message');
const itemsLeft = document.querySelector('#items-left');
const emptyState = document.querySelector('#empty-message');
const clearButton = document.querySelector('#clear-completed');
const filterButtons = document.querySelectorAll('.filter-button');
const taskCount = document.querySelector('#task-count');

const elements = {
  taskList,
  itemsLeft,
  emptyState,
  clearCompleted: clearButton,
  filterButtons,
  taskCount,
};

let editingTaskId = null;

function renderTasks() {
  render(state, elements);
}

function handleAddTask(event) {
  event.preventDefault();

  const task = createTask(input.value);

  if (!task) {
    message.textContent = 'Please enter a valid task.';
    input.focus();
    return;
  }

  updateTasks(addTask(state.tasks, task));

  message.textContent = '';
  input.value = '';
  input.focus();

  renderTasks();
}

function getTaskId(element) {
  const taskItem = element.closest('.task-item');

  if (!taskItem || !taskList.contains(taskItem)) {
    return null;
  }

  return taskItem.dataset.id;
}

function handleTaskClick(event) {
  const target = event.target;
  const taskId = getTaskId(target);

  if (taskId === null) return;

  const id = Number(taskId);

  if (target.closest('.delete-button')) {
    updateTasks(deleteTask(state.tasks, id));

    if (String(editingTaskId) === String(id)) {
      editingTaskId = null;
    }

    message.textContent = '';
    renderTasks();
    return;
  }

  if (target.closest('.task-check')) {
    updateTasks(toggleTask(state.tasks, id));
    renderTasks();
    return;
  }

  if (target.closest('.edit-button')) {
    startEditing(id);
  }
}

function startEditing(id) {
  const task = state.tasks.find((item) => String(item.id) === String(id));

  if (!task) return;

  editingTaskId = task.id;
  renderTasks();

  const taskItem = taskList.querySelector(`[data-id="${task.id}"]`);

  if (!taskItem) return;

  const oldText = taskItem.querySelector('.task-text');

  if (!oldText) return;

  const editor = document.createElement('input');

  editor.type = 'text';
  editor.className = 'edit-input';
  editor.maxLength = 200;
  editor.value = task.text;
  editor.setAttribute('aria-label', 'Edit task');

  oldText.replaceWith(editor);

  editor.focus();
  editor.select();
}

function saveEdit(id, text) {
  const task = state.tasks.find((item) => String(item.id) === String(id));

  if (!task) return;

  if (!text.trim()) {
    message.textContent = 'A task cannot be empty.';
    editingTaskId = null;
    renderTasks();
    return;
  }

  updateTasks(editTask(state.tasks, task.id, text));

  editingTaskId = null;
  message.textContent = '';

  renderTasks();
}

function handleTaskKeydown(event) {
  if (!event.target.matches('.edit-input')) return;

  const taskId = getTaskId(event.target);

  if (taskId === null) return;

  const id = Number(taskId);

  if (event.key === 'Enter') {
    event.preventDefault();
    saveEdit(id, event.target.value);
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    editingTaskId = null;
    message.textContent = '';
    renderTasks();
  }
}

function handleFilterClick(event) {
  const button = event.target.closest('.filter-button');

  if (!button) return;

  const selectedFilter = button.dataset.filter;

  if (!['all', 'active', 'completed'].includes(selectedFilter)) {
    return;
  }

  updateFilter(selectedFilter);
  renderTasks();
}

function handleClearCompleted() {
  updateTasks(clearCompleted(state.tasks));

  editingTaskId = null;
  message.textContent = '';

  renderTasks();
}

form.addEventListener('submit', handleAddTask);
taskList.addEventListener('click', handleTaskClick);
taskList.addEventListener('keydown', handleTaskKeydown);

filterButtons.forEach((button) => {
  button.addEventListener('click', handleFilterClick);
});

clearButton.addEventListener('click', handleClearCompleted);

renderTasks();
