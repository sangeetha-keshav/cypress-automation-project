const { defineConfig } = require("cypress");
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on,config);
  on('file:preprocessor', browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    projectId: "514gd2",
    specPattern: "**/*.feature",
    setupNodeEvents,
    video: false,
    videosFolder: 'cypress/reports/videos',
    screenshotsFolder: 'cypress/reports/screenshots',
    includeShadowDom: false // when we have to traverse through shadow element we need to set this to true, then manually traversing is not needed. It's used for reusable component.
  },
});
