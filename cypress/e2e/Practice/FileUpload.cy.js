import 'cypress-file-upload';
describe('Upload Suites',()=>{

    it('File Upload #001',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('example.json');
        cy.get('#file-submit').click();
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html');
        cy.get("input[name='userfile']").attachFile({filePath:'example.json',fileName:'Rajat.json'})
    })
})