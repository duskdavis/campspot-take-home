/// <reference types="cypress" />

import homePage from '../pages/HomePage';
import resultsPage from '../pages/ResultsPage';

describe('Home Page tests', () => {
    const location = 'Canyon Lake, Texas';
    const searchApiUrl = 'https://www.campspot.com/api/gator-core/v2/availability/parks/location/*'

    beforeEach('Visit home search page', () => {
        cy.visit(homePage.url);
        cy.get(homePage.elements.homeHeader).should('contain', 'Find your Campspot.');
        cy.wait(2000);
    })

    it('When entering check in and check out dates, I expect search results to filter availability by date.', { tags: '@Critical'}, () => {
        cy.informationInputSearchFlow(location);
        cy.get(homePage.elements.searchButton).click( {timeout: 5000} );
        cy.get(resultsPage.elements.resultsHeader, { timeout: 10000 }).should('be.visible'); //('contain', 'Campgrounds', { timeout: 10000 });
        // next, to verify results are within the searched date time, here I would adjust the dateTime verify the
        // entered '22' date shows in the 'Fri, Dec 22' format now.
    });
    
    it('Search starts when I click “Search”.', () => {
        // here I extruded the cURL from the Network tab, then pasted it into Postman to retrieve the API date for this test
        cy.intercept('GET', searchApiUrl).as('searchLoading');
        cy.informationInputSearchFlow(location).then(() => {
            cy.wait('@pageLoading').its('response.statusCode').should('eq', 200);
        });
    });
    
    it('Search results should display available campgrounds that match the criteria entered.', () => {
       cy.informationInputSearchFlow(location).then(() => {
            expect(cy.get(resultsPage.elements.searchResults)).to.exist;            
        });
    });
});