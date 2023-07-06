/// <reference types="cypress" />

describe('ZRG', ()=>{
    beforeEach(() => {
        cy.visit('https://taylor-assessment-dev.vercel.app/auth/register/93/rachael%2B22@thoughtandfunction.com/46f458ce-8ce5-4c79-90af-abfafc5ed90c')
    })
    it('create account', function () {
        cy.get('button.chakra-button.css-13wb9gs').click();

        // ennter new password
        cy.get('#password').type('P@ssword123kenya')
        cy.get('#confirmPassword').type('P@ssword123kenya')
        cy.get('.css-0 > .chakra-button').click();
        cy.wait(5000)
    // Log in
        cy.get('#email').clear()
        cy.get('#email').type('rachael+22@thoughtandfunction.com')
        cy.get('#password').type('P@ssword123kenya')
        cy.get('.chakra-button').click()

        // select gender
        cy.wait(13000)
        cy.get('select.chakra-select.css-zts9x4').select('male')

          
        //click the date picker. Choose the date
        cy.get('input#field-\\:r6\\:').click()
        cy.get('select.react-datepicker__year-select').select('2000')
        cy.get('select.react-datepicker__month-select').select('June')
        cy.get('div.react-datepicker__day.react-datepicker__day--026').click();

        // save
        cy.get('button.chakra-button.css-13wb9gs').click()

       
    })

    })