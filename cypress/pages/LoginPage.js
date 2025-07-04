// LoginPage.js - "Remote Control" untuk semua elemen dan aksi di halaman login.

class LoginPage {
    // Bagian 1: Simpan semua selektor sebagai properti
    elements = {
        // emailInput: () => cy.get('[data-cy=input-login-email]'),
         emailInput: () => cy.get('[data-cy=input-email-login]'),
        passwordInput: () => cy.get('[data-cy=input-login-password]'),
        loginButton: () => cy.get('[data-cy=button-login]'),
        errorMessage: () => cy.get('[data-cy=message-login]')
    }

    // Bagian 2: Buat fungsi untuk aksi yang bisa dilakukan di halaman ini
    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    // Fungsi gabungan untuk melakukan aksi login lengkap
    submitLogin(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLogin();
    }
}

// Jangan lupa export agar bisa di-import di file lain
export default new LoginPage();