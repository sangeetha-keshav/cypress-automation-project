Feature: Test feature

    Scenario: Testing BDD features
    Given google.com is opened in browser
    When I type "cypress.io" in searchbox
    Then I should see google search for cypress.io