## Context

Estamos evoluindo o gerenciador de tarefas para dar maior controle aos usuários. O aplicativo continuará sendo inteiramente executado no lado do cliente (React + Vite + TypeScript) e persistirá dados no `localStorage`. Adicionalmente, extrairemos a lógica principal em funções puras para facilitar os testes unitários com o Vitest.

## Goals / Non-Goals

**Goals:**
- Adicionar suporte a prioridade nas tarefas: `'low' | 'medium' | 'high'`.
- Adicionar filtragem de tarefas na interface: todas, pendentes, concluídas.
- Suportar edição inline ou em card dos dados da tarefa (título e prioridade) com validação local.
- Suportar exclusão definitiva com pop-up de confirmação do navegador (`window.confirm`).
- Persistir automaticamente alterações no `localStorage`.
- **Lógica Pura**: Extrair funções de negócio para o arquivo `src/todoLogic.ts` (`addTodo`, `toggleTodo`, `editTodo`, `deleteTodo`, `filterTodos`).
- **Testes Unitários**: Escrever testes para as regras de negócio em `src/todo.test.ts` usando Vitest.

**Non-Goals:**
- Armazenamento em nuvem ou bancos de dados remotos.

## Decisions

- **Modificações nos Tipos**:
  - A interface `Todo` será atualizada para incluir a propriedade `priority: 'low' | 'medium' | 'high'`.
- **Separação de Lógica de Negócio**:
  - `todoLogic.ts`: Conterá funções puras e testáveis para manipulação da lista de tarefas.
- **Modificações no Estado**:
  - `App.tsx` utilizará as funções puras de `todoLogic.ts` para atualizar o estado global `todos` e persistirá no `localStorage`.
- **Layout dos Componentes**:
  - `TodoForm`: Recebe um dropdown para selecionar a prioridade ao criar.
  - `TodoFilter`: Componente ou botões para alternar o filtro ativo.
  - `TodoItem`: Ganhará um estado interno `isEditing` para alternar entre visualização e formulário de edição (com input de texto e select de prioridade).
- **Estilização Visual**:
  - Cores diferenciadas e sutis para marcar as prioridades (Baixa = azul/ciano, Média = violeta/indigo, Alta = vermelho/rosa).
  - Animações para transição de estados e fade-in das tarefas filtradas.

## Risks / Trade-offs

- **Decisão de Edição Inline**:
  - *Trade-off*: A edição inline adiciona estado interno complexo a cada `TodoItem.tsx`, mas evita pop-ups intrusivos e melhora a experiência visual do usuário.
