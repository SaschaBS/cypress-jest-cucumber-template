import {When} from "cypress-cucumber-preprocessor/steps";
import pressButton from "../support/pressButton";
import {PetType} from "../../../src/app/core/pet.model";

When(/^I press the button with text "(.*)"$/, pressButton);

When(/^I click the element "(.*)"$/, function (element: string) {
  cy.get(element).click();
});

When(/^I am on the start page$/, function () {
  cy.title().should('equal', 'CypressJestCucumberTemplate');
});

When(/^I enter the pet name "([^"]*)"$/, function (name: string) {
  cy.get("[data-cy=pet-form]").as('petForm').get('input').type(name);
});

When(/^I click submit$/, function () {
  cy.get('@petForm').get('button').click();
});

When(/^I select the pet type "(dog|cat)"$/, function (type: PetType) {
  cy.get('@petForm').get('select').select(type);
});
