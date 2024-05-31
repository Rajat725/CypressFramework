
describe('External Data Drivern testing',()=>{

 let cred;

    before(()=>{
        cy.fixture('login.json').then((dat)=>{

            cred=dat;
        })
    })

    it('should be able to get data from external source',()=>{

        cy.visit('https://www.saucedemo.com/');
        cy.fixture('login.json').then((data)=>{

            cy.get('#user-name').type(data.username);
            cy.get('#password').type(data.password);
            cy.get('#login-button').click();
            cy.get("h3[data-test='error']").should('be.visible');

        })
    })

    it('Test #002',()=>{

            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(cred.username);
            cy.get('#password').type(cred.password);
            cy.get('#login-button').click();
            cy.get("h3[data-test='error']").should('be.visible');
        })
       
    it('Test #003',()=>{
            cy.fixture('login2.json').then((data)=>{
                data.forEach(element => {
                    cy.visit('https://www.saucedemo.com/');
                    cy.get('#user-name').type(element.username);
                    cy.get('#password').type(element.password);
                    cy.get('#login-button').click();
                    cy.get("h3[data-test='error']").should('be.visible');
                });
            })
        })

    })