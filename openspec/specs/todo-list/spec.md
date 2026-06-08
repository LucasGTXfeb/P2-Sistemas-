# todo-list Specification

## Purpose
TBD - created by archiving change create-todo-spec. Update Purpose after archive.
## Requirements
### Requirement: Cadastrar Tarefa
O sistema SHALL permitir que os usuários criem uma nova tarefa inserindo um título descritivo e definindo uma prioridade.

#### Scenario: Criando uma tarefa com um título válido e prioridade padrão
- **WHEN** o usuário insere um título não vazio, deixa a prioridade padrão e envia o formulário
- **THEN** o sistema SHALL criar a tarefa com o status "pendente", prioridade "média" e exibi-la imediatamente na listagem.

#### Scenario: Criando uma tarefa com um título válido e prioridade definida
- **WHEN** o usuário insere um título não vazio, seleciona prioridade "alta" e envia o formulário
- **THEN** o sistema SHALL criar a tarefa com o status "pendente", prioridade "alta" e exibi-la na listagem.

#### Scenario: Criando uma tarefa com um título vazio
- **WHEN** o usuário tenta enviar uma tarefa sem título (ou apenas com espaços em branco)
- **THEN** o sistema SHALL exibir uma mensagem de erro indicando que o título é obrigatório, e SHALL NOT criar nenhuma tarefa.

### Requirement: Listar Tarefas
O sistema SHALL exibir todas as tarefas cadastradas com seus respectivos títulos, status (pendente ou concluída) e prioridade. O sistema SHALL permitir filtrar as tarefas exibidas pelo seu status.

#### Scenario: Visualizando as tarefas na lista com filtro de pendentes
- **WHEN** o usuário ativa o filtro "Pendentes"
- **THEN** o sistema SHALL exibir na tela somente as tarefas que possuam status "pendente".

#### Scenario: Visualizando as tarefas na lista com filtro de concluídas
- **WHEN** o usuário ativa o filtro "Concluídas"
- **THEN** o sistema SHALL exibir na tela somente as tarefas que possuam status "concluída".

### Requirement: Marcar Tarefa como Concluída
O sistema SHALL permitir que os usuários marquem uma tarefa pendente como concluída.

#### Scenario: Marcando uma tarefa pendente como concluída
- **WHEN** o usuário clica no controle de conclusão (checkbox ou botão) de uma tarefa pendente
- **THEN** o sistema SHALL alterar o status da tarefa para "concluída" e atualizar a aparência visual do item na interface de usuário.

### Requirement: Editar Tarefa
O sistema SHALL permitir que o usuário edite o título e a prioridade de uma tarefa existente.

#### Scenario: Editando uma tarefa existente com título válido
- **WHEN** o usuário clica em editar uma tarefa, insere um novo título válido, altera a prioridade e clica em salvar
- **THEN** o sistema SHALL atualizar os dados da tarefa e exibi-la atualizada na tela.

#### Scenario: Cancelando a edição de uma tarefa
- **WHEN** o usuário entra no modo de edição, altera as informações e clica em cancelar
- **THEN** o sistema SHALL encerrar o modo de edição e restaurar as informações anteriores da tarefa.

#### Scenario: Editando uma tarefa existente com título vazio
- **WHEN** o usuário limpa o título da tarefa em edição e clica em salvar
- **THEN** o sistema SHALL exibir uma mensagem de erro na edição e SHALL NOT salvar a alteração.

### Requirement: Excluir Tarefa
O sistema SHALL permitir que o usuário exclua permanentemente uma tarefa cadastrada.

#### Scenario: Excluindo uma tarefa existente com confirmação
- **WHEN** o usuário clica em excluir uma tarefa e confirma a ação no alerta do navegador
- **THEN** o sistema SHALL remover a tarefa permanentemente da listagem e do armazenamento.

### Requirement: Persistir Tarefas
O sistema SHALL persistir o estado das tarefas localmente.

#### Scenario: Carregando a aplicação com tarefas salvas
- **WHEN** a aplicação é iniciada e existem tarefas gravadas no localStorage
- **THEN** o sistema SHALL carregar e exibir as tarefas salvas em seus respectivos estados.

