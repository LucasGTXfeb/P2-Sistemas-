## Context

Para garantir a qualidade e corretude da aplicação To-Do List, implementaremos testes de ponta a ponta (E2E) com Cypress. Os testes rodarão contra o servidor local de desenvolvimento e simularão as ações do usuário.

## Goals / Non-Goals

**Goals:**
- Configurar o Cypress no projeto React + Vite + TS.
- Adicionar seletores semanticamente estáveis (`data-testid`) nos componentes React.
- Escrever testes E2E completos cobrindo os fluxos descritos na especificação.

**Non-Goals:**
- Configurar servidores CI/CD complexos neste momento.
- Testar APIs externas ou banco de dados.

## Decisions

- **Framework**: Cypress (instalado como devDependency).
- **Estratégia de Seletores**: Adição de atributos `data-testid` para isolar os testes do layout e estilo visual da página.
  - *Seletor do formulário de criação*:
    - Input de título: `data-testid="todo-input"`
    - Select de prioridade: `data-testid="todo-select"`
    - Botão de adicionar: `data-testid="todo-submit"`
    - Mensagem de erro: `data-testid="todo-error"`
  - *Seletor de filtros*:
    - Botão de filtro Todas: `data-testid="filter-all"`
    - Botão de filtro Pendentes: `data-testid="filter-pending"`
    - Botão de filtro Concluídas: `data-testid="filter-completed"`
  - *Seletores do item de tarefa*:
    - Elemento do item: `data-testid="todo-item"`
    - Título da tarefa: `data-testid="todo-title"`
    - Checkbox de conclusão: `data-testid="todo-checkbox"`
    - Botão editar: `data-testid="todo-edit-btn"`
    - Botão excluir: `data-testid="todo-delete-btn"`
    - Input de edição inline: `data-testid="todo-edit-input"`
    - Select de edição inline: `data-testid="todo-edit-select"`
    - Botão salvar edição: `data-testid="todo-save-btn"`
    - Botão cancelar edição: `data-testid="todo-cancel-btn"`
- **Configuração do Cypress**:
  - `cypress.config.ts` com `baseUrl` apontando para `http://localhost:5173` (porta padrão do Vite).

## Risks / Trade-offs

- **Risk**: Concorrência de portas no localhost.
  - *Mitigation*: O Cypress será executado após a inicialização do Vite, lendo a porta padrão configurada.
