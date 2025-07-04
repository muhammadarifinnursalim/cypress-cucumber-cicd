import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Kita bisa gunakan kembali Page Object kita di sini!
import LoginPage from '../../../pages/LoginPage.js';
import DashboardPage from '../../../pages/DashboardPage.js';

// Step 1: Given
Given('I am on the login page', () => {
  cy.visit('/index.html');
});

// Step 2: When
When('I enter valid email and password', () => {
  // Anda bisa menyimpan kredensial di cypress.env.json atau langsung di sini
  LoginPage.typeEmail('admin@bukalapak.com');
  LoginPage.typePassword('password123');
});

When('I enter invalid email and password', () => {
  LoginPage.typeEmail('salah@email.com');
  LoginPage.typePassword('salahpass');
});

// Step 3: And (dianggap sebagai When)
When('I click the login button', () => {
  LoginPage.clickLogin();
});

// Step 4: Then
Then('I should be redirected to the dashboard', () => {
  DashboardPage.verifyDashboardVisible();
});

Then('I should see an error message', () => {
  LoginPage.elements.errorMessage().should('be.visible');
});