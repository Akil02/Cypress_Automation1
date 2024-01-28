class OpenCart_RegisterPage {
  Firstname() {
    return cy.get('input[name = "firstname"]');
  }

  Lastname() {
    return cy.get('input[name = "lastname"]');
  }

  Gamil() {
    return cy.get('input[name = "email"]');
  }

  Telephone() {
    return cy.get('input[name = "telephone"]');
  }

  Password() {
    return cy.get('input[name = "password"]');
  }

  Confirm_Password() {
    return cy.get('input[name = "confirm"]');
  }

  Subscribe() {
    return cy.get('input[type= "radio"]');
  }

  Privacy_check() {
    return cy.get('input[type= "checkbox"]');
  }

  Continue_But() {
    return cy.get('input[value= "Continue"]');
  }

  Complete() {
    cy.wait(2000);
    return cy.xpath("//*[text() = 'Continue']");
  }
}
export default OpenCart_RegisterPage;
