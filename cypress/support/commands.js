
// Comando personalizado para inicio de sesión
Cypress.Commands.add('login', (email, password) => {
    cy.viewport(1280,820)
    cy.visit("https://www.demoblaze.com")
    //Ingreso a modal de inicio de sesion
    cy.get('[data-target="#logInModal"]').click();
    cy.get('[class="modal-content"]').should("exist").and('be.visible');
    
    // Llenado de formulario de inicio de sesión
    cy.get('#loginusername').clear().type(email).should('have.value', email);
    cy.get('#loginpassword').clear().type(password).should('have.value', password);
    cy.get('#logInModal button.btn-primary').click();
});