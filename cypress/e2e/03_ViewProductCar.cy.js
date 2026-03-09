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
    
  })

});


