const { Given,Then,When } = require('cucumber');
import loginPage from '../pages/ta-login.page';
import myAccount from '../pages/ta-myaccount.page';


    Given(/^I am on the phptravels page$/, function() {
        loginPage.open();     // navigating to login page
    });

    When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
        loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
    });

    Then(/^I should see the message "([^"]*)" on my account page$/, async function(message) {
         await myAccount.getUserInfo().should.be.equal(message) 
      });