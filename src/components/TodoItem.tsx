import React, { useState } from 'react';
import type { Todo, Priority } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, updates: { title?: string; priority?: Priority }) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ 
  todo, 
  onToggle, 
  onEdit, 
  onDelete 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editPriority, setEditPriority] = useState<Priority>(todo.priority);
  const [error, setError] = useState('');

  // Format creation date in Portuguese
  const formatDate = (date: Date) => {
    try {
      const d = typeof date === 'string' ? new Date(date) : date;
      return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '';
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = editTitle.trim();
    if (!trimmed) {
      setError('O título da tarefa não pode estar vazio.');
      return;
    }

    onEdit(todo.id, { title: trimmed, priority: editPriority });
    setIsEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(todo.title);
    setEditPriority(todo.priority);
    setError('');
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling the todo status
    const confirmed = window.confirm(`Tem certeza de que deseja excluir a tarefa "${todo.title}"?`);
    if (confirmed) {
      onDelete(todo.id);
    }
  };

  // Label and styling mapping for priorities
  const priorityLabels = {
    low: 'Baixa',
    medium: 'Média',
    high: 'Alta'
  };

  if (isEditing) {
    return (
      <li 
        className="todo-item editing-mode" 
        onClick={(e) => e.stopPropagation()}
        data-testid="todo-item"
      >
        <form onSubmit={handleSave} className="edit-form">
          <div className="edit-fields-row">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
                if (error) setError('');
              }}
              className="todo-input edit-input"
              placeholder="Editar título da tarefa..."
              autoFocus
              data-testid="todo-edit-input"
            />
            
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value as Priority)}
              className="todo-select edit-select"
              aria-label="Editar prioridade"
              data-testid="todo-edit-select"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>
          
          {error && <span className="error-message" data-testid="todo-error">{error}</span>}
          
          <div className="edit-actions-row">
            <button type="submit" className="action-button save-button" data-testid="todo-save-btn">
              Salvar
            </button>
            <button type="button" onClick={handleCancel} className="action-button cancel-button" data-testid="todo-cancel-btn">
              Cancelar
            </button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => onToggle(todo.id)}
      data-testid="todo-item"
    >
      <div className="todo-item-content">
        <span className="custom-checkbox" aria-hidden="true" data-testid="todo-checkbox" />
        <div className="todo-details">
          <div className="todo-title-row">
            <span className="todo-title" data-testid="todo-title">{todo.title}</span>
            <span className={`priority-badge priority-${todo.priority}`}>
              {priorityLabels[todo.priority]}
            </span>
          </div>
          <div className="todo-meta">
            Criado em: {formatDate(todo.createdAt)}
          </div>
        </div>
      </div>
      
      <div className="todo-actions" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={() => setIsEditing(true)} 
          className="icon-button edit-icon-btn"
          title="Editar tarefa"
          data-testid="todo-edit-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
          </svg>
        </button>
        <button 
          onClick={handleDelete} 
          className="icon-button delete-icon-btn"
          title="Excluir tarefa"
          data-testid="todo-delete-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          </svg>
        </button>
      </div>
    </li>
  );
};
