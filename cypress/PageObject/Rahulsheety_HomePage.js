class Rahulsheety_HomePage {
  Open_Tab() {
    return cy.get("#opentab");
  }

  Open_Window() {
    return cy.xpath("//*[@id = 'openwindow']");
  }
}
export default Rahulsheety_HomePage;
