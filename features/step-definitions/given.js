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

Given(/^I start the app without close tutorial$/, async () => {
    await driver.sleep(4000);
});

Given(/^I start the app and close tutorial$/, async () => {
    await driver.sleep(4000);
    const enteradoButton = eval(ui.screen.android.tutorial.buttons.enterado);
    await driver.elementById(enteradoButton.self).click();
    await driver.sleep(4000);
});