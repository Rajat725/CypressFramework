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

    it.only('Child Window Test #003',()=>{
        let text;
        cy.visit('https://the-internet.herokuapp.com/windows/new');
        cy.get("div[class='example'] h3")
        .invoke('text')
        .then((elText) => {
          text = elText;
          cy.log(text);
        });

        cy.log(text);
        cy.origin('https://testautomationpractice.blogspot.com/',()=>{

        cy.get("#name").type(text);
        })

    })
})