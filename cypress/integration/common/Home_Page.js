import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../PageObject/OpenCart_HomePage";
const Main = new HomePage();
import RegisterPage from "../../PageObject/OpenCart_RegisterPage";
const Register = new RegisterPage();
import LoginPage from "../../PageObject/OpenCart_LoginPage";
const Login = new LoginPage();

Given("user on the main page go to the Regiter page", () => {
  cy.visit(Cypress.env("Shopping_Url"));
  cy.wait(2000);
  cy.url().should("include", "https://naveenautomationlabs.com/opencart/");
  Main.MyAccount().click({ force: true });
  Main.Register().click({ force: true });
});

Given(
  "The user is on the main page login using credentials and click one desktop button",
  () => {
    cy.visit(Cypress.env("Shopping_Url"));
    cy.wait(2000);
    cy.url().should("include", "https://naveenautomationlabs.com/opencart/");
    Main.MyAccount().click({ force: true });
    Main.Login().click({ force: true });
    cy.readFile("cypress/fixtures/config.json").then((Value) => {
      const email = Value.Username;
      const Password = Value.Password;
      Login.EmailAddress().type(email);
      Login.Password().type(Password);
      Login.Login_Button().click();
    });
    Main.Desktop().click();
    Main.Desktop_ShowAll().click();
  }
);

Then("Log out from the application", () => {
  cy.log("This for checking");
  Main.MyAccount().click({ force: true });
  Main.Logout().eq(0).click({ force: true });
  Register.Complete().click();
});

Then("adding all details check whether the order is getting confirmed", () => {
  /*  Main.Order_Placed().should("have.text", "Your order has been placed!");
  Main.Continue().click();  */
});
