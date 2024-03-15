import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../PageObject/OpenCartAdmin_HomePage";
const Home = new HomePage();

When("user is able to login to the application go to the product list", () => {
  cy.log("Inside Home Page");
  Home.Notifcation().click();
  cy.wait(1000);
  Home.Catalogue().click();
  Home.Product().click();
});

Then("logout from the appliaction", () => {
  cy.log("Then step");
});
