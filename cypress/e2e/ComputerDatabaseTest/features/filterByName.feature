Feature: Computer Database Test Scenarios

Scenario Outline: Testing the filter by name functionality

        Given I access the computer database home page
        When I enter <computerName> in the company name input field 
        And I click on the filter by name button
        Then I should be presented with alert message

# Scenario 1: Verify the working of filter functionality using the valid computer name Acer
# Scenario 2: Verify the working of filter functionality using the valid computer name Dell
                            
                            Examples:
                                | computerName |
                                |     Acer     |
                                |     Dell     |
                                


