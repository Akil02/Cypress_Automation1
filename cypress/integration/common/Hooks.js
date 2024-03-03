import { Before, After } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log("-------------------------------------------------------");
});

After(() => {
  cy.log("Scenario Complete");
  cy.log("-------------------------------------------------------");
});
