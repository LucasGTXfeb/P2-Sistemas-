describe('To-Do List E2E Tests', () => {
  beforeEach(() => {
    // Clear localStorage to ensure a clean state for each test
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('1. Deve exibir a aplicação com o campo de adicionar tarefa visível', () => {
    cy.get('h1').should('contain', 'Gerenciador de Tarefas');
    cy.get('[data-testid="todo-input"]').should('be.visible');
    cy.get('[data-testid="todo-select"]').should('be.visible');
    cy.get('[data-testid="todo-submit"]').should('be.visible');
  });

  it('2. Deve adicionar uma nova tarefa ao preencher o título e clicar em "Adicionar"', () => {
    cy.get('[data-testid="todo-input"]').type('Estudar Cypress');
    cy.get('[data-testid="todo-select"]').select('high');
    cy.get('[data-testid="todo-submit"]').click();

    // Verify task is added to the list
    cy.get('[data-testid="todo-list"]').should('be.visible');
    cy.get('[data-testid="todo-item"]').should('have.length', 1);
    cy.get('[data-testid="todo-title"]').should('contain', 'Estudar Cypress');
  });

  it('3. Não deve adicionar tarefa com título vazio (deve exibir mensagem de erro)', () => {
    // Attempt submit with empty title
    cy.get('[data-testid="todo-submit"]').click();
    
    // Check validation error
    cy.get('[data-testid="todo-error"]')
      .should('be.visible')
      .and('contain', 'O título da tarefa não pode estar vazio.');
  });

  it('4. Deve marcar uma tarefa como concluída ao clicar no checkbox', () => {
    // Add task first
    cy.get('[data-testid="todo-input"]').type('Tarefa para completar');
    cy.get('[data-testid="todo-submit"]').click();

    // Click checkbox
    cy.get('[data-testid="todo-item"]')
      .first()
      .find('[data-testid="todo-checkbox"]')
      .click();

    // Verify list item class changes to completed
    cy.get('[data-testid="todo-item"]').first().should('have.class', 'completed');
  });

  it('5. Deve editar o título de uma tarefa existente', () => {
    // Add task
    cy.get('[data-testid="todo-input"]').type('Título Antigo');
    cy.get('[data-testid="todo-submit"]').click();

    // Click edit
    cy.get('[data-testid="todo-item"]').first().find('[data-testid="todo-edit-btn"]').click();

    // Edit and save
    cy.get('[data-testid="todo-edit-input"]').clear().type('Título Novo');
    cy.get('[data-testid="todo-edit-select"]').select('high');
    cy.get('[data-testid="todo-save-btn"]').click();

    // Verify update
    cy.get('[data-testid="todo-title"]').should('contain', 'Título Novo');
  });

  it('6. Deve excluir uma tarefa ao clicar no botão de excluir', () => {
    // Mock the confirm box to return true
    cy.on('window:confirm', () => true);

    // Add task
    cy.get('[data-testid="todo-input"]').type('Tarefa para Excluir');
    cy.get('[data-testid="todo-submit"]').click();
    cy.get('[data-testid="todo-item"]').should('have.length', 1);

    // Delete task
    cy.get('[data-testid="todo-item"]').first().find('[data-testid="todo-delete-btn"]').click();

    // Verify list is empty
    cy.get('[data-testid="todo-list"]').should('not.exist');
    cy.get('[data-testid="todo-empty-state"]').should('be.visible');
  });

  it('7. Deve filtrar tarefas por status "pendentes" e "concluídas"', () => {
    // Add two tasks
    cy.get('[data-testid="todo-input"]').type('Tarefa Pendente');
    cy.get('[data-testid="todo-submit"]').click();

    cy.get('[data-testid="todo-input"]').type('Tarefa Concluída');
    cy.get('[data-testid="todo-submit"]').click();

    // Mark the second task as completed (added first since new items go to the top)
    cy.get('[data-testid="todo-item"]')
      .first() // Tarefa Concluída is on top
      .find('[data-testid="todo-checkbox"]')
      .click();

    // 1. Filter: Pendentes
    cy.get('[data-testid="filter-pending"]').click();
    cy.get('[data-testid="todo-item"]').should('have.length', 1);
    cy.get('[data-testid="todo-title"]').should('contain', 'Tarefa Pendente');
    cy.get('[data-testid="todo-title"]').should('not.contain', 'Tarefa Concluída');

    // 2. Filter: Concluídas
    cy.get('[data-testid="filter-completed"]').click();
    cy.get('[data-testid="todo-item"]').should('have.length', 1);
    cy.get('[data-testid="todo-title"]').should('contain', 'Tarefa Concluída');
    cy.get('[data-testid="todo-title"]').should('not.contain', 'Tarefa Pendente');

    // 3. Filter: Todas
    cy.get('[data-testid="filter-all"]').click();
    cy.get('[data-testid="todo-item"]').should('have.length', 2);
  });

  it('8. Deve persistir tarefas após recarregar a página (cy.reload)', () => {
    // Add task
    cy.get('[data-testid="todo-input"]').type('Tarefa Persistente');
    cy.get('[data-testid="todo-submit"]').click();

    // Reload page
    cy.reload();

    // Verify task is still present
    cy.get('[data-testid="todo-item"]').should('have.length', 1);
    cy.get('[data-testid="todo-title"]').should('contain', 'Tarefa Persistente');
  });
});
