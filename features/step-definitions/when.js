const {
    When,
    setDefaultTimeout
} = require('cucumber');
const assert = require('assert');
const wd = require('wd');
const {
    driver
} = require('../helpers/get_driver');
const MapStitcher = require('../../maps/stitcher');
const ui = MapStitcher.stitch();

When(/^I wait for "([^"]*)" seconds$/, async (element) => {
    let waitTime = element * 1000;
    await driver.sleep(waitTime);
});

module.exports = function () {
    this.When()
};
