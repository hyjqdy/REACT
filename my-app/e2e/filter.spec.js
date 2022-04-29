describe("filter cutomers", () => {
    it("get Geller customer", () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[placeholder="search by name"]')
        .type("Geller")
        .get('.row')
        .then(rows => {
            expect(rows.length).to.eq(2);
        });
    })
});