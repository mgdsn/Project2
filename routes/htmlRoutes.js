module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/survey", function(req, res) {
    res.render("survey");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/results", function(req, res) {
    res.render("results");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
