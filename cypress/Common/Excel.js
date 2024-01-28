describe("First", () => {
  it("Convert", () => {
    cy.parseXlsx("cypress/fixtures/Cypress_Excel.xlsx").then((jsonData) => {
      const rowlength = Cypress.$(jsonData[0].data).length;
      cy.log(rowlength);
      for (let i = 0; i < rowlength; i++) {
        let value = jsonData[0].data[i];
        cy.log(value[0] + "    : " + value[1]);
      }
    });
  });
});
