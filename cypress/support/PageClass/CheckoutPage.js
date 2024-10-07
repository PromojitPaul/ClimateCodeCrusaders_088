class CheckoutPage {
    completeCheckout() {
        cy.get('#button-guest').click();
        cy.wait(1000);
        cy.get('#button-guest').click();
        cy.wait(1000);
        cy.get('#button-guest').click();
        cy.wait(1000);
        cy.get('input[name="agree"]').check();
        cy.get('#button-payment-method').click();
    }

    confirmOrder() {
        cy.get('#button-confirm').click();
    }
}

export default CheckoutPage;
