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
    cy.get('[type="email"]').type('rachael6@thoughtandfunction.com')

    // Add another participant
    cy.get('.css-131ehxd > .chakra-button').click()

     //Add second participant's details
     cy.get('[name="participants.1.firstname"]').type('Ray')
     cy.get('[name="participants.1.lastname"]').type('cypress_test2')
     cy.get(':nth-child(4) > .css-924ckw > [type="email"]').type('rachael1@thoughtandfunction.com')

    //  click on the send assessment button
    cy.get('.css-dic39g').click()

    // // delete a participant
    // // wait for the content to be visible within the 'td' element

    cy.contains('td', 'rachael6@thoughtandfunction.com', { timeout: 5000 })
    .parent('tr')
    .within(() => {
      cy.get('button[aria-label="Delete participant"]').click();
    });
    cy.get('.css-1v02a2y').click()

    // delete second participant
    // wait for the content to be visible within the 'td' element
    cy.contains('td', 'rachael1@thoughtandfunction.com', { timeout: 5000 })
    .parent('tr')
    .within(() => {
      cy.get('button[aria-label="Delete participant"]').click();
    });
    cy.get('.css-1v02a2y').click()

    // download a report
    cy.contains('td', 'bogdan.p+997@u-tor.com', { timeout: 5000 })
    .parent('tr')
    .within(() => {
      cy.get('button[aria-label="Download report"]').click();
    });



    // cy.get('.css-1v02a2y').click()



    // cy.get(':nth-child(1) > .css-wxrlk7 > [aria-label="Download report"]')

   
})

})