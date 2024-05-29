describe('Child Windoes Siites',()=>{
    it('ChildWindow Tests #001',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get("a[href='/windows/new']")
        .invoke('removeAttr','target');
        cy.get("a[href='/windows/new']").click();
        cy.get("div[class='example'] h3")
        .should('have.text','New Window');
    })

    it('Child Window Test #002',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get("a[href='/windows/new']").then((el)=>{
           const endPoint= el.prop('href');
           const newURL="https://the-internet.herokuapp.com/"+endPoint;
           cy.visit(endPoint);
           cy.get("div[class='example'] h3")
           .should('have.text','New Window');
        })
        cy.get("div[class='example'] h3")
           .should('have.text','New Window');
    })

    it('Child Window Test #003',()=>{
      
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then((el)=>{
            const newURL=el.prop('href');
            cy.visit(newURL);
            cy.origin(newURL,()=>{
                cy.get("div[class='button float-left']>a[class='main-btn']")
                .should('have.text','Access all our Courses');
                cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            })
            cy.url().should('contain','rahulshettyacademy');
           
        });

    })

    it('Child Window Test #004',()=>{
      
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#openwindow').click();
        const newURL='https://www.qaclickacademy.com/';
        cy.visit(newURL);
        cy.origin(newURL,()=>{
                cy.get("div[class='button float-left']>a[class='main-btn']")
                .should('have.text','Access all our Courses');
                cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            })
        cy.url().should('contain','rahulshettyacademy');
           
        });

    
})