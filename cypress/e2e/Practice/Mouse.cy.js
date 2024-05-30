import '@4tw/cypress-drag-drop'
describe('Mouse Events Suites',()=>{
    it('Mouse Event #001',()=>{
    cy.visit('https://unixpapa.com/js/testover.html');
    for(let i=0;i<50;i++){

    cy.get('#red').trigger('mouseover');
    cy.get("body center h1").trigger('mouseover');

    }
    })
    it('Mouse Event #002',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#draggable').drag('#droppable',{force:true});
    })
    it.only('Mouse Event #003',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('.ui-slider-handle.ui-corner-all.ui-state-default')
        .invoke('attr','style','left: 33%;');

    })
    it('Mouse Event #004',()=>{})
    it('Mouse Event #005',()=>{})
})