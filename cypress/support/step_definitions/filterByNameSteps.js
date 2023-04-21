import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given ("I access the add a new computer page", () => {
    
    addNewComputer_PO.visit ()
})

When ("I enter a computer name {word}", (computerName) => {
    addNewComputer_PO.enterComputerName (computerName)
})

And ("I enter a date introduced of {word}", (introducedDate) => {
    addNewComputer_PO.enterIntroducedDate (introducedDate)
})

And ("I enter a date discontinued of {word}", (discontinuedDate) => {
    addNewComputer_PO.enterDiscontinuedDate (discontinuedDate)
})

And ("I select a company name from the dropdown", () => {
    addNewComputer_PO.enterCompanyName ()
})

And ("I click on the create this computer button", () => {
    addNewComputer_PO.clickCreateComputerButton ()
})

Then("I should be presented with the alert message", () => {
    cy.url().should('include', '/computers')
})
