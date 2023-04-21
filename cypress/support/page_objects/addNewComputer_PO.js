const URL = "https://computer-database.gatling.io/computers"
const addNewButton = "a#add"
const COMPUTER_NAME = "input#name"
const INTRODUCED_DATE = "input#introduced"
const DISCONTINUED_DATE = "input#discontinued"
const COMPANY_NAME = "select#company"
const CREATE_COMPUTER_BUTTON = "input[value='Create this computer']"

class addNewComputer_PO {

// visit webpage
static visit () {
    cy.visit(URL).get(addNewButton).click()
}

// enter computer name
static enterComputerName (computerName) {
    cy.get(COMPUTER_NAME).type(computerName)
}

// enter introduced date
static enterIntroducedDate (introducedDate) {
    cy.get(INTRODUCED_DATE).type(introducedDate)
}

// enter discontinued date
static enterDiscontinuedDate (discontinuedDate) {
    cy.get(DISCONTINUED_DATE).type(discontinuedDate)
}

// fill company name from company dropdown
static enterCompanyName () {
    cy.get(COMPANY_NAME).select("Netronics")
    cy.get(COMPANY_NAME).should("have.value", "4")
}

// click on create computer button
static clickCreateComputerButton () {
    cy.get(CREATE_COMPUTER_BUTTON).click()
}

}

export default addNewComputer_PO;