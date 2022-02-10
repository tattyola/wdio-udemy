const loginPage = require('../pageObjects/loginPage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/specs/testData/loginData.json'))

describe('Ecomerce application', function () {

    credentials.forEach(({username,password}) => {
        it('Login fail', function () {
            browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
            console.log(browser.getTitle());
            browser.pause(3000);
            expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')

            loginPage.Login(username, password)

            console.log(loginPage.alert.getText() + ' is the text I am seeing on the screen')
            browser.waitUntil( () =>
                loginPage.signIn.getAttribute('value') === 'Sign In', {timeout: 5000, timeoutMsg: 'Error message did not appear '})
            console.log(loginPage.alert.getText() + ' is the text I am seeing on the screen')
            console.log(loginPage.text.getText())
            expect(loginPage.text).toHaveTextContaining('(username is rahulshettyacademy and Password is learning)')
        });
    })

    it('Login success', function () {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
        console.log(browser.getTitle());
        browser.pause(3000);
        expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')

        loginPage.Login('rahulshettyacademy', 'learning')

        loginPage.checkout.waitForExist()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('ProtoCommerce')
        expect(browser).toHaveUrlContaining('shop')
    });
});