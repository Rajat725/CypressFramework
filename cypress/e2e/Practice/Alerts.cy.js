describe('Alert Suites',()=>{
    it('Testing Alerts#001',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get("button[onclick='myFunctionAlert()']").click();
        cy.on('window:alert',()=>{});
        

    })
    it('Testing Alerts#002',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get("button[onclick='myFunctionAlert()']").click();
        cy.on('window:alert',(text)=>{expect(text).to.equal('I am an alert box!')});
     

    })

    it('Testing Alerts#003',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get("button[onclick='myFunctionConfirm()']").click();
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('Press a button!');
            return false;
        });
        cy.get('#demo').should('have.text','You pressed Cancel!');
      

    })

    it('Testing Alerts#004',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get("button[onclick='myFunctionConfirm()']").click();
        cy.on('window:confirm',(text)=>{

            expect(text).to.equal('Press a button!');
           
        });
        cy.get('#demo').should('have.text','You pressed OK!');
       

    })


    it('Testing Alerts#005',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.window().then((win)=>{cy.stub(win,"prompt").returns('Rajat')})
        cy.get("button[onclick='myFunctionPrompt()']").click();
        cy.get('#demo').should('have.text','Hello Rajat! How are you today?')
       

    })
    
    it.only('Testing Alerts#006',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/',{onBeforeLoad(win){
            cy.stub(win,"prompt").returns('Rajat');
        }});
        //cy.window().then((win)=>{cy.stub(win,"prompt").returns('Rajat')})
        cy.get("button[onclick='myFunctionPrompt()']").click();
        cy.get('#demo').should('have.text','Hello Rajat! How are you today?')
       

    })
    
})