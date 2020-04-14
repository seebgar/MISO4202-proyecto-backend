const ProductoController = require("../../controllers/producto.controller");

module.exports = function (router) {
  router.post("/producto", ProductoController.create);
  router.get("/producto", ProductoController.getAll);
  router.get("/producto/:id", ProductoController.get);
  router.get("/producto/insumo/:id", ProductoController.getAllByInsumo);
  router.put("/producto/:id", ProductoController.update);
  router.delete("/producto/:id", ProductoController.delete);
};
