class OpenCartAdmin_loginPage {
  Username() {
    return cy.xpath("//*[@name = 'username']");
  }

  Password() {
    return cy.xpath("//*[@name = 'password']");
  }

  Login_Button() {
    return cy.xpath("//*[@type = 'submit']");
  }
}
export default OpenCartAdmin_loginPage;
