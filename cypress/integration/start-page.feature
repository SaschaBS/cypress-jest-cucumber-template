Feature: Login

  Scenario: Go to main page

    Given I open the start page
    Then User sees a rocket
    And I press the button with text "Material"
    Then the text on ".terminal" is "material"
