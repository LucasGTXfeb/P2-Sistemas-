import { useState, useEffect } from 'react';
import type { Todo, Priority } from './types';
import { 
  addTodo, 
  toggleTodo, 
  editTodo, 
  deleteTodo, 
  filterTodos 
} from './todoLogic';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';

type FilterType = 'all' | 'pending' | 'completed';

function App() {
  const [filter, setFilter] = useState<FilterType>('all');
  
  // Load initial state from localStorage (converting dates back to Date objects)
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos-react-v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (e) {
        console.error("Erro ao ler tarefas do localStorage:", e);
        return [];
      }
    }
    return [];
  });

  // Sync state with localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos-react-v2', JSON.stringify(todos));
  }, [todos]);

  // Handler to add a new todo
  const handleAddTodo = (title: string, priority: Priority) => {
    try {
      setTodos((prevTodos) => addTodo(prevTodos, title, priority));
    } catch (e: any) {
      console.error(e.message);
    }
  };

  // Handler to toggle todo completion status
  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) => toggleTodo(prevTodos, id));
  };

  // Handler to edit an existing todo
  const handleEditTodo = (id: string, updates: { title?: string; priority?: Priority }) => {
    try {
      setTodos((prevTodos) => editTodo(prevTodos, id, updates));
    } catch (e: any) {
      console.error(e.message);
    }
  };

  // Handler to delete a todo
  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, id));
  };

  // Compute filtered list to render
  const filteredTodos = filterTodos(todos, filter);

  return (
    <main className="app-container">
      <header>
        <h1>Gerenciador de Tarefas</h1>
        <p>Organize suas atividades diárias com facilidade (v2)</p>
      </header>
      
      <TodoForm onAdd={handleAddTodo} />
      
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      
      <TodoList 
        todos={filteredTodos} 
        onToggle={handleToggleTodo} 
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
      />
    </main>
  );
}

export default App;
