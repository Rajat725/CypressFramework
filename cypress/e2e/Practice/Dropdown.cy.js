describe('DropdownsSuites',()=>{
    it('Test Dropdown#1',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('select#country').select('usa');
        cy.get('select#country').select('canada');
        cy.get('select#country').select('india');
        cy.get('select#country').select('China');
        //cy.get('select#country').select('1');
       // cy.get('select#country').select(['india','china']);
        cy.get('#country > option').should('have.length','10');
        //cy.get('select#country').click();
        cy.get('#country > option').each(($el,index,$list)=>{
            console.log("##"+$el.text+index);
            
            if($el.text()=='India')
                {
                    cy.wrap($el).click({force:true});
                }
        })

    
    })
    it('Test Dropdown#2',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            cy.log($el.text());
            if($el.text()=='India')
                {
                    cy.wrap($el).click();
                }
        })

    })

    it.only("Test Drpdonw #003",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("Indi");
        cy.get(".ui-menu-item").should("be.visible");
        cy.get('#autocomplete').type('{downarrow}').type('{enter}').blur();
    })
})