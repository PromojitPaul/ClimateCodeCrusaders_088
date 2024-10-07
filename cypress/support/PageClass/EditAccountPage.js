class EditAccountPage {
    // Fill in the account details to update user information
    fillAccountDetails(firstName, lastName, email, telephone) {
    cy.get('#input-firstname').clear().type(firstName);
    cy.get('#input-lastname').clear().type(lastName);
    cy.get('#input-email').clear().type(email);
    cy.get('#input-telephone').clear().type(telephone);
    }

    // Change the password of the user account
    changePassword(newPassword) {
    cy.get('#input-password').clear().type(newPassword);
    cy.get('#input-confirm').clear().type(newPassword);
      cy.get('.pull-right > .btn').click(); // Submit changes
    }

    // Validates if the success message is displayed after account update
    validateSuccessMessage() {
    cy.get('.alert').should('contain', 'Your account has been successfully updated!');
    }
}

export default EditAccountPage();
