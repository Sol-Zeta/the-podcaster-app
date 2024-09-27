describe("Header and Navigation", () => {
  it("should navigate to the main view when the app title is clicked", () => {
    cy.visit("/podcast/1535809341");
    cy.get("header a").should("contain.text", "Podcaster");
    cy.get("header a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
