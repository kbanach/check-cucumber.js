Feature: Rocket Launching

  Scenario: Launching a SpaceX rocket
    Given I am Elon Musk attempting to launch a rocket into space
    When I launch the rocket
    Then the rocket should end up in space
    And the booster(s) should land back on the launch pad
    And nobody should doubt me ever again

  Scenario: SpaceX rocket flight speed
    Given rocket can be built
    When I launch a rocket to the moon
    Then the rocket should fly for 5 days


  Scenario: SpaceX rocket flight speed somewhere
    Given rocket can be built
    When I launch a rocket to the mars
    Then the rocket should fly for 10 days