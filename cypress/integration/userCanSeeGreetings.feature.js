describe('user can see greetings and use button', () => {
    it('test', () => {
        cy.visit('/')
        cy.get('#quote').click()
        cy.get('#message').should('contain', 'hello how are you')
    })
})