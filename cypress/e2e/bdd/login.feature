Feature: Login Functionality
  As a user, I want to be able to log in to the application
  to access the dashboard.

  Scenario: Successful Login with Valid Credentials
    Given I am on the login page
    When I enter valid email and password
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Failed Login with Invalid Credentials
    Given I am on the login page
    When I enter invalid email and password
    And I click the login button
    Then I should see an error message