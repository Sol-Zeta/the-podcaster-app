describe("Episode Details View", () => {
  it("should display episode information and an audio player", () => {
    cy.visit("/podcast/1535809341/episode/1000670620405");
    cy.get("img").should("exist");
    cy.get("aside")
      .invoke("text")
      .then((text) => {
        expect(text).to.match(/THE JOE BUDDEN PODCAST/i);
        expect(text).to.match(/by The Joe Budden Network/i);
        expect(text).to.match(/Description:/i);
        expect(text).to.match(/Tune into Joe Budden and his friends. Follow/i);
      });

    cy.get('[data-testid="EpisodeDetails"]').within(() => {
      cy.get("h3").should("contain.text", 'Episode 761 | "Ekayno Lodge"');
      cy.get("p").should(
        "contain.text",
        "Fall season has arrived and the first topic on the board is"
      );
      cy.get("audio").should("exist");
    });
  });
});
