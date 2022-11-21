const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //mochawesome reporter
  reporter: 'cypress-mochawesome-reporter',

  chromeWebSecurity: true,
  taskTimeout: 60000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    SKIP_METAMASK_SETUP: true,
    PRIVATE_KEY_WITH_FUNDS: '0x',
  },
  e2e: {
    watchForFileChanges: false,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://dev.fin-dex.finstable.co.th/swap',
  },
})
