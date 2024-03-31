import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import RahulHomePage from "../../PageObject/Rahulsheety_HomePage";
const Home = new RahulHomePage();

Given(
  "when the user is able to login inside website click on new tab button",
  () => {
    cy.visit(Cypress.env("RahulSheety_Url"));
  }
);

And("after login inside do some check and login back to main page", () => {
  Home.Open_Tab().then((tx) => {
    const v = tx.prop("href");
    cy.log(v);
    cy.visit(v);
    cy.xpath("//*[@id = 'navbarSupportedContent']//ul//li[2]//a").click();
    cy.wait(2000);
    cy.go("back");
    cy.go("back");
  });
});

When(
  "user enters main page click on new window button and do the same validation there",
  () => {
    cy.window().then((win) => {
      const stub = cy.spy(win, "open").as("windowOpen"); // 'spy' vs 'stub' lets the new tab still open if you are visually watching it
    });
    Home.Open_Window().click();
    cy.wait(3000);
    cy.window().then((win) => {
      win.location.href = "https://www.qaclickacademy.com/";
      cy.url().should("include", "qaclickacademy");
      cy.xpath("//*[@id = 'navbarSupportedContent']//ul//li[2]//a").click();
      cy.wait(2000);
      cy.go("back");
      cy.go("back");
    });
  }
);

And("after that do some validations in iframe from the main page", () => {
  cy.frameLoaded("#courses-iframe");
  cy.wait(3000);
  cy.iframe().find("a[href*='mentorship']").eq(0).click({ force: true });
  cy.wait(3000);
  cy.iframe().go("back");
});

Then("come back to main page and close the application", () => {
  cy.url().should("include", "rahulshettyacademy");
  cy.log("Validatiin completed");
});
