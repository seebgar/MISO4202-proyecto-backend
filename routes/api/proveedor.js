const ProveedorController = require("../../controllers/proveedor.controller");

module.exports = function (router) {
  router.post("/proveedor", ProveedorController.create);
  router.get("/proveedor", ProveedorController.getAll);
  router.get("/proveedor/:id", ProveedorController.get);
  router.get("/proveedor/insumo/:id", ProveedorController.getAllByInsumo);
  router.put("/proveedor/:id", ProveedorController.update);
  router.delete("/proveedor/:id", ProveedorController.delete);
};
