const ProductoController = require("../../controllers/producto.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/producto", route.protected, ProductoController.create);
  router.get("/producto", route.protected, ProductoController.getAll);
  router.get("/producto/:id", route.protected, ProductoController.get);
  router.get(
    "/producto/insumo/:id",
    route.protected,
    ProductoController.getAllByInsumo
  );
  router.put("/producto/:id", route.protected, ProductoController.update);
  router.delete("/producto/:id", route.protected, ProductoController.delete);
};
