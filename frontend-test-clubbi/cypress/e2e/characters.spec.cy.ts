/// <reference types="cypress" />
import { allFilms } from "../mocks/films";
import { allCharacters } from "../mocks/characters";

describe('Characters', () => {
  beforeEach(() => {
    cy.intercept('https://ghibliapi.herokuapp.com/films', allFilms)
    cy.intercept('https://ghibliapi.herokuapp.com/characters', allCharacters)
    cy.visit('http://localhost:3000/#/characters');
  });
  it('renders the filter/sort form', () => {
    cy.get('input')
    cy.get('.MuiSelect-select')
  })

  it('renders all character cards', () => {
    cy.get('.css-1i8lktx-MuiPaper-root-MuiCard-root').should('have.length', allCharacters.length)
  })
  it('filters the characters correctly', () => {
    cy.get('input').first().type('aku')
    cy.get('.css-1i8lktx-MuiPaper-root-MuiCard-root').should('have.length', 2)
  })
  it('sorts the characters alphabetically - A-Z', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-0"').click()
    cy.get('.css-1i8lktx-MuiPaper-root-MuiCard-root').first().should('include.text', 'Ashitaka')
  })
  it('sorts the characters alphabetically - Z-A', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-1"').click()
    cy.get('.css-1i8lktx-MuiPaper-root-MuiCard-root').first().should('include.text', 'Yuki')
  })
  it('sorts the characters by their age - oldest', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-2"').click()
    cy.get('.css-1i8lktx-MuiPaper-root-MuiCard-root').first().should('include.text', 'Shishigami')
  })
  it('sorts the characters by their age - youngest', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-3"').click()
    cy.get('.css-1i8lktx-MuiPaper-root-MuiCard-root').first().should('include.text', 'Totoro')
  })
})