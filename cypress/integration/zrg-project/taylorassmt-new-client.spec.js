/// <reference types="cypress" />

describe('ZRG', ()=>{
    beforeEach(() => {
        cy.visit('https://taylor-assessment-dev.vercel.app/auth/signin')
    })
    it('Create a new client', function () {
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

        cy.get('button.chakra-button.css-1w5wbqd').click({force:true});

        cy.get('input[name="name"]')
        .click()
        .type('Test client');
      
        cy.get('.css-qf8efn').click()
        cy.wait(5000)

        // Delete a participant
        cy.contains('td', 'Test client', { timeout: 5000 })
        .parent('tr')
        .within(() => {
        cy.get('button[aria-label="delete"]', { timeout: 2000 }).click();
        });
        cy.get('.css-1v02a2y').click()
        cy.wait(3000)

        // Set up client
        cy.get(':nth-child(3) > .css-1jjfad0').click()

        // cy.get(':nth-child(2) > .chakra-radio-group > .chakra-stack > :nth-child(1) > .chakra-radio__control').click()
        // cy.get(':nth-child(5) > .chakra-radio-group > .chakra-stack > label[data-checked=""] > .chakra-radio__control').click()
        cy.wait(3000)

        // click on the radio button
        // cy.contains('label.chakra-radio.css-1cqh9jq', 'Achievement')
        // .find('input[type="radio"]')
        // .check({force: true});
      
        
        cy.contains('label.chakra-radio.css-1cqh9jq', 'Customer Centric')
        .find('input[type="radio"]')
        .check({force: true});

        // cy.get('div[role="group"]').contains('People First').click();

        
        // save the details
        cy.contains('button.chakra-button.css-11s4hid', 'Save').click();
        cy.wait(3000)
        // go back to the clients page
        cy.get('.css-1c3ampu > path').click()
       

})

})