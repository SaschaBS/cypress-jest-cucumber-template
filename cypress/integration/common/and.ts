import {And} from "cypress-cucumber-preprocessor/steps";
import pressButton from "../support/pressButton";

And(/^I press the button with text "(.*)"$/, pressButton);

And(/^I click the element "(.*)"$/, function (element: string) {
  cy.get(element).click();
});
