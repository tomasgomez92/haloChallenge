Feature: Order completion

  Background:
    Given I am logged in as standard_user

  Scenario Outline: Completing a purchase shows the order confirmation page
    Given the cart is reset
    When I add the <item> item to the cart from inventory
    And I go to the cart
    And I proceed to checkout
    And I fill the checkout form with valid details
    And I complete the purchase
    Then the order confirmation page should be displayed correctly

    Examples:
      | item         |
      | backpack     |
      | bikeLight    |
      | boltTShirt   |
      | fleeceJacket |
      | onesie       |
      | tShirt       |

  Scenario: Cancelling on the order summary redirects to the inventory page
    Given the cart is reset
    When I add the backpack item to the cart from inventory
    And I go to the cart
    And I proceed to checkout
    And I fill the checkout form with valid details
    And I cancel the purchase
    Then I should be on the inventory page
