class RegistrationPage {
    // Fill the registration form with user details
    fillForm(firstName, lastName, email, telephone, password) {
    cy.get('#input-firstname').clear().type(firstName);
    cy.get('#input-lastname').clear().type(lastName);
    cy.get('#input-email').clear().type(email);
    cy.get('#input-telephone').clear().type(telephone);
    cy.get('#input-password').clear().type(password);
    cy.get('#input-confirm').clear().type(password);
      cy.get('[type="checkbox"]').check(); // Accept terms
    }

    // Submits the registration form
    submit() {
    cy.get('.pull-right > .btn').click();
    }

    // Validates if the success message is displayed after registration
    validateSuccessMessage() {
    cy.get('.alert').should('contain', 'Your Account Has Been Created!');
    }
}

export default RegistrationPage();
