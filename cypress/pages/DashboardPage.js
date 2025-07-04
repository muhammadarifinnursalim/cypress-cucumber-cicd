// DashboardPage.js - "Remote Control" untuk halaman dashboard.

class DashboardPage {
    elements = {
        dashboardView: () => cy.get('[data-cy=view-dashboard]'),
        logoutButton: () => cy.get('[data-cy=button-logout]')
    }

    verifyDashboardVisible() {
        this.elements.dashboardView().should('be.visible');
    }

    clickLogout() {
        this.elements.logoutButton().click();
    }
}

export default new DashboardPage();