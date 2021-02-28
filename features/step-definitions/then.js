const { Then } = require ('cucumber');
const wd = require ('wd');
const assert = require ('assert');
const asserters = wd.asserters;
const expect = require ('chai').expect;
const { driver } = require ('../helpers/get_driver');
const MapStitcher = require ('../../maps/stitcher');
const ui = MapStitcher.stitch ();

    Then(/^I expect to see the clients tab$/, async () => {
        const clientesTab = eval(ui.screen.dashboard.buttons.add_client);
        expect(await driver.waitForExist .elementById(clientesTab.self).isDisplayed()).to.equal(true);
        // expect(await driver.elementByUIAutomator(clientesTab).isDisplayed()).to.equals(true);
    });

    Then(/^I expect to see the "([^"]*)" element in the screen$/, async (element) => {
        const elem = eval(element);
        expect(await driver.elementByXPath(elem.self).isDisplayed()).to.equal(true);
        // expect(await driver.elementByUIAutomator(clientesTab).isDisplayed()).to.equals(true);
    });
