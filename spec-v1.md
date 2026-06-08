# Especificação de Requisitos - To-Do List (Versão 1)

## 1. Descrição Geral do Sistema
O To-Do List é um gerenciador de tarefas simples projetado para auxiliar usuários na organização de suas atividades diárias. O sistema funciona inteiramente no navegador web (client-side), permitindo a criação rápida de tarefas, visualização de itens cadastrados e o controle de status de cada atividade.

## 2. Requisitos Funcionais
O sistema deve contemplar os seguintes requisitos funcionais na versão 1:
- **RF01 - Cadastrar tarefas**: O usuário deve conseguir adicionar uma nova tarefa informando um título descritivo.
- **RF02 - Listar tarefas**: O sistema deve exibir todas as tarefas cadastradas na interface do usuário.
- **RF03 - Marcar tarefas como concluídas**: O usuário deve conseguir alterar o status de uma tarefa pendente para concluída.

## 3. Critérios de Aceite por Funcionalidade

### 3.1. Cadastrar tarefas
- **Critério de Aceite 1**: O formulário de cadastro de tarefas deve conter um campo de entrada de texto para o título da tarefa e um botão para submissão.
- **Critério de Aceite 2**: Ao submeter um título válido (não vazio), o sistema deve registrar a tarefa com o status inicial "Pendente" e adicioná-la imediatamente à listagem.
- **Critério de Aceite 3**: Caso o usuário tente cadastrar uma tarefa sem título (vazia ou contendo apenas espaços em branco), o sistema deve exibir uma indicação de erro e não deve registrar a tarefa na lista.

### 3.2. Listar tarefas
- **Critério de Aceite 1**: A listagem de tarefas deve exibir o título e o status (Pendente ou Concluída) de cada tarefa cadastrada.
- **Critério de Aceite 2**: Se não houver tarefas cadastradas, o sistema deve apresentar uma mensagem indicando que a lista está vazia.
- **Critério de Aceite 3**: Tarefas que forem marcadas como concluídas devem ter uma distinção visual clara (como texto riscado ou opacidade reduzida).

### 3.3. Marcar tarefas como concluídas
- **Critério de Aceite 1**: Cada tarefa pendente listada deve possuir um botão ou checkbox interativo que permita a alteração do seu estado.
- **Critério de Aceite 2**: Ao clicar no controle de status de uma tarefa pendente, seu estado interno deve ser modificado para "Concluída" e a interface deve atualizar sua visualização instantaneamente.
- **Critério de Aceite 3**: O estado concluído deve ser persistido enquanto durar a sessão do usuário.
