import * as faker from "faker";
describe("New Account Creation", function() {
  it("Create Account", function() {
    cy.login();
    cy.visit(
      "https://data-business-8384-dev-ed.lightning.force.com/lightning/o/Account/list?filterName=Recent"
    );
    cy.get(".forceActionLink[title=New]")
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.get(".uiLabel")
      .contains("Account Name")
      .get("input[type=text]")
      .eq(1)
      .type(faker.company.companyName());
    cy.get(".slds-button[title=Save]").click();
  });
});
