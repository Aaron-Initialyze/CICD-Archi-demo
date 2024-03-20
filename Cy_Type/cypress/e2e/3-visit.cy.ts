/// <reference types="Cypress" />

describe("basics", ()=>{
    it('visit explanation', () => {
        cy.visit("/")
        cy.get("button.cm-btn.cm-btn-success.cm-btn-accept-all").click()
       
    });
});