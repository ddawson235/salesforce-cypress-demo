import * as faker from "faker";
describe("New Account Creation", function() {
  let instanceUrl:String;
  before(function() {
    // runs once before all tests in the block
    cy.exec(
      'sfdx force:org:display --json | sed -E "s/[[:cntrl:]][[0-9]{1,3}m//g"'
    ).then(response => {
      let result = JSON.parse(response.stdout).result;
      let sessionId = result.accessToken;
      instanceUrl = result.instanceUrl;

      cy.request(`${instanceUrl}/secur/frontdoor.jsp?sid=${sessionId}`);
      
  })
})
  it("Create Account", function() {
    var companyName = faker.company.companyName();
    cy.visit(`${instanceUrl}/lightning/o/Account/list`);
      cy.get(".forceActionLink[title=New]")
        .should("be.visible")
        .click();
      cy.wait(3000);
      cy.get(".uiLabel")
        .contains("Account Name")
        .get("input[type=text]")
        .eq(1)
        .type(companyName);
      cy.get(".slds-button[title=Save]").click();
    });
  });
