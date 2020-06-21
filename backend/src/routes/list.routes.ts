import { Router } from "express";
import ListController from "./../controllers/ListController";

const routes = Router();

routes.get("/lists", ListController.index);
routes.post("/lists", ListController.create);
routes.put("/lists/:id", ListController.update);
routes.get("/lists/:id", ListController.show);
routes.delete("/lists/:id", ListController.destroy);

export default routes;
