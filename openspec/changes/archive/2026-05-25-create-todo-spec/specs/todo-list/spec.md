## ADDED Requirements

### Requirement: Cadastrar Tarefa
O sistema SHALL permitir que os usuários criem uma nova tarefa inserindo um título descritivo.

#### Scenario: Criando uma tarefa com um título válido
- **WHEN** o usuário insere um título não vazio e envia o formulário
- **THEN** o sistema SHALL criar a tarefa com o status "pendente" e exibi-la imediatamente na listagem.

#### Scenario: Criando uma tarefa com um título vazio
- **WHEN** o usuário tenta enviar uma tarefa sem título (ou apenas com espaços em branco)
- **THEN** o sistema SHALL exibir uma mensagem de erro indicando que o título é obrigatório, e SHALL NOT criar nenhuma tarefa.

### Requirement: Listar Tarefas
O sistema SHALL exibir todas as tarefas cadastradas com seus respectivos títulos e status (pendente ou concluída).

#### Scenario: Visualizando as tarefas na lista
- **WHEN** o usuário acessa a interface de listagem de tarefas
- **THEN** o sistema SHALL renderizar todas as tarefas cadastradas, indicando claramente quais estão pendentes e quais estão concluídas.

### Requirement: Marcar Tarefa como Concluída
O sistema SHALL permitir que os usuários marquem uma tarefa pendente como concluída.

#### Scenario: Marcando uma tarefa pendente como concluída
- **WHEN** o usuário clica no controle de conclusão (checkbox ou botão) de uma tarefa pendente
- **THEN** o sistema SHALL alterar o status da tarefa para "concluída" e atualizar a aparência visual do item na interface de usuário.
