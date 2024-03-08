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
    Shopping_Url: "https://naveenautomationlabs.com/opencart/",
    Banking_Url: "https://demo.guru99.com/V4/",
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
    specPattern: ["**/*.{feature,features}"],
    //specPattern: "cypress/Common/*.js",
  },
});
