/// <reference types="cypress" />

describe('ZRG', ()=>{
    beforeEach(() => {
        cy.visit('https://taylor-assessment-dev.vercel.app/auth/signin')
    })
    it('participant details', function () {
        // Find the username field by its id and type the username
        cy.get('#email').type('rachael+22@thoughtandfunction.com')
    
        // Find the password field by its id and type the password
        cy.get('#password').type('P@ssword123kenya')
        
        // Find the login button by its id and click it to submit the form
        cy.get('.chakra-button', { timeout: 3000 }).click()
    
        cy.wait(5000)
        cy.get('.css-wxrlk7 > .chakra-button', { timeout: 5000 }).click()

        cy.wait(3000)

        // Add participant details
        cy.get('select[name="country"]').select('KE')
        cy.get('select[name="industry"]').select('Consumer')
        cy.get('select[name="organisationLevel"]').select('Intern')
        cy.get('select[name="functionalArea"]').select('Information Technology (IT)')
        
        // save details
        cy.get('.css-1i4ay0r > .chakra-button').click()
       
    })
    
    })