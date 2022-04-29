describe("delete cutomer", () => {
    it("delete a customer", () => {
        cy.visit("http://localhost:3000/");
        cy.get('button').first().click().get('.row')
        .then(rows => {
            expect(rows.length).to.eq(5);
        });
    })
});