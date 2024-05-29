import 'cypress-iframe';
describe('Frmaes test suites',()=>{
    it('Frmae Test #001',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#frame-one796456169').then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).as('iframeBody');
        });
        
        cy.get('@iframeBody').find('#RESULT_TextField-0').type('Rajat');

    })
    it('Frmae Test #002',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.frameLoaded('#frame-one796456169');
        cy.iframe().find('#RESULT_TextField-0').type('Rajatsharma');
     
});

 
});

       

    
   