const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.spec.js', // This should include your spec files

    // other settings...
    pageLoadTimeout: 180000, // increase to 120 seconds, // increase to 120 seconds

  },
});
