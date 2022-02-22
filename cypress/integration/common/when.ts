import {When} from "cypress-cucumber-preprocessor/steps";
import pressButton from "../support/pressButton";

When(/^I press the button with text "(.*)"$/, pressButton);

When(/^I click the element "(.*)"$/, function (element: string) {
  cy.get(element).click();
});

When(/^I am on the start page$/, function () {
  cy.title().should('equal', 'CypressJestCucumberTemplate');
});
