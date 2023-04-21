Feature: Computer Database Test Scenarios

Scenario Outline: Testing the Add new computer functionality

        Given I access the add a new computer page
        When I enter a computer name <computerName>
        And I enter a date introduced of <introducedDate>
        And I enter a date discontinued of <discontinuedDate>
        And I select a company name from the dropdown
        And I click on the create this computer button
        Then I should be presented with the alert message
        
# Scenario: Adding a new computer with valid credentials in all input fields

Examples:
    | computerName | introducedDate | discontinuedDate |
    | Lenovo       | 1885-09-09     | 1896-09-09       |
    | Dell         |      aaaaa     |       aaaaa      |

