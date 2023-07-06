/// <reference types="cypress" />


describe('', () => {
    it('log in', function () {
        cy.visit('https://wtt-webapp-stage.vercel.app/auth/signin')
        // Find the username field by its id and type the username
        cy.get('#email').type('admin@thoughtandfunction.com')

        // Find the password field by its id and type the password
        cy.get('#password').type('P@ssword1')

        // Find the login button by its id and click it to submit the form
        cy.get('.chakra-button').click()

        // cy.wait(4000)
        cy.visit()
        //Close the side-bar menu
        cy.get('.chakra-button > svg').click()

        
        // Open a client's page
        cy.get(':nth-child(1) > .css-1jjfad0').click()

        cy.wait(4000)
        // Click on the New survey button
        cy.get('.chakra-button > .chakra-icon').click()

        // Open the Reminder email 
        cy.get('[data-type="REMINDER_COMPLETE"]').click()

        // // Edit click the title field
        // cy.get('.field-:r1a:').type("Welcome to the Diamond group Culture survey{enter}")
   
        // Edit the body of the reminder email and add new text
        cy.get('#template-body').clear().type('Dear participant. This is a reminder to participate in the culture survey. This is an opportunity to share your opinions and help your organisation make improvements. The survey takes about 15 minutes to complete. You have until deadline to make your contribution. Please click here to start')
        cy.wait(1000)

        // cy.get('.css-1n2d6ot' ).click({force: true})
        // cy.get('#field-\:r1d\:').click({force: true})

        // Click the save button
        cy.get('.css-g1sczk').click()

})

})

