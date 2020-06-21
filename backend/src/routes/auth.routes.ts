import { Router } from "express";
import SessionController from "./../controllers/SessionController";

const routes = Router();

routes.post("/login", SessionController.create);

export default routes;
