Feature: User Login to the applicaiton
    
    Scenario: Login with valid date
        Given go to login page
        And User enter valid user name  "Username"
        And User enter valid password "Password"
        When user click on the login button
        Then Login should success

