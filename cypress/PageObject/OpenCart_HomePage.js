class Opencart_HomePage {
  MyAccount() {
    return cy.xpath("//span[text() = 'My Account']");
  }

  Register() {
    return cy.xpath("//li[@class = 'dropdown open']//ul//li[1]//a");
  }

  Login() {
    return cy.xpath("//li[@class = 'dropdown open']//ul//li[2]//a");
  }

  Logout() {
    return cy.xpath("//*[text() = 'Logout']");
  }

  Desktop() {
    return cy.xpath("//*[text() = 'Desktops']");
  }

  Desktop_ShowAll() {
    return cy.xpath("//*[text() = 'Show All Desktops']");
  }

  Shopping_Cart() {
    return cy.xpath("//*[text() = 'Shopping Cart']");
  }

  Order_Placed() {
    return cy.xpath("//*[@id = 'content']//h1");
  }

  Continue() {
    return cy.xpath("//*[text() = 'Continue']");
  }
}
export default Opencart_HomePage;
