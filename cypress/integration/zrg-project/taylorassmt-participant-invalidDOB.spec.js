/// <reference types="cypress" />

describe('ZRG', ()=>{
    beforeEach(() => {
        cy.visit('https://taylor-assessment-dev.vercel.app/auth/register/85/rachael%2B14@thoughtandfunction.com/6667ca8e-5acb-4d67-8a62-784adc37faf7')
    })
    it('set up account with an invalid DOB', function () {
        cy.get('button.chakra-button.css-13wb9gs').click();

        // ennter new password
        cy.get('#password').type('P@ssword123kenya')
        cy.get('#confirmPassword').type('P@ssword123kenya')
        cy.get('.css-0 > .chakra-button').click();

    // Log in
        cy.get('#email').clear()
        cy.get('#email').type('rachael+14@thoughtandfunction.com')
        cy.get('#password').type('P@ssword123kenya')
        cy.get('.chakra-button').click()

        // select gender
        cy.wait(10000)
        cy.get('select.chakra-select.css-zts9x4').select('male')

          
        //click the date picker. Choose the date
        cy.get('input#field-\\:r6\\:').click();
        cy.get('select.react-datepicker__year-select').select('2023')
        cy.get('select.react-datepicker__month-select').select('June')
        cy.get('div.react-datepicker__day.react-datepicker__day--026').click();

        // save
        cy.get('button.chakra-button.css-13wb9gs').click()

       
    })

    })