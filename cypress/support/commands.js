import HomePage from "../pages/homePage";

Cypress.Commands.add('informationInputSearchFlow', (location, inDate, outDate) => {
    cy.get(homePage.elements.locationInputField.type(location)),
    cy.get(homePage.elements.checkInInputField.select(inDate)),
    cy.get(homePage.elements.checkOutInputField.select(outDate)),
})