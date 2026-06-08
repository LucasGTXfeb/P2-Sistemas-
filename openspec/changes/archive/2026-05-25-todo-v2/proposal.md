## Why

Evoluir a aplicação To-Do List para a versão 2, adicionando novos recursos como edição, exclusão, priorização e filtragem de tarefas, aumentando a utilidade e controle sobre o gerenciamento de tarefas pessoais.

## What Changes

- Permitir a edição de tarefas existentes (modificação do título e da prioridade).
- Permitir a exclusão de tarefas.
- Introduzir prioridades às tarefas (Baixa, Média, Alta) com prioridade padrão "Média".
- Adicionar filtros por status de conclusão (Todas, Pendentes, Concluídas).
- Implementar validação robusta para impedir tarefas sem título em fluxos de criação e edição.
- Persistir dados no localStorage de forma transparente.

## Capabilities

### New Capabilities

### Modified Capabilities
- `todo-list`: Evolução do fluxo e dos atributos das tarefas (adição de prioridade, botões de ação adicionais como editar e excluir, filtragem por status e persistência de dados no localStorage).

## Impact

- Frontend:
  - Adição de seletores de prioridade no formulário de criação de tarefas.
  - Adição de botões de controle de filtro na parte superior da listagem.
  - Implementação de estados de edição (inline ou formulário de edição) em cada item de tarefa.
- Tipos:
  - Extensão do tipo `Todo` para incluir o atributo `priority` (tipo `'low' | 'medium' | 'high'`).
