
describe('Ecomerce application', function () {
    xit('Login success', function () {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
        console.log(browser.getTitle());
        browser.pause(3000);
        expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')
        $('#username').setValue('rahulshettyacademy')
        $('#password').setValue('learning')
        $('#signInBtn').click();
        const link = $('*=Checkout')
        link.waitForExist()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('ProtoCommerce')
        expect(browser).toHaveUrlContaining('shop')
    });

    xit('Login fail', function () {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
        console.log(browser.getTitle());
        browser.pause(3000);
        expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')
        $('#username').setValue('rahulshettyacademy')
        $('#password').setValue('learning111')
        $('#signInBtn').click();
        console.log($('//div[@class="alert alert-danger col-md-12"]').getText() + ' is the text I am seeing on the screen')
        browser.waitUntil( () =>
            $('#signInBtn').getAttribute('value') === 'Sign In', {timeout: 5000, timeoutMsg: 'Error message did not appear '})
        console.log($('//div[@class="alert alert-danger col-md-12"]').getText() + ' is the text I am seeing on the screen')
        console.log($('p[class="text-center text-white"]').getText())
        expect($('p[class="text-center text-white"]')).toHaveTextContaining('(username is rahulshettyacademy and Password is learning)')

    });
});