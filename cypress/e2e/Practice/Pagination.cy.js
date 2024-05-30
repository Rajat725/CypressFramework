describe('Paginations Test Suites',()=>{
    it('Pagination Test #001',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        //Rows
        cy.get("#productTable tbody tr").should('have.length','5');
        //Columns
        cy.get("#productTable tbody tr:first-child td").should('have.length','4');
        //Pagination Count
        cy.get('#pagination li').then(($rowList) => {
             const count = $rowList.length;
             cy.log(count);
                for(let i=1;i<=count;i++)
                    {
                        if(i>1) {cy.get("#pagination li:nth-child("+i+")").click();}
                             cy.get("#productTable tbody tr").each(($row,rowIndex,$rowList)=>{
                                 cy.wrap($row).within(()=>{
                                     cy.get('td:not(:last-child)').each(($col,colIndex,$colList)=>{
                                         cy.log($col.text());
                                        })
                                    })
                                })
                        
                    }

             });


        
    


    })
})