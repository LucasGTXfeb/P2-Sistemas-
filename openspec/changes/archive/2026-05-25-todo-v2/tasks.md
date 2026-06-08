## 1. Configurações de Tipos e Formulário

- [x] 1.1 Atualizar a interface `Todo` no arquivo `src/types.ts` para incluir a propriedade `priority`
- [x] 1.2 Atualizar o formulário `TodoForm.tsx` com o campo `<select>` de prioridade e validação de título vazio

## 2. Filtros e Lista

- [x] 2.1 Criar o componente de filtragem de tarefas no topo da listagem
- [x] 2.2 Atualizar o `TodoList.tsx` para dar suporte aos novos manipuladores de edição e exclusão

## 3. Ações e Item de Tarefa

- [x] 3.1 Atualizar `TodoItem.tsx` para suportar o estado de edição inline (campos de input e seletor de prioridade)
- [x] 3.2 Implementar visualização dos badges de prioridade e do botão de exclusão no item da tarefa

## 4. Estado Global e Estilização

- [x] 4.1 Atualizar `App.tsx` com os manipuladores globais de edição, exclusão e filtragem de status
- [x] 4.2 Ajustar o `index.css` com novos estilos para os filtros, badges de prioridade e campos de edição inline

## 5. Lógica de Negócio e Testes Unitários

- [x] 5.1 Criar o arquivo `src/todoLogic.ts` contendo as funções puras de negócio (`addTodo`, `toggleTodo`, `editTodo`, `deleteTodo`, `filterTodos`)
- [x] 5.2 Instalar o `vitest` como dependência de desenvolvimento no projeto
- [x] 5.3 Criar o arquivo de testes `src/todo.test.ts` e implementar os testes correspondentes para as 8 regras de negócio informadas
