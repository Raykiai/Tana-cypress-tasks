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

        cy.wait(4000)
        //Close the side-bar menu
        cy.get('.chakra-button > svg', {delay:3000}).click()

        
        // Open a client's page
        cy.get(':nth-child(1) > .css-1jjfad0', {delay: 3000}).click()

       
})

})

