const conf = {
    specs: ['./specs/**/*.spec.js'],
    framework: 'mocha',
    mochaOpts: {
        Timeout: 20 * 1000   
    },
    onPrepare(){
        browser.waitForAngularEnabled(false)
    },
    SELENIM_PROMISE_MANAGER: false,
    
  };
exports.config = conf