describe('Login', () => {
  beforeEach(() => {
    cy.viewport(1280,820)
    cy.visit("https://www.demoblaze.com")
  })

  it('Inicio de sesion ', () => {

    //Ingreso a modal de inicio de sesion
    cy.get('[data-target="#logInModal"]').click();
    cy.get('[class="modal-content"]').should("exist").and('be.visible');
    
    // Llenado de formulario de inicio de sesión
    cy.get('#loginusername').clear().type('user-001-@yopmail.com').should('have.value', 'user-001-@yopmail.com');
    cy.get('#loginpassword').clear().type('user001').should('have.value', 'user001');
    cy.get('#logInModal button.btn-primary').click();

    cy.get("#nameofuser").should('be.visible').contains('user-001-@yopmail.com')

  })

})