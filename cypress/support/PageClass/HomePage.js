class HomePage {
    // Navigate to the base URL of the application
    visit() {
    cy.fixture('config').then((config) => {
        cy.visit(config.baseUrl);
    });
    }

    // Clicks on the login dropdown and selects the login option
    navigateToLogin() {
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    }
}

export default HomePage();
