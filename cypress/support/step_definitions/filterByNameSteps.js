import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

import filterByName_PO from "../../support/page_objects/filterByName_PO"

Given ("I access the computer database home page", () => {
    
    filterByName_PO.visit ()
})

When ("I enter {word} in the computer name input field", (computerName) => {
    filterByName_PO.enterComputerName (computerName)
})

And ("I click on the filter by name button", () => {
    filterByName_PO.clickFilterByNameButton ()
})

And ("I enter a date discontinued of {word}", (discontinuedDate) => {
    filterByName_PO.enterDiscontinuedDate (discontinuedDate)
})

And ("I select a company name from the dropdown", () => {
    filterByName_PO.enterCompanyName ()
})

And ("I click on the create this computer button", () => {
    filterByName_PO.clickCreateComputerButton ()
})

Then("I should be presented with alert message", () => {
    filterByName_PO.validateAlert ()
})
