describe("Search movie", () => {
    it("should display search form", () => {
        cy.visit("http://localhost:3000/")
        cy.get("form").should("exist")
        cy.get('input[id="searchInput"]').should("exist");
    })
})

