import HomePage from "../pages/homePage";

Cypress.Commands.add('informationInputSearchFlow', (location) => {
    cy.get(HomePage.elements.locationInputField).click().type(location, '{enter}');
    // to save time on this excercise I hardcoded the date, otherwise I would use the Date() format using today's date 
    cy.get(HomePage.elements.checkInInputField).click( {force: true, timeout: 2000} ).click().then(() => {
        cy.get('.app-day-12-22').click();
    });
    cy.get(HomePage.elements.checkOutInputField).click( {force: true, timeout: 2000} ).click().then(() => {
        cy.get('.app-day-12-24').click();
    });
});
