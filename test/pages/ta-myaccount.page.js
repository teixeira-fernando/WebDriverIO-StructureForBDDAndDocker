import Page from './page'

class MyAccount extends Page {

    /**
    * define elements
    */

    get accountMessage () { return browser.element('.RTL'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://www.phptravels.net/account')       //this will append `contact-us` to the baseUrl to form complete URL
        //browser.pause(2000);
    }

    /*waitForAccountPageToLoad () {
      if(!this.accountMessage.isVisible()){
        this.accountMessage.waitForVisible(10000);
      }
    }*/
    
    getUserInfo (){
     // this.waitForAccountPageToLoad()
      this.accountMessage.waitForExist()
      return this.accountMessage.getText();
    }
}

export default new MyAccount()