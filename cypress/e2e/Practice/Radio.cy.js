describe('Radio Buttons Suites',()=>{
    it('Radio Button Tests-1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.title().should('eq','Automation Testing Practice');
        cy.get('#male').as('Male');
        cy.get('#female').as('Female')
        cy.get('@Male').check();
        cy.get('@Male').should('be.checked');
        cy.get('@Female').check();
        cy.get('@Female').should('be.checked');
        cy.get('@Male').should('not.be.checked');
        cy.get("input[type='checkbox']").check();

    })
})