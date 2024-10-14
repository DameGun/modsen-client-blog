import { LocalesEnum } from '@/constants/i18n';

describe('Home Page spec', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
  });

  it('Should change locale', () => {
    cy.get('[data-testid="localeSwitcher"]').select('Deutsch');

    cy.url().should('contain', LocalesEnum.DE);
  });

  it('Should navigate to featured post', () => {
    const featuredPostButton = cy.get('[data-testid="homeFeaturedPost"]').contains('Read More >');
    featuredPostButton.click();

    cy.url().should('contain', 'posts');
  });

  it('Should navigate to second featured post', () => {
    const featuredPostButton = cy.get('[data-testid="homeExtendedPost"]').contains('Read More >');

    featuredPostButton.click();

    cy.url().should('contain', 'posts');
  });
});
