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

module.exports = function () {
    this.When()
};
