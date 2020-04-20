const UserController = require("../../controllers/user.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/register", route.protected, UserController.create);
  router.post("/authenticate", UserController.authenticate);
  router.get("/user", UserController.list);
};
