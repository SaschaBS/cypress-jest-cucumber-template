export default (path: string, text: string) => {
  cy.get(path).should('contain.text', text);
}
