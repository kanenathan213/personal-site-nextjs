const EXPECTED_EMAIL_ADDRESS = 'hi@nathanrkane.com'

describe('My Main Test', () => {
    it('Checks email address is present and scroll indicator disappears on scroll to bottom', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test-id="scroll_indicator"]').should('exist')
        cy.scrollTo('bottom')
        cy.get('[data-test-id="email_address"]').should('be.visible').should('have.text', EXPECTED_EMAIL_ADDRESS)
        cy.get('[data-test-id="scroll_indicator"]').should('not.exist')
    })
  })