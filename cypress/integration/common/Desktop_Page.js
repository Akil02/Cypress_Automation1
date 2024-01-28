import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import DesktopPage from "../../PageObject/OpenCart_DesktopPage";
const Desktop = new DesktopPage();

When(
  "the user enters the page purchase the product and add to the Cart",
  (dataTable) => {
    dataTable.hashes().forEach((elem) => {
      cy.log("Just to confirm " + elem.product);
      Desktop.Add_Item(elem.product);
    });
  }
);

When(
  "the user enters the page purchase the product and add to the Cart using excel",
  () => {
    cy.log("This is adding item");
    cy.parseXlsx("cypress/fixtures/Cypress_Excel.xlsx").then((jsonData) => {
      const rowlength = Cypress.$(jsonData[0].data).length;
      cy.log(rowlength);
      for (let i = 1; i < rowlength; i++) {
        let value = jsonData[0].data[i];
        Desktop.Add_Item(value[0]);
      }
    });
  }
);
