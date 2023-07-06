/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type("Clean room{enter}")
    cy.get('.new-todo').type("Cook dinner{enter}")
    cy.get('.new-todo').type("Water plants{enter}")

    cy.get('.todo-list li:nth-child(2) .toggle').click()
})

it('it should filter "Active" todos', () =>{
    cy.contains('Active').click()
    cy.get('.todo-list li').should('have.length', 2)
})
it('it should filter "Completed" todos', () =>{
    cy.contains('Completed').click()
    cy.get('.todo-list li').should('have.length', 1)
})
it('it should filter "All" todos', () =>{
    cy.contains('All').click()
    cy.get('.todo-list li').should('have.length', 3)
})
})