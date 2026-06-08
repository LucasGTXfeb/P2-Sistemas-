## Context

Estamos migrando a arquitetura proposta para usar React com Vite e TypeScript no lado do cliente. O projeto continuará sendo executado inteiramente no navegador, aproveitando os recursos do React para gerenciamento de estado declarativo.

## Goals / Non-Goals

**Goals:**
- Criar um aplicativo To-Do List em React com Vite e TypeScript.
- Dividir a aplicação nos componentes: `App.tsx`, `TodoForm.tsx`, `TodoList.tsx` e `TodoItem.tsx`.
- Usar `useState` para gerenciar o estado das tarefas.
- Persistir as tarefas no `localStorage`.
- Garantir que cada tarefa tenha os campos: `id (uuid)`, `title (string)`, `completed (boolean)`, `createdAt (Date)`.

**Non-Goals:**
- Autenticação de múltiplos usuários.
- Sincronização de tarefas com uma API externa.

## Decisions

- **Tech Stack**: React 18+, Vite, TypeScript.
  - *Rationale*: Fornece um ambiente de desenvolvimento rápido e tipagem estática segura para o projeto.
- **Componentes**:
  - `App.tsx`: Gerencia o estado global (lista de tarefas), manipula a persistência no `localStorage` e renderiza o layout principal.
  - `TodoForm.tsx`: Componente de entrada para cadastro de tarefas com validação local.
  - `TodoList.tsx`: Contêiner que recebe e renderiza a lista de tarefas.
  - `TodoItem.tsx`: Exibe cada tarefa com sua respectiva estilização (pendente/concluída) e manipula o evento de clique/checkbox para conclusão.
- **Geração de IDs**: `crypto.randomUUID()`.
  - *Rationale*: Nativo e seguro no navegador moderno, eliminando a necessidade de pacotes externos como `uuid`.
- **Styling**: CSS Puro com design moderno (sleek dark mode, glassmorphism e micro-animações).

## Risks / Trade-offs

- **Risk**: Perda de dados se o `localStorage` for limpo pelo usuário.
  - *Mitigation*: Comportamento aceitável para uma aplicação client-side simples.
