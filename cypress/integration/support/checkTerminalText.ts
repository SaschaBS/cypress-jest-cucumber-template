export default (text: string) => {
  cy.get('.terminal').should('contain.text', text);
}
