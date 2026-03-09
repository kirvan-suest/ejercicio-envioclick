describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1280,820)
    cy.visit("https://www.demoblaze.com")
  })

  it('passes', () => {
    //Clic para abrir el formulario de inicio de sesion
    cy.get('[data-target="#logInModal"]').click()

    //Validación de modal 
    cy.get('[class="modal-content"]').should("exist").and('be.visible')
    
    //Ingreso de usuario y contraseña
    cy.get('#loginusername').clear().type('user-001-@yopmail.com').should('have.value', 'user-001-@yopmail.com');

    cy.get('#loginpassword').clear().type('user001').should('have.value', 'user001');
    /*
    cy.get('#loginusername').should('be.visible').type('user.test')
    cy.get('#loginpassword').should('be.visible').type('user.test')
    */
    // Inicio de sesion
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    //Validacion de mensaje de bienvenida
    cy.get('#nameofuser').should("exist").and('be.visible')//.and('have.value', 'user-001-@yopmail.com')

  })
})