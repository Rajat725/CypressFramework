describe('WebTables Example Scenarios',()=>{
    it('Scenario#001',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        //Rows Count
        cy.get("table[name='BookTable'] > tbody > tr").should('have.length','7');
        //Column Count
        cy.get("table[name='BookTable'] > tbody > tr >th").should('have.length','4');
        //Iterate
        cy.get("table[name='BookTable'] > tbody > tr:not(:first-child)")
        .each(($row,index,$list)=>{

            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,colIndex,$colList)=>{
                    cy.log($col.text());
                })
            })



        })

    })
})