class OpenCart_LoginPage {
  EmailAddress() {
    return cy.get("input[name = 'email']");
  }

  Password() {
    return cy.get("input[name = 'password']");
  }

  Login_Button() {
    return cy.get("input[value = 'Login']");
  }
}

export default OpenCart_LoginPage;
