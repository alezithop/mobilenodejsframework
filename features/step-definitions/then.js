const { Then } = require ('cucumber');
const wd = require ('wd');
const assert = require ('assert');
const asserters = wd.asserters;
const expect = require ('chai').expect;
const { driver } = require ('../helpers/get_driver');
const MapStitcher = require ('../../maps/stitcher');
const ui = MapStitcher.stitch ();

// module.exports = function () {
    // this.
    Then(/^I expect to see the clients tab$/, async () => {
        const clientesTab = eval(ui.screen.dashboard.buttons.add_client);
        expect(await driver.elementById(clientesTab.self).isDisplayed()).to.equal(true);
        // expect(await driver.elementByUIAutomator(clientesTab).isDisplayed()).to.equals(true);
    });

    // Given(/^I start the app and close tutorial "([^"]*)"$/, async (element) => {
    //     await driver.sleep(4000);
    //     const enteradoButton = eval(element);
    //     await driver.elementById(enteradoButton.self).click();
    //     await driver.sleep(4000);
    // });

    Then(/^I expect to see the "([^"]*)" tab$/, async (element) => {
        const clientesTab = eval(element);
        expect(await driver.elementById(clientesTab.self).isDisplayed()).to.equal(true);
        // expect(await driver.elementByUIAutomator(clientesTab).isDisplayed()).to.equals(true);
    });
// };
