Feature: Login

  Scenario: As a valid user, I can log into the secure area
    Given I am on the login page
    When I login with standard_user and secret_sauce
    Then I should be on the inventory page

  Scenario Outline: As a user, I receive an error when login fails
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username        | password      | message                                              |
      | locked_out_user | secret_sauce  | Epic sadface: Sorry, this user has been locked out.  |
      | standard_user   | wrong_pass    | Epic sadface: Username and password do not match any user in this service |
      | wrong_user      | secret_sauce  | Epic sadface: Username and password do not match any user in this service |
