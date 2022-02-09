describe('Window and Frames', function () {
    xit('Parent and Child window switch', function () {
        browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        $('#openwindow').click()
        let handles = browser.getWindowHandles()
        browser.switchToWindow(handles[1])
        console.log(browser.getTitle())
        browser.maximizeWindow()
        browser.closeWindow()
        browser.switchToWindow(handles[0])
        console.log(browser.getTitle())

        browser.newWindow('https://www.rahulshettyacademy.com/#/index')
        const title = browser.getTitle()
        browser.switchWindow('https://rahulshettyacademy.com/AutomationPractice')
        $('#name').setValue(title)
        browser.pause(3000)
        browser.switchWindow(title)
        console.log(browser.getUrl())

    });

    it('Frames switch', function () {
        browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        $('#mousehover').scrollIntoView()
        console.log($$('a').length) // amount of links on the page
        browser.switchToFrame($('[id="courses-iframe"]'))
        console.log($('=Courses').getTagName())
        console.log($$('a').length)
        browser.switchToFrame(null)
        console.log($$('a').length)
 
    });
});