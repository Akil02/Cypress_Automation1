class OpenCart_CheckOutPage {
  Billing_FirstName() {
    return cy.get("input[name = 'firstname']");
  }

  Billing_LasttName() {
    return cy.get("input[name = 'lastname']");
  }

  Billing_Company() {
    return cy.get("input[name = 'company']");
  }

  Billing_Address1() {
    return cy.get("input[name = 'address_1']");
  }

  Billing_Address2() {
    return cy.get("input[name = 'address_2']");
  }

  Billing_City() {
    return cy.get("input[name = 'city']");
  }

  Billing_PostCode() {
    return cy.get("input[name = 'postcode']");
  }

  Billing_County() {
    return cy.get("select[name = 'country_id']");
  }

  Billing_Region() {
    return cy.get("select[name = 'zone_id']");
  }

  Continue() {
    return cy.get("input[value = 'Continue']");
  }

  DeliverMethod_text() {
    return cy.get("textarea[name = 'comment']");
  }

  Checkbox() {
    return cy.get("input[type = 'checkbox']");
  }

  Confirm_Order() {
    return cy.get("input[value = 'Confirm Order']");
  }

  Dropdown1() {
    return cy.get(".panel-title");
  }

  Radio1() {
    return cy.get("input[type = 'radio']");
  }
}
export default OpenCart_CheckOutPage;
