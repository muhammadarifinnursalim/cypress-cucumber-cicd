const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify.default(config, {
      typescript: require.resolve("typescript"),
    })
  );
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // <-- TAMBAHKAN INI
  reporterOptions: {                      // <-- TAMBAHKAN INI
    charts: true,
    reportPageTitle: 'Laporan Tes Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.{feature,cy.js}",
    baseUrl: 'http://127.0.0.1:5500' // Pastikan baseUrl sudah ada
  },
});