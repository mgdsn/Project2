var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/all", function(req, res) {
    db.Dev_Profile.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
