describe("Podcast Details View", () => {
  it("should display podcast information in the sidebar", () => {
    cy.visit("/podcast/1535809341");
    cy.get("img").should("exist");
    cy.get("aside")
      .invoke("text")
      .then((text) => {
        expect(text).to.match(/THE JOE BUDDEN PODCAST/i);
        expect(text).to.match(/by The Joe Budden Network/i);
        expect(text).to.match(/Description:/i);
        expect(text).to.match(/Tune into Joe Budden and his friends. Follow/i);
      });
    cy.get("aside").within(() => {
      cy.get("a")
        .should("have.attr", "href")
        .and("include", "/podcast/1535809341");
    });
  });

  it("should display a list of episodes", () => {
    cy.visit("/podcast/1535809341");
    cy.get("table tbody").children().should("have.length.greaterThan", 0);
  });

  it("should navigate to the episode detail url when an episode is clicked", () => {
    cy.visit("/podcast/1535809341");
    cy.get("table tbody tr a").first().click();
    cy.url().should("include", "/podcast/1535809341/episode/");
  });
});
