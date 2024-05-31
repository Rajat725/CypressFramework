import 'cypress-iframe';
import "cypress-real-events";
describe('E2E flow test',()=>{
    it('E2E Flow #001',()=>{
    
        cy.visit('https://omayo.blogspot.com/');
        //URL
        cy.url().should('eq','https://omayo.blogspot.com/');
        //Title
        cy.title().should('eq','omayo (QAFox.com)');
        //Page Header
        cy.get("h1[class='title']").then((el)=>{
            let titlePage=el.text();
            expect(titlePage).to.contain('omayo (QAFox.com)');
        })
        //Second Method
        cy.get("h1[class='title']").invoke('text')
        .then((str)=>{
            expect(str).to.contain('omayo (QAFox.com)');
        })
        //Button at top 
       // cy.frameLoaded('#navbar-iframe');
        cy.iframe("#navbar-iframe").find("a[class='b-link']")
        .should('have.length','3');
        //Blog Mouse Hover and Validations
        cy.get("#blogsmenu").realHover();
        cy.get("li[class='has-sub'] li").should('be.visible');
        cy.get("li[class='has-sub'] li").should('have.length','4');
        //Blog Links
        let blogArr=[];
        cy.get("li[class='has-sub'] li a").each(($el,index,$list)=>{
            let text=$el.prop('href');
            cy.log(text);
            blogArr.push(text);
        })
        .then(()=>{
            expect(blogArr).to.have.members(
                ['http://www.seleniumtwo-by-arun.blogspot.com/'
                ,'http://www.seleniumone-by-arun.blogspot.com/'
                ,'http://www.selenium-by-arun.blogspot.com/'
                ,'http://www.selenium143.blogspot.com/']
            );
        });
        //External Link CLick
        cy.get("h1[class='title']").realHover();
        cy.get("#selenium143").invoke('removeAttr','target').click();
        cy.url().should('eq','http://selenium143.blogspot.com/');
        //Go Back
        cy.go('back');
        cy.url().should('eq','https://omayo.blogspot.com/');
        //
       
    



    })
})