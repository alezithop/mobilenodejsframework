'use strict'

const {
    Given
} = require('cucumber');
const asserters = require('assert');

const MapStitcher = require('../../maps/stitcher');
const ui = MapStitcher.stitch();
const {
    driver,
    options
} = require('../helpers/get_driver');

Given(/^I start the app without login$/, async () => {
    await driver.sleep(4000);
});

Given(/^I start the app and I login$/, async () => {
    await driver.sleep(8000);
    // TODO: enter valid user and password then click on login button
});