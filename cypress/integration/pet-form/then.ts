import {Then} from "cypress-cucumber-preprocessor/steps";
import {PetType} from "../../../src/app/core/pet.model";

Then(/^the pet list contains "(\d*)" items$/, function (length: number) {
  cy.get('[data-cy="pet"]').should('have.length', length)
});

Then(/^the pet with name "([^"]*)" and type "(cat|dog)" is saved$/, function (name: string, type: PetType) {
  cy.wait('@postPet200').then(({request, response}) => {
    expect(cy.wrap(request.body).its('name').should('equal', name));
    expect(cy.wrap(request.body).its('type').should('equal', type));
  })
});
