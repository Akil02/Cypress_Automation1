import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import CheckOutPage from "../../PageObject/OpenCart_CheckOutPage";
const Checkout = new CheckOutPage();
import ShoppingPage from "../../PageObject/OpenCart_ShoppingPage";
const Shopping = new ShoppingPage();

And("add the deails in checkout options and account billing details", () => {
  cy.wait(1000);
  Shopping.CheckOut()
    .eq(1)
    .click()
    .then(() => {
      if (cy.contains("I want to use an existing address")) {
        Checkout.Radio1().eq(1).click();
      }
    });
  cy.parseXlsx("cypress/fixtures/Cypress_Excel.xlsx").then((jsonData) => {
    const rowlength = Cypress.$(jsonData[1].data).length;
    cy.log(rowlength);
    for (let i = 1; i < rowlength; i++) {
      let value = jsonData[1].data[i];
      Checkout.Billing_FirstName().type(value[0]);
      Checkout.Billing_LasttName().type(value[1]);
      Checkout.Billing_Company().type(value[2]);
      Checkout.Billing_Address1().type(value[3]);
      Checkout.Billing_Address2().type(value[4]);
      Checkout.Billing_City().type(value[5]);
      Checkout.Billing_PostCode().type(value[6]);
      Checkout.Billing_County().select(value[7]);
      Checkout.Billing_Region().select(value[8]);
      Checkout.Continue().eq(0).click();
    }
  });
});

And("add the deails in delivery details and delivery methods", () => {
  Checkout.Dropdown1().eq(2).click();
  Checkout.Continue().eq(1).click();
  //cy.wait(2000);
  Checkout.Dropdown1()
    .eq(3)
    .click()
    .then(() => {
      cy.parseXlsx("cypress/fixtures/Cypress_Excel.xlsx").then((jsonData) => {
        const rowlength = Cypress.$(jsonData[2].data).length;
        cy.log(rowlength);
        for (let i = 1; i < rowlength; i++) {
          let value = jsonData[2].data[i];
          Checkout.DeliverMethod_text().type(value[1]);
          Checkout.Continue().eq(2).click();
        }
      });
    });
});

And("add the deails in payment method and confirm the opder", () => {
  Checkout.Dropdown1()
    .eq(4)
    .click()
    .then(() => {
      cy.parseXlsx("cypress/fixtures/Cypress_Excel.xlsx").then((jsonData) => {
        const rowlength = Cypress.$(jsonData[2].data).length;
        cy.log(rowlength);
        for (let i = 1; i < rowlength; i++) {
          let value = jsonData[2].data[i];
          Checkout.DeliverMethod_text().eq(1).clear();
          Checkout.DeliverMethod_text().eq(1).type(value[2]);
          Checkout.Checkbox().check();
          Checkout.Continue().eq(3).click();
        }
      });
    });
  Checkout.Dropdown1()
    .eq(4)
    .click()
    .then(() => {
      Checkout.Confirm_Order().click();
    });
});
