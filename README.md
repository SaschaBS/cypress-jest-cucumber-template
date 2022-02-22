# CypressJestCucumberTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

The template uses [Cypress](https://www.cypress.io/) for E2E testing in combination with Cucumber. The Cucumber
integration is done via [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
with TypeScript support added.

The step definitions are supposed to be in a folder with the same name as the feature.

Alternatively step definitions can be put in a folder named "common" for, you guessed it, commonly used steps.

The "support" folder contains some boilerplate code with a proposed structure.

For Unit Testing I used [Jest](https://jestjs.io/) that replaces Karma/Jasmine default. For this feature, I used the (
Jest Schematic)(https://github.com/briebug/jest-schematic) by Briebug.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
