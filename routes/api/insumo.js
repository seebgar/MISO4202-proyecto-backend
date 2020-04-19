const InsumoController = require("../../controllers/insumo.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/insumo", route.protected, InsumoController.create);
  router.get("/insumo", route.protected, InsumoController.getAll);
  router.get("/insumo/:id", route.protected, InsumoController.get);
  router.put("/insumo/:id", route.protected, InsumoController.update);
  router.delete("/insumo/:id", route.protected, InsumoController.delete);
};
