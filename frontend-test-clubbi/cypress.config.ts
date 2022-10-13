import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1400,
  viewportHeight: 800,

  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    video: false,
    slowTestThreshold: 15000,
    testIsolation: 'legacy',
    defaultCommandTimeout: 20000
  }
})
