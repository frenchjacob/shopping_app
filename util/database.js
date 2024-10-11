const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Threepointer101", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
