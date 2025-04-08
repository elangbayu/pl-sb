Feature: Profile

  Scenario: User see profile page
    Given User login using "CORE" account
    When User do "click 'Profile' menu on top navigation bar"
    Then User see profile page
