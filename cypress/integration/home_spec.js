/// <reference types="Cypress" />

describe("The Home Page", function() {
  before(function() {
    cy.visit("/");
  });

  it("successfully loads", function() {
    cy.get(".MovieList-wrapper-60").should("exist");
  });

  it("jump to detail page when click image", function() {
    cy.get(".MovieList-wrapper-60 > :nth-child(1)").should("exist");

    cy.get(":nth-child(1) > a > .MovieItem-img-72").click();

    cy.url().should("include", "/movie/");

    cy.get(".MuiSvgIcon-root-123").click(); // go back

    let baseUrl = Cypress.config().baseUrl;
    cy.url().should("eq", baseUrl + "/");
  });

  it("movie list should contain search query", function() {
    cy.get("#inputVal").type("batman");
    cy.get(".MuiInputBase-root-257").trigger("input");

    cy.get(".MovieList-wrapper-279 > :nth-child(1)").should("contain", "Batman");
  });
});
