import React from 'react';

type FilterType = 'all' | 'pending' | 'completed';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'pending', label: 'Pendentes' },
    { value: 'completed', label: 'Concluídas' }
  ];

  return (
    <div className="todo-filter-container">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onFilterChange(filter.value)}
          className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
          data-testid={`filter-${filter.value}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
