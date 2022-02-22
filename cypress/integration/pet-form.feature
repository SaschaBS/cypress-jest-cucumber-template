Feature: Check out Pets

  Background:
    Given I open the start page

  Scenario: Show list of current pets

    Then the pet list contains "2" items

  Scenario: Add pet

    When I enter the pet name "Rambo"
    And I select the pet type "cat"
    And click submit
    Then the pet list contains "3" items
