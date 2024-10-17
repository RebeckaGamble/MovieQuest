describe("Add to favourites", () => {
  it("should display heart icon", () => {
    cy.visit("http://localhost:3000/");
    cy.get("svg").should("exist");
    cy.get("#faregheart").should("exist");
  });
});

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
  it("Should display the text", () => {
    cy.contains("Movies").should("exist")
  })
});
