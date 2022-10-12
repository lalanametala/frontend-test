/// <reference types="cypress" />
import { allFilms } from "../mocks/films";
import { allCharacters } from "../mocks/characters";
import { allLocations } from "../mocks/locations";

describe('Locations', () => {
  beforeEach(() => {
    cy.intercept('https://ghibliapi.herokuapp.com/films', allFilms)
    cy.intercept('https://ghibliapi.herokuapp.com/characters', allCharacters)
    cy.intercept('https://ghibliapi.herokuapp.com/locations', allLocations)
    cy.visit('http://localhost:3000/locations');
  });
  it('renders the filter/sort form', () => {
    cy.get('input')
    cy.get('.MuiSelect-select')
  })

  it('renders all location cards', () => {
    cy.get('.css-13i4rnv-MuiGrid-root').should('have.length', allLocations.length)
  })
  it('filters the locations correctly', () => {
    cy.get('input').first().type('ca')
    cy.get('.css-13i4rnv-MuiGrid-root').should('have.length', 2)
  })
  it('sorts the locations alphabetically', () => {
    // A-Z
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-0"').click()
    cy.get('.css-13i4rnv-MuiGrid-root').first().should('include.text', 'Bamboo Forest')

    // Z-A
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-1"').click()
    cy.get('.css-13i4rnv-MuiGrid-root').first().should('include.text', 'Zeniba')
  })
  it('sorts the locations by their surface water', () => {
    // most
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-2"').click()
    cy.get('.css-13i4rnv-MuiGrid-root').first().should('include.text', 'Fujimoto')

    // least
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-3"').click()
    cy.get('.css-13i4rnv-MuiGrid-root').first().should('include.text', 'Pazu')
  })
})