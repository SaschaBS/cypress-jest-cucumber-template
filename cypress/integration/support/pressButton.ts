export default (text: string) => {
  cy.contains('button', text).click();
}
