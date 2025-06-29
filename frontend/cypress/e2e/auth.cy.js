describe('Flujo de Auth + Dashboard', () => {
  
  const MOCK_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJpZCI6ImFiYzEyMyJ9.' +
    'somemocksignature'

  it('Página de Login muestra el botón y luego va al Dashboard', () => {
    
    cy.visit('/#/login')

    
    cy.contains('Log in with Google')
      .should('be.visible')

    
    cy.visit(`/#/auth/success?token=${MOCK_TOKEN}`)

    
    cy.url().should('include', '/#/dashboard')


    cy.contains('¡Hola abc123!').should('exist')
  })
})
