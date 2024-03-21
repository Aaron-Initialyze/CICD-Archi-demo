
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/who-we-are')
    cy.get("button.cm-btn.cm-btn-success.cm-btn-accept-all").should('contain','QAClick Academy');
    cy.get("button.cm-btn.cm-btn-success.cm-btn-accept-all").click()
  })
  it('output', ()=>{
    cy.log('Hello world')
    
  })
})
