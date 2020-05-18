describe("User can search for github repo", () => {
  describe("User enter search param and clicks on Search", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "https://api.github.com/search/users*",
        response: "fixture:search_result.json",
      });
      cy.visit("/");
      cy.get("input#search").type("kermit-klein");
      cy.get("button").contains("Search").click();
    });

    it("User can see first result", () => {
      cy.get("#result-item-1").within(() => {
        cy.contains("kermit-klein");
        cy.contains("https://api.github.com/users/kermit-klein");
        cy.get("img").should("be.visible");
      });
    });
  });

  describe("User dont get any result", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "https://api.github.com/search/users*",
        response: "fixture:no_result.json",
      });
      cy.visit("/");
      cy.get("input#search").type("dfgdfgdfgdfgd");
      cy.get("button").contains("Search").click();
    });

    it("User receives empty response", () => {
      cy.get("#message").should("contain", "no results");
    });
  });

  describe("Query must be provided", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "https://api.github.com/search/users*",
        response: "fixture:no_query.json",
      });
      cy.visit("/");
      cy.get("button").contains("Search").click();
    });

    it("User receives empty response", () => {
      cy.get("#message").should("contain", "query must be provided");
    });
  });
});
