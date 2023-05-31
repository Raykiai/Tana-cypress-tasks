/// <reference types="cypress" />

describe('', function() {
    it('should execute the shopping flow', function () {
        // Visit the login page
        cy.visit('https://www.saucedemo.com')

        // Find the username field by its id and type the username
        cy.get('#user-name').type('standard_user')

        // Find the password field by its id and type the password
        cy.get('#password').type('secret_sauce')

        // Find the login button by its id and click it to submit the form
        cy.get('#login-button').click()
        
        // Scroll the page up
        cy.scrollTo('top');

        // Scroll the page down
        cy.scrollTo('bottom');

        // add products to the cart
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

        // View a product's details
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test=remove-sauce-labs-backpack]').click();

        // Go back to the products page
        cy.get('[data-test=back-to-products]').click();


        // open the cart
        cy.get('.shopping_cart_badge').click();

        // Remove a product from the cart
        cy.get('[data-test=remove-sauce-labs-bolt-t-shirt]').click();

        // checkout the products
        cy.get('[data-test=checkout]').click();

        // Fill in the checkout form
        cy.get('[data-test=firstName]').click();
        cy.get('[data-test=firstName]').type('John');
        cy.get('[data-test=lastName]').click();
        cy.get('[data-test=lastName]').type('Constantine');
        cy.get('[data-test=postalCode]').click();
        cy.get('[data-test=postalCode]').type('N28AS');
        cy.get('[data-test=continue]').click();
        cy.get('[data-test=finish]').click();

        // Open the side bar menu
        cy.get('#react-burger-menu-btn').click();

        // Log out
        cy.get('#logout_sidebar_link').click();
    })
})

 