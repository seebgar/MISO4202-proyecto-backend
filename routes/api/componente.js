const ComponenteController = require("../../controllers/componente.controller");
const route = require("../../config/middleware");

module.exports = function (router) {
  router.post("/componente", route.protected, ComponenteController.create);
  router.get("/componente", route.protected, ComponenteController.getAll);
  router.get(
    "/componente/subcomponente/:subcomponente",
    route.protected,
    ComponenteController.getAllBySubcomponente
  );
  router.get("/componente/:id", route.protected, ComponenteController.get);
  router.put("/componente/:id", route.protected, ComponenteController.update);
  router.delete(
    "/componente/:id",
    route.protected,
    ComponenteController.delete
  );
};
