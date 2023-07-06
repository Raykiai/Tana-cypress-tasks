/// <reference types="cypress" />

describe('ZRG', ()=>{
    beforeEach(() => {
        cy.visit('https://taylor-assessment-dev.vercel.app/auth/signin')
    })
    it('Superuser', function () {
        // Find the username field by its id and type the username
        cy.get('#email').type('admin@thoughtandfunction.com')
    
        // Find the password field by its id and type the password
        cy.get('#password').type('P@ssword1')
        
        // Find the login button by its id and click it to submit the form
        cy.get('.chakra-button', { timeout: 2000 }).click()
    
        cy.wait(5000)
        cy.wait(5000)
        //Add new participant
        cy.get('.css-y001n9 > .chakra-button', { timeout: 5000 }).click()
    
        //Add first participant's details
        cy.get('[name="participants.0.firstname"]').type('Rachael')
        cy.get('[name="participants.0.lastname"]').type('cypress_test')
        cy.get('[type="email"]').type('rachael+16@thoughtandfunction.com')
    
        //  click on the send assessment button
        cy.get('.css-dic39g').click()
        cy.wait(5000)
        // send an invitation
        cy.contains('td', 'rachael+16@thoughtandfunction.com', { timeout: 5000 })
        .parent('tr')
        .within(() => {
          cy.get('button[aria-label="Send invite"]').click();
        });
        cy.get('.css-1v02a2y').click()
    
        // send an invitation again
        cy.contains('td', 'rachael+16@thoughtandfunction.com', { timeout: 5000 })
        .parent('tr')
        .within(() => {
          cy.get('button[aria-label="Send invite"]').click();
        });
        cy.get('.css-1v02a2y').click()
    
       
    })
    
    })