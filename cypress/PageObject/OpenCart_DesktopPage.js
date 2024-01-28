class OpenCart_DesktopPage {
  Add_Item(item) {
    var names = "//*[@class = 'caption']//h4//a[1]";
    var cart_button =
      "//*[@class = 'caption']//following-sibling::div//button[1]";
    cy.Click_Item(names, cart_button, item);
  }
}
export default OpenCart_DesktopPage;
