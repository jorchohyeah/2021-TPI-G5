// Archivo para centralizar el exportaje de los controllers
const authController = require("./authController");
const userController = require("./userController");
const empresaController = require("./empresaController");
const ventasController = require("./ventasController");

module.exports = {
  authController,
  userController,
  empresaController,
  ventasController
};
