'use strict';

module.exports = {
    stitch: function () {
        // will contain the aggregated UI maps for the platform being tested
        let ui = {
            screen: {
                android: {},
                ios: {}
            }
        };

        // determines which platform's UI maps should be used for test execution
        ui.screen.android.login = require('./screen/android/login.map');
        ui.screen.android.dashboard = require('./screen/android/dashboard.map');

        // merge and return the stitched UI map for the platform being tested
        return ui;
    }
};