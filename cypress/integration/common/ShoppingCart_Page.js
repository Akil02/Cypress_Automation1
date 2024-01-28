import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import ShoppingPage from "../../PageObject/OpenCart_ShoppingPage";
const Shopping = new ShoppingPage();
import HomePage from "../../PageObject/OpenCart_HomePage";
const Main = new HomePage();

And(
  "then go to shopping cart check all product has been added and checkout from that page",
  () => {
    cy.log("This is shopping");
    cy.wait(2000);
    Main.Shopping_Cart().click({ force: true });
    cy.wait(2000);
  }
);
