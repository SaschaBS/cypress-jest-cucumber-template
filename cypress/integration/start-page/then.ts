import {Then} from "cypress-cucumber-preprocessor/steps";
import checkTerminalText from "../support/checkTerminalText";
import checkElementText from "../support/checkElementText";

Then(/^User sees a rocket$/, function () {
  cy.get('#rocket').should('be.visible');
});

Then(/^terminal text is (.*)$/, checkTerminalText);

Then(/^the text on "(.*)" is "(.*)"$/, checkElementText);
