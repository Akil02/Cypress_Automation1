import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import LoginAdmin from "../../PageObject/OpenCartAdmin_LoginPage";
const Login = new LoginAdmin();

Given("user on the login page enter username and password", () => {
  cy.visit(Cypress.env("ShoppingAdmin_Url"));
  cy.readFile("cypress/fixtures/example.json").then((Value) => {
    const Username = Value.Username;
    const Password = Value.Password;
    Login.Username().type(Username);
    Login.Password().type(Password);
  });
  Login.Login_Button().click();
  cy.wait(2000);
});
