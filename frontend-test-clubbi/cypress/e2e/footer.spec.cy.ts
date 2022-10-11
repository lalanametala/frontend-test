/// <reference types="cypress" />

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('renders all items correctly', () => {
    cy.contains(/Developed by Laís Nametala/i)
    cy.get('[data-testid="github-link"]')
    cy.get('[data-testid="linkedin-link"]')
  });
  it('github link has all correct attributes', () => {
    cy.get('[data-testid="github-link"]')
      .should('have.attr', 'href', 'https://github.com/lalanametala')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noreferrer');
  });
  it('linkedin link has all correct attributes', () => {
    cy.get('[data-testid="linkedin-link"]')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/la%C3%ADs-nametala/')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noreferrer');
  })
})