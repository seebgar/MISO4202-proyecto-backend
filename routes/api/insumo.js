const InsumoController = require("../../controllers/insumo.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/insumo", InsumoController.create);
  router.get("/insumo", route.protected, InsumoController.getAll);
  router.get("/insumo/:id", InsumoController.get);
  router.put("/insumo/:id", InsumoController.update);
  router.delete("/insumo/:id", InsumoController.delete);
};
