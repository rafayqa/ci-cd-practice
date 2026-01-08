/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./reports/html",
      "filename": "report.html",
      "expand": true
    }]
  ]
};
