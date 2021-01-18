/// <reference types="cypress" />
describe("My TF Test Suite", function () {
  before(() => {
    // runs once before all tests in the block
    cy.log("runs once before all tests in the block");
  });
  beforeEach(() => {
    // runs before each test in the block
    cy.log("runs before each test in the block");
  });
  it("My TF Test", function () {
    cy.visit("http://ssqa01:2020");
  });

  afterEach(() => {
    // runs after each test in the block
    cy.log("runs after each test in the block");
  });

  after(() => {
    // runs once after all tests in the block
    cy.log("runs once after all tests in the block");
  });
});