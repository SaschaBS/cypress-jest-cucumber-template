Feature: Check out Pets

  Background:
    Given the server contains "4" items
    And I open the start page

  Scenario: Show list of current pets

    Then the pet list contains "4" items

  @postPet200
  Scenario Outline: Add pet

    When I enter the pet name <name>
    And I select the pet type <type>
    And I click submit
    Then the pet with name <name> and type <type> is saved
    Then the pet list contains <number> items
    Examples:
      | name     | type  | number |
      | "Rambo"  | "cat" | "5"    |
      | "Dude"   | "dog" | "5"    |
      | "Alicia" | "cat" | "5"    |

  @postPet500
  Scenario: Add pet with server failure
    When I enter the pet name "Rambo"
    And I select the pet type "cat"
    And I click submit
    Then an error message is shown
