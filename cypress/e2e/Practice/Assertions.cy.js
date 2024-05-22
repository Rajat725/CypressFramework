describe('Assertions Suite',()=>{

    it('Assertion Practice',()=>{

        cy.visit('https://omayo.blogspot.com/');
        cy.url().should('contain','omayo');
        cy.url().should('eq','https://omayo.blogspot.com/');
        cy.url().should('include','omayo');
        cy.title().should('eq','omayo (QAFox.com)');
        cy.get('#pah').should('have.text','PracticeAutomationHere')
        .and('exist');
    })
})