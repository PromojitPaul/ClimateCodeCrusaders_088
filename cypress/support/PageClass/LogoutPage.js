class LogoutPage{

    Logout(){
        cy.contains('Logout').click();
    }

    ClickToContinue(){
        cy.contains('Continue').click();
    }
}

export default LogoutPage