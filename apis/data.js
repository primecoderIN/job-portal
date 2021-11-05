const jobs = require("./jobs.json");
const applications = require("./applications.json");

module.exports = () => ({
  jobs: jobs,
  applications: applications,
});
