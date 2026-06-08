## ADDED Requirements

### Requirement: E2E Test Suite
O sistema SHALL possuir uma suíte de testes de ponta a ponta que execute as ações do usuário em um navegador real e valide o fluxo completo de gerenciamento de tarefas.

#### Scenario: Visualizando a aplicação inicial
- **WHEN** o usuário acessa o aplicativo To-Do List no navegador
- **THEN** o sistema SHALL carregar a interface e exibir o campo de entrada de tarefas visível.

#### Scenario: Adicionando uma nova tarefa
- **WHEN** o usuário digita um título de tarefa válido, seleciona uma prioridade e clica em adicionar
- **THEN** o sistema SHALL incluir a tarefa na listagem com o título e prioridade corretos.

#### Scenario: Bloqueando tarefa sem título
- **WHEN** o usuário tenta cadastrar uma tarefa sem título
- **THEN** o sistema SHALL exibir uma mensagem de erro na tela e SHALL NOT registrar a tarefa na lista.

#### Scenario: Concluindo uma tarefa
- **WHEN** o usuário clica no checkbox ou toggle de uma tarefa pendente
- **THEN** o sistema SHALL atualizar a tarefa alterando visualmente seu estado para concluída.

#### Scenario: Editando uma tarefa existente
- **WHEN** o usuário clica em editar, altera o título para um valor válido e clica em salvar
- **THEN** o sistema SHALL exibir a tarefa com o novo título na tela.

#### Scenario: Excluindo uma tarefa
- **WHEN** o usuário clica em excluir e confirma a exclusão
- **THEN** o sistema SHALL remover a tarefa permanentemente da listagem.

#### Scenario: Filtrando tarefas por status
- **WHEN** o usuário alterna os botões de filtro entre Todas, Pendentes e Concluídas
- **THEN** o sistema SHALL exibir apenas as tarefas que correspondem ao filtro ativo.

#### Scenario: Persistindo tarefas ao atualizar
- **WHEN** o usuário realiza alterações na lista e recarrega a página
- **THEN** o sistema SHALL carregar a listagem com os dados restaurados do localStorage no mesmo estado.
