import {Then} from "cypress-cucumber-preprocessor/steps";

Then(/^the pet list contains "(\d*)" items$/, function (length: number) {
  cy.get('[data-cy="pet"]').should('have.length', length)
});
