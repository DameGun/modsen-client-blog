describe('Search Page spec', () => {
  beforeEach(() => {
    cy.visit('/en/search');
    cy.viewport('macbook-16');
  });

  describe('Category Query', () => {
    it('Should set and remove category query', () => {
      cy.get('[data-testid="postsListPaginated"]')
        .children()
        .then((children) => {
          const originalPostsLength = children.length;

          cy.get('[data-testid="categoryCard-Business"]').click();

          cy.get('[data-testid="postsListPaginated"]')
            .children()
            .should('have.length.below', originalPostsLength);

          cy.url().should('contain', 'category=Business');

          cy.get('[data-testid="categoryCard-Business"]').click();

          cy.get('[data-testid="postsListPaginated"]')
            .children()
            .should('have.length', originalPostsLength);

          cy.url().should('not.contain', 'category=Business');
        });
    });
  });

  describe('Tags Query', () => {
    it('Should select and remove multiple tags', () => {
      cy.get('[data-testid="tagCard-Business"]').click();
      cy.wait(2000);
      cy.get('[data-testid="tagCard-Experience"]').click();

      cy.url().should('contain', 'tagsNames=Business%2CExperience');

      cy.get('[data-testid="tagCard-Business"]').click();
      cy.get('[data-testid="tagCard-Experience"]').click();
    });
  });

  describe('Keyword Query', () => {
    it('Should show no result', () => {
      cy.get('[data-testid="searchInput"]').type('Its is Cypress').type('{enter}');
      cy.wait(2000);

      cy.url().should('contain', 'keyword=Its+is+Cypress');

      cy.contains('No posts found with keyword: "Its is Cypress"');
    });
  });
});
