const expectChai = require('chai').expect

describe('Functional testing on application', function () {
    it('Scrolling and Mouse hoover', function () {
        browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        $('#mousehover').scrollIntoView()
        browser.pause(3000)
        $('#mousehover').moveTo()
        browser.pause(3000)
        $("=Top").click()
        browser.pause(3000)

    });

    it('Double clicking and handling alerts', function () {
        browser.url('http://only-testing-blog.blogspot.com/')
        $('button').doubleClick() // flaky test
        browser.pause(5000)
        console.log(browser.isAlertOpen())
        expectChai(browser.isAlertOpen()).to.be.true
        console.log(browser.getAlertText())
        expectChai(browser.getAlertText()).to.be.equal("Press 'OK' or 'Cancel' button!")
        browser.acceptAlert()
        browser.pause(3000)
    });

    it('Web tables Sort navigations', function () {
        browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        $('tr th:nth-child(1)').click() // '//tr/th[1]'

        const veggiesLocators = $$('tr td:nth-child(1)')
        const originalVeggiesNames = veggiesLocators.map(el => el.getText()) // get list of veggie into array
        console.log(originalVeggiesNames)
        let copy = originalVeggiesNames.slice() // it is nessesary to create a copy of the array and then we can sort it
        let sortedVeggies = copy.sort() // sort an array
        console.log(sortedVeggies)
        expectChai(originalVeggiesNames).to.eql(sortedVeggies) // verify that array is sorted
    });

    it('Web tables Filter navigations', function () {
        browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        $('#search-field').setValue('tomato')
        const veggiesLocators = $$('tr td:nth-child(1)')
        expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})
        expect(veggiesLocators[0]).toHaveTextContaining('Tomato');
    });
});