
describe('Open Browser', () => {
    it('Basic Actions', () => {
      const tester={timeout:30000};
     
      cy.visit('https://automationexercise.com/',tester);
      cy.visit('',{auth:{username:'',password:''}})
      cy.get('.nav.navbar-nav li:nth-child(4)').click();
      cy.get("input[data-qa='login-email']").type('Rajatshrma');
      cy.get("input[placeholder='Password']").type("Indigo@123");
      cy.get("button[data-qa='login-button']").click();
      
    })

    it.only('Visit Site',()=>{

      cy.visit('https://www.makemytrip.com/',
      {headers:{"Accept-Encoding": "gzip, deflate"}});
  
      
      

    })
  })