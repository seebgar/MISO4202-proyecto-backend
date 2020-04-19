const UserController = require("../../controllers/user.controller");

module.exports = function (router) {
  router.post("/register", UserController.create);
  router.post("/authenticate", UserController.authenticate);
};
