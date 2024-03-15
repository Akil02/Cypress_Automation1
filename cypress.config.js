const cucumber = require("cypress-cucumber-preprocessor").default;
const cypress = require("cypress");
const { defineConfig } = require("cypress");
//const { resolve, reject, config } = require("cypress/types/bluebird");
//const { on } = require("events");
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
const { ConnectionPool } = require("mssql");

module.exports = defineConfig({
  env: {
    Shopping_Url: "https://naveenautomationlabs.com/opencart/",
    ShoppingAdmin_Url: "https://demo.opencart.com/admin/",
    db: {
      server: "localhost",
      port: 1522,
      SID: "xe",
      user: "system",
      password: "system",
      database: "ORH",
    },
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
        queryDb: async (query) => {
          try {
            const pool = await new ConnectionPool(config.env.db).connect();
            const result = await pool.query(query);
            await pool.close();
            return result.recordset;
          } catch (error) {
            throw error;
          }
        },
      });
    },
    //  retries: 1,
    specPattern: ["**/*.{feature,features}"],
    //specPattern: "cypress/Common/*.js",
  },
});
