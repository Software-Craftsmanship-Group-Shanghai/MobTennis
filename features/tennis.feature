Feature: Tennis game

Scenario: Forty Thirty when 3:2
  Given tennis game starts
  When player1 scores 3 times
  And player2 scores 2 times
  Then score should be Forty Thirty