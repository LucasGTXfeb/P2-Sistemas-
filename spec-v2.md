# Especificação de Requisitos - To-Do List (Versão 2)

## 1. Descrição Geral do Sistema
O To-Do List (Versão 2) é uma evolução do gerenciador de tarefas básico. Além de cadastrar, listar e marcar tarefas como concluídas, a nova versão adiciona suporte à edição e exclusão de tarefas, definição de níveis de prioridade (baixa, média, alta) para cada tarefa, filtragem por status de conclusão e persistência de dados utilizando o armazenamento local do navegador (`localStorage`). O sistema permanece executando exclusivamente no lado do cliente (browser-only).

## 2. Requisitos Funcionais e Regras de Negócio

### RF01 - Cadastrar Tarefas (Evolução)
- **Descrição**: O usuário pode cadastrar uma nova tarefa definindo um título e escolhendo um nível de prioridade.
- **Regras de Negócio**:
  - O título da tarefa é obrigatório (não pode ser vazio ou conter apenas espaços em branco).
  - A prioridade padrão, se não informada explicitamente pelo usuário, deve ser **Média**.
  - O status inicial de qualquer tarefa recém-cadastrada deve ser **Pendente**.

### RF02 - Listar e Filtrar Tarefas (Evolução)
- **Descrição**: O usuário visualiza as tarefas cadastradas e pode filtrar a listagem de acordo com o status.
- **Regras de Negócio**:
  - Os filtros de exibição disponíveis são: **Todas**, **Pendentes** e **Concluídas**.
  - O filtro padrão ativo ao carregar a página deve ser **Todas**.
  - Cada tarefa listada deve exibir seu título, data de criação, status e prioridade de forma legível.

### RF03 - Editar Tarefas (Novo)
- **Descrição**: O usuário pode alterar as informações de uma tarefa existente (título e prioridade).
- **Regras de Negócio**:
  - O título editado não pode ser vazio ou composto apenas por espaços em branco.
  - Ao entrar em modo de edição, os valores atuais da tarefa (título e prioridade) devem ser preenchidos previamente nos campos de entrada.
  - A edição não altera a data de criação original (`createdAt`).

### RF04 - Excluir Tarefas (Novo)
- **Descrição**: O usuário pode remover uma tarefa permanentemente da listagem.
- **Regras de Negócio**:
  - A exclusão é irreversível e deve remover a tarefa imediatamente do estado da aplicação e do armazenamento local.

### RF05 - Marcar Tarefas como Concluídas/Pendentes (Evolução)
- **Descrição**: Permite alternar o status de uma tarefa entre pendente e concluída a qualquer momento por meio de interação visual direta.

### RF06 - Persistência Local (Novo)
- **Descrição**: Os dados das tarefas devem ser persistidos no navegador para que persistam mesmo após atualizações de página ou fechamento da aba/janela.
- **Regras de Negócio**:
  - Qualquer ação que modifique a lista de tarefas (cadastro, edição, alteração de status ou exclusão) deve disparar a atualização automática correspondente no `localStorage`.

---

## 3. Critérios de Aceite e Cenários de Uso

### 3.1. Cadastrar tarefas
- **Critério de Aceite 1**: O formulário deve apresentar uma entrada de texto para o título e um seletor (dropdown ou botões de rádio) para a prioridade (Baixa, Média, Alta), com "Média" selecionada por padrão.
- **Cenário 1 (Happy Path - Cadastro com prioridade padrão)**:
  - **WHEN** o usuário digita "Estudar React" e clica em "Adicionar" sem alterar a prioridade.
  - **THEN** a tarefa deve ser salva com o título "Estudar React", status "Pendente", prioridade "Média" e adicionada à lista.
- **Cenário 2 (Cadastro com prioridade customizada)**:
  - **WHEN** o usuário digita "Comprar café", seleciona prioridade "Alta" e clica em "Adicionar".
  - **THEN** a tarefa deve ser salva com a prioridade "Alta".
- **Cenário 3 (Edge Case - Validação de campo vazio)**:
  - **WHEN** o usuário tenta submeter o formulário sem preencher o título (vazio ou apenas espaços).
  - **THEN** o sistema deve exibir uma indicação visual de erro e impedir a inserção da tarefa.

### 3.2. Editar tarefas
- **Critério de Aceite 1**: Cada tarefa listada deve exibir um botão ou controle para "Editar". Ao clicar, o item deve entrar em modo de edição (exibindo campos de entrada de texto e seleção de prioridade).
- **Cenário 1 (Happy Path - Edição de Título e Prioridade)**:
  - **WHEN** o usuário clica em "Editar" na tarefa "Estudar React", muda o título para "Estudar React Avançado", a prioridade para "Alta" e clica em "Salvar".
  - **THEN** as alterações devem ser refletidas imediatamente na tela e no armazenamento.
- **Cenário 2 (Edge Case - Cancelamento de edição)**:
  - **WHEN** o usuário entra no modo de edição, faz alterações nos campos, mas clica em "Cancelar".
  - **THEN** o modo de edição deve ser fechado e os dados originais da tarefa devem ser restaurados sem nenhuma modificação.
- **Cenário 3 (Edge Case - Validação na edição)**:
  - **WHEN** o usuário edita a tarefa limpando o campo de título e tenta clicar em "Salvar".
  - **THEN** o sistema deve exibir uma indicação visual de erro e manter o modo de edição ativo para que o usuário corrija.

### 3.3. Excluir tarefas
- **Critério de Aceite 1**: Cada tarefa listada deve conter um botão "Excluir".
- **Cenário 1 (Happy Path - Exclusão de tarefa)**:
  - **WHEN** o usuário clica em "Excluir" em qualquer tarefa.
  - **THEN** a tarefa deve ser removida da lista e do armazenamento imediatamente.

### 3.4. Filtrar tarefas
- **Critério de Aceite 1**: A interface do usuário deve possuir controles de filtro visíveis (Todas, Pendentes, Concluídas).
- **Cenário 1 (Filtro de Pendentes)**:
  - **WHEN** o usuário ativa o filtro "Pendentes".
  - **THEN** a listagem deve exibir somente as tarefas com status igual a "Pendente".
- **Cenário 2 (Filtro de Concluídas)**:
  - **WHEN** o usuário ativa o filtro "Concluídas".
  - **THEN** a listagem deve exibir somente as tarefas com status igual a "Concluído".

### 3.5. Persistência local
- **Critério de Aceite 1**: O sistema deve ler os dados do `localStorage` no momento do carregamento inicial.
- **Cenário 1 (Recarregamento da página)**:
  - **WHEN** o usuário atualiza a página (F5) após ter criado e modificado tarefas.
  - **THEN** as tarefas devem ser carregadas e exibidas no mesmo estado de antes do recarregamento.
