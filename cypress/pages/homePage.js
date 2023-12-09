export default class HomePage {
    
    static url = 'https://development-9-prototype.campspot.com/';

    static elements= {
        homeHeader: '.home-hero-search-heading',
        locationInputField: '.location-search-input',
        checkInInputField: '.app-aggredator-checkin-date',
        checkOutInputField: '.app-aggredator-checkout-date',
        searchButton: '.home-hero-search-form-submit-button',
    };

    clickOnSignin() {
        this.elements.loginBtn().click()
    };

    informationInputSearchFlow(location, inDate, outDate) {
        this.locationInputField.type(location);
        this.checkInInputField.select(inDate);
        this.checkOutInputField.select(outDate);
    };
};
