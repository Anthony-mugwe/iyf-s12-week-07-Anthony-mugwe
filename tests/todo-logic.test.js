import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addTask, clearCompleted, countActive, createTask, deleteTask,
  editTask, filterTasks, toggleTask
} from '../js/todo-logic.js';

const sampleTasks = [
  { id: 1, text: 'Learn modules', completed: false },
  { id: 2, text: 'Write tests', completed: true },
  { id: 3, text: 'Review code', completed: false }
];

test('createTask trims text and creates an active task', () => {
  assert.deepEqual(createTask('  Learn testing  ', 10), {
    id: 10, text: 'Learn testing', completed: false
  });
});

test('createTask rejects blank text (edge case)', () => {
  assert.equal(createTask('   ', 11), null);
});

test('toggleTask changes only the selected task', () => {
  const result = toggleTask(sampleTasks, 1);
  assert.equal(result[0].completed, true);
  assert.equal(result[1].completed, true);
  assert.equal(result[2].completed, false);
});

test('addTask does not mutate the original array', () => {
  const original = [...sampleTasks];
  const result = addTask(sampleTasks, createTask('Ship project', 4));
  assert.equal(sampleTasks.length, original.length);
  assert.deepEqual(sampleTasks, original);
  assert.equal(result.length, 4);
});

test('filters return the expected tasks', () => {
  assert.deepEqual(filterTasks(sampleTasks, 'active').map(task => task.id), [1, 3]);
  assert.deepEqual(filterTasks(sampleTasks, 'completed').map(task => task.id), [2]);
  assert.equal(filterTasks(sampleTasks, 'all').length, 3);
});

test('delete, edit, clear completed and active count work', () => {
  assert.deepEqual(deleteTask(sampleTasks, 1).map(task => task.id), [2, 3]);
  assert.equal(editTask(sampleTasks, 1, 'Updated').find(task => task.id === 1).text, 'Updated');
  assert.deepEqual(clearCompleted(sampleTasks).map(task => task.id), [1, 3]);
  assert.equal(countActive(sampleTasks), 2);
});
