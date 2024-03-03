import { Before, After } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

After(() => {
  cy.log("Scenario Complete");
});
