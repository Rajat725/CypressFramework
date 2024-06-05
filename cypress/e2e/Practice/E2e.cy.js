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
        //Alerts Popups
        cy.get("#alert1").click();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.eq('Hello');
        });
        //2
        const fn=cy.stub();
        cy.on('window:alert',fn);
        cy.get("#alert1").click().then(()=>{
            expect(fn.getCall(0)).to.be.calledWithExactly('Hello');
        })
        //3 Prompt
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Rajat');
        });
        cy.get("#prompt").click();
        //Confirm
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.eq('Press OK to confirm');
        });
        //2
        const fn2=cy.stub();
        cy.on('window:confirm',fn2);
        cy.get("#confirm").click().then(()=>{
            expect(fn2.getCall(0)).to.be.calledWithExactly('Press OK to confirm');
        })
        //MultiSelect Checkbox
        cy.get("#multiselect1").then(($el)=>{
            const [el]=$el.get();
            const txt=el.textContent;
            cy.log(txt);
        });
        cy.document().then((doc)=>{
            const dom=Cypress.$(doc);
            const txt=doc.getElementById("multiselect1").textContent;
            cy.log(txt);
        })
        let arrz=[];
        cy.get("#multiselect1>option").each(($el,index,$list)=>{
            arrz.push($el.text());
        })
        cy.log(arrz);
        cy.get("#multiselect1").select(['Volvo','Swift','Hyundai']);
        cy.get("#multiselect1 > option:checked").then((selectedOptions) => {
            const selectedValues = Cypress.$.makeArray(selectedOptions).map(option => option.text);
            expect(selectedValues).to.deep.equal(['Volvo', 'Swift', 'Hyundai']);
          });
        //drpdowns
        cy.get("#drop1").select('mno');
        cy.get('#drop1 > option:checked').invoke('text').then((sl)=>{
        
            expect(sl).to.contain('doc 4');

        })
        cy.get("#drop1").children().should('have.length','5');
        let drpdownOpt=[];
        cy.get("#drop1").children().each(($el,index,$list)=>{
          drpdownOpt.push($el.text());  
        }).then(()=>{
            
            drpdownOpt.forEach((ek)=>{cy.log(ek)})
        expect(drpdownOpt).to.contains(['Older Newsletters','doc 1 ','doc 2 ','doc 3 ','doc 4 ','doc 5 '
        ]);});

          


       
    



    })
})