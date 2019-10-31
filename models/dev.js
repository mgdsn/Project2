var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.js");

module.exports = function(sequelize, DataTypes) {
  var Dev = sequelize.define("Dev Profile", {
    Name: DataTypes.STRING,
    LinkedIn: DataTypes.TEXT,
    GitHub: DataTypes.STRING,
    Project: DataTypes.STRING,
    Stack: DataTypes.STRING,
    Database: DataTypes.STRING,
    MVC: DataTypes.STRING,
    Misc: DataTypes.STRING
  });
  Dev.sync();
};

module.exports = Dev;