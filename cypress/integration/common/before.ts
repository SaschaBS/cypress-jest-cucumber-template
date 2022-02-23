import {Before} from "cypress-cucumber-preprocessor/steps";

Before({tags: '@postPet200'}, () => {
  cy.intercept('POST', /pet/, req => {
    req.reply({statusCode: 200, body: {...req.body}})
  }).as('postPet200');
})

Before({tags: '@postPet500'}, () => {
  cy.intercept('POST', /pet/, req => {
    req.reply({statusCode: 500});
  }).as('postPet500');
})

