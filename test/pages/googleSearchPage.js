import Page from '../pages/page.js'

class googleSearchPage extends Page {

    
    get googleLogo()   { return browser.element('#hplogo'); } //identifying by ID
    get searchTextField()   { return browser.element('.gLFyf'); }
    get searchButton()   { return browser.element('.name=btnK'); }

    open () {
        super.open('http://www.google.com')     
    }

    typeSearch (desiredTerm) {
      this.searchTextField.waitForExist();
      this.searchTextField.setValue(desiredTerm)
    }

    clickSearchButton(){
        this.searchButton.waitForExist();
        browser.keys("\uE007"); 
        $$('.sbct')[0].click()
        //browser.element('$$sbct').click();
        //this.searchButton.click()
    }
}

export default new googleSearchPage()