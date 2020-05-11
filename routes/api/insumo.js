const InsumoController = require("../../controllers/insumo.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/insumos", route.protected, InsumoController.create);
  router.get("/insumos", route.protected, InsumoController.getAll);
  router.get("/insumos/:id", route.protected, InsumoController.get);
  router.put("/insumos/:id", route.protected, InsumoController.update);
  router.delete("/insumos/:id", route.protected, InsumoController.delete);
};
