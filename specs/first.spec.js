const { browser } = require('protractor')

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function () {
    const searchValue = 'Admin'
    it('first test', async function(){
        const searchInputSelector = 'body > app-root > app-login > div > div > div > form > div > input.login.ng-pristine.ng-valid.ng-touched'
        const searchInput = $(searchInputSelector)
        
        await browser.get('http://167.114.201.175:5000/login')
        await browser.wait(EC.visibilityOf(searchInput), 5000, 'Login input should be visible')

        await searchInput.sendKeys(searchValue)
        timeout: 5000
    })
})