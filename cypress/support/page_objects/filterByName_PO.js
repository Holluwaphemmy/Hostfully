const URL = "https://computer-database.gatling.io/computers"
const FILTER_SEARCH_BOX = "[name='f']"
const FILTER_BUTTON = "input#searchsubmit"
const COMPUTERS_FOUND = "#main h1"

class filterByName_PO {
    
    // visit webpage
    static visit () {
        cy.visit(URL)
    }

    // enter computer name in Filter by computer name field
    static enterComputerName (computerName) {
        cy.get(FILTER_SEARCH_BOX).type(computerName)
    }

    // click on filter by name button
    static clickFilterByNameButton () {
        cy.get(FILTER_BUTTON).click()
    }

    // validate alert message received
    static validateAlert () {
        cy.get(COMPUTERS_FOUND).should("have.text", "3 computers found")
    }
}

export default filterByName_PO;