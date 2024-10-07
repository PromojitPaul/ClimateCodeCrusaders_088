import HomePage from "../../support/PageClass/HomePage";
import CartPage from "../../support/PageClass/CartPage";
import CheckoutPage from "../../support/PageClass/CheckoutPage";
import AccountPage from "../../support/PageClass/AccountPage";
import RegistrationPage from "../../support/PageClass/RegistrationPage";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('TutorialsNinja', () => {
    beforeEach(() => {
        cy.login('maxmonthon6@gmail.com', 'Aa112233');
    });

    it('Register', () => {
        registrationPage.visit();
        cy.wait(2000);
        registrationPage.fillRegistrationForm('max', 'monthon', 'maxmonthon6@gmail.com', '09999999999', 'Aa112233');
        registrationPage.submit();
        registrationPage.validateSuccess();
        cy.get('.pull-right > .btn').click();
    });

    it('Home Page', () => {
        homePage.visit();
        homePage.checkNavigation();
        cy.viewport('iphone-6');
        cy.viewport('macbook-15');
        cy.get('h3').should('have.text', 'Featured');
    });

    it('Search Functionality', () => {
        homePage.visit();
        homePage.searchProduct('Macbook');
        cy.get('.alert').contains('Success: You have modified your shopping cart!').should('exist');
    });

    it('Product Detail', () => {
        productPage.visit(43); // Assuming a method exists for visiting a product
        productPage.addToCart('2');
        productPage.goToCart();
        cy.go('back');
    });

    it('Cart Functionality', () => {
        cartPage.modifyQuantity(1, '1');
        cartPage.removeProduct(2);
        cy.get('#input-coupon').type('coupon2023giveme{enter}');
        cy.get('#button-coupon').click();
    });

    it('Checkout Payment Page', () => {
        checkoutPage.visit();
        cy.wait(3000);
        checkoutPage.fillPaymentDetails('maxmonthon', 'allsome', 'areatech', '118/88', 'bangkok', 'Aa11', 'Thai', 'Conwy');
        checkoutPage.submitPayment();
    });
});