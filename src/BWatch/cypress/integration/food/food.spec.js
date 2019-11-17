context('Food', () => {
  beforeEach(() => {
    cy.server();
  });

  const url = "http://localhost:4200/food";

  it('should show list of food on load', () => {
    const foods = [{}, {}, {}];
    cy.route({
      method: 'GET',
      url: '/api/foods',
      status: 200,
      response: foods
    });

    cy.visit(url);

    cy.get('mat-expansion-panel').should('have.length', foods.length);
  });

  it('should render the properties of a food', () => {
    const name = 'nameValue';
    const quantity = 'quantityValue';
    cy.route({
      method: 'GET',
      url: '/api/foods',
      status: 200,
      response: [{ name, quantity }]
    });

    cy.visit(url);

    cy.get('mat-panel-title').should('contain.text', name);
    cy.get('div.mat-expansion-panel-body').should('contain.text', quantity);
  });

  it('should allow a new food to be added', () => {
    const name = 'nameValue';
    const quantity = 'quantityValue';
    cy.route({
      method: 'POST',
      url: '/api/foods'
    }).as('postFood');

    cy.visit(url);
    cy.get('#add-food-button').click();
    cy.get('[formcontrolname=foodName]').type(name);
    cy.get('[formcontrolname=foodQuantity]').type(quantity);
    cy.get('.add-button').click();

    cy.wait('@postFood').should(xhr => {
      expect(xhr.requestBody).to.deep.equal({ name, quantity });
    });
  });

  it('should reload foods after a food is added', () => {
    cy.route({
      method: 'POST',
      url: '/api/foods'
    });
    cy.visit(url);
    cy.route({
      url: '/api/foods'
    }).as('getFood');

    cy.get('#add-food-button').click();
    cy.get('[formcontrolname=foodName]').type(' ');
    cy.get('[formcontrolname=foodQuantity]').type(' ');
    cy.get('.add-button').click();

    cy.wait('@getFood').should(xhr => {
      expect(xhr.method).to.eq('GET');
    });
  });

  it('should not allow a food with an empty name to be added', () => {
    const quantity = 'quantityValue';
    cy.visit(url);

    cy.get('#add-food-button').click();
    cy.wait(100); // after the popup loads the focus jumps back to the first element, so don't select the foodQuantity control until after that has happened
    cy.get('[formcontrolname=foodQuantity]').type(quantity);
    cy.get('.add-button').click();

    cy.get('[formcontrolname=foodName]').should('have.class', 'ng-invalid');
    cy.get('.add-food-container').should('be.visible');
  });

  it('should not allow a food with an empty quantity to be added', () => {
    const name = 'nameValue';
    cy.visit(url);

    cy.get('#add-food-button').click();
    cy.get('[formcontrolname=foodName]').type(name);
    cy.get('.add-button').click();

    cy.get('[formcontrolname=foodQuantity]').should('have.class', 'ng-invalid');
    cy.get('.add-food-container').should('be.visible');
  });
});
