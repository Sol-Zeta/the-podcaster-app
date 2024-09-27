describe("Home View - Podcast List", () => {
  it("should display a list of the 100 most popular podcasts", () => {
    cy.visit("/");
    cy.get('[data-testid="podcastList"]').children().should("have.length", 100);
  });

  it("should filter the list when a filter term is entered", () => {
    cy.visit("/");
    cy.get('input[placeholder="Filter podcasts..."]').type("dj");
    cy.wait(2000);
    cy.get('[data-testid="podcastList"]')
      .children()
      .each(() => {
        cy.get("a")
          .invoke("text")
          .then((text) => {
            expect(text).to.match(/dj/i);
          });
      });
  });

  it("should navigate to the podcast detail when a podcast is clicked", () => {
    cy.visit("/");
    cy.get('[data-testid="podcastList"] li').first().click();
    cy.url().should("include", "/podcast/");
  });
});
