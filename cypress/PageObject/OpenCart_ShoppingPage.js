class OpenCart_ShoppingPage {
  CheckOut() {
    return cy.xpath("//*[text() = 'Checkout']");
  }
}
export default OpenCart_ShoppingPage;
