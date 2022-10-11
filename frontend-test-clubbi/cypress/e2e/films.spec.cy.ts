/// <reference types="cypress" />
import { allFilms } from "../mocks/films";

describe('Films', () => {
  beforeEach(() => {
    cy.intercept('https://ghibliapi.herokuapp.com/films', allFilms)
    cy.visit('http://localhost:3000/films');
  });
  it('renders the filter/sort form', () => {
    cy.get('input')
    cy.get('.MuiSelect-select')
  })
  it('renders all film cards', () => {
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').should('have.length', allFilms.length)
  })
  it('sorts the films alphabetically', () => {
    // A-Z
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-0"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Arrietty')

    // Z-A
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-1"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Whisper of the Heart')
  })
  it('filters the films correctly', () => {
    cy.get('input').first().type('castle')
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').should('have.length', 2)
  })
})