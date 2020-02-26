import * as faker from 'faker';
describe('New Account Creation', function () {
    it('Creates new case', function () {
        cy.login();
        cy.visit('https://energy-ruby-7363-dev-ed.lightning.force.com/lightning/o/Account/list?filterName=Recent')
        //cy.get('.slds-truncate').contains('Cases').should('be.visible').click();
        cy.get('.forceActionLink[title=New]').should('be.visible').click();
        cy.wait(3000);
        cy.get('.uiLabel').contains('Account Name').get('input[type=text]').eq(1).type(faker.company.companyName());
        cy.get('.slds-button[title=Save]').click();
        //Populate Personal Information
        /* cy.get('.topdown-radio--label').contains('Non-Customer Complaint').click();
        cy.get('.uiButton').contains('Next').click();
        cy.get('.uiOutputRichText').contains('Complainant Disagrees').click();
        cy.get('.actionsRight').contains('Next').click();
        cy.get('.uiInput--select').eq(2).select('25 - 34 years');
        cy.wait(1000);
        cy.get('.slds-select').eq(1).select('VIC');
        cy.get('.slds-button').contains('Next').click();

        //Next screen to Populate Customer Case Information
        cy.wait(1000);
        cy.get('select.slds-select').eq(0).select('Deposit taking');
        cy.wait(1000);
        cy.get('.slds-select').eq(1).select('Safe custody');
        cy.wait(1000);
        cy.get('.slds-select').eq(2).select('Safe custody');
        cy.get('.uiInput--textarea').eq(0).type('Cypress Automation Test');
        cy.get('.uiInput--textarea').eq(1).type('Cypress Automation Test creates record');
        cy.get('button').contains('Next').click();

        //We can safely assume that if it contains "has been recorded" it's a success
        cy.get('[data-aura-class=uiOutputRichText] > p').contains('has been recorded.').should('be.visible');
        cy.get('.slds-button').contains('Finish').click() ;*/
    });
});
