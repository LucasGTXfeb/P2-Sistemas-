import React from 'react';
import type { Todo, Priority } from '../types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, updates: { title?: string; priority?: Priority }) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onToggle, 
  onEdit, 
  onDelete 
}) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state" data-testid="todo-empty-state">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
        <p>Nenhuma tarefa encontrada.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Altere os filtros ou adicione tarefas no formulário acima!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list" data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
