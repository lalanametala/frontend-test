/// <reference types="cypress" />
import { allFilms } from "../mocks/films";

describe('Films', () => {
  beforeEach(() => {
    cy.intercept('https://ghibliapi.herokuapp.com/films', allFilms)
    cy.visit('http://localhost:3000/#/films');
  });
  it('renders the filter/sort form', () => {
    cy.get('input')
    cy.get('.MuiSelect-select')
  })
  it('renders all film cards', () => {
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').should('have.length', allFilms.length)
  })
  it('filters the films correctly', () => {
    cy.get('input').first().type('castle')
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').should('have.length', 2)
  })
  it('sorts the films alphabetically - A-Z', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-0"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Arrietty')
  })
  it('sorts the films alphabetically - Z-A', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-1"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Whisper of the Heart')
  })
  it('sorts the films by their release date - Most Recent', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-2"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Earwig and the Witch')
  })
  it('sorts the films by their release date - Least Recent', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-3"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Castle in the Sky')
  })
  it('sorts the films by their running time - Longest', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-4"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'The Tale of the Princess Kaguya')
  })
  it('sorts the films by their running time - Shortest', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-5"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'The Cat Returns')
  })
  it('sorts the films by their rating - Best rated', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-6"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Only Yesterday')
  })
  it('sorts the films by their rating - Worst rated', () => {
    cy.get('.MuiSelect-select').click()
    cy.get('[data-testid="select-7"').click()
    cy.get('.css-1fbhxaw-MuiPaper-root-MuiCard-root').first().should('include.text', 'Earwig and the Witch')
  })
  it('displays the details of the film when clicking the expand button in the film card', () => {
    cy.get('[data-testid="ExpandMoreIcon"]').first().click()
    cy.contains('Description')
    cy.contains(allFilms[0].description)
  })
})