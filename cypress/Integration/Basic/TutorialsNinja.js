import HomePage from "../../support/PageClass/HomePage";
import RegistrationPage from "../../support/PageClass/RegistrationPage";
import LoginPage from "../../support/PageClass/LoginPage";
import AccountPage from "../../support/PageClass/AccountPage";
import EditAccountPage from "../../support/PageClass/EditAccountPage";

describe('TutorialsNinja', () => {
    // Before each test, visit the home page
    beforeEach(() => {
    HomePage.visit();
    });

    // Test for user registration
    it('should register a new user', () => {
      // Navigate to the registration page
    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();

      // Fill the registration form
    RegistrationPage.fillForm('Promojit', 'Paul', 'test165165156156@gmail.com', '69696996654', 'asdflkjhg');
      RegistrationPage.submit(); // Submit the form
      RegistrationPage.validateSuccessMessage(); // Check for success message
    });

    // Test for user login
    it('should login the user', () => {
      HomePage.navigateToLogin(); // Navigate to login page
      LoginPage.fillCredentials('test165165156156@gmail.com', 'asdflkjhg'); // Fill in credentials
      LoginPage.submit(); // Submit the login form
      LoginPage.validateLoginSuccess(); // Validate successful login
    });

    // Test for editing account details
    it('should edit account details', () => {
      HomePage.navigateToLogin(); // Navigate to login page
      LoginPage.fillCredentials('test165165156156@gmail.com', 'asdflkjhg'); // Fill in credentials
      LoginPage.submit(); // Submit the login form

      AccountPage.navigateToEditAccount(); // Go to the edit account section
      EditAccountPage.fillAccountDetails('Batman', 'Robert Pattinson', 'test2bg@gmail.com', '9876543210'); // Fill new details
      EditAccountPage.changePassword('newPassword123'); // Change the password
      EditAccountPage.validateSuccessMessage(); // Validate the account update success
    });
});

