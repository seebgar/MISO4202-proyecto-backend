const ComponenteController = require("../../controllers/componente.controller");

module.exports = function (router) {
  router.post("/componente", ComponenteController.create);
  router.get("/componente", ComponenteController.getAll);
  router.get(
    "/componente/subcomponente/:subcomponente",
    ComponenteController.getAllBySubcomponente
  );
  router.get("/componente/:id", ComponenteController.get);
  router.put("/componente/:id", ComponenteController.update);
  router.delete("/componente/:id", ComponenteController.delete);
};
