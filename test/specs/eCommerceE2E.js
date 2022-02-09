const expectChai = require('chai').expect

describe('', function () {
    it('End to end test', function () {
        // browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
        // $('#username').setValue('rahulshettyacademy')
        // $('#password').setValue('learning')
        // $('#signInBtn').click();
        // const link = $('*=Checkout')
        // link.waitForExist()
        // let cards = $$('div[class="card h-100"]')
        // cards.filter(el => el.$('div h4 a').getText() === 'Blackberry')
        //     .map(el => el.$('.card-footer button').click())
        // browser.pause(3000)

        let products = ['Blackberry', 'Nokia Edge']
        browser.url('https://rahulshettyacademy.com/loginpagePractise/#');
        $('#username').setValue('rahulshettyacademy')
        $('#password').setValue('learning')
        $('#signInBtn').click();
        const link = $('*=Checkout')
        link.waitForExist()
        let cards = $$('div[class="card h-100"]')
        cards.filter(el => products.includes(el.$('div h4 a').getText()))
            .map(el => el.$('.card-footer button').click())
        browser.pause(3000)

        link.click()
        let productPrices = $$('//tr/td[4]/strong')
        //getText()
        //format it and convert into integer ₹. 50000
        //apply sum on all the values
        const sumOfProducts = productPrices.map(el => parseInt(el.getText().split('.')[1].trim()))
            .reduce((acc, price) => acc + price, 0)
        console.log(sumOfProducts)
        const totalValue = $('h3 strong').getText()
        const totalIntValue = parseInt(totalValue.split('.')[1].trim())
        expectChai(sumOfProducts).to.equal(totalIntValue)

        $('.btn-success').click()
        $('#country').setValue('ind')
        $('.lds-ellipsis').waitForExist({reverse: true})
        $('=India').click()
        $('[type="submit"]').click()
        expect($('div .alert-success')).toHaveTextContaining('Success! Thank you! Your order will be delivered in next few weeks :-).')
    });
});