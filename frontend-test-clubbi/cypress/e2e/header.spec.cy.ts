/// <reference types="cypress" />

import { allFilms } from "../mocks/films";

describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('renders all items', () => {
    cy.contains(/home/i)
    cy.contains(/characters/i)
    cy.contains(/films/i)
    cy.contains(/locations/i)
    cy.get('[data-testid="darkmode-btn"]')
    cy.get('[data-testid="studio-logo-header"]')
  })
  it('redirects to the Films page', () => {
    cy.contains(/films/i).click()
    cy.location().should((loc) => expect(loc.pathname).to.eq('/films'))
  })
  it('redirects to the Characters page', () => {
    cy.contains(/characters/i).click()
    cy.location().should((loc) => expect(loc.pathname).to.eq('/characters'))
  })
  it('redirects to the Locations page', () => {
    cy.contains(/locations/i).click()
    cy.location().should((loc) => expect(loc.pathname).to.eq('/locations'))
  })
  it('changes the color theme', () => {
    cy.get('[data-testid="darkmode-btn"]').click()
    cy.get('[data-testid="header"]').should('have.css','background-color', 'rgb(13, 36, 48)');
  })
  it('resets filters when changing pages', () => {
    cy.intercept('https://ghibliapi.herokuapp.com/films', allFilms)
    cy.contains(/films/i).click()
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-0"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Arrietty')
    cy.contains(/home/i).click()
    cy.contains(/films/i).click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('not.include.text', 'Arrietty')
  })
})