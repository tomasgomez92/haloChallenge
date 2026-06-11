Feature: Checkout summary

  Background:
    Given I am logged in as standard_user

  Scenario Outline: Checkout summary shows correct item details and totals
    Given the cart is reset
    When I add the <item> item to the cart from inventory
    And I go to the cart
    And I proceed to checkout
    And I fill the checkout form with valid details
    Then the checkout summary should show correct details for <item>

    Examples:
      | item         |
      | backpack     |
      | bikeLight    |
      | boltTShirt   |
      | fleeceJacket |
      | onesie       |
      | tShirt       |

  Scenario: Checkout summary shows correct totals when all items are in the cart
    Given all items are added to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill the checkout form with valid details
    Then the checkout summary should show correct totals for all items

  Scenario Outline: Submitting checkout form with missing fields shows an error
    Given the cart is reset
    When I add the backpack item to the cart from inventory
    And I go to the cart
    And I proceed to checkout
    And I submit the checkout form as "<firstName>", "<lastName>", "<postalCode>"
    Then I should see a checkout form error for <errorKey>

    Examples:
      | firstName | lastName | postalCode | errorKey        |
      |           | Doe      | 12345      | emptyName       |
      | John      |          | 12345      | emptyLastName   |
      | John      | Doe      |            | emptyPostalCode |
