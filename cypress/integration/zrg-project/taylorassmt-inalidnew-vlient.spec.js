/// <reference types="cypress" />

describe('ZRG', ()=>{
    beforeEach(() => {
        cy.visit('https://taylor-assessment-dev.vercel.app/auth/signin')
    })
    it('Create a new client using an existing client name', function () {
        // Find the username field by its id and type the username
        cy.get('#email').type('admin@thoughtandfunction.com')
    
        // Find the password field by its id and type the password
        cy.get('#password').type('P@ssword1')
        
        // Find the login button by its id and click it to submit the form
        cy.get('.chakra-button', { timeout: 2000 }).click()
    
        cy.wait(8000)

        // open sidebar menu
        cy.get('.css-1finbeg > .chakra-button').click()
        cy.get(':nth-child(2) > .css-1r5es5d').click()

        cy.wait(5000)
        // Add a new client
        cy.get('.css-3jpwsf > .chakra-button').click()
        // cy.get('.chakra-button css-1w5wbqd').click()
        // cy.contains('Upload')
        // .click();
        // cy.contains('button.chakra-button.css-1w5wbqd', 'Upload').click();

        cy.get('button.chakra-button.css-1w5wbqd') // Replace 'button.chakra-button.css-1w5wbqd' with the selector for the button inside the popup
        .should('be.visible')  // Ensure the button is visible
        .click();

        cy.get('input[name="name"]')
        .click()
        .type('Diamond');
      
        cy.get('.css-qf8efn').click()

})

})