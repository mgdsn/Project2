var db = require("../models");

module.exports = function(app) {
  app.post("/api/passcheck", function(req, res) {
    db.Dev_Profile.findOne({
      where: {
        Username: req.body.name,
        Password: req.body.password
      }
    }).then(function(result) {
      if (result !== null) {
        res.json("Found username");
      } else {
        res.json("No");
      }
    });
  });

  app.post("/api/devadd", function(req, res) {
    db.Dev_Profile.update(
      {
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
      },
      {
        where: {
          Username: req.body.username,
          Password: req.body.password
        }
      }
    ).then(function() {
      res.json("ok");
    });
  });

  app.post("/api/survcheck", function(req, res) {
    db.Dev_Profile.findOne({
      where: {
        Username: req.body.name,
        Password: req.body.password
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/calcmatch", function(req, res) {
    db.Dev_Profile.findAll({}).then(function(dbExamples) {
      var devArray = dbExamples.map(function(example) {
        return example.dataValues;
      });
      var matchArray = [];
      const currentUser = devArray.find(
        user => user.Username === req.body.name
      );
      for (i = 0; i < devArray.length - 1; i++) {
        var totalMatches = 0;
        if (devArray[i].Project === currentUser.Project) {
          totalMatches++;
        }
        if (
          devArray[i].Stack === currentUser.Stack &&
          currentUser.Stack === "Full Stack"
        ) {
          totalMatches++;
        }
        if (devArray[i].Stack !== currentUser.Stack) {
          totalMatches++;
        }
        if (devArray[i].Language === currentUser.Language) {
          totalMatches++;
        }
        if (devArray[i].Database === currentUser.Database) {
          totalMatches++;
        }
        if (devArray[i].MVC === currentUser.MVC) {
          totalMatches++;
        }
        if (devArray[i].Motivation === currentUser.Motivation) {
          totalMatches++;
        }

        if (totalMatches >= 5) {
          matchArray.push(devArray[i]);
        }
      }
      res.json(matchArray);
    });
  });

  app.post("/api/checkexists", function(req, res) {
    db.Dev_Profile.findOne({
      where: {
        Username: req.body.username
      }
    }).then(function(result) {
      if (result !== null) {
        res.json("Yes");
      } else {
        res.json("No");
      }
    });
  });

  app.post("/api/createuser", function(req, res) {
    db.Dev_Profile.create({
      Username: req.body.username,
      Password: req.body.password
    }).then(function() {
      res.json("Created");
    });
  });
};
