export class HomePage1 {
  Register_Username(name) {
    cy.get("input[name = 'username']").eq(1).type(name);
  }

  Register_Password(name) {
    cy.get("input[name = 'password']").eq(1).type(name);
  }

  Register_Gmail(name) {
    cy.get("input[name = 'email']").type(name);
  }

  Register_Register(name) {
    cy.get("input[name = 'register']").click();
  }

  Output() {
    console.log("Printing");
  }
}
