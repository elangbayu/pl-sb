Feature: Search

  Scenario: Search user
    Given User login using "CORE" account
    When User search for "cinmecin"
    Then User see "cinmecin" in the search result suggestions list
