Feature: Authentication

  Scenario: Login to stockbit
    Given User open Stockbit
    When User click login on landing page
    And User fill username as "username"
    And User fill password as "password"
    And User click login on login page
    And User skip avatar selection popup
    Then User see stream page
    When User search for "cinmecin"
    Then User see "cinmecin" in the search result suggestions list
