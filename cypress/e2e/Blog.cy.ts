describe('Blog Page spec', () => {
  beforeEach(() => {
    cy.visit('/en/blog');
    cy.viewport('macbook-16');
  });

  it('Should paginate posts', () => {
    cy.get('[data-testid="paginationButtonPrev"]').should('be.disabled');
    cy.get('[data-testid="paginationButtonNext"]')
      .should('be.enabled')
      .click()
      .should('be.disabled');
  });

  it('Should navigate to a search with category', () => {
    cy.get('[data-testid="categoryCard-Startup"]').click();
    cy.wait(5000);
    cy.url().should('contain', 'search?category=Startup');
  });

  it('Should navigate to a contact page', () => {
    cy.get('[data-testid="joinNowButton"]').click();
    cy.wait(5000);
    cy.url().should('contain', 'contact');
  });
});
