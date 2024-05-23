describe('Then Functionality Usage',()=>{
    it('Then Tests',()=>{

        cy.visit('https://omayo.blogspot.com/');
        cy.url().should('contain','omayo');
        cy.url().should('eq','https://omayo.blogspot.com/');
        cy.url().should('include','omayo');
        cy.title().should('eq','omayo (QAFox.com)');
        cy.get('#pah').should('have.text','PracticeAutomationHere')
        .and('exist');
        cy.get('#pah').then((el)=>{
            const txt=el.text();
            console.log(txt);
            console.log("***********************************");
            expect(txt).to.equal('PracticeAutomationHere');
            assert.equal(txt,'PracticeAutomationHere');
            
        })
        
    })
})