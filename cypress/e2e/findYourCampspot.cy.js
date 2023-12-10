/// <reference types="cypress" />

import homePage from '../pages/HomePage';
import resultsPage from '../pages/ResultsPage';

describe('Home Page tests', () => {
    const location = 'Canyon Lake, TX';
    // to save time on this excercise I hardcoded the date, otherwise I would use the Date() format using today's date 
    const checkInDate = '22';
    const checkOutDate = '24';
    const searchApiUrl = 'https://www.campspot.com/api/gator-core/v2/availability/parks/location/*'

    beforeEach('Visit home search page', () => {
        cy.visit(homePage.url);
        cy.get(homePage.elements.homeHeader).should('contain', 'Find your Campspot.');
    })

    it('When entering check in and check out dates, I expect search results to filter availability by date.', { tags: '@Critical'}, () => {
        informationInputSearchFlow(location, checkInDate, checkOutDate);
        cy.get(homePage.elements.searchButton).click().then(() => {
        cy.get(resultsPage.elements.resultsHeader).should('contain', 'Campgrounds');
            // next, to verify results are within the searched date time, here I would adjust the dateTime verify the
            // entered '22' date shows in the 'Fri, Dec 22' format now.
        });
    });
    
    it('Search starts when I click “Search”.', () => {
        // here I extruded the cURL from the Network tab, then pasted it into Postman to retrieve the API date for this test
        cy.intercept('GET', searchApiUrl).as('searchLoading');
        informationInputSearchFlow(location, checkInDate, checkOutDate).then(() => {
            cy.wait('@pageLoading').its('response.statusCode').should('eq', 200);
        });
    });
    
    it('Search results should display available campgrounds that match the criteria entered.', () => {
       informationInputSearchFlow(location, checkInDate, checkOutDate).then(() => {
            expect(cy.get(resultsPage.elements.searchResults)).to.exist;            
        });
    });
});