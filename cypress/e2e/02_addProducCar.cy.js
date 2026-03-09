describe('Agregar producto al carrito', () => {
  beforeEach(() => {
    // Esto inicia sesión o restaura la sesión guardada
    cy.login('user-001-@yopmail.com', 'user001');
  });

  it('Agregar producto a carrito de compra', () => {
    
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').contains("Samsung galaxy s6").click();
    cy.get('.col-sm-12 > .btn').should("exist").contains("Add to cart").click();

  })

});


