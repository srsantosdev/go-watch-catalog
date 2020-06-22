import { Router } from "express";
import ManagerController from "./../controllers/ManagerController";

const routes = Router();

routes.get("/manager", ManagerController.index);
routes.post("/manager", ManagerController.create);
routes.put("/manager/:id", ManagerController.update);
routes.get("/manager/:id", ManagerController.show);
routes.delete("/manager/:id", ManagerController.destroy);

export default routes;
