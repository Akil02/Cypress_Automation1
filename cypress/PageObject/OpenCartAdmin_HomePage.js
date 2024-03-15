class OpenCartAdmin_HomePage {
  Notifcation() {
    return cy.xpath("//*[@class = 'btn-close']");
  }

  Catalogue() {
    return cy.xpath("//*[@id = 'menu-catalog']");
  }

  Product() {
    return cy.xpath("//*[@id = 'collapse-1']//li").eq(1);
  }
}
export default OpenCartAdmin_HomePage;
