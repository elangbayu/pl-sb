Feature: Authentication

  Scenario: Login to stockbit
    Given User open Stockbit
    When User click login on landing page
    And User fill username as "CORE_USERNAME"
    And User fill password as "CORE_PASSWORD"
    And User click login on login page
    And User skip avatar selection popup
    Then User see stream page
