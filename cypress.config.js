const cucumber = require("cypress-cucumber-preprocessor").default;
const cypress = require("cypress");
const { defineConfig } = require("cypress");
//const { resolve, reject, config } = require("cypress/types/bluebird");
//const { on } = require("events");
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  env: {
    Url: "https://naveenautomationlabs.com/opencart/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    //  retries: 1,
    specPattern: "cypress/integration/Features/*.feature",
    //specPattern: "cypress/Common/*.js",
  },
});
