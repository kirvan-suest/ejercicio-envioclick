describe('Validar producto en carrito', () => {
  beforeEach(() => {
    // Esto inicia sesión o restaura la sesión guardada
    cy.login('user-001-@yopmail.com', 'user001');
  });

  it('Ver detalle de producto en carrito', () => {
    
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').contains("Samsung galaxy s6").click();

    cy.get('.col-sm-12 > .btn').should("exist").contains("Add to cart").click();
    
    cy.get(':nth-child(4) > .nav-link').contains('Cart').click();

    cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').contains("Samsung galaxy s6").should('be.visible');

    cy.get('.col-lg-1 > .btn').contains("Place Order").should('be.visible').click();

    cy.get('#orderModal').should('be.visible');

    cy.get('#name').clear().type('Juan').should('have.value', 'Juan');
    cy.get('#country').clear().type('Mexico').should('have.value', 'Mexico');
    cy.get('#city').clear().type('Ciudad de Mexico').should('have.value', 'Ciudad de Mexico');
    cy.get('#card').clear().type('7465 2356 1763 1345').should('have.value', '7465 2356 1763 1345');
    cy.get('#month').clear().type('01').should('have.value', '01');
    cy.get('#year').clear().type('2030').should('have.value', '2030');

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains('Purchase').click();

    cy.get('.sweet-alert > h2').should('be.visible').contains('Thank you for your purchase!')

  })

});


