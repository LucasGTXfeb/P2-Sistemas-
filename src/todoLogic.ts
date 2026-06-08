import type { Todo, Priority } from './types';

// Rule 1 & 2: Add a task, checking title validation and applying defaults
export function addTodo(todos: Todo[], title: string, priority: Priority = 'medium'): Todo[] {
  const trimmed = title.trim();
  if (!trimmed) {
    throw new Error('O título da tarefa não pode estar vazio.');
  }
  const newTodo: Todo = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
    title: trimmed,
    completed: false,
    priority,
    createdAt: new Date()
  };
  return [newTodo, ...todos];
}

// Rule 3: Toggle completed status
export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

// Rule 4: Edit title and/or priority, keeping id and createdAt intact
export function editTodo(
  todos: Todo[],
  id: string,
  updates: { title?: string; priority?: Priority }
): Todo[] {
  if (updates.title !== undefined) {
    const trimmed = updates.title.trim();
    if (!trimmed) {
      throw new Error('O título da tarefa não pode estar vazio.');
    }
  }

  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title: updates.title !== undefined ? updates.title.trim() : todo.title,
        priority: updates.priority !== undefined ? updates.priority : todo.priority
      };
    }
    return todo;
  });
}

// Rule 5: Delete task
export function deleteTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}

// Rule 6 & 7: Filter tasks by status
export function filterTodos(
  todos: Todo[],
  filter: 'all' | 'pending' | 'completed'
): Todo[] {
  if (filter === 'pending') {
    return todos.filter((todo) => !todo.completed);
  }
  if (filter === 'completed') {
    return todos.filter((todo) => todo.completed);
  }
  return todos;
}
