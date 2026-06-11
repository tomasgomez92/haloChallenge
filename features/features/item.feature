Feature: Item Detail Page

  Background:
    Given I am logged in as standard_user

  Scenario Outline: Verify item details are correct
    When I open the <item> item page
    Then the item details should be correct

    Examples:
      | item         |
      | backpack     |
      | bikeLight    |
      | boltTShirt   |
      | fleeceJacket |
      | onesie       |
      | tShirt       |
