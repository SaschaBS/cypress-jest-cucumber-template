Feature: Test the start page

  Background:
    Given I open the page "/"

  Scenario: Open start page should show a rocket
    When I am on the start page
    Then User sees a rocket

  Scenario: Choosing Material Button shows hint
    When I press the button with text "Material"
    Then the text on ".terminal" is "material"

  Scenario: Choosing PWA Button shows hint
    When I press the button with text "PWA"
    Then the text on ".terminal" is "pwa"
