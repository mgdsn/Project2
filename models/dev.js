module.exports = function(sequelize, DataTypes) {
  var Dev = sequelize.define("Dev_Profile", {
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Name: DataTypes.STRING,
    LinkedIn: DataTypes.TEXT,
    GitHub: DataTypes.STRING,
    Project: DataTypes.STRING,
    Stack: DataTypes.STRING,
    Language: DataTypes.STRING,
    Database: DataTypes.STRING,
    MVC: DataTypes.STRING,
    Motivation: DataTypes.STRING,
    Misc: DataTypes.TEXT
  });
  return Dev;
};
