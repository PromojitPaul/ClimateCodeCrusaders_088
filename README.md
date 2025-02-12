# Cypress SDET / QA Automation Project

## Overview
This project is an end-to-end test automation framework using Cypress, designed for validating web application functionality, UI elements, and API responses. It follows best practices in SDET (Software Development Engineer in Test) principles, ensuring reliability, maintainability, and scalability in automated testing.

## Key Features
- Automated test execution for web applications using Cypress.
- Page Object Model (POM) for scalable test design.
- API testing using Postman and Cypress.
- CI/CD integration for automated test execution in pipelines.
- Detailed test execution reports with screenshots and logs.
- Parallel execution support for faster test runs.
- Data-driven testing approach for robust validation.

## Technologies Used
- **Test Framework**: Cypress
- **Programming Language**: JavaScript
- **Assertions**: Mocha & Chai
- **API Testing**: Postman, Cypress API Requests
- **Version Control**: Git, GitHub
- **CI/CD**: GitHub Actions (or Jenkins if applicable)
- **Reporting**: Mochawesome, Allure Reports

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/PromojitPaul/cypress-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cypress-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Tests
- Open Cypress Test Runner:
  ```sh
  npx cypress open
  ```
- Run tests in headless mode:
  ```sh
  npx cypress run
  ```
- Execute specific test suite:
  ```sh
  npx cypress run --spec cypress/integration/testfile.spec.js
  ```
- Generate test reports:
  ```sh
  npm run report
  ```

## Test Automation & Quality Assurance
- **Functional Testing**: Validates core application functionality.
- **UI Testing**: Ensures UI elements are displayed and function as expected.
- **API Testing**: Validates API endpoints and responses.
- **Regression Testing**: Runs automated tests to prevent code breakage.
- **Performance Testing**: Measures response time for key application workflows.

## Folder Structure
```
├── cypress/
│   ├── fixtures/        # Test data files (JSON format for mock data)
│   ├── integration/     # Test scripts for different modules
│   │   ├── login.spec.js     # Login module tests
│   │   ├── checkout.spec.js  # Checkout workflow tests
│   │   ├── search.spec.js    # Search functionality tests
│   ├── plugins/         # Cypress plugins for extended capabilities
│   ├── support/         # Custom commands and configurations
│   │   ├── commands.js  # Custom Cypress commands
│   │   ├── index.js     # Global test configurations
│   ├── videos/          # Recorded test execution videos
│   ├── screenshots/     # Screenshots captured during test failures
├── cypress.json         # Cypress configuration file
├── package.json         # Project dependencies
├── README.md            # Documentation
```

## CI/CD Integration
- The project is configured to run tests on each code push.
- Automated test execution is triggered via GitHub Actions.
- Reports are generated and stored for reference.

## Conclusion
This Cypress-based automation project demonstrates proficiency in automated software testing, CI/CD pipeline integration, and scalable test development, making it ideal for SDET/QA roles.

## Contact
For more details, explore the repository or connect via GitHub.

