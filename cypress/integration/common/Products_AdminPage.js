import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import Product_Page from "../../PageObject/OpenCartAdmin_ProductPage";
const Prod = new Product_Page();

And(
  "when user is able to see the produt list delete the old product from db and add all the new items in All_Products table",
  () => {
    cy.log("Inside Product page");
    Prod.Product_Add_in_db();
  }
);
