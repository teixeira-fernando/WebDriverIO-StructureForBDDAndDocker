const { Given,Then,When } = require('cucumber');
import loginPage from '../pages/ta-login.page';
import myAccount from '../pages/ta-myaccount.page';
import googleSearchPage from '../pages/googleSearchPage';
import googleResultsPage from '../pages/googleResultsPage';


    Given("I am on the initial google website page", function() {
        googleSearchPage.open();     // navigating to login page
    });

    When(/^I type the term "([^"]*)"$/, function(desiredTerm) {
        googleSearchPage.typeSearch(desiredTerm);   
    });

    When("Click on search button", function() {
        googleSearchPage.clickSearchButton();
    });

    Then("A list of related results should be returned", function() {
        expect(googleResultsPage.resultsList()).to.be.true
      });