import createPet from "./createPet";

export default (numberOfItems: number) => {
  const data = Array.from({length: numberOfItems}, () => createPet());
  cy.intercept('GET', '/api/pet', data);
}
