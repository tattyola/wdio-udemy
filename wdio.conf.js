exports.config = {
    specs: [
        './test/specs/**/*.js'
        // './test/specs/poECommerceE2E.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 3,
    capabilities: [
        {
            maxInstances: 5,

            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
            },
            acceptInsecureCerts: true
        },
        // {
        //     maxInstances: 5,
        //     browserName: 'firefox', // if you want to run tests in firefox
        //     specs: [
        //         'test/ffOnly/*'
        //     ],
        //     'moz:firefoxOptions': {
        //         args: ['-headless']
        //     }
        // }
    ],
    // Test Configurations
    // Define all options that are relevant for the WebdriverIO instance here
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // Hooks
    // before: function (capabilities, specs) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test, context) {
    // },
    // beforeHook: function (test, context) {
    // },
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
