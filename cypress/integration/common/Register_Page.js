import {
  Given,
  And,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import RegisterPage from "../../PageObject/OpenCart_RegisterPage";
const Register = new RegisterPage();

/* Before(() => {
  cy.visit(Cypress.env("Url"));
  cy.wait(2000);
}); */

var login_mailid = "";
var login_Password = "";

When(
  "user enters the Register Page Enter the personal details {string} {string} {string} {string}",
  (Fname, Lname, mail, phone) => {
    Register.Firstname().type(Fname);
    Register.Lastname().type(Lname);
    Register.Gamil().type(mail);
    Register.Telephone().type(phone);
    login_mailid = mail;
  }
);

And("after enter the details for your password {string}", (pass) => {
  Register.Password().type(pass);
  Register.Confirm_Password().type(pass);
  login_Password = pass;
  cy.writeFile("cypress/fixtures/config.json", "");
  cy.writeFile("cypress/fixtures/config.json", {
    Username: login_mailid,
    Password: login_Password,
  });
});

And(
  "chekbox the newsletter and click on the submit button {string}",
  (check) => {
    if (check.toLowerCase().includes("y")) {
      Register.Subscribe().eq(1).click();
    } else {
      Register.Subscribe().eq(2).click();
    }
    Register.Privacy_check().click();
    Register.Continue_But().click();
    cy.log("This is new and old page");
    Register.Complete().click();
  }
);
