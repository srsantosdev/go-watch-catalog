import { Router } from "express";
import SessionController from "./../controllers/SessionController";

const routes = Router();

routes.post("/login", SessionController.create);
routes.post("/manager/login", SessionController.authManager);

export default routes;
