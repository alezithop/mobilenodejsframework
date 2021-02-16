# example.android.feature
Feature: As a test engineer I want to validate that app is launched correctly

    given I launch the application
    and I close the tutorial
    then I want to see Dashboard screen

    Scenario: As a test engineer I want to validate that I am able to close tutorial and see the Dashboard
        Given I start the app without close tutorial
        # Then I expect to see the clients tab
        Then I expect to see the "ui.screen.dashboard.buttons.add_client" tab
