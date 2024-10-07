class CartPage {
    checkout() {
        cy.get('#button-cart').click();
        cy.wait(1000); // Wait for the checkout button to be available
    }
}

export default CartPage;
