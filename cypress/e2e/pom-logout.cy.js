// Tes ini juga mengimpor Page Objects yang sama!
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

describe('Tes Logout Menggunakan Page Object Model', () => {

  // Sebelum tes, kita harus login terlebih dahulu
  beforeEach(() => {
    cy.visit('/index.html');
    // Kita gunakan kembali fungsi login yang sudah ada
    LoginPage.submitLogin('admin@bukalapak.com', 'password123');
    // Pastikan kita sudah di dashboard sebelum mulai tes logout
    DashboardPage.verifyDashboardVisible();
  });

  it('seharusnya bisa logout dan kembali ke halaman login', () => {
    // Panggil fungsi logout dari DashboardPage
    DashboardPage.clickLogout();

    // Verifikasi bahwa kita sudah kembali ke halaman login
    LoginPage.elements.emailInput().should('be.visible');
    LoginPage.elements.loginButton().should('be.visible');
  });
});