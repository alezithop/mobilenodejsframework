# example.android.feature
Feature: Login validation

    given I launch the application
    and I enter my user credentials
    then I want to see Dashboard screen

    Scenario: The user is able to login successfully in the application
        Given I start the app without login
        When I wait for "10" seconds
        Then I expect to see the "ui.screen.android.login.images.header" element in the screen
