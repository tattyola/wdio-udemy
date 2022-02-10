const expectChai = require('chai').expect
const loginPage = require('../pageObjects/loginPage');
const shopPage = require('../pageObjects/shopPage');
const reviewPage = require('../pageObjects/reviewPage')
const cartPage = require('../pageObjects/cartPage')
const finalPage = require('../pageObjects/finalPage')
const fs = require('fs')
let products = JSON.parse(fs.readFileSync('test/specs/testData/e2eData.json'))

describe('', function () {

    products.forEach(({products}) => {

        it('End to end test', function () {

            //let products = ['Blackberry', 'Nokia Edge']
            browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
            loginPage.Login('rahulshettyacademy', 'learning')
            shopPage.checkout.waitForExist()

            shopPage.addProductToCart(products);
            browser.pause(3000)
            shopPage.checkout.click()

            let sumOfProducts = reviewPage.sumOfProducts()
            const totalIntValue = reviewPage.totalFormattedPrice()
            expectChai(sumOfProducts).to.equal(totalIntValue)

            cartPage.checkoutBtn.click()
            finalPage.countryField.setValue('ind')
            finalPage.waitingElipsis.waitForExist({reverse: true})
            finalPage.desiredCountr.click()
            finalPage.purchase.click()
            expect(finalPage.successAlert).toHaveTextContaining('Success! Thank you! Your order will be delivered in next few weeks :-).')
        });
    })
});