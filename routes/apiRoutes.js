var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/all", function(req, res) {
    db.Dev_Profile.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/devadd2", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/devadd", function(req, res) {
    console.log(req.body);

    db.Dev_Profile.create({
      Name: req.body.name,
      LinkedIn: req.body.linkedIn,
      GitHub: req.body.gitHub,
      Project: req.body.q1,
      Stack: req.body.q2,
      Language: req.body.q3,
      Database: req.body.q4,
      MVC: req.body.q5,
      Motivation: req.body.q6,
      Misc: req.body.misc
    }).then(function() {
      let stuff = req.body.name;
      res.json(stuff);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
