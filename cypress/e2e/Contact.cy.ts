describe('Contact Page spec', () => {
  it('Should sent email', () => {
    cy.visit('/en/contact');

    cy.get('[data-testid="fullNameInput"]').type('Test');
    cy.get('[data-testid="emailInput"]').type('test@test.com');
    cy.get('[data-testid="reasonSelect"]').select('Technical Support');
    cy.get('[data-testid="messageTextarea"]').type('Test');

    cy.get('button[type="submit"]').should('be.enabled').click();
    cy.wait(2000);

    cy.get('[data-testid="relativeAlert"]')
      .should('be.visible')
      .find('img')
      .should('have.attr', 'alt', 'Success Icon');
  });
});
