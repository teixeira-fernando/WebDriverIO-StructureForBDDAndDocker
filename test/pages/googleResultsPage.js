import Page from '../pages/page.js'

class googleResultsPage extends Page {

    get searchResults()   { return browser.element('#rcnt'); } //results list

    open () {
        super.open('http://www.google.com')     
    }

    resultsList () {
      this.searchResults.waitForExist();
        return this.searchResults.isDisplayed();
    }
}

export default new googleResultsPage()