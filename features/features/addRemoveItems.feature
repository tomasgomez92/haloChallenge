Feature: Adding and removing items from the cart

  Background:
    Given I am logged in as standard_user

  Scenario: Cart badge updates as items are added
    When I add Backpack to the cart
    Then the cart badge should show 1
    When I add Bike Light to the cart
    Then the cart badge should show 2
    When I add Bolt T-Shirt to the cart
    Then the cart badge should show 3
    When I add Fleece Jacket to the cart
    Then the cart badge should show 4
    When I add Onesie to the cart
    Then the cart badge should show 5
    When I add T-Shirt to the cart
    Then the cart badge should show 6

  Scenario Outline: Adding an item from its detail page updates the cart
    Given the cart is reset
    When I open the <item> item page
    And I add the item to the cart from the item page
    Then the cart badge should show 1
    And the remove button should be displayed on the item page

    Examples:
      | item         |
      | backpack     |
      | bikeLight    |
      | boltTShirt   |
      | fleeceJacket |
      | onesie       |
      | tShirt       |

  Scenario Outline: Adding and removing an item from its detail page leaves the cart empty
    Given the cart is reset
    When I open the <item> item page
    And I add the item to the cart from the item page
    And I remove the item from the cart from the item page
    Then the cart should be empty on the item page

    Examples:
      | item         |
      | backpack     |
      | bikeLight    |
      | boltTShirt   |
      | fleeceJacket |
      | onesie       |
      | tShirt       |

  Scenario: Cart badge updates as items are removed
    Given all items are added to the cart
    When I remove Backpack from the cart
    Then the cart badge should show 5
    When I remove Bike Light from the cart
    Then the cart badge should show 4
    When I remove Bolt T-Shirt from the cart
    Then the cart badge should show 3
    When I remove Fleece Jacket from the cart
    Then the cart badge should show 2
    When I remove Onesie from the cart
    Then the cart badge should show 1
    When I remove T-Shirt from the cart
    Then the cart should be empty
