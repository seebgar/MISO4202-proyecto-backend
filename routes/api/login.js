const LoginController = require("../../controllers/login.controller");

module.exports = function (router) {
  router.post("/login", LoginController.login);
};
