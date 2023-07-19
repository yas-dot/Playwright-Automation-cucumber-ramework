Feature: User Login to the applicaiton
    Background:
      Given user Naviagte to applicaiton
      And User click login button
    
    Scenario: Login with valid date
        And User enter valid user name  "Victor"
        And User enter valid password "Jeya"
        When user click on the login button
        Then Login should success

