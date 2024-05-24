describe('Type Suites',()=>{
    it('Test For Type #001',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#name').type('{shift}{alt}',{release:true}).type('Rajat');
    

    })
})