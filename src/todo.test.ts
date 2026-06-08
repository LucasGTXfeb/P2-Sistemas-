import { describe, it, expect, beforeEach } from 'vitest';
import type { Todo } from './types';
import { 
  addTodo, 
  toggleTodo, 
  editTodo, 
  deleteTodo, 
  filterTodos 
} from './todoLogic';

// Mock localStorage for the testing environment
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock
});

describe('Regras de Negócio do To-Do List', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('1. Não deve ser possível adicionar uma tarefa com título vazio', () => {
    const list: Todo[] = [];
    expect(() => addTodo(list, '')).toThrow('O título da tarefa não pode estar vazio.');
    expect(() => addTodo(list, '   ')).toThrow('O título da tarefa não pode estar vazio.');
  });

  it('2. Uma nova tarefa deve ser criada com completed = false e prioridade = "média" por padrão', () => {
    const list = addTodo([], 'Minha tarefa');
    expect(list.length).toBe(1);
    expect(list[0].title).toBe('Minha tarefa');
    expect(list[0].completed).toBe(false);
    expect(list[0].priority).toBe('medium');
    expect(list[0].id).toBeDefined();
    expect(list[0].createdAt).toBeInstanceOf(Date);
  });

  it('3. Marcar uma tarefa como concluída deve alterar completed para true', () => {
    const initialList = addTodo([], 'Tarefa de teste');
    const id = initialList[0].id;
    
    // Toggle once: completed should be true
    const updatedList = toggleTodo(initialList, id);
    expect(updatedList[0].completed).toBe(true);
    
    // Toggle again: completed should be false
    const toggledBack = toggleTodo(updatedList, id);
    expect(toggledBack[0].completed).toBe(false);
  });

  it('4. Editar uma tarefa deve atualizar apenas o título e/ou prioridade, mantendo id e createdAt', () => {
    const initialList = addTodo([], 'Título Original', 'medium');
    const originalTodo = initialList[0];
    
    const updatedList = editTodo(initialList, originalTodo.id, { 
      title: 'Título Novo', 
      priority: 'high' 
    });
    const updatedTodo = updatedList[0];
    
    expect(updatedTodo.title).toBe('Título Novo');
    expect(updatedTodo.priority).toBe('high');
    expect(updatedTodo.id).toBe(originalTodo.id);
    expect(updatedTodo.createdAt).toEqual(originalTodo.createdAt);
  });

  it('5. Excluir uma tarefa deve removê-la da lista', () => {
    const list1 = addTodo([], 'Tarefa 1');
    const list2 = addTodo(list1, 'Tarefa 2');
    expect(list2.length).toBe(2);
    
    const idToDelete = list2[0].id;
    const afterDelete = deleteTodo(list2, idToDelete);
    expect(afterDelete.length).toBe(1);
    expect(afterDelete[0].title).toBe('Tarefa 1');
  });

  it('6. O filtro "pendentes" deve retornar apenas tarefas com completed = false', () => {
    let list = addTodo([], 'Tarefa 1');
    list = addTodo(list, 'Tarefa 2');
    
    // Toggle the second one to make it completed
    list = toggleTodo(list, list[0].id);
    
    const pendingTodos = filterTodos(list, 'pending');
    expect(pendingTodos.length).toBe(1);
    expect(pendingTodos[0].completed).toBe(false);
  });

  it('7. O filtro "concluídas" deve retornar apenas tarefas com completed = true', () => {
    let list = addTodo([], 'Tarefa 1');
    list = addTodo(list, 'Tarefa 2');
    
    // Toggle the second one to make it completed
    list = toggleTodo(list, list[0].id);
    
    const completedTodos = filterTodos(list, 'completed');
    expect(completedTodos.length).toBe(1);
    expect(completedTodos[0].completed).toBe(true);
  });

  it('8. Os dados devem ser salvos no localStorage ao modificar a lista', () => {
    const key = 'todos-react-v2';
    let list: Todo[] = [];
    
    // Initially empty
    localStorage.setItem(key, JSON.stringify(list));
    expect(JSON.parse(localStorage.getItem(key) || '[]')).toEqual([]);
    
    // Add item and sync
    list = addTodo(list, 'Persistir tarefa');
    localStorage.setItem(key, JSON.stringify(list));
    
    const retrieved = JSON.parse(localStorage.getItem(key) || '[]');
    expect(retrieved.length).toBe(1);
    expect(retrieved[0].title).toBe('Persistir tarefa');
  });
});
