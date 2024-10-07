class AccountPage {
    // Navigates to the edit account section
    navigateToEditAccount() {
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    }
}

export default AccountPage();
