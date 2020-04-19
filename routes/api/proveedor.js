const ProveedorController = require("../../controllers/proveedor.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/proveedor", route.protected, ProveedorController.create);
  router.get("/proveedor", route.protected, ProveedorController.getAll);
  router.get("/proveedor/:id", route.protected, ProveedorController.get);
  router.get(
    "/proveedor/insumo/:id",
    route.protected,
    ProveedorController.getAllByInsumo
  );
  router.put("/proveedor/:id", route.protected, ProveedorController.update);
  router.delete("/proveedor/:id", route.protected, ProveedorController.delete);
};
