/// <reference types="Cypress" />
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io');
      cy.title().should('include', 'Kitchen Sink');
     
      
      
      
    })
  })