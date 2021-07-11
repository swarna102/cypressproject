describe("my first test case", () => {
    it("Does not do match", () => {
        expect(true).to.equal(true);
    });
    it("visit site", () => {
        cy.visit("http://localhost:3001/");
        //cy.contains("swarna").click();
        cy.contains("First Name").rightclick();
        cy.url().should("include", "/");
        //cy.pause();
        //cy.debug();
    });
    it("contains", () => {
        cy.contains("Last Name");
    });
});
