/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });
  });
  it('calls the api when rendered', () => {
    cy.window()
      .its('fetch')
      .should('have.callCount', 3);
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://ghibliapi.herokuapp.com/films');
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://ghibliapi.herokuapp.com/people');
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://ghibliapi.herokuapp.com/locations');
  })
  it('displays an about text', () => {
    cy.contains('Studio Ghibli is a Japanese animation studio based in Koganei, Tokyo. Founded in 1985, the studio has produced 21 animated features, the first being Castle in the Sky (1986) and the most recent When Marnie Was There (2014).');
    cy.contains('Studio Ghibli was founded in 1985 by Hayao Miyazaki, Isao Takahata, Toshio Suzuki and Yasuyoshi Tokuma, shortly after the success of Nausicaä of the Valley of the Wind the previous year. The studio released its first film, Castle in the Sky, the following year. The company`s logo is Totoro, the character from the movie My Neighbor Totoro, released in 1988. With the exception of six productions, all of the studio`s films were directed by Hayao Miyazaki and Isao Takahata. Toshio Suzuki, meanwhile, is the producer for most of them. In 2001, the Ghibli Museum, a museum dedicated to the studio`s works, opened.');
  })
})