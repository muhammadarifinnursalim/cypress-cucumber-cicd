// Import "remote control" yang sudah kita buat
import LoginPage from '../pages/LoginPage.js';
import DashboardPage from '../pages/DashboardPage.js';

describe('Tes Login Menggunakan Page Object Model', () => {

  beforeEach(() => {
    cy.visit('/index.html'); // Kunjungi halaman
  });

  it('seharusnya gagal login dengan kredensial yang salah', () => {
    // AKSI: Lakukan login dengan data yang salah
    LoginPage.submitLogin('salah@email.com', 'salahpassword');

    // VERIFIKASI: 
    // Alih-alih langsung memverifikasi, kita cari elemennya.
    // Cypress secara otomatis akan menunggu hingga 4 detik agar elemen ini muncul.
    // Setelah muncul, baru kita lakukan verifikasi.
    LoginPage.elements.errorMessage()
      .should('be.visible') // Assertion ini secara implisit menunggu elemen menjadi visible
      .and('contain.text', 'Login gagal!');
  });

  it('seharusnya berhasil login dengan kredensial yang benar', () => {
    // AKSI: Lakukan login dengan data yang benar
    LoginPage.submitLogin('admin@bukalapak.com', 'password123');

    // VERIFIKASI: 
    // Sama seperti di atas, assertion ini akan menunggu hingga
    // elemen dashboard menjadi visible sebelum melanjutkan.
    DashboardPage.verifyDashboardVisible();
  });
});