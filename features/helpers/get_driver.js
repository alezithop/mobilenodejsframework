const wd = require('wd');

const PORT = 4723;

const options = {
    platformName: 'android',
    deviceName: 'Pixel 4',
    platformVersion: '8.1',
    // appPackage: 'com.bizale.cobradorapp',
    // appActivity: 'com.bizale.cobradorapp.Initiation',
    // appActivityLaunch: 'com.bizale.cobradorapp.Initiation',
    app: '/home/alejandro/Repositories/mobilenodejsframework/data/android/eribank.apk',
    // app: resolve('./data/android/eribank.apk'),
    fullReset: true
    // automationName: 'uiautomator2',
    // avdReadyTimeOut: '2000',
    // avd: 'Pixel_4',
    // resetKeyboard: true,
    // noReset: true,
    // unicodeKeyboard: true
};

const driver = wd.promiseChainRemote('localhost', PORT);

module.exports = {
    driver,
    options
};