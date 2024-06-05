describe('Miscellaneous Suites',()=>{
    Cypress.config("baseUrl","");
    Cypress.config("retries","3");
    it("Test #001",()=>{
       cy.visit("https://practice.expandtesting.com/shadowdom");
       cy.get("#shadow-host").shadow()
       .find("#my-btn").click();
       cy.wait(2000);
       cy.reload();
       cy.get("#my-btn",{includeShadowDom:true}).first().click();
       cy.wait(2000);
       cy.reload();
       cy.get('#shadow-host').then((el)=>{
        const [dom]=el.get();
        dom.shadowRoot.querySelector('#my-btn').click();
       })
       cy.reload();
       cy.document().then((doc)=>{
        doc.querySelector("#shadow-host").shadowRoot.querySelector("#my-btn").click();
       })
    })
    it.only("Test #002",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.document().then((doc)=>{
            const text=doc.querySelector("#mce_0_ifr").contentDocument.querySelector("#tinymce > p").textContent;
            cy.log(text);
        });
    })

    it('Mis #003',{retries:2},()=>{})
})