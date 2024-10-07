class LoginPage {
    // Fill in the email and password fields
    fillCredentials(email, password) {
    cy.get('#input-email').clear().type(email);
    cy.get('#input-password').clear().type(password);
    }

    // Submits the login form
    submit() {
    cy.get('form > .btn').click();
    }

    // Validates if the login was successful
    validateLoginSuccess() {
    cy.get('.alert').should('contain', 'Welcome back');
    }
}

export default LoginPage();
