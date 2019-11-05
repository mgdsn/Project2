var db = require("../models");

module.exports = function(app) {
  // Finding username/password
  app.get("/api/all", function(req, res) {
    db.Dev_Profile.findAll({
      Username: DataTypes.STRING,
      Password: DataTypes.TEXT
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
