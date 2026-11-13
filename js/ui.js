import { countActive, filterTasks } from './todo-logic.js';

export function render(state, elements,_handlers) {
  const visibleTasks = filterTasks(state.tasks, state.filter);
  elements.taskList.replaceChildren();

  visibleTasks.forEach(task => {
    const item = document.createElement('li');
    item.className = `task-item${task.completed ? ' is-completed' : ''}`;
    item.dataset.id = String(task.id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-check';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', `Mark ${task.text} as ${task.completed ? 'active' : 'completed'}`);

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;
    text.title = 'Double-click to edit';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-button';
    deleteButton.textContent = '×';
    deleteButton.setAttribute('aria-label', `Delete ${task.text}`);

    item.append(checkbox, text, deleteButton);
    elements.taskList.append(item);
  });

  const activeCount = countActive(state.tasks);
  elements.itemsLeft.textContent = `${activeCount} ${activeCount === 1 ? 'item' : 'items'} left`;
  elements.taskCount.textContent = `${state.tasks.length} ${state.tasks.length === 1 ? 'task' : 'tasks'}`;
  elements.emptyState.hidden = visibleTasks.length > 0;
  elements.taskList.hidden = visibleTasks.length === 0;

  elements.filterButtons.forEach(button => {
    const selected = button.dataset.filter === state.filter;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  elements.clearCompleted.disabled = !state.tasks.some(task => task.completed);
  elements.clearCompleted.style.opacity = elements.clearCompleted.disabled ? '0.45' : '1';
  elements.clearCompleted.style.cursor = elements.clearCompleted.disabled ? 'not-allowed' : 'pointer';
}

