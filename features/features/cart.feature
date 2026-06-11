Feature: Cart page item details

  Background:
    Given I am logged in as standard_user

  Scenario Outline: Item details are correct in the cart
    Given the cart is reset
    When I add the <item> item to the cart from inventory
    And I go to the cart
    Then the cart item details should be correct for <item>

    Examples:
      | item         |
      | backpack     |
      | bikeLight    |
      | boltTShirt   |
      | fleeceJacket |
      | onesie       |
      | tShirt       |

  Scenario: Removing an item from the cart hides its details
    Given the cart is reset
    When I add the backpack item to the cart from inventory
    And I go to the cart
    And I remove the item from the cart page
    Then the cart should be empty
