/// <reference types="cypress" />

// describe('SauceDemo Test', function() {
//     beforeEach(() =>{
//       cy.visit('https://www.saucedemo.com/')
//     })
//     it('should navigate to the saucedemo log in page', function() {
//       // Visit the login page
//       cy.visit('https://www.saucedemo.com/')

//       //check the title of the page
//       cy.get('.login_logo')

//       // Find the username field and enter the username
//       cy.get('[data-test=username]').type("problem_user")

//       // Find the password field and enter the password
//       cy.get('[data-test=password]').type("secret_sauce")

//       // Click the login button
//       cy.get('[data-test=login-button]').click()

//        //Add a product to the cart
//       cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();

//       // Click the “Remove” button on the shopping page for a product
//       cy.get('[data-test=remove-sauce-labs-backpack]').click();

//       cy.get('.shopping_cart_badge').click

//     //   // open the cart
//     //   cy.visit('https://www.saucedemo.com/cart.html')
      
//     //   // Click the “Remove” button on the cart page
//     //   cy.get('[data-test=remove-sauce-labs-backpack]').click
//     })
//   })


describe('shopping flow', function() {
    it('Visits the Login Page, Enters Username and Password, and Submits Form', function () {
        // Visit the login page
        cy.visit('https://www.saucedemo.com')
        // Find the username field by its id and type the username
        cy.get('#user-name').type('standard_user')
        // Find the password field by its id and type the password
        cy.get('#password').type('secret_sauce')
        // Find the login button by its id and click it to submit the form
        cy.get('#login-button').click()
        // add to cart
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        // open the cart
        cy.get('.shopping_cart_badge').click();
        // checkout
        cy.get('[data-test=checkout]').click();
        // 
        cy.get('[data-test=firstName]').click();
        cy.get('[data-test=firstName]').type('John');
        cy.get('[data-test=lastName]').click();
        cy.get('[data-test=lastName]').type('Constantine');
        cy.get('[data-test=postalCode]').click();
        cy.get('[data-test=postalCode]').type('N28AS');
        cy.get('[data-test=continue]').click();
        cy.get('[data-test=finish]').click();
    })
})

 