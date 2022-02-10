const expectChai = require('chai').expect

describe('Ecomerce application', function () {

    it('UI controls Sanity', function () {
        browser.url('/loginpagePractise/#');
        $('#username').setValue('rahulshettyacademy')
        $('#password').setValue('learning')

        const radioButtons = $$('.customradio')
        const userDropdown = radioButtons[1]
        const adminDropdown = radioButtons[0]
        userDropdown.$('.checkmark').click()

        browser.pause(3000)
        const modal = $('.modal-body')
        modal.waitForDisplayed() // popup modal displays when we choose user
        $('#cancelBtn').click()
        console.log(userDropdown.$('.checkmark').isSelected()) //false

        userDropdown.$('.checkmark').click()
        modal.waitForDisplayed()
        $('#okayBtn').click()
        adminDropdown.click()
        expect(modal).not.toBeDisplayed() //popup modal does not display when we choose admin

        const dropdown = $('select.form-control')
        dropdown.selectByAttribute('value', 'teach')
        browser.pause(3000)
        dropdown.selectByVisibleText('Consultant')
        browser.pause(3000)
        dropdown.selectByIndex(0)
        browser.pause(3000)

        dropdown.getValue()// stud   use chai assertions
        expectChai(dropdown.getValue()).to.eq('stud')
    });

    it('Dynamic dropdown controls Smoke', function () {
        browser.url('/AutomationPractice/')
        $('#autocomplete').setValue('ind')
        browser.pause(3000)
        let items = $$('[class="ui-menu-item"] div')
        // for(let i = 0; i < items.length; i++) {
        //     if(items[i].getText() === 'India') {
        //         items[i].click()
        //     }
        // }
        const desiredLocator = items.filter(el => el.getText() === 'India')
        desiredLocator[0].click()
        browser.pause(3000)
    });

    it('Checkbox identification Smoke', function () {
        browser.url('/AutomationPractice/')
        const element = $$('[type="checkbox"]')
        element[1].click()
        console.log(element[1].isSelected()) // true
        console.log(element[2].isSelected()) // false
        browser.saveScreenshot('screenshot.png')

    });
});