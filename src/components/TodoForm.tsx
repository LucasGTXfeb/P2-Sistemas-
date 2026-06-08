import React, { useState } from 'react';
import type { Priority } from '../types';

interface TodoFormProps {
  onAdd: (title: string, priority: Priority) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('O título da tarefa não pode estar vazio.');
      return;
    }

    onAdd(trimmedTitle, priority);
    setTitle('');
    setPriority('medium');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          placeholder="Adicione uma nova tarefa..."
          className="todo-input"
          data-testid="todo-input"
        />
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="todo-select"
          aria-label="Prioridade da tarefa"
          data-testid="todo-select"
        >
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>

        <button type="submit" className="add-button" data-testid="todo-submit">
          Adicionar
        </button>
      </div>
      {error && (
        <span className="error-message" data-testid="todo-error">
          {error}
        </span>
      )}
    </form>
  );
};
