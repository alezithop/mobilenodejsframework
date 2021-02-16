const {
    After,
    AfterAll,
    Before,
    BeforeAll,
    setDefaultTimeout
} = require('cucumber');
const {
    driver,
    options
} = require('./get_driver');

BeforeAll({
    timeout: 100 * 10000
}, async () => {
    setDefaultTimeout(100 * 10000);
    await driver.init(options);
});

AfterAll({
    timeout: 50000
}, async () => {
    await driver.quit();
});

module.exports = {
    Before,
    After
};