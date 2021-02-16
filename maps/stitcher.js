'use strict';

module.exports = {
    stitch: function () {
        // will contain the aggregated UI maps for the platform being tested
        let ui = {
            screen: {}
        };

        // determines which platform's UI maps should be used for test execution
        ui.screen.tutorial = require('./screen/android/tutorial.map');
        ui.screen.dashboard = require('./screen/android/dashboard.map');

        // merge and return the stitched UI map for the platform being tested
        return ui;
    }
};